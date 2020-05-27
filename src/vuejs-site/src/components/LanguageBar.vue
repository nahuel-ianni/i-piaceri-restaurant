<template>
  <ul>
    <li>
      <input type="radio" id="en-US" value="en-US" v-model="language" />
      <label v-bind:class="{'active':language == 'en-US'}" for="en-US">ENG</label>
    </li>
    <li>
      <input type="radio" id="es-ES" value="es-ES" v-model="language" />
      <label v-bind:class="{'active':language == 'es-ES'}" for="es-ES">ESP</label>
    </li>
  </ul>
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
  margin-right: calc(var(--space-unit) / 2);
}

li {
  display: inline;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.active {
  color: var(--accent-color-8);
}
</style>