<template>
  <header v-scroll="onScroll">
    <LanguageBar />
    <h2 class="name">I Piaceri</h2>
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
      name: undefined,
      styleColor: String,
      nameOpacity: String
    };
  },
  methods: {
    onScroll: function(evt) {
      if (!this.header) this.header = evt.srcElement.querySelector("header");
      if (!this.name) this.name = evt.srcElement.querySelector(".name");

      this.styleColor =
        evt.srcElement.body.scrollTop >= 300 ||
        evt.srcElement.documentElement.scrollTop >= 300
          ? "var(--accent-color-1)"
          : "transparent";

      this.nameOpacity =
        this.styleColor == "var(--accent-color-1)" ? "1" : "0";

      if (this.header.style.backgroundColor != this.styleColor)
        this.header.style.backgroundColor = this.styleColor;

      if (this.name.style.opacity != this.nameOpacity)
        this.name.style.opacity = this.nameOpacity;
    }
  }
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  padding: calc(var(--space-unit) / 1.5);
  position: fixed;
  top: 0;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
  z-index: 100;
}

.name {
  /* display: none; */
  font: 1.5rem "Arizonia", "Montserrat", sans-serif;
  margin: 0;
  opacity: 0;
  transition: opacity .2s ease-in-out;
}
</style>