<template>
  <main>
    <HomeSection id="home"/>
    <AboutSection id="about" />
    <BookingSection id="booking"/>
    <ContactSection id="contact" />
  </main>
</template>

<script>
import AboutSection from "./AboutSection.vue";
import BookingSection from "./BookingSection.vue";
import ContactSection from "./ContactSection.vue";
import HomeSection from "./HomeSection.vue";

export default {
  components: {
    AboutSection,
    BookingSection,
    ContactSection,
    HomeSection
  }
};
</script>