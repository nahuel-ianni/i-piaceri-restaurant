<template>
  <header>
    <LanguageBar />
  </header>
</template>

<script>
import LanguageBar from "./LanguageBar.vue";

export default {
  created() {
    this.window.onscroll = function() {
      const header = this.document.querySelector("header");

      header.style.backgroundColor =
        this.document.body.scrollTop >= 300 ||
        this.document.documentElement.scrollTop >= 300
          ? "var(--accent-color-1)"
          : "transparent";
    };
  },
  components: {
    LanguageBar
  }
};
</script>

<style>
header {
  padding: calc(var(--space-unit) / 1.5);
  position: fixed;
  top: 0;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
  z-index: 100;
}
</style>