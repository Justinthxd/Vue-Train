<script>
import { ref } from "vue";
import { VueStripe } from '@vue-stripe/vue-stripe';
import { stripe } from '@vue-stripe/vue-stripe';

export default {
    data() {
        return {
            stripePublishableKey: 'pk_test_51KiUQ4FNnGEzPGnzFYwmMo01bzGma8ge7jTe2zAZlW51Dc0AwoUbVX29yA1WseoRo5iVktPIYnyniR6kullYSlk300TTSHXq0x',
        };
    },
    methods: {
        async handlePayment() {
            console.log("Yes");
            try {
                // create a payment method using Stripe.js
                const paymentMethod = await stripe.createPaymentMethod({
                    type: 'card',
                    card: this.$refs.cardElement, // a reference to the card element in your payment form
                });

                if (paymentMethod.error) {
                    // handle payment method error
                } else {
                    // send the payment method to your server to create a charge
                    const response = await axios.post('/charge', {
                        paymentMethodId: paymentMethod.id,
                        // other data for the charge request
                    });

                    if (response.error) {
                        // handle charge error
                    } else {
                        // handle successful payment
                    }
                }
            } catch (error) {
                console.log(error.message);
            }
        },
    },
}
</script>

<template>
    <div class="">
        <div class="row">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100"
                            src="https://files.porsche.com/filestore/image/multimedia/none/982-718spyder-modelimage-sideshot/model/d9552a39-8616-11e9-80c4-005056bbdc38/porsche-model.png"
                            alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100"
                            src="https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"
                            alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100"
                            src="https://files.porsche.com/filestore/image/multimedia/none/982-718gt4-modelimage-sideshot/model/5b3fd684-85f2-11e9-80c4-005056bbdc38/porsche-model.png"
                            alt="Third slide" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="col container1">
                More Faster
            </div>
            <div class="col container2">
                More Secure
            </div>
            <div class="w-100"></div>
            <div class="col container3">
                <h1>
                    Center Content
                </h1>
            </div>
            <VueStripe :publishableKey="stripePublishableKey" />
        </div>
    </div>
</template>
<style scoped>
body {
    padding: 0px;
    margin: 0px;
    width: 100%;
}

.carousel-control-prev-icon {
    color: red;
}

.container1 {
    height: 200px;
    color: antiquewhite;
    padding: 50px;
    font-size: 30px;
    color: rgb(58, 58, 58);
    font-weight: bold;
}

.container2 {
    height: 200px;
    color: antiquewhite;
    display: flex;
    justify-content: flex-end;
    padding: 50px;
    font-size: 30px;
    color: rgb(58, 58, 58);
    font-weight: bold;
}

.container3 {
    height: 250px;
    color: antiquewhite;
    background-color: rgb(61, 30, 90);
    display: flex;
    align-items: center;
    justify-content: center;

}

.container4 {
    height: 250px;
    color: antiquewhite;
    background-color: rgb(90, 30, 33);
    display: flex;
    align-items: center;
    justify-content: center;
}

.container5 {
    height: 250px;
    color: antiquewhite;
    background-color: rgb(20, 124, 55);
    display: flex;
    align-items: center;
    justify-content: center;
}

.container6 {
    height: 250px;
    color: antiquewhite;
    background-color: rgb(72, 90, 30);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>