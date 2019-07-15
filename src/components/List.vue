<script>
export default {
  functional: true,

  props: {
    bullet: {
      type: Boolean,
      default: false,
    },
  },

  render(h, { data, props, children }) {
    const { bullet } = props
    const baseClaseName = 'c-list'
    const baseClass = {
      [baseClaseName]: true,
      [`${baseClaseName}--bullet`]: bullet,
      ...data.class,
    }
    return h('ul', { ...data, class: baseClass, children }, children)
  },
}
</script>

<style lang="postcss">
.c-list {
  padding: 0;
  list-style: none;

  &--bullet {
    margin-top: var(--grid-two);
    margin-bottom: var(--grid-two);
    margin-left: var(--grid-four);
    list-style: outside;
  }
}
</style>
