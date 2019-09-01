<template>
  <main>
    <page-section>
      <heading variant="block">Workshops</heading>
      <location
        name="CCT Venues"
        address="193 Marsh Wall, Isle of Dogs, London E14 9RS"
        image="/img/venue/cct-venues.jpg"
        url="https://www.google.com/maps/place/CCT+Venues-Docklands/@51.5006797,-0.0170056,17z/data=!3m1!4b1!4m5!3m4!1s0x487602bba15e6c91:0x674d16e7ec0ae32c!8m2!3d51.5006797!4d-0.0148169"
        date="05 October 2019"
      />

      <workshops />
    </page-section>
  </main>
</template>

<script>
import Heading from '~/components/Heading'
import Location from '~/components/Location'
import PageSection from '~/components/PageSection'
import Workshops from '~/components/Workshops'

export default {
  head: {
    title: 'Vue.js London 2019 | Workshops',
  },

  components: {
    Heading,
    Location,
    PageSection,
    Workshops,
  },
}
</script>

<style lang="postcss" scoped>
.tickets {
  margin: var(--grid-eight) 0;
}

.p__why {
  margin-top: var(--grid-six);
}

.p__location {
  margin-bottom: var(--grid-six);
  text-align: center;
}
</style>
