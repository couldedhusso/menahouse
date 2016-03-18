<?php namespace Menahouse ;

use Elasticsearch;

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

  public function getIndexedElements($paramSearch){

  $paramTerm = $paramSearch["term"];
  $must = [];
  if (count($paramSearch["range"]) != 0) {
    $paramRange = $paramSearch["range"];
  }
  if (count($paramTerm) == 1) {
       $searchConditons["bool"]["must"] = ["match"
                                => ["gorod" => $paramTerm["gorod"]]];
       if ( isset($paramRange) ) {

          array_push($searchConditons["bool"]["must"],
                      ["range" => ["obshaya_ploshad"
                       => $this ->createRangeQuery($paramRange)]]);
       }
  } else {

      foreach (array_keys($paramTerm) as $key) {
        array_push($must, ["match" => [$key => $paramTerm[$key]]]);
      }

      $searchConditons = [ "bool" => [ "must" => $must ]];
      if ( isset($paramRange) ) {

         array_push($searchConditons["bool"]["must"],
                     ["range" => ["obshaya_ploshad"
                      => $this ->createRangeQuery($paramRange)]]);
      }

  }


  $params = [
      "index" => "obivlenie",
      "type" => "obivlenie",
      "body" => [
          "query" => [
              "filtered" => [
                  "query" => ["match_all" => []],
                  "filter" => $searchConditons
               ]
          ]
    ]];

   $results = $this->client->search($params);   // Execute the search
   dd($results['hits']);
//   return $results;

   }


   public function createRangeQuery($xrange){
     $range = [];

     foreach (array_keys($xrange) as $key) {
         array_push($range, [$key => $xrange[$key]]);
     }

     return $range;
   }

}
