<template>
  <article
    :class="{ 'c-schedule-event--has-description': !!$slots.default }"
    @click="toggle()"
    @keyup.enter="toggle()"
    class="c-schedule-event"
    tabindex="0"
  >
    <div class="c-schedule-event__image-container">
      <img
        :class="{ 'c-schedule-event__image--icon': !!icon }"
        :src="image || icon"
        :alt="title"
        class="c-schedule-event__image"
      />
      <speaker-social v-bind="social" />
    </div>
    <div class="c-schedule-event__content-container">
      <div class="c-schedule-event__content">
        <heading class="c-schedule-event__title" level="5" tag="h3" variant="style-only">
          {{ title }}
        </heading>
        <heading
          class="c-schedule-event__subtitle"
          level="6"
          tag="h4"
          variant="style-only"
          color="light"
        >
          {{ subtitle }}
        </heading>
      </div>
      <div class="c-schedule-event__info">
        <div class="c-schedule-event__time">
          {{ time }}
        </div>
        <div v-if="duration" class="c-schedule-event__duration">
          {{ duration }}
        </div>
      </div>
      <div class="c-schedule-event__additional">
        <heading v-if="talk" class="c-schedule-event__talk" level="4" tag="h2" color="bright">
          {{ talk }}
        </heading>
        <div v-if="$slots.default" v-show="isOpen" class="c-schedule-event__description">
          <slot />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Heading from '~/components/Heading.vue'
import SpeakerSocial from '~/components/SpeakerSocial.vue'

export default {
  components: {
    Heading,
    SpeakerSocial,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    talk: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    time: {
      type: String,
      default: null,
    },
    duration: {
      type: String,
      default: null,
    },
    social: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
<style lang="postcss">
:root {
  --c-schedule-event-image-shadow: 0 var(--grid-half) var(--grid-one) 0
    var(--color-black--shadow-light);
}

.c-schedule-event {
  display: grid;
  padding: var(--grid-two);
  outline-color: var(--color-grey);
  outline-width: 1px;

  &:nth-child(2n) {
    background-color: var(--color-white--offset);
  }

  &--has-description {
    cursor: pointer;
    outline-color: var(--color-green);
  }

  &__image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__image {
    display: none;
    width: var(--grid-ten);
    height: var(--grid-ten);
    box-sizing: border-box;

    &--icon {
      padding: var(--grid-two);
    }

    &:not(&--icon) {
      border: 2px solid var(--color-green);
      border-radius: var(--grid-half);
      box-shadow: var(--c-schedule-event-image-shadow);
    }
  }

  &__content-container {
    display: grid;
    min-height: var(--grid-ten);
    box-sizing: border-box;
    padding-top: var(--grid-two);
    grid-gap: var(--grid-two);
    grid-template-columns: 1fr max-content;
  }

  &__content {
    grid-column: 1 / span 2;
    grid-row: 2;
  }

  &__info {
    grid-column: 2;
    text-align: right;
  }

  &__additional {
    grid-column: 1 / span 2;
  }

  &__time {
    padding: 0 var(--grid-one);
    background-color: var(--color-green);
    color: var(--color-white);
  }

  &__duration {
    color: var(--color-text--light);
  }

  &__description {
    margin-top: var(--grid-two);
  }

  @media (--phablet-small) {
    grid-gap: var(--grid-two);
    grid-template-columns: var(--grid-ten) 1fr;

    &__image {
      display: block;
    }

    &__content {
      grid-column: 1;
      grid-row: 1;
    }
  }
}
</style>
