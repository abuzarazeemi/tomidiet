<template>
  <div class="Site">
    <client-only>
      <stripe-checkout
        v-if="isMounted"
        ref="checkoutRef"
        mode="payment"
        pk="pk_test_51MH9qyCqJ2Kgj7BJH35StXimNOsqikw9l1zFgCw5ykk39nK10YNReCuYHDb4OrovkZJ48rR5wtjulvwxCqd4AClS00kFjy0FkM"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="(v) => (loading = v)"
      ></stripe-checkout>
    </client-only>
    <NavBar />
    <div class="SummaryWrapper">
      <h1>Souhrn Vaší objednávky</h1>
      <v-table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Plán</td>
            <td>{{ $route.query.plan == 1 ? "DLOUHODOBÝ" : "KRÁTKODOBÝ" }}</td>
          </tr>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.Value1 }}</td>
            <td>{{ item.Value2 }}</td>
          </tr>
        </tbody>
      </v-table>
      <div class="PayWrapper">
        <h2>Cena {{$route.query.plan == 1 ? "999" : "799"}} Kč vč. DPH</h2>
        <button :disabled="isMounted" @click="submit" class="buttonpink">
          {{ isMounted ? "Loading..." : "Zaplatit" }}
        </button>
      </div>
    </div>
    <Footer />
  </div>
  <Cookies />
</template>

