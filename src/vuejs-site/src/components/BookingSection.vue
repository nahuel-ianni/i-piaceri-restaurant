<template>
  <section class="align-center">
    <h2>{{ text.header[language] }}</h2>
    
    <ul>
      <li v-for="restaurant in restaurants" :key="restaurant.area">
        <RestaurantData :area="restaurant.area" :phoneNumber="restaurant.phoneNumber" :address="restaurant.address"/>
      </li>
    </ul>
  </section>
</template>

<script>
import { languageMixin } from "../mixins/languageMixin.js";
import RestaurantData from "./RestaurantData.vue";

export default {
  mixins: [languageMixin],
  components: {
    RestaurantData
  },
  data: function() {
    return {
      text: {
        header: {
          "en-US": "RESTAURANTS",
          "es-ES": "RESTAURANTES"
        }
      },
      restaurants: [
        { area: "COSTANERA NORTE", phoneNumber: "TEL. (5411) 4433-0666", address: "Av. Rafael Obligado 1032" },
        { area: "PUERTO MADERO", phoneNumber: "TEL. (5411) 4433-0667", address: "Av. Olga Cossettini 23" },
      ]
    };
  }
};
</script>

<style scoped>
h2 {
  color: var(--accent-color-9);
  font-size: 3rem;
}
section {
  background-image: url("../assets/img/bg-booking.jpg");
  background-position: center;
  display: flex;
  height: var(--default-height);
}

ul {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
}
</style>