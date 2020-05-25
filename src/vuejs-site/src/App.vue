<template>
<body id="app">
  <HeaderElement />

  <MainElement />

  <FooterElement />
</body>
</template>

<script>
import FooterElement from "./components/FooterElement.vue";
import HeaderElement from "./components/HeaderElement.vue";
import MainElement from "./components/MainElement.vue";

export default {
  name: "App",
  components: {
    FooterElement,
    HeaderElement,
    MainElement
  }
};
</script>

<style src="./assets/css/style.css" lang="css"></style>