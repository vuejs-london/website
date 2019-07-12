<template>
  <div class="c-ticket">
    <div class="c-ticket__image-container">
      <img :src="image" :alt="name" class="c-ticket__image" />
    </div>
    <heading level="5" tag="span" variant="style-only" class="c-ticket__heading">{{
      name
    }}</heading>

    <form-button
      :href="href"
      :disabled="!href"
      rel="noopener"
      target="_blank"
      tag="a"
      size="small"
      class="c-ticket__button"
    >
      {{ !href ? 'Sold out' : 'Buy' }}
    </form-button>
  </div>
</template>

<script>
import FormButton from '~/components/FormButton'
import Heading from '~/components/Heading'

export default {
  components: {
    FormButton,
    Heading,
  },

  props: {
    name: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="postcss">
:root {
  --c-ticket-item-shadow: 0 var(--grid-two) var(--grid-four) 0 var(--color-black--shadow-light),
    0 var(--grid-one) var(--grid-two) 0 var(--color-black--shadow-light);
}

.c-ticket {
  position: relative;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  flex-wrap: wrap;
  flex-wrap: nowrap;
  align-items: center;
  padding: var(--grid-two);
  border: 1px solid var(--color-grey--light);
  margin: var(--grid-three) 0;
  border-radius: var(--grid-half);
  box-shadow: var(--c-ticket-item-shadow);

  &__image-container {
    display: none;
    flex: 0 1 var(--grid-six);
    align-items: center;

    @media (--tablet-small) {
      display: flex;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    border: 2px solid var(--color-green);
    border-radius: var(--grid-half);
    box-shadow: var(--c-ticket-item-shadow);
    object-fit: cover;
  }

  &__heading {
    box-sizing: border-box;
    flex: 1 1 auto;
    padding-top: var(--grid-four);

    @media (--tablet-small) {
      padding-top: 0;
      padding-right: var(--grid-ten);
      padding-left: var(--grid-three);
    }
  }

  &__button {
    position: absolute;
    top: 0;
    right: 0;
    min-width: calc(var(--grid-one) * 9);
    align-self: flex-end;
    padding: var(--grid-one) var(--grid-two);
    margin-top: 0;
    margin-bottom: 0;
    margin-left: auto;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    justify-self: flex-end;
  }
}
</style>
