<template>
  <section class="flex">
    <img src="@/assets/img/img-contact.jpg" alt="Home made gelato" />

    <form>
      <h2>CONTACT</h2>

      <label class="hidden" for="name">Enter your name</label>
      <input id="name" type="text" placeholder="NAME" required />

      <label class="hidden" for="email">Enter your email address</label>
      <input id="email" type="email" placeholder="EMAIL" required />

      <label class="hidden" for="message">Enter your message</label>
      <textarea id="message" placeholder="MESSAGE" required rows="5"></textarea>

      <input class="button" type="submit" value="SEND MESSAGE" />
    </form>
  </section>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: var(--space-unit);
  width: 100%;
}

img {
  object-position: top;
  width: 33.33%;
}

input[type="email"],
input[type="text"],
textarea {
  background-color: var(--accent-color-3);
  border: none;
  color: var(--high-contrast-color);
  font-family: inherit;
  margin-bottom: 1rem;
  padding: 1rem;
}

input[type="submit"] {
  background-color: transparent;
  margin-left: auto;
}

section {
  border-top: 0.05rem solid var(--accent-color-6);
  height: var(--default-height);
}
</style>