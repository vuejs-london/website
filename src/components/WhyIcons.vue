<template>
  <div class="c-why-icons">
    <icon-block :src="require('~/assets/img/icons/trophy.svg')">
      30+ Experts
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/podium.svg')">
      14 Talks
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/trophy.svg')">
      Awards Ceremony
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/bolt.svg')">
      Lightning talks
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/content.svg')">
      Vue 3 Content
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/attendees.svg')">
      500+ Attendees
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/shirt.svg')">
      Conference t-shirt
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/breakfast.svg')">
      Free Breakfast + Lunch
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/coffee.svg')">
      Free Snacks + Drinks
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/seating.svg')">
      Premium Seating
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/kirby.svg')">
      Cinema Screen Gaming
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/O2.svg')">
      Iconic Venue
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/party.svg')">
      After party
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/bowling.svg')">
      Free Bowling
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/controller.svg')">
      Arcade + VR games
    </icon-block>
    <icon-block :src="require('~/assets/img/icons/drinks.svg')">
      Free drinks
    </icon-block>
  </div>
</template>

<script>
import IconBlock from '~/components/IconBlock'

export default {
  components: {
    IconBlock,
  },
}
</script>

<style lang="postcss">
.c-why-icons {
  display: grid;
  grid-gap: var(--grid-two);
  grid-template-columns: repeat(auto-fill, minmax(calc(var(--grid-one) * 22), 1fr));
}
</style>
