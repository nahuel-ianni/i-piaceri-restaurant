<template>
  <section class="align-center">
    <p class="text-background" v-html="text.about[language]"></p>
    <div class="transition"></div>
  </section>
</template>

<script>
import { languageMixin } from "../mixins/languageMixin.js";

export default {
  mixins: [languageMixin],
  data: function() {
    return {
      text: {
        about: {
          "en-US": "Located in the heart of the most emblematic areas of Buenos Aires, Argentina, <b>I Piaceri</b> has been serving authentic Italian cuisine since 1895.<br/>Its mix of traditional dishes with the latest Italian gastronomical tendencies, has made it a perfect place to experience a country's culinary evolution.<br/><br/>Its signature Masonry oven-made pizza, complimented with Chianti wine and Caprese salad, has rewarded the restaurant with <strong>3 Michelin stars</strong> for the past 15 years in a row.",
          "es-ES": "Ubicada en las zonas más emblematicas de Buenos Aires, Argentina, <b>I Piaceri</b> ha sirvido auténtica comida Italiana desde 1985.<br/>Su mezcla de platos tradicionales con las últimas tendencias gastronómicas Italianas, lo han convertido en el sitio perfecto para experimentar la revolución culinaria del país.<br/><br/>Su exclusiva pizza cocinada en horno Masonry, complementada con vino Chianti y ensalada Caprese, le ha otorgado al restaurante <strong>3 estrellas Michelin</strong> 15 años seguidos."
        }
      }
    };
  }
};
</script>

<style scoped>
section {
  background-image: url("../assets/img/bg-about.jpg");
  background-position: bottom;
  border-top: 0.05rem solid var(--accent-color-6);
  display: flex;
  height: var(--default-height);
  position: relative;
}

.transition {
  background: linear-gradient(#00000000, #000000, #00000000);
  bottom: -5rem;
  height: 10rem;
  position: absolute;
  width: 100%;
}
</style>