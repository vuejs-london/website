<template>
  <div class="c-speaker">
    <modal v-if="modalVisible" @close="modalVisible = false">
      <template #body>
        <div class="c-speaker__large">
          <speaker-social v-bind="social" class="c-speaker__social" />
          <div v-if="time" class="c-speaker__time">{{ time }}</div>
          <div class="c-speaker__aside">
            <img v-if="name && title" :src="image" :alt="name" class="c-speaker__image" />
            <div class="c-speaker__heading">
              <heading level="4" tag="div">{{ name }}</heading>
              <heading level="5" tag="div">{{ title }}</heading>
            </div>
          </div>

          <div class="c-speaker__desc">
            <heading level="4" tag="div">{{ topic }}</heading>
            <slot></slot>
          </div>
        </div>
      </template>
    </modal>

    <div @click="showDetails" @keyup.enter="showDetails" class="c-speaker__item">
      <div class="c-speaker__aside">
        <img :src="image" :alt="name" class="c-speaker__image" />
        <div class="c-speaker__heading">
          <heading level="5" tag="div">{{ name }}</heading>
          <heading level="6" tag="div">{{ title || topic }}</heading>
        </div>
        <speaker-social v-bind="social" class="c-speaker__social" />
        <div v-if="time" class="c-speaker__time">{{ time }}</div>
      </div>

      <form-button
        v-if="tickets"
        to="/tickets"
        tap="nuxt-link"
        size="small"
        class="c-speaker__button"
      >
        Buy Tickets
      </form-button>
    </div>
  </div>
</template>

<script>
import FormButton from '~/components/FormButton'
import Heading from '~/components/Heading'
import Modal from '~/components/Modal'
import SpeakerSocial from '~/components/SpeakerSocial'

export default {
  components: {
    FormButton,
    Heading,
    Modal,
    SpeakerSocial,
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
    title: {
      type: String,
      default: null,
    },
    topic: {
      type: String,
      default: null,
    },
    time: {
      type: String,
      default: null,
    },
    social: {
      type: Object,
      default: () => ({}),
    },
    tickets: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      modalVisible: false,
    }
  },

  methods: {
    showDetails() {
      this.modalVisible = true
    },
  },
}
</script>

<style lang="postcss">
:root {
  --c-speaker-item-shadow: 0 var(--grid-two) var(--grid-four) 0 var(--color-black--shadow-light),
    0 var(--grid-one) var(--grid-two) 0 var(--color-black--shadow-light);
  --c-speaker-image-shadow: 0 var(--grid-half) var(--grid-one) 0 var(--color-black--shadow-light);
}

.c-speaker {
  &__item {
    position: relative;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    flex-wrap: wrap;
    padding: var(--grid-four);
    border: 1px solid var(--color-grey--light);
    border-radius: var(--grid-half);
    box-shadow: var(--c-speaker-item-shadow);
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
      border: 1px solid var(--color-green);

      ^^&__social {
        opacity: 1;
        transform: translateY(0);
      }

      ^^&__time {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  &__large {
    display: flex;
    flex-wrap: wrap;

    ^&__social {
      opacity: 1;
      transform: translateY(0);
    }

    ^&__time {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__aside {
    display: flex;
    box-sizing: border-box;
    flex: 1 0 100%;
    flex-wrap: wrap;
    align-items: center;

    @media (--mobile-large) {
      flex: 1 1 auto;
      flex-wrap: nowrap;
    }
  }

  &__desc {
    padding: var(--grid-four) 0 var(--grid-two);
  }

  &__image {
    width: calc(var(--grid-one) * 13);
    height: calc(var(--grid-one) * 13);
    flex: 0 0 auto;
    border: 2px solid var(--color-green);
    border-radius: var(--grid-half);
    box-shadow: var(--c-speaker-item-shadow);
  }

  &__heading {
    flex: 1 0 100%;
    padding-top: var(--grid-three);

    @media (--mobile-large) {
      flex: 1 1 auto;
      padding-top: 0;
      padding-left: var(--grid-three);
    }
  }

  &__social {
    position: absolute;
    top: var(--grid-two);
    right: var(--grid-two);
    opacity: 0;
    transform: translateY(-100%);
    transition: 0.3s opacity ease, 0.3s transform ease;
  }

  &__time {
    position: absolute;
    right: var(--grid-two);
    bottom: var(--grid-two);
    padding: 0 var(--grid-one);
    border: 1px solid var(--color-green--dark);
    background: var(--color-green);
    color: var(--color-white);
    opacity: 0;
    transform: translateY(100%);
    transition: 0.3s opacity ease, 0.3s transform ease;
  }

  &__button {
    flex: 0 1 min-content;
    align-self: flex-end;
    padding: var(--grid-one) var(--grid-two);
    margin-top: var(--grid-one);
    margin-bottom: 0;
    margin-left: auto;
    justify-self: flex-end;
  }
}
</style>
