<form id="payment-form">
    @csrf
    <input type="text" name="order_id" id="order_id" value="{{ $six_digit_random_number = random_int(100000, 999999) }}">
    <button id="checkout-button">Pay with Stripe</button>
</form>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://js.stripe.com/v3/"></script>
<script>
    const stripe = Stripe('{{ config('services.stripe.key') }}'); // Publishable key
    const checkoutButton = document.getElementById('checkout-button');
    const form = document.getElementById('payment-form');

    checkoutButton.addEventListener('click', function(event) {
        event.preventDefault();

        $.ajax({
            url: '/create-checkout-session',  // Your route
            method: 'POST',
            data: {
                order_id: $("#order_id").val(),
                _token: '{{ csrf_token() }}',  // CSRF token
            },
            success: function(response) {
                // Assuming the response contains the URL for Stripe Checkout session
                stripe.redirectToCheckout({ sessionId: response.url })
                    .then(function(result) {
                        if (result.error) {
                            // Handle error here
                            console.error(result.error.message);
                        }
                    });
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    });
</script>