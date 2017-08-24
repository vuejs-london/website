<template>
  <main>
    <page-section>
      <heading variant="block">Our 2018 Sponsors</heading>

      <sponsor-group columns="1" size="huge">
        <template #title>
          Platinum
        </template>
        <sponsor href="https://samknows.com" image="/img/sponsors/samknows.svg" title="SamKnows" />
      </sponsor-group>

      <sponsor-group columns="1" size="large">
        <template #title>
          Gold
        </template>
        <sponsor href="https://progress.com" image="/img/sponsors/progress.png" title="Progress" />
        <sponsor href="https://algolia.com" image="/img/sponsors/algolia.png" title="Algolia" />
      </sponsor-group>

      <sponsor-group columns="1" size="medium">
        <template #title>
          Silver
        </template>
        <sponsor href="https://gitlab.com" image="/img/sponsors/gitlab.png" title="Gitlab" />
      </sponsor-group>

      <sponsor-group columns="2" size="regular">
        <template #title>
          Bronze
        </template>
        <sponsor
          href="https://and.digital"
          image="/img/sponsors/anddigital.png"
          title="AND Digital"
        />
        <sponsor href="https://cmty.app/" image="/img/sponsors/cmty.png" title="CMTY" />
        <sponsor
          href="https://vueschool.io/"
          image="/img/sponsors/vue-school.png"
          title="Vue School"
        />
      </sponsor-group>

      <sponsor-group columns="2" size="regular">
        <template #title>
          Diversity
        </template>
        <sponsor
          href="https://www.prodpad.com/about-us/jobs/"
          image="/img/sponsors/prodpad.png"
          title="ProdPad"
        />
        <sponsor
          href="https://vuevixens.org"
          image="/img/sponsors/vuevixens.png"
          title="Vue Vixens"
        />
        <sponsor
          href="https://www.netlify.com/"
          image="/img/sponsors/netlify.png"
          title="Netlify"
        />
        <sponsor
          href="https://twitter.com/azureadvocates?lang=en"
          image="/img/sponsors/microsoft.png"
          title="Microsoft Azure Advocates"
        />
      </sponsor-group>

      <sponsor-group columns="2">
        <template #title>
          Community
        </template>
        <sponsor
          href="https://www.vuemastery.com/?utm_campaign=conference&utm_source=vuelondon"
          image="/img/sponsors/vuemastery.svg"
          title="VueMastery"
        />
        <sponsor href="https://vuejobs.com" image="/img/sponsors/vue_jobs.png" title="Vue Jobs" />
        <sponsor
          href="http://www.shopware.co.uk/"
          image="/img/sponsors/shopware.png"
          title="Shopware"
        />
        <sponsor href="https://olkb.com/" image="/img/sponsors/olkb.png" title="OLKB" />
      </sponsor-group>

      <sponsor-group columns="2">
        <template #title>
          Gift &amp; Prize Sponsors
        </template>
        <sponsor
          href="https://jetbrains.com/"
          image="/img/sponsors/jetbrains.svg"
          title="JetBrains"
        />
        <sponsor
          href="https://creative-tim.com"
          image="/img/sponsors/creative-tim.png"
          title="Creative Tim"
        />
        <sponsor
          href="https://mule.to/VuejsLondon"
          image="/img/sponsors/stickermule.svg"
          title="Sticker Mule"
        />
        <sponsor href="https://manning.com" image="/img/sponsors/manning.png" title="Manning" />
      </sponsor-group>

      <form-button tag="a" href="mailto:sponsors@vuejs.london">Become a sponsor</form-button>
    </page-section>
  </main>
</template>

<script>
import FormButton from '~/components/FormButton'
import Heading from '~/components/Heading'
import PageSection from '~/components/PageSection'
import Sponsor from '~/components/Sponsor'
import SponsorGroup from '~/components/SponsorGroup'

export default {
  layout: 'previous/2018',

  components: {
    FormButton,
    Heading,
    PageSection,
    Sponsor,
    SponsorGroup,
  },

  head: {
    title: 'Vue.js London 2018 | Sponsors',
  },
}
</script>
