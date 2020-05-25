<template>
  <section>
    <div class="align-center top">
      <h1 class="text-background">I Piaceri</h1>

      <div>
        <p class="font-s">BAR RESTAURANT</p>
        <p class="font-l">AUTHENTIC ITALIAN CUISINE</p>
      </div>

      <a class="chevron scale-anim" href="#booking">
        <img src="@/assets/img/icon-down.svg" alt="Find out more about us" />
      </a>
    </div>

    <div class="bottom">
      <img src="@/assets/img/img-home-1.jpg" alt="Home made pizza" />
      <img src="@/assets/img/img-home-2.jpg" alt="Chef preparing pasta" />
      <img src="@/assets/img/img-home-3.jpg" alt="Salad ingredients" />
    </div>
  </section>
</template>

<style scoped>
h1 {
  color: var(--high-contrast-color);
  font: 7.5rem "Arizonia", "Montserrat", sans-serif;
  margin: 0 0 2rem 0;
}

.bottom {
  height: 30vh;
}

.bottom img {
  height: inherit;
  object-position: top;
  width: 33.33%;
}

.bottom img:nth-child(2) {
  border-left: 0.05rem solid var(--accent-color-7);
  border-right: 0.05rem solid var(--accent-color-7);
}

.chevron {
  background-color: var(--accent-color-1);
  border: 0.05rem solid var(--accent-color-6);
  border-radius: 50%;
  bottom: -1.25rem;
  padding: 0.6rem 0.6rem 0.1rem 0.6rem;
  position: absolute;
  width: 2.5rem;
}

.font-s {
  font-size: small;
}

.font-l {
  font-size: x-large;
}

.top {
  background-image: url("../assets/img/bg-home.jpg");
  background-position: center;
  display: flex;
  min-height: 70vh;
  position: relative;
}

.top div {
  background-color: var(--accent-color-2);
  border-bottom: 0.05rem solid var(--accent-color-6);
  border-top: 0.05rem solid var(--accent-color-6);
  bottom: 0;
  color: var(--accent-color-5);
  padding: 1rem;
  position: absolute;
  text-align: center;
  width: 100%;
}
</style>