<script>
export default {
  functional: true,

  render(h, { data, children }) {
    const baseClassName = 'c-page-section'
    const baseClass = { [baseClassName]: true, ...data.class }

    return h('section', { ...data, class: baseClass }, children)
  },
}
</script>

<style lang="postcss">
.c-page-section {
  width: 100%;
  max-width: var(--page-width);
  box-sizing: border-box;
  padding: 0 var(--grid-two) var(--grid-six);
  margin: 0 auto;
}
</style>
