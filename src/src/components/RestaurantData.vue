<template>
  <div>
    <article class="align-center">
      <h2>{{ instanceArea }}</h2>
      <p>{{ instancePhone }}</p>
      <address>{{ instanceAddress }}</address>
    </article>

    <a class="button" href="#contact">{{ text.button[language] }}</a>
  </div>
</template>

<script>
import { languageMixin } from "../mixins/languageMixin.js";

export default {
  mixins: [languageMixin],
  props: ["area", "phoneNumber", "address"],
  data: function() {
    return {
      instanceArea: this.area,
      instancePhone: this.phoneNumber,
      instanceAddress: this.address,
      text: {
        button: {
          "en-US": "BOOK TABLE",
          "es-ES": "RESERVAR"
        }
      }
    };
  }
};
</script>

<style scoped>
address,
h2 {
  font-size: small;
  font-style: normal;
}

article {
  background-image: url(../assets/img/bg_restaurant.png);
  background-position-y: 6px;
  background-repeat: no-repeat;
  margin-bottom: 2rem;
}

a {
  background-color: black;
}

p {
  color: var(--accent-color-9);
  font-weight: bold;
  padding: 0 3rem;
}

@media (max-width: 670px), (max-height: 800px) {
  article {
    margin: 2rem 0;
  }
}
</style>