<template>
  <article class="c-location">
    <div class="c-location__image-container">
      <img :src="image" :alt="name" class="c-location__image" />
    </div>
    <div class="c-location__heading">
      <heading level="3" tag="div" variant="style-only">{{ name }}</heading>
      <heading level="5" tag="div" variant="style-only">{{ address }}</heading>
      <heading level="6" tag="div" variant="style-only" class="c-location__date">{{
        date
      }}</heading>
    </div>

    <form-button
      :href="url"
      rel="noopener"
      target="_blank"
      tag="a"
      size="small"
      class="c-location__button"
      data-css
    >
      View Map
    </form-button>
  </article>
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
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss">
:root {
  --c-location-item-shadow: 0 var(--grid-two) var(--grid-four) 0 var(--color-black--shadow-light),
    0 var(--grid-one) var(--grid-two) 0 var(--color-black--shadow-light);
}

.c-location {
  position: relative;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  flex-wrap: wrap;
  border: 1px solid var(--color-grey--light);
  margin-bottom: var(--grid-six);
  border-radius: var(--grid-half);
  box-shadow: var(--c-location-item-shadow);

  @media (--tablet-small) {
    padding: 0;
  }

  &__image-container {
    display: none;
    flex: 1 1 30%;
    border-bottom-left-radius: var(--grid-half);
    border-top-left-radius: var(--grid-half);
    box-shadow: var(--c-location-item-shadow);
    object-fit: cover;

    @media (--tablet-small) {
      display: block;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__heading {
    display: flex;
    box-sizing: border-box;
    flex: 1 1 60%;
    flex-direction: column;
    justify-content: center;
    padding: var(--grid-three);
    padding-top: var(--grid-six);

    @media (--tablet-small) {
      padding: var(--grid-three) var(--grid-six);
    }
  }

  &__date {
    padding-top: var(--grid-two);
    color: var(--color-text--light);
    text-transform: uppercase;
  }

  &__button[data-css] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: calc(var(--grid-one) * 9);
    flex: 0 1 min-content;
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
