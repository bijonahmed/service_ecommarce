<?php

namespace App\Listeners;
use Illuminate\Mail\Events\MessageSending;
use Illuminate\Support\Facades\Log;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class EmailSendingListener
{
    public function handle(MessageSending $event)
    {
        // Handle email sending (before the email is actually sent)
        Log::info('Email is being sent to: ' . implode(', ', $event->message->getTo()));
    }
}
