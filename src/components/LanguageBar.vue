<template>
  <ul>
    <li>
      <input type="radio" id="en-US" value="en-US" v-model="language" @change="languageSelected" />
      <label for="en-US" v-bind:class="{'active':language == 'en-US'}">ENG</label>
    </li>
    <li>
      <input type="radio" id="es-ES" value="es-ES" v-model="language" @change="languageSelected" />
      <label for="es-ES" v-bind:class="{'active':language == 'es-ES'}">ESP</label>
    </li>
  </ul>
</template>

<script>
import { eventBus } from "../main";

export default {
  data: function() {
    return {
      language: "en-US"
    };
  },
  methods: {
    languageSelected() {
      eventBus.$emit("languageChanged", this.language);
    }
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
  font-size: .9rem;
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