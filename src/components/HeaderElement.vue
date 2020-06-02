<template>
  <header v-scroll="onScroll" :class="{ 'background': showFullHeader }">
    <LanguageBar />
    <h2 class="name" :class="{ 'display-name': showFullHeader }">I Piaceri</h2>
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
      scrolledPastTitle: false
    };
  },
  computed: {
    showFullHeader() {
      return this.scrolledPastTitle;
    }
  },
  methods: {
    onScroll: function(evt) {
      this.scrolledPastTitle =
        evt.srcElement.body.scrollTop >= 300 ||
        evt.srcElement.documentElement.scrollTop >= 300;
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

.background {
  background-color: var(--accent-color-1);
}

.display-name {
  opacity: 1 !important;
}

.name {
  font: 1.5rem "Arizonia", "Montserrat", sans-serif;
  margin: 0;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
</style>