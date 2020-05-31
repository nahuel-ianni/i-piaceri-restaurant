<template>
  <section class="flex">
    <img src="@/assets/img/img-contact.jpg" :alt="text.contact_alt[language]" />

    <form @submit.prevent="onSubmit">
      <h2>{{ text.header[language] }}</h2>

      <label class="hidden" for="name">{{ text.label_name[language] }}</label>
      <input
        id="name"
        type="text"
        v-model="name"
        :placeholder="text.placeholder_name[language]"
        required
      />

      <label class="hidden" for="email">{{ text.label_email[language] }}</label>
      <input
        id="email"
        type="email"
        v-model="email"
        :placeholder="text.placeholder_email[language]"
        required
      />

      <label class="hidden" for="message">{{ text.label_message[language] }}</label>
      <textarea
        id="message"
        v-model="message"
        :placeholder="text.placeholder_message[language]"
        required
        rows="5"
      ></textarea>

      <div id="notification" class="confirmation">{{ text.confirmation[language] }}</div>

      <input class="button" type="submit" :value="text.send[language]" />
    </form>
  </section>
</template>

<script>
import { languageMixin } from "../mixins/languageMixin.js";

export default {
  created() {
    this.clearInput();
  },
  mixins: [languageMixin],
  data: function() {
    return {
      email: String,
      message: String,
      name: String,
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
        },
        confirmation: {
          "en-US": "Thank you for your message.",
          "es-ES": "Gracias por su mensaje."
        }
      }
    };
  },
  methods: {
    clearInput: function() {
      this.email = "";
      this.message = "";
      this.name = "";
    },
    onSubmit: function() {
      // I'm amazed someone reached this point, looking for the form code.
      // In production, this method is calling an Azure Function that stores the messages on a queue for later processing.
      // The original code on this method was completely removed to ensure client privacy.

      this.clearInput();
      let element = document.querySelector("#notification");
      element.style.bottom = "12.5%";
      setTimeout(() => {
        element.style.bottom = "-50%";
      }, 7500);
    }
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
  border-radius: 0px;
  color: var(--high-contrast-color);
  font: inherit;
  margin-bottom: 1rem;
  padding: 1rem;
  -webkit-border-radius: 0px;
}

input[type="submit"] {
  background-color: transparent;
  margin-left: auto;
}

section {
  border-top: 0.05rem solid var(--accent-color-6);
  height: var(--default-height);
}

#notification {
  background-color: var(--accent-color-3);
  bottom: -50%;
  color: var(--accent-color-8);
  padding: 1rem;
  position: fixed;
  text-align: center;
  transition: 0.25s ease-in-out;
  width: 64.4%;
}

@media (max-width: 670px), (max-height: 800px) {
  form {
    width: 55%;
  }

  section {
    height: 75vh;
  }
}
</style>