<template>
  <section class="flex">
    <img src="@/assets/img/img-contact.jpg" :alt="text.contact_alt[language]" />

    <form>
      <h2>{{ text.header[language] }}</h2>

      <label class="hidden" for="name">{{ text.label_name[language] }}</label>
      <input id="name" type="text" :placeholder="text.placeholder_name[language]" required />

      <label class="hidden" for="email">{{ text.label_email[language] }}</label>
      <input id="email" type="email" :placeholder="text.placeholder_email[language]" required />

      <label class="hidden" for="message">{{ text.label_message[language] }}</label>
      <textarea id="message" :placeholder="text.placeholder_message[language]" required rows="5"></textarea>

      <input class="button" type="submit" :value="text.send[language]" />
    </form>
  </section>
</template>

<script>
import { languageMixin } from "../mixins/languageMixin.js";

export default {
  mixins: [languageMixin],
  data: function() {
    return {
      text: {
        header: {
          "en-US": "CONTACT",
          "es-ES": "CONTACTO"
        },
        contact_alt: {
          "en-US": "Home made gelato",
          "es-ES": "Helado casero"
        },
        placeholder_name: {
          "en-US": "NAME",
          "es-ES": "NOMBRE"
        },
        label_name: {
          "en-US": "Enter your name",
          "es-ES": "Introduzca su nombre"
        },
        placeholder_email: {
          "en-US": "EMAIL",
          "es-ES": "EMAIL"
        },
        label_email: {
          "en-US": "Enter your email address",
          "es-ES": "Introduzca su dirección de correo"
        },
        placeholder_message: {
          "en-US": "MESSAGE",
          "es-ES": "MENSAJE"
        },
        label_message: {
          "en-US": "Enter your message",
          "es-ES": "Introduzca su mensaje"
        },
        send: {
          "en-US": "SEND MESSAGE",
          "es-ES": "ENVIAR"
        }
      }
    };
  }
};
</script>

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