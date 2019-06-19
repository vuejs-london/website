<template>
  <button
    :class="{ 'c-burger--active': active }"
    role="navigation"
    aria-label="Open the menu"
    class="c-burger"
  >
    <div class="c-burger__bar"></div>
    <div class="c-burger__bar"></div>
    <div class="c-burger__bar"></div>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss">
.c-burger {
  display: block;
  width: 40px;
  height: 30px;
  box-sizing: border-box;
  padding: 8px 8px;
  border: 1px solid #ccc;
  background: none;
  border-radius: 5px;

  &__bar {
    position: relative;
    height: 2px;
    margin-bottom: 3px;
    background: #ccc;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  &--active {
    ^&__bar:nth-child(1),
    ^&__bar:nth-child(3) {
      opacity: 0;
    }

    ^&__bar:nth-child(2) {
      transform: rotate(45deg) scale(0.7, 0.7);
    }

    ^&__bar:nth-child(2)::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      background: #ccc;
      content: ' ';
      transform: rotate(90deg);
    }
  }
}
</style>
