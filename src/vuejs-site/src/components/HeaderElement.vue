<template>
  <header>
    <LanguageBar />
  </header>
</template>

<script>
import LanguageBar from "./LanguageBar.vue";

export default {
  components: {
    LanguageBar,
  }
};
</script>

<style>
header {
  margin: var(--space-unit);
  position: fixed;
  top: 0;
  z-index: 100;
}
</style>