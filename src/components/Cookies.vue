<template>
  <div v-show="!completed" class="c-cookies">
    <div class="c-cookies__container">
      <p class="c-cookies__message">
        We use cookies to provide you with better user experience and for statistical purposes. You
        can block cookies by adjusting settings on your browser. If you do not block cookies, you
        give your consent to use them and store them in the memory of your device. For more
        information see our
        <anchor to="/privacy-policy">Privacy Policy</anchor>.
      </p>
      <form-button @click="accept">Accept</form-button>
      <form-button @click="completed = true" variant="dark">
        Close
      </form-button>
    </div>
  </div>
</template>

<script>
import Anchor from '~/components/Anchor.vue'
import FormButton from '~/components/FormButton.vue'

export default {
  components: {
    Anchor,
    FormButton,
  },

  data() {
    return {
      completed: true,
    }
  },

  created() {
    if (process.BROWSER_BUILD) {
      this.completed = !!this.$cookie.get('cookies-accepted')
    }
  },

  methods: {
    accept() {
      this.$cookie.set('cookies-accepted', true)
      this.completed = true
    },
  },
}
</script>

<style lang="postcss">
.c-cookies {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--grid-one) 0;
  background: var(--color-white);

  &__container {
    width: var(--page-width);
    margin: 0 auto;
  }

  &__message {
    display: inline-block;
    padding: 0 var(--grid-one);
  }
}
</style>
