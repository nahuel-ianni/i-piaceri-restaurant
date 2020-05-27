import { eventBus } from "../main";

export const languageMixin = {
  data: function() {
    return {
      language: "en-US"
    }
  },
  created() {
    eventBus.$on("languageChanged", newLanguage => {
      this.language = newLanguage;
    });
  }
}