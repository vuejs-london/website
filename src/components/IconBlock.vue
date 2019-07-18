<script>
export default {
  functional: true,

  props: {
    src: {
      type: [String, Object],
      required: true,
    },
  },

  render(h, { data, props, children }) {
    const { src } = props
    const baseClaseName = 'c-icon-block'
    const baseClass = {
      [baseClaseName]: true,
      ...data.class,
    }

    return h('div', { ...data, class: baseClass }, [
      h('img', { class: `${baseClaseName}__icon`, attrs: { src } }),
      h('div', { class: `${baseClaseName}__text u-font--smaller` }, children),
    ])
  },
}
</script>

<style lang="postcss">
:root {
  --c-icon-block-shadow: 0 var(--grid-two) var(--grid-four) 0 var(--color-black--shadow-light),
    0 var(--grid-one) var(--grid-two) 0 var(--color-black--shadow-light);
}

.c-icon-block {
  position: relative;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: var(--grid-three) var(--grid-two);
  border: 1px solid var(--color-grey--light);
  border-radius: var(--grid-half);
  box-shadow: var(--c-icon-block-shadow);
  justify-items: center;

  &__icon {
    width: var(--grid-four);
    height: var(--grid-four);
  }

  &__text {
    margin-top: var(--grid-one);
    text-align: center;
  }
}
</style>
