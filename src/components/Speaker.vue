<template>
  <div class="c-speaker">
    <modal v-if="modalVisible" @close="modalVisible = false">
      <template #body>
        <div class="c-speaker__large">
          <speaker-social v-bind="social" class="c-speaker__social" />
          <div v-if="time" class="c-speaker__time">{{ time }}</div>
          <div class="c-speaker__aside">
            <div class="c-speaker__images">
              <img
                v-for="(src, index) in images"
                :src="src"
                :alt="names[index]"
                class="c-speaker__image"
              />
            </div>
            <div class="c-speaker__heading">
              <heading level="4" tag="div" variant="style-only">{{ namesCombined }}</heading>
              <heading level="5" tag="div" variant="style-only">{{ title }}</heading>
            </div>
          </div>

          <div class="c-speaker__desc">
            <heading level="4" tag="div">{{ topic }}</heading>
            <slot></slot>
          </div>

          <form-button
            v-if="tickets"
            :href="tickets"
            tag="a"
            size="small"
            class="c-speaker__button"
          >
            Buy Tickets
          </form-button>

          <form-button
            v-if="signup"
            :href="signup"
            rel="noopener"
            target="_blank"
            tag="a"
            size="small"
            class="c-speaker__button"
          >
            Sign up
          </form-button>
        </div>
      </template>
    </modal>

    <article
      @click="!noAction && showDetails()"
      @keyup.enter="!noAction && showDetails()"
      :class="{ 'c-speaker__item--disabled': noAction }"
      tabindex="0"
      class="c-speaker__item"
    >
      <div class="c-speaker__aside">
        <div class="c-speaker__images">
          <img
            v-for="(src, index) in images"
            :src="src"
            :alt="names[index]"
            class="c-speaker__image"
          />
        </div>
        <div class="c-speaker__heading">
          <heading level="5" tag="div" variant="style-only">{{ topic }}</heading>
          <heading level="6" tag="div" variant="style-only" color="light">{{
            namesCombined
          }}</heading>
        </div>
        <speaker-social v-bind="social" class="c-speaker__social" />
        <div v-if="time" class="c-speaker__time">{{ time }}</div>
      </div>

      <form-button
        v-if="signup"
        :href="signup"
        rel="noopener"
        target="_blank"
        tag="a"
        size="small"
        class="c-speaker__button"
      >
        Sign up
      </form-button>
    </article>
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
      type: [String, Array],
      default: null,
    },
    image: {
      type: [String, Array],
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
    signup: {
      type: String,
      default: null,
    },
    noAction: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      modalVisible: false,
    }
  },

  computed: {
    images() {
      return Array.isArray(this.image) ? this.image : [this.image]
    },
    names() {
      return Array.isArray(this.name) ? this.name : [this.name]
    },

    namesCombined() {
      return this.names.join(' & ')
    },
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
    outline-color: var(--color-green);

    &--disabled {
      cursor: default;
    }

    &:hover:not(&--disabled),
    &:active:not(&--disabled),
    &:focus:not(&--disabled) {
      border: 1px solid var(--color-green);
    }

    &:hover,
    &:active,
    &:focus {
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

  &__images {
    display: grid;
    width: calc(var(--grid-one) * 13);
    height: calc(var(--grid-one) * 13);
    flex: 0 0 auto;
    grid-gap: var(--grid-half);
    grid-template-columns: 1fr max-content;
    grid-template-rows: 1fr max-content;
  }

  &__image {
    width: var(--grid-eight);
    height: var(--grid-eight);
    box-sizing: border-box;
    border: 2px solid var(--color-green);
    border-radius: var(--grid-half);
    box-shadow: var(--c-speaker-item-shadow);
  }

  &__image:only-child {
    width: 100%;
    height: 100%;
  }

  &__image:not(:only-child):last-child {
    margin-top: calc(-1 * var(--grid-four));
    margin-left: calc(-1 * var(--grid-five));
    grid-column: 2;
    grid-row: 2;
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
