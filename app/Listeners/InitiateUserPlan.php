<?php

namespace App\Listeners;

use App\Events\ObivlyavleniyeWasStored;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use Menahouse\CustomHelper;

class InitiateUserPlan
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    private $set_license ;
    public function __construct()
    {
        $this->set_license = new CustomHelper();
    }

    /**
     * Handle the event.
     *
     * @param  ObivlyavleniyeWasStored  $event
     * @return void
     */
    public function handle(ObivlyavleniyeWasStored $event)
    {
          //dd($event->user_license);
          $this->set_license->setUserPlanToken($event->user_license);
    }
}
