<template>
  <main>
    <page-section>
      <heading variant="block">Why Vue.js London</heading>
      <why-icons />

      <heading level="2" variant="block">Discover</heading>
      <paragraph>
        Learn about technologies and patterns that are at the forefront of the industry by leading
        experts from all aspects of the web community!
      </paragraph>
      <paragraph>
        Version 3 of Vue is under rapid development, so Vue.js London is the perfect conference to
        attend to ensure you are following the latest changes in the community. Vue.js London 2019
        topics are focused on advancing your knowledge in core areas; ensuring you are ready to use
        Vue 3 and prepared and aware of changes to expect in the surrounding community.
      </paragraph>

      <heading level="2" variant="block">Who attended in 2018?</heading>
      <paragraph>
        Last year we had a vast amount of companies attended:
        <span class="u-font--bold">SamKnows</span>, <span class="u-font--bold">Progress</span>,
        <span class="u-font--bold">Algolia</span>, <span class="u-font--bold">Netlify</span>,
        <span class="u-font--bold">Gitlab</span>, <span class="u-font--bold">Apple</span>,
        <span class="u-font--bold">Microsoft</span>, <span class="u-font--bold">Facebook</span>,
        <span class="u-font--bold">Ubisoft</span>, <span class="u-font--bold">Telegraph</span>,
        <span class="u-font--bold">Teamwork</span>, <span class="u-font--bold">Vodafone</span>,
        <span class="u-font--bold">AND Digital</span>, <span class="u-font--bold">YLD</span>,
        <span class="u-font--bold">JD Sports</span>, <span class="u-font--bold">UK TV</span>,
        <span class="u-font--bold">VSWare</span>, <span class="u-font--bold">The Hut Group</span>,
        <span class="u-font--bold">ProdPad</span>, <span class="u-font--bold">Fly Frontier</span>,
        <span class="u-font--bold">Jet2</span>, <span class="u-font--bold">Experian</span>,
        <span class="u-font--bold">Money Supermarket</span>,
        <span class="u-font--bold">Wikimedia</span>,
        <span class="u-font--bold">NantHealth</span> and loads more enterprises, small companies and
        startups.
      </paragraph>
      <paragraph>
        Not only that we had a <span class="u-font--bold">huge international presence</span> -
        including people arriving from <span class="u-font--bold">17,000km away!</span>.
      </paragraph>

      <heading level="2" variant="block">First Time</heading>
      <paragraph>
        Don't worry we know it can be daunting - we have got this covered. Last year we opened a
        <span class="u-font--bold">Conference Buddy booth</span> to allow you to connect with others
        similar situation. We will be putting even more effort this year to make sure everyones
        experience is top notch!
      </paragraph>

      <heading level="2" variant="block">Network</heading>
      <paragraph>
        Talks are not everything to a conference; networking is essential in many aspects. It gives
        you many opportunities to <span class="u-font--bold">progress in your career</span>,
        <span class="u-font--bold">discuss,</span> <span class="u-font--bold">learn</span> and
        <span class="u-font--bold">make friends</span>. Vue.js London has the perfect setting to
        network with hundreds of other developers and professionals - form incredible long-lasting
        connections.
      </paragraph>

      <heading level="2" variant="block">Expert Advice</heading>
      <paragraph>
        Join the <span class="u-font--bold">Advice Lounge</span> (Experts to be announced) to meet
        amazing experts that are available to help you at any point. If you have a troubling issue
        that you need help solving - they are available to help and can point you in the right
        direction. Speakers are also available in this area, ask them further questions on the talks
        subject matter or create a new discussion. We ensure you have the possibility to learn more
        from others that have had years of experience in the domain.
      </paragraph>

      <heading level="2" variant="block">Convince the boss?</heading>
      <paragraph>
        Everyone deserves the opportunity to <span class="u-font--bold">learn and improve</span>;
        our advice is to look at our website and ensure there is
        <span class="u-font--bold">plenty of value for you</span> - we are sure there is. If you
        feel this is the case, note some points as to why you feel this conference is necessary to
        attend, have a discussion with your line manager (or whoever can help you).
      </paragraph>
      <paragraph>
        It may not always be possible for the company to provide you with a ticket - but there are
        other ways your company may be able to help you. Maybe they can provide you 'paid time' to
        attend the conference - or they can help subsidise costs. It doesn't hurt to compromise and
        discuss.
      </paragraph>
      <paragraph>
        If you feel there is anything we can do to help you attend send us a message -
        <a href="mailto:team@vuejs.london" target="_top"
          ><span class="u-font--bold">team@vuejs.london</span></a
        >. We would love to have you attend!
      </paragraph>
    </page-section>
  </main>
</template>

<script>
import Heading from '~/components/Heading.vue'
import PageSection from '~/components/PageSection.vue'
import Paragraph from '~/components/Paragraph.vue'
import WhyIcons from '~/components/WhyIcons.vue'

export default {
  head: {
    title: 'Vue.js London 2018 | Convince me',
  },

  components: {
    Heading,
    PageSection,
    Paragraph,
    WhyIcons,
  },
}
</script>
