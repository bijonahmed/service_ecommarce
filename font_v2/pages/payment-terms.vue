<template>
    <div>
        <title>Isumax Payment Terms </title>

        <body class="bgc-thm1">
            <div class="wrapper ovh">
                <Header />
                <MobileMenu />
                <div class="body_content">

                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="my-5"
                                    style=" margin: auto; background: #fff; padding: 20px; border-radius: 10px;">
                                    <div class="my-5"></div>
                                    <h1 class="text-center">Isumax Payment Terms</h1>
                                    <h1>What is a Service Fee?</h1>
                                    <p>At Isumax, we prioritize fair earnings for freelancers and affordable hiring for businesses.
                                     Our fees are among the lowest worldwide, ensuring a win-win for everyone!
                                     </p>

                                    <h2>💳 What is a Service Fee?</h2>
                                    <p>The service fee is a small charge applied at the time of purchase, covering
                                        platform
                                        operations, security, and seamless transactions.</p>

                                    <h3>💰 When is the Service Fee Applied?</h3>
                                    <ul>
                                        <li>✔ Main gig purchases – Initial payment for hiring a freelancer.</li>
                                        <li>✔ Gig extras – Additional services or upgrades.</li>
                                        <li>✔ Tips for freelancers – Voluntary tips to appreciate great work.</li>
                                    </ul>

                                    <h3>💰 Isumax’s Affordable & Transparent Fee Structure</h3>
                                    <ul>
                                        <li>✔ Lowest service fees worldwide – We charge only 10%.</li>
                                        <li>✔ No Small Order Fees – No extra charges on orders above $5.</li>
                                        <li>✔ No Hidden Costs – You always see the full price upfront.</li>
                                    </ul>
                                    <p>For more details, please refer to our Payment Terms.</p>

                                    <h2>💰 Isumax Payment Terms – Transparent, Fair & Affordable!</h2>

                                    <h3>🔹 Seller Fees – Keep More of What You Earn!</h3>
                                    <ul>
                                        <li>✔ Lowest commission worldwide – More earnings for you!</li>
                                        <li>✔ Instant payment processing – Get your money on time.</li>
                                        <li>✔ Secure transactions – Work stress-free with guaranteed payments.</li>
                                    </ul>

                                    <h3>🔹 Buyer Fees – No Hidden Costs, Just Smart Hiring!</h3>
                                    <ul>
                                        <li>✔ Simple & Low Service Fees – Pay only what’s needed.</li>
                                        <li>✔ No Small Order Fees – No extra charges for purchases under $100.</li>
                                        <li>✔ No Hidden Charges – The price you see is what you pay!</li>
                                    </ul>

                                    <h2>💰 Payments & Withdrawals on Isumax – Fast, Secure & Transparent</h2>

                                    <h3>⏳ 1. How long does it take to receive my earnings?</h3>
                                    <ul>
                                        <li>✔ Clients pay in advance.</li>
                                        <li>✔ Freelancers must complete their work and deliver it.</li>
                                        <li>✔ Clients have 3 days to review (14 days for shipped gigs).</li>
                                        <li>✔ Once marked complete, funds are withdrawable after a 10-day clearance
                                            period.</li>
                                    </ul>

                                    <h3>🛒 2. Can I use my earnings to purchase gigs?</h3>
                                    <p>Yes! You can use your cleared earnings to purchase gigs on Isumax.</p>

                                    <h3>💳 3. Are there any withdrawal fees?</h3>
                                    <p>Isumax does not charge any withdrawal fees, but your payment provider might apply
                                        charges.
                                    </p>

                                    <h3>🔄 4. Can I have multiple withdrawal providers?</h3>
                                    <p>Your Isumax account can be linked to one account per withdrawal method.</p>

                                    <h3>🚫 5. Can I cancel my withdrawal?</h3>
                                    <p>No, withdrawals are final once processed.</p>

                                    <h3>💰 6. Does Isumax charge fees for PayPal withdrawals?</h3>
                                    <p>No, PayPal withdrawals have 0% fees!</p>

                                    <h3>📩 7. How do I claim unclaimed withdrawals?</h3>
                                    <p>Ensure your email is verified in PayPal to claim your withdrawal.</p>

                                    <h3>💼 8. Do I need to pay taxes on my Isumax earnings?</h3>
                                    <p>Freelancers are responsible for reporting and paying taxes as per their local
                                        laws.</p>

                                    <h2>🔗 Isumax – The Most Affordable Freelance Marketplace! 🚀</h2>
                                    <p>Earn More. Hire Smarter. Work with Confidence!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Our Footer -->
                    <Footer />
                </div>
            </div>
        </body>

    </div>
</template>

<script setup>
import axios from 'axios';
const content = ref([]);
const checkContent = async () => {
    const post_id = 12;
    const category_id = 9;
    try {
        const response = await axios.get('/unauthenticate/checkContent', {
            params: {
                post_id: post_id,
                category_id: category_id
            }
        });
        content.value = response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}



onMounted(() => {
    checkContent();

    new Swiper(".reviewSlider", {
        loop: true,
        slidesPerView: 2,
        navigation: {
            nextEl: ".button_next",
            prevEl: ".button_prev",
        },
    });
});
</script>

<style scoped></style>
