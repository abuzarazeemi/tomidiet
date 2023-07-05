<template>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      pk="pk_test_51MH9qyCqJ2Kgj7BJH35StXimNOsqikw9l1zFgCw5ykk39nK10YNReCuYHDb4OrovkZJ48rR5wtjulvwxCqd4AClS00kFjy0FkM"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="(v) => (loading = v)"
    />
</template>

// tomidietplan // tomiediet1122

<script>
export default {
  data() {
    return {
      loading: false,
      lineItems: [
        {
          price: "price_1MWiZBCqJ2Kgj7BJK8LcENlM", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: "http://localhost:3000/Summary",
      cancelURL: "http://localhost:3000/",
    };
  },
  mounted() {
    console.log("running:::::");
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
