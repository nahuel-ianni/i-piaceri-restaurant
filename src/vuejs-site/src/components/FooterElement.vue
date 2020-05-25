<template>
  <footer>
    <a href="https://www.instagram.com/i-piaceri-restaurant" target="_blank" rel="noopener noreferrer">
      <img class="scale-anim" src="@/assets/img/logo-instagram.svg" alt="I Piaceri in Instagram"/>
    </a>
    <a href="https://www.facebook.com/i-piaceri-restaurant" target="_blank" rel="noopener noreferrer">
      <img class="scale-anim" src="@/assets/img/logo-facebook.svg" alt="I Piaceri in Facebook"/>
    </a>
  </footer>
</template>

<style scoped>
footer {
  bottom: var(--space-unit);
  position: fixed;
  right: var(--space-unit);
}

img {
    margin: .5rem .5rem 0 .5rem;
    width: 2rem;
}
</style>