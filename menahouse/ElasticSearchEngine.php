<?php namespace Menahouse ;

use Elasticsearch;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use App\Obivlenie;

class ElasticSearchEngine
{

  // connection by ssl on my AWS
  // var client = new elasticsearch.Client({
  //   hosts: [
  //     'https://box1.internal.org',
  //     'https://box2.internal.org',
  //     'https://box3.internal.org'
  //   ],
  //   ssl: {
  //     ca: fs.readFileSync('./cacert.pem'),
  //     rejectUnauthorized: true
  //   }
  // });

  private $hosts = ['127.0.0.1:9200'];
  private $client ;

  public function __construct()
  {
    $this->client = Elasticsearch\ClientBuilder::create()
                ->setHosts($this->hosts)
                ->build();
  }

  public function ModelMapping($params)
  {
      $reponse = $this->client->index($params) ;
      return $reponse ;
  }

  public function updateIndexedElement($params){


        $params = [
          'index' => 'menahouse',
          'type' => 'obivlenie',
          'id' => $params['id'],
          'body' => [
            'doc' => $params
          ]
      ];
      $response = $this->client->update($params);
      return $response;
  }

  public function getIndexedElements($paramSearch){

      $paramTerm = $paramSearch["term"];
      $must = [];
      if (isset($paramSearch["range"])) {
        $paramRange = $paramSearch["range"];
      }
      if (count($paramTerm) == 1) {
           $searchConditons["bool"]["must"] =
           ["match"  => ["gorod" => $paramTerm["gorod"]]];
           if ( isset($paramRange) ) {

              array_push($searchConditons["bool"]["must"],
                          ["range" => ["obshaya_ploshad"
                           => $this->createRangeQuery($paramRange)]]);
           }
      } else {

          foreach (array_keys($paramTerm) as $key) {
            array_push($must, ["match" => [$key => $paramTerm[$key]]]);
          }

          $searchConditons = [ "bool" => [ "must" => $must ]];
          if ( isset($paramRange) ) {

             array_push($searchConditons["bool"]["must"],
                         ["range" => ["obshaya_ploshad"
                          => $this->createRangeQuery($paramRange)]]);
          }

      }

      $params = [
          "index" => "menahouse",
          "type" => "obivlenie",
          "body" => [
              "query" => [
                  "filtered" => [
                      "query" => ["match_all" => []],
                      "filter" => $searchConditons
                   ]
              ]
        ]];

      // dd($params) ;

        $results = $this->client->search($params);   // Execute the search
        return $this->buildCollection($results) ;
  }

  public function getSortedIndexedElements($paramSearch, $paramSort){

    $params = [
        "index" => "menahouse",
        "type" => "obivlenie",
        "body" => [
            "query" => [
                "filtered" => [
                    "query" => ["match_all" => []],
                    "filter" => $searchConditons
                 ]
            ],
            "sort" => [
                $paramSort => ["order" => "desc"]
            ]
      ]];

      //  dd($params) ;

      $results = $this->client->search($params);   // Execute the search
      return $this->buildCollection($results) ;
  }


   public function createRangeQuery($xrange){
     $range = [];

     foreach (array_keys($xrange) as $key) {
         array_push($range, [$key => $xrange[$key]]);
     }

     return $range;
   }

   public function getIndexedElementsByid($Id, $typeDocument){
      if ($typeDocument == "images") {
        $conditionSearch = ["imageable_id" => $Id ];
      } else {
        $conditionSearch = ["id" => $Id ];
      }

      $filter["bool"]["must"]["match"] = $conditionSearch;

      $params = [
          "index" => "menahouse",
          "type" => "$typeDocument",
          "body" => [
              "query" => [
                  "filtered" => [
                      "query" => ["match_all" => []],
                      "filter" => $filter
                   ]
              ]
        ]];

        $searchresults = $this->client->search($params);   // Execute the
        dd($results);

        $result = collect();
        foreach ($searchresults as  $value) {
            $ads = new Obivlenie();
            $ads->metro = $value["_source"]["metro"];
            $ads->gorod = $value["_source"]["gorod"];
            $ads->ulitsa = $value["_source"]["ulitsa"];
            $ads->dom = $value["_source"]["dom"];
            $ads->rayon = $value["_source"]["rayon"];
            $ads->stroenie = $value["_source"]["stroenie"];
            $ads->etazh = $value["_source"]["etazh"];
            $ads->type_nedvizhimosti = $value["_source"]["type_nedvizhimosti"];
            $ads->kolitchestvo_komnat = $value["_source"]["kolitchestvo_komnat"];
            $ads->tekct_obivlenia = $value["_source"]["tekct_obivlenia"];
            $ads->etajnost_doma = $value["_source"]["etajnost_doma"];
            $ads->zhilaya_ploshad = $value["_source"]["zhilaya_ploshad"];
            $ads->obshaya_ploshad = $value["_source"]["obshaya_ploshad"];
            $ads->ploshad_kurhni = $value["_source"]["ploshad_kurhni"];
            $ads->san_usel = $value["_source"]["san_usel"];
            $ads->price = $value["_source"]["price"];
            //$ads->opicanie = $value["_source"]["opicanie"];
            $ads->status = $value["_source"]["status"];
            $ads->user_id = $value["_source"]["user_id"];
            $ads->id = $value["_source"]["id"];
            $ads->status = $value["_source"]["status"];
          //  $ads->categorie_id = $value["_source"]["categorie"];

            $houses->push($ads);

        }

        return $results->Paginate(6);
   }


   private function buildCollection($items){
      $result  = $items['hits']['hits'];
      return Collection::make(array_map(function ($value)
      {
          $ads = new Obivlenie();
          $ads->newInstance($value['_source'], true);
          $ads->setRawAttributes($value['_source'], true);
          return $ads ;
      }, $result));
   }

   private function getIdFoundElements($items){
        $result = $items['hits']['hits'];
        dd($result);
        $id = new Collection() ;
        foreach ($result['_source'] as $value) { $id->push($value['id']); }
        return $id ;
   }

}
