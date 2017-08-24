<template>
  <transition name="c-modal">
    <div class="c-modal__mask">
      <div @click.self="$emit('close')" @keyup.esc="$emit('close')" class="c-modal__wrapper">
        <div class="c-modal__container">
          <div class="c-modal__header">
            <slot name="header"></slot>
          </div>
          <div class="c-modal__body">
            <slot name="body"></slot>
          </div>
          <div class="c-modal__footer">
            <slot name="footer"></slot>
          </div>
        </div>
        <form-button @click="$emit('close')" class="c-modal__button">Close</form-button>
      </div>
    </div>
  </transition>
</template>

<script>
import FormButton from '~/components/FormButton'

export default {
  components: {
    FormButton,
  },

  mounted() {
    document.body.style = 'overflow: hidden'
  },

  beforeDestroy() {
    document.body.style = ''
  },
}
</script>

<style lang="postcss">
:root {
  --c-modal-shadow: 0 var(--grid-two) var(--grid-three) var(--color-black--shadow-light),
    0 var(--grid-one) var(--grid-two) var(--color-black--shadow-light);
}
.c-modal {
  &__mask {
    position: fixed;
    z-index: var(--z-index-modal);
    top: 0;
    left: 0;
    display: table;
    width: 100%;
    height: 100%;
    background-color: var(--color-white);
    transition: opacity 0.3s ease;

    @media (--phablet-large) {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    position: relative;
    overflow: auto;
    width: 100%;
    max-width: calc(var(--grid-ten) * 8);
    max-height: 80vh;
    box-sizing: border-box;
    padding: var(--grid-two);
    background-color: var(--color-white);
    border-radius: var(--grid-half);
    transition: all 0.3s ease;

    @media (--phablet-large) {
      padding: var(--grid-five);
      border: 1px solid var(--color-grey);
      margin: var(--grid-five) auto 0;
      box-shadow: var(--c-modal-shadow);
    }
  }

  &__footer {
    text-align: right;
  }

  &__button {
    position: relative;

    width: calc(100% - var(--grid-ten));
    margin: 0 auto;
    margin-top: var(--grid-four);

    @media (--phablet-large) {
      width: 100%;
      max-width: calc(var(--grid-ten) * 8);
    }
  }

  &-enter {
    opacity: 0;
  }

  &-leave-active {
    opacity: 0;
  }

  &-enter,
  &-leave-active {
    ^&__container {
      transform: scale(1.1);
    }
  }

  &-enter &-container,
  &-leave-active &-container &__button {
    box-shadow: var(--c-modal-shadow);
  }
}
</style>
