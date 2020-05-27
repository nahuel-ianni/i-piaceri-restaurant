<template>
  <div>
    <input type="radio" id="en-US" value="en-US" v-model="language" />
    <label v-bind:class="{'active':language == 'en-US'}" for="en-US">ENG</label>

    <input type="radio" id="es-ES" value="es-ES" v-model="language" />
    <label v-bind:class="{'active':language == 'es-ES'}" for="es-ES">ESP</label>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      language: "en-US"
    };
  }
};
</script>

<style scoped>
input {
  display: none;
}

label {
  color: var(--accent-color-6);
  cursor: pointer;
  font-size: small;
  margin-right: calc(var(--space-unit) / 2);
}

.active {
  color: var(--accent-color-5);
  font-size: large;
}
</style>