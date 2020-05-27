<template>
  <section class="align-center">
    <h2>{{ text.header[language] }}</h2>

    <p>This section is not yet finished.</p>
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
          "en-US": "BOOK A TABLE WITH US",
          "es-ES": "RESERVA MESA CON NOSOTROS"
        }
      }
    };
  }
};
</script>

<style scoped>
section {
  background-image: url("../assets/img/bg-booking.jpg");
  background-position: center;
  display: flex;
  height: var(--default-height);
}
</style>