<?php namespace Menahouse ;

  use Illuminate\Support\Facades\File;
  use Illuminate\Support\Facades\Input;
  use Illuminate\Http\Request;
  use Illuminate\Contracts\Filesystem\Filesystem;
  use Yandex\Geo;

  /**
   *
   */
  class CustomHelper
  {

    private $yandex_api;

    public function __construct(){
      $this->yandex_api = new \Yandex\Geo\Api();
    }

    public function yandexGeocoding($searchParams){

      // TODO : mettre en cache le result de recherche

      // поиск по адресу объекта
      $this->yandex_api->setQuery($searchParams);

      // Настройка фильтров
      $this->yandex_api
          ->setLimit(1) // кол-во результатов
          ->setLang(\Yandex\Geo\Api::LANG_US) // локаль ответа
          ->load();

      $response = $this->yandex_api->getResponse();

      // Список найденных точек
      $collection = $response->getList();
      foreach ($collection as $item) {
        $params = array('0' => $item->getLongitude(), // долгота для исходного запроса
                          '1' => $item->getLatitude()); // широта для исходного запроса
      }

      if ($response->getFoundCount()) // something found
      {
          return $this->yandexReverseGeocoding($params);
      }

      return null ;
    }


    public function getDistritcs($param)
    {
      switch ($param) {
        case 'Центральный административный округ':
          $district = 'ЦАО';
          break;
        case 'Юго-Западный административный округ':
          $district = 'ЮЗАО';
          break;
        case 'Восточный административный округ':
          $district = 'ВАО';
          break;
        case 'Южный административный округ':
            $district = 'ЮАО';
            break;
        default:
          $district = 'САО';
          break;
      }
      return $district;
    }
    public function yandexReverseGeocoding($params){

        $kind_district = 'KIND_DISTRICT';
        $kind_metro = 'KIND_METRO';

        $getFullAddressParts = $this->setGeocoding($params, $kind_district);
        $getMetroParts = $this->setGeocoding($params, $kind_metro);

        return  [
            'address' => $getFullAddressParts,
            'metro' => $getMetroParts
        ];
    }

    private static function setStorageDirectory($DirectoryName)
    {
        File::makeDirectory($DirectoryName);
        return true;
    }
    public function getStorageDirectory()
    {

      $storagePath = public_path().'/storage/pictures';
      $thumbnailsStoragePath = public_path().'/storage/thumbnail';

       if(! File::exists($storagePath)) {
          $ret =  $this->setStorageDirectory($storagePath);
       }

       if(! File::exists($thumbnailsStoragePath)) {
           $ret = $this->setStorageDirectory($thumbnailsStoragePath);
       }

       return
       [
         /*
         |----------------------------------------------------------------------
         | Repertoire des images de tailles normales
         |----------------------------------------------------------------------
         */
         "storage" => $storagePath,
         /*
         |----------------------------------------------------------------------
         | Repertoire des images de tailles reduitess
         |----------------------------------------------------------------------
         */
         "thumbs" => $thumbnailsStoragePath
       ];
    }

    private function setGeocoding(array $params, $kind)
    {

      $geoData = [];
      $this->yandex_api->setPoint($params[0], $params[1]);

      if ($kind == 'KIND_METRO') {
        $this->yandex_api
            ->setLimit(1) // кол-во результатов
            ->setLang(\Yandex\Geo\Api::LANG_RU) // локаль ответа
            ->setKind(\Yandex\Geo\Api::KIND_METRO)
            ->load();
      }
      else {
        $this->yandex_api
            ->setLimit(1) // кол-во результатов
            ->setLang(\Yandex\Geo\Api::LANG_RU) // локаль ответа
            ->setKind(\Yandex\Geo\Api::KIND_DISTRICT)
            ->load();
      }

      $response = $this->yandex_api->getResponse();

      // Список найденных точек
      $collection = $response->getList();
        foreach ($collection as $item) {
          if($kind == 'KIND_DISTRICT'){
            $fulladr = $item->getFullAddressParts();
              array_push($geoData, $fulladr[3]); // getAdministrativeAreaName
              array_push($geoData, $fulladr[4]); // getSubAdministrativeAreaName
          } else{
              array_push($geoData, $item->getMetro()); // getMetroName
          }
      }
      return $geoData ;
    }
  }
