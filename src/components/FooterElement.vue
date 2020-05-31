<template>
  <footer>
    <a
      href="https://www.instagram.com/i-piaceri-restaurant"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img class="scale-anim" src="@/assets/img/logo-instagram.svg" :alt="text.instagram[language]" />
    </a>
    <a
      href="https://www.facebook.com/i-piaceri-restaurant"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img class="scale-anim" src="@/assets/img/logo-facebook.svg" :alt="text.facebook[language]" />
    </a>
  </footer>
</template>

<script>
import { languageMixin } from "../mixins/languageMixin.js";

export default {
  mixins: [languageMixin],
  data: function() {
    return {
      text: {
        instagram: {
          "en-US": "Follow us on Instagram",
          "es-ES": "Síguenos en Instagram"
        },
        facebook: {
          "en-US": "Follow us on Facebook",
          "es-ES": "Síguenos en Facebook"
        }
      }
    };
  }
};
</script>

<style scoped>
footer {
  bottom: calc(var(--space-unit) / 2.5);
  position: fixed;
  right: var(--space-unit);
}

img {
  margin: 0.5rem 0.5rem 0 0.5rem;
  width: 2rem;
}

@media (max-width: 670px), (max-height: 800px) {
  footer {
    background-color: transparent;
    text-align: right;
    position: static;
  }
}
</style>