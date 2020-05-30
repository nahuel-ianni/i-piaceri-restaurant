<template>
  <section>
    <div class="align-center top">
      <h1 class="text-background">I Piaceri</h1>

      <div>
        <p class="small">{{ text.subheader[language] }}</p>
        <p class="large">{{ text.header[language] }}</p>
      </div>

      <a class="chevron scale-anim" href="#booking">
        <img src="../assets/img/icon-down.svg" :alt="text.action_alt[language]" />
      </a>
    </div>

    <div class="bottom">
      <img src="../assets/img/img-home-1.jpg" :alt="text.img1_alt[language]" />
      <img src="../assets/img/img-home-2.jpg" :alt="text.img2_alt[language]" />
      <img src="../assets/img/img-home-3.jpg" :alt="text.img3_alt[language]" />
    </div>
  </section>
</template>

<script>
import { languageMixin } from "../mixins/languageMixin.js";

export default {
  mixins: [languageMixin],
  data: function() {
    return {
      text: {
        header: {
          "en-US": "AUTHENTIC ITALIAN CUISINE",
          "es-ES": "AUTENTICA COCINA ITALIANA"
        },
        subheader: {
          "en-US": "BAR RESTAURANT",
          "es-ES": "BAR RESTAURANTE"
        },
        action_alt: {
          "en-US": "Book a table with us",
          "es-ES": "Reserva una mesa con nosotros"
        },
        img1_alt: {
          "en-US": "Home made pizza",
          "es-ES": "Pizza casera"
        },
        img2_alt: {
          "en-US": "Chef preparing pasta",
          "es-ES": "Chef preparando pasta"
        },
        img3_alt: {
          "en-US": "Salad ingredients",
          "es-ES": "Ingredientes de una ensalada"
        }
      }
    };
  },
};
</script>

<style scoped>
h1 {
  color: var(--high-contrast-color);
  font: 7.5rem "Arizonia", "Montserrat", sans-serif;
  margin: 0 0 2rem 0;
}

.bottom {
  height: 30vh;
}

.bottom img {
  height: inherit;
  object-position: top;
  width: 33.33%;
}

.bottom img:nth-child(2) {
  border-left: 0.05rem solid var(--accent-color-7);
  border-right: 0.05rem solid var(--accent-color-7);
}

.chevron {
  background-color: var(--accent-color-1);
  border: 0.05rem solid var(--accent-color-6);
  border-radius: 50%;
  bottom: -1.25rem;
  padding: 0.6rem 0.6rem 0.1rem 0.6rem;
  position: absolute;
  width: 2.5rem;
}

.large {
  font-size: x-large;
}

.small {
  font-size: small;
}

.top {
  background-image: url("../assets/img/bg-home.jpg");
  background-position: center;
  display: flex;
  min-height: 70vh;
  position: relative;
}

.top div {
  background-color: var(--accent-color-2);
  border-bottom: 0.05rem solid var(--accent-color-6);
  border-top: 0.05rem solid var(--accent-color-6);
  bottom: 0;
  color: var(--accent-color-5);
  padding: 1rem;
  position: absolute;
  text-align: center;
  width: 100%;
}
</style>