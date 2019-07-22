<template>
  <section class="c-schedule">
    <div class="c-schedule__header-container">
      <button
        v-for="day in days"
        :key="day.slot"
        @click="toggle(day.slot)"
        @keyup.enter="toggle(day.slot)"
        :class="{ 'c-schedule__header--active': day.slot === value }"
        class="c-schedule__header"
      >
        <heading level="5" tag="h2" variant="style-only" color="bright">
          {{ day.title }}
        </heading>
        <heading level="6" tag="h3" variant="style-only" color="light">
          {{ day.date }}
        </heading>
      </button>
    </div>
    <div
      v-for="day in days"
      :key="day.slot"
      v-show="day.slot === value"
      class="c-schedule__content"
    >
      <slot :name="day.slot" />
    </div>
  </section>
</template>

<script>
import Heading from '~/components/Heading.vue'

export default {
  components: {
    Heading,
  },

  props: {
    days: {
      type: Array, // ({ title: string, date: string, slot: string })[]
      default: () => [],
    },
  },

  data() {
    return {
      value: this.days[0].slot,
    }
  },
  methods: {
    toggle(slot) {
      console.log(slot)
      this.value = slot
    },
  },
}
</script>

<style lang="postcss">
.c-schedule {
  margin-top: var(--grid-four);

  &__header-container {
    display: flex;
    padding-bottom: var(--grid-one);
    border-bottom: 1px solid var(--color-grey--light);
  }

  &__header {
    display: flex;
    flex-direction: column;
    padding: var(--grid-one) var(--grid-two);
    border: 0;
    margin-left: var(--grid-one);
    background: transparent;
    cursor: pointer;
    outline-color: var(--color-green);
    text-align: left;

    @media (--phablet-medium) {
      padding: var(--grid-two) var(--grid-four);
    }

    &--active {
      border: 1px solid var(--color-green--dark);
    }
  }
}
</style>
