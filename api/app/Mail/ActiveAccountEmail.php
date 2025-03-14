<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;


class ActiveAccountEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $customData;

    /**
     * Create a new message instance.
     */
    public function __construct($customData)
    {
        $this->customData = $customData;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Active Account ISUMAX',
        );
    }


    public function build()
    {
        return $this->subject('Active Account ISUMAX')
                    ->view('emails.activeyouraccount')
                    ->with('acdata', $this->customData);
    }
   
    public function attachments(): array
    {
        return [];
    }
}
