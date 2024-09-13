<template>
    <div>
<div class="links desktop_view">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="web_part">
                    <Nuxt-Link to="/sell-on-ecommerce"><i class="fa-regular fa-star"></i>Sell On Ecommerce</Nuxt-Link>
                </div>
            </div>
            <div class="col-9">
                <div class="payment_part">
                    <nuxt-link to="/allbrands" :class="{ active: $route.path === '/allbrands' }" class="a_link ">All Brands</nuxt-link>
                    <nuxt-link :class="{ active: $route.path === '/allshop' }" to="/allshop" class="a_link">All Shops</nuxt-link>
                    <nuxt-link  :class="{ active: $route.path === '/coupons' }" to="/coupons" class="a_link">Coupons</nuxt-link>
                    <!-- <nuxt-link :class="{ active: $route.path === '/flas-sale' }"  to="/flas-sale" class="a_link">Flash Sale</nuxt-link> -->
                    <!-- <nuxt-link :class="{ active: $route.path === '/today-deal' }" to="/today-deal" class="a_link">Todays Deal </nuxt-link> -->
                    <nuxt-link :class="{ active: $route.path === '/charity' }" to="/charity" class="a_link">Charity Products</nuxt-link>
                    <nuxt-link :class="{ active: $route.path === '/required' }" to="/required" class="a_link">Required</nuxt-link>
                    <nuxt-link :class="{ active: $route.path === '/blog' }" to="/blog" class="a_link">Blog</nuxt-link>

                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
 <style>
 .payment_part a {
	color: #000;
	margin-right: 10px;
	transition: .4s all ease-in-out;
	text-transform: capitalize;
	font-size: 12px;
    font-weight: 400;
	transition: .4s all ease-in-out;
}
</style>