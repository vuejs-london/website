<template>
  <main>
    <hero />
    <page-section>
      <heading variant="block" level="1">COVID Update</heading>
      <heading variant="block" level="2">Future of Vue.js London</heading>
      <paragraph>
        As many might know, the Vue.js London conference is mostly organised and financed by one
        individual, Blake Newman. He has personally invested much financial support to the
        conference over the last two years.
      </paragraph>
      <paragraph>
        Over last two years the event has been a great success, and something i'm very proud to have
        created. It has been an experience of a lifetime, unfortunately the financial and
        operational burden of running the conference is of colossal significance, and with the
        current pandemic, the uncertainty that surrounds the economy, and the social impact that it
        brings puts the risk at an uncomfortable level.
      </paragraph>
      <paragraph>
        With the higher risks associated; I have decided to revisit how to manage and host such a
        great event. This means that the 2020 event will be cancelled, and I will suspend trading
        operations of the company. Currently there is no confirmed plans for 2021, as we are still
        unable to predict what the impact of COVID will entail this time next year - i'm however
        keeping my options open and have opportunities in the future to restructure the event to
        make it more successful for everyone.
      </paragraph>
      <heading variant="block" level="2">How much Impact does COVID have?</heading>
      <paragraph>
        The main problem is that we can't predict the economic and social impact this virus may have
        on the UK. We also do not know how long the pandemic may last and how other countries will
        be affected. We have such a great and diverse group of attendees all over the world.
      </paragraph>
      <paragraph>
        Even if the world recovers quickly from this unprecedented threat, the organisational impact
        will be significant, costs will likely go up and running a conference is not cheap; the
        event in total is over 120,000 GBP a year to run. Finally, we have no idea how much impact
        social distancing measures will have on the conference. We would likely need to find a very
        large venue to observe likely social distancing rules for large events such as ourselves.
        This won't be cheap and easy to find, and also additional equipment and procedures will
        likely be in place which just makes the event all the more difficult to run.
      </paragraph>
      <heading variant="block" level="2">Can I get a refund?</heading>
      <paragraph>
        Yes; we have already issued many refunds. Refunds for the 2020 event will be complete by end
        of September, in there full amount.
      </paragraph>
      <paragraph> If you don't receive a refund by 7th October 2020 please contact us. </paragraph>
      <heading variant="block" level="2">What about making it online?</heading>
      <paragraph>
        Online conferences are an amazing idea; however, Vue.js London prides itself on being more
        than just a few talks that people watch. There are great resources such as
        <anchor href="http://vueschool.io">Vue School</anchor> and
        <anchor href="https://www.vuemastery.com/">Vue Mastery</anchor> that provide great value.
        Vue.js London inspires to be one of the most engaging conference experience, where people
        connect, learn, network and share. Part of our mantra is Code Create Communicate, we all
        code and create amazing stuff whether personal or work-related, and we want to be the
        platform that allows you to communicate. We don't feel that hosting as an online conference
        upholds the same value; it would also be a technical nightmare to ensure it did. So we have
        made the difficult decision to postpone until a later stage so that we can ensure that all
        attendees get the great experience we want to fulfil.
      </paragraph>
      <heading variant="block" level="2">What about the meetup?</heading>
      <paragraph>
        I want to focus on the meetup events primarily in 2021; make them much more often and bring
        the community back together. Running the meetup successfully will be a great indicator to
        know when we return to normal. The next couple of months i'm going to continue taking a
        break; and then in December I will look to plan how to bring the meetup events back to life.
        Likely starting with online events and transition back to local meetups when the pandamic
        situation eases.
      </paragraph>
    </page-section>
  </main>
</template>

<script>
  import Anchor from '~/components/Anchor'
  import Heading from '~/components/Heading'
  import Hero from '~/components/Hero'
  import PageSection from '~/components/PageSection'
  import Paragraph from '~/components/Paragraph'

  export default {
    components: {
      Hero,
      PageSection,
      Heading,
      Paragraph,
      Anchor,
    },

    head: {
      title: 'Vue.js London 2019',
    },
  }
</script>

<style lang="postcss" scoped>
  .p__icons {
    margin-top: var(--grid-six);
  }

  .p-sponsor__level5 {
    max-width: 80%;

    @media (--tablet-small) {
      max-width: 70%;
    }
  }

  .p__osawards {
    display: grid;
    grid-gap: var(--grid-two) var(--grid-four);

    @media (--tablet-small) {
      align-items: center;
      grid-template-columns: 40% 1fr;
    }

    @media (--tablet-large) {
      align-items: center;
      grid-template-columns: 45% 1fr;
    }
  }

  .p__osawards-image {
    margin: 0;
  }
</style>
