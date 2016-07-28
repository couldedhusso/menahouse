<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

use App\User;

class ObivlyavleniyeWasStored extends Event
{
    use SerializesModels;

    /**
     * Create a new event instance.
     * event subject User
     *
     * @return void
     */
    public $user_license ;
    public function __construct($user)
    {
        $this->user_license = $user;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [];
    }
}