<script>
export default {
  data() {
    return {
      isMounted: false,
      clientCheck: false,
      v: false,
      storage: null,
      ref: null,
      getDownloadURL: null,
      loading: false,
      lineItems: [
        {
          price: "price_1MWiZBCqJ2Kgj7BJK8LcENlM", // The id of the one-time price you created in your Stripe dashboard price_1MWiZBCqJ2Kgj7BJK8LcENlM
          quantity: 1,
        },
      ],
      successURL: "",
      cancelURL: "http://localhost:3000/",
      desserts: [
        {
          Value1: "Plán",
          Value2: "Dlouhodobý",
        },
        {
          Value1: "Výška",
          Value2: 159,
        },
        {
          Value1: "Váha",
          Value2: 65,
        },
        {
          Value1: "Tělesný tuk",
          Value2: 5,
        },
        {
          Value1: "Aktivita",
          Value2: 2,
        },
        {
          Value1: "Věk",
          Value2: 26,
        },
      ],
      products: [
        {
          price: "",
          quantity: 1,
        },
      ],
      shortTerm: {
        147_150: "gs://tomidiet-b699c.appspot.com/short-term/S.1 - 147-150.pdf",
        151_155: "gs://tomidiet-b699c.appspot.com/short-term/S.2 - 151-155.pdf",
        156_160: "gs://tomidiet-b699c.appspot.com/short-term/S.3 - 156-160.pdf",
        161_165: "gs://tomidiet-b699c.appspot.com/short-term/S.4 - 161-165.pdf",
        166_170: "gs://tomidiet-b699c.appspot.com/short-term/S.5 - 166-170.pdf",
        171_175: "gs://tomidiet-b699c.appspot.com/short-term/S.6 - 171-175.pdf",
        176_180: "gs://tomidiet-b699c.appspot.com/short-term/S.7 - 176-180.pdf",
        181_185: "gs://tomidiet-b699c.appspot.com/short-term/S.8 - 181-185.pdf",
        186_190: "gs://tomidiet-b699c.appspot.com/short-term/S.9 - 186-190.pdf",
        191: "gs://tomidiet-b699c.appspot.com/short-term/S.10 - 191+.pdf",
      },
      longTerm: {
        55: {
          147_150: "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.1.pdf",
          151_155: "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.2.pdf",
          156_160: "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.3.pdf",
          161_165: "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.4.pdf",
          166_170: "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.5.pdf",
          171_175: "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.6.pdf",
          176_180: "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.7.pdf",
          181_185: "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.8.pdf",
          186_190: "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.9.pdf",
          191: "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.10.pdf",
        },
        56_61: {
          147_150: "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.1.pdf",
          151_155: "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.2.pdf",
          156_160: "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.3.pdf",
          161_165: "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.4.pdf",
          166_170: "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.5.pdf",
          171_175: "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.6.pdf",
          176_180: "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.7.pdf",
          181_185: "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.8.pdf",
          186_190: "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.9.pdf",
          191: "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.10.pdf",
        },
        62_67: {
          147_150: "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.1.pdf",
          151_155: "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.2.pdf",
          156_160: "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.3.pdf",
          161_165: "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.4.pdf",
          166_170: "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.5.pdf",
          171_175: "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.6.pdf",
          176_180: "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.7.pdf",
          181_185: "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.8.pdf",
          186_190: "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.9.pdf",
          191: "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.10.pdf",
        },
        68: {
          147_150: "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.1.pdf",
          151_155: "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.2.pdf",
          156_160: "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.3.pdf",
          161_165: "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.4.pdf",
          166_170: "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.5.pdf",
          171_175: "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.6.pdf",
          176_180: "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.7.pdf",
          181_185: "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.8.pdf",
          186_190: "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.9.pdf",
          191: "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.10.pdf",
        },
      },
      redirect: "",
    };
  },
  mounted() {
    // this.isMounted = true
    this.desserts = JSON.parse(localStorage.getItem("selectedData"));

    let height = Number(this.$route.query.height);
    let weight = Number(this.$route.query.weight);
    let plan = Number(this.$route.query.plan);

    // long term
    if (plan == 1) {
      this.lineItems[0].price = "price_1MXksdCqJ2Kgj7BJPtwl3nJn";
      if (weight <= 55) {
        if (height >= 147 && height <= 150) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.1.pdf";
        }
        if (height >= 151 && height <= 155) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.2.pdf";
        }
        if (height >= 156 && height <= 160) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.3.pdf";
        }
        if (height >= 161 && height <= 165) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.4.pdf";
        }
        if (height >= 166 && height <= 170) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.5.pdf";
        }
        if (height >= 171 && height <= 175) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.6.pdf";
        }
        if (height >= 176 && height <= 180) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.7.pdf";
        }
        if (height >= 181 && height <= 185) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.8.pdf";
        }
        if (height >= 186 && height <= 190) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.9.pdf";
        }
        if (height >= 191) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/55kg/A.10.pdf";
        }
      }
      if (weight >= 56 && weight <= 61) {
        if (height >= 147 && height <= 150) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.1.pdf";
        }
        if (height >= 151 && height <= 155) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.2.pdf";
        }
        if (height >= 156 && height <= 160) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.3.pdf";
        }
        if (height >= 161 && height <= 165) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.4.pdf";
        }
        if (height >= 166 && height <= 170) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.5.pdf";
        }
        if (height >= 171 && height <= 175) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.6.pdf";
        }
        if (height >= 176 && height <= 180) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.7.pdf";
        }
        if (height >= 181 && height <= 185) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.8.pdf";
        }
        if (height >= 186 && height <= 190) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.9.pdf";
        }
        if (height >= 191) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/56-61kg/B.10.pdf";
        }
      }
      if (weight >= 62 && weight <= 67) {
        if (height >= 147 && height <= 150) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.1.pdf";
        }
        if (height >= 151 && height <= 155) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.2.pdf";
        }
        if (height >= 156 && height <= 160) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.3.pdf";
        }
        if (height >= 161 && height <= 165) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.4.pdf";
        }
        if (height >= 166 && height <= 170) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.5.pdf";
        }
        if (height >= 171 && height <= 175) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.6.pdf";
        }
        if (height >= 176 && height <= 180) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.7.pdf";
        }
        if (height >= 181 && height <= 185) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.8.pdf";
        }
        if (height >= 186 && height <= 190) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.9.pdf";
        }
        if (height >= 191) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/62-67kg/C.10.pdf";
        }
      }
      if (weight >= 68) {
        if (height >= 147 && height <= 150) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.1.pdf";
        }
        if (height >= 151 && height <= 155) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.2.pdf";
        }
        if (height >= 156 && height <= 160) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.3.pdf";
        }
        if (height >= 161 && height <= 165) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.4.pdf";
        }
        if (height >= 166 && height <= 170) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.5.pdf";
        }
        if (height >= 171 && height <= 175) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.6.pdf";
        }
        if (height >= 176 && height <= 180) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.7.pdf";
        }
        if (height >= 181 && height <= 185) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.8.pdf";
        }
        if (height >= 186 && height <= 190) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.9.pdf";
        }
        if (height >= 191) {
          this.redirect =
            "gs://tomidiet-b699c.appspot.com/long-term/68kg/D.10.pdf";
        }
      }
    } else {
      this.lineItems[0].price = "price_1MXkrkCqJ2Kgj7BJGafOhDcB";
      if (height >= 147 && height <= 150) {
        this.redirect =
          "gs://tomidiet-b699c.appspot.com/short-term/S.1 - 147-150.pdf";
      }
      if (height >= 151 && height <= 155) {
        this.redirect =
          "gs://tomidiet-b699c.appspot.com/short-term/S.2 - 151-155.pdf";
      }
      if (height >= 156 && height <= 160) {
        this.redirect =
          "gs://tomidiet-b699c.appspot.com/short-term/S.3 - 156-160.pdf";
      }
      if (height >= 161 && height <= 165) {
        this.redirect =
          "gs://tomidiet-b699c.appspot.com/short-term/S.4 - 161-165.pdf";
      }
      if (height >= 166 && height <= 170) {
        this.redirect =
          "gs://tomidiet-b699c.appspot.com/short-term/S.5 - 166-170.pdf";
      }
      if (height >= 171 && height <= 175) {
        this.redirect =
          "gs://tomidiet-b699c.appspot.com/short-term/S.6 - 171-175.pdf";
      }
      if (height >= 176 && height <= 180) {
        this.redirect =
          "gs://tomidiet-b699c.appspot.com/short-term/S.7 - 176-180.pdf";
      }
      if (height >= 181 && height <= 185) {
        this.redirect =
          "gs://tomidiet-b699c.appspot.com/short-term/S.8 - 181-185.pdf";
      }
      if (height >= 186 && height <= 190) {
        this.redirect =
          "gs://tomidiet-b699c.appspot.com/short-term/S.9 - 186-190.pdf";
      }
      if (height >= 191) {
        this.redirect =
          "gs://tomidiet-b699c.appspot.com/short-term/S.10 - 191+.pdf";
      }
    }

    if (this.redirect) {
      this.$getDownloadURL(
        this.$firebaseRef(this.$storage, this.redirect)
      ).then((url) => {
        console.log("url ::: ", url);
        this.successURL = url;
      });
    }
  },
  methods: {
    submit() {
      this.isMounted = true;
      setTimeout(() => {
        // You will be redirected to Stripe's secure checkout page
        if (this.lineItems[0].price && this.successURL) {
          this.$refs.checkoutRef.redirectToCheckout();
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

h1 {
  margin-bottom: 5px;
}
.SummaryWrapper {
  flex: 1;
  padding: 0 60px;
  margin: 50px auto;
}

.PayWrapper {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
