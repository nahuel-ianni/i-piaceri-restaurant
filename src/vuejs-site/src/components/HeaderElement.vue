<template>
  <header v-scroll="onScroll">
    <LanguageBar />
  </header>
</template>

<script>
import LanguageBar from "./LanguageBar.vue";

export default {
  components: {
    LanguageBar
  },
  data: function() {
    return {
      header: undefined,
      styleColor: String
    };
  },
  methods: {
    onScroll: function(evt) {
      if (!this.header) this.header = evt.srcElement.querySelector("header");
      this.styleColor =
        evt.srcElement.body.scrollTop >= 300 ||
        evt.srcElement.documentElement.scrollTop >= 300
          ? "var(--accent-color-1)"
          : "transparent";

      if (this.header.style.backgroundColor != this.styleColor)
        this.header.style.backgroundColor = this.styleColor;
    }
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