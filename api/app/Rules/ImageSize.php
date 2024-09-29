<?php 
namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Intervention\Image\Facades\Image; // Ensure you have this facade

class ImageSize implements Rule
{
    private $height;
    private $width;

    public function __construct($height, $width)
    {
        $this->height = $height;
        $this->width = $width;
    }

    public function passes($attribute, $value)
    {
        // Check if the file is an image
        if ($value && $value->isValid()) {
            $image = Image::make($value); // Create an image instance
            return $image->height() === $this->height && $image->width() === $this->width;
        }

        return false;
    }

    public function message()
    {
        return "The :attribute must be an image with dimensions {$this->width}x{$this->height} pixels.";
    }
}
