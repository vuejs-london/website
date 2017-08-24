<script>
export default {
  functional: true,

  props: {
    level: {
      type: [Number, String], // 1, 2...
      default: 1,
    },
    tag: {
      type: String, // h1, h2...
      default: undefined,
    },
    variant: {
      type: String, // block
      default: null,
    },
  },

  render(h, { children, props, data }) {
    const { level, tag = `h${level}`, variant } = props

    const baseClassName = `c-heading`
    const baseClass = {
      [baseClassName]: true,
      [`${baseClassName}--${level}`]: true,
      [`${baseClassName}--${variant}`]: !!variant,
      ...data.class,
    }

    return h(tag, { ...data, class: baseClass }, children)
  },
}
</script>

<style lang="postcss">
.c-heading {
  font-weight: 300;
  line-height: 1.5;

  &--1 {
    font-size: var(--grid-six);
  }

  &--2 {
    font-size: var(--grid-five);
  }

  &--3 {
    font-size: var(--grid-four);
  }

  &--4 {
    font-size: calc(var(--grid-three) + var(--grid-half));
  }

  &--5 {
    font-size: var(--grid-three);
  }

  &--6 {
    font-size: calc(var(--grid-two) + var(--grid-half));
    font-weight: 50;
  }

  &--block {
    padding: var(--grid-one) var(--grid-two);
    border: 1px solid var(--color-grey);
    margin: var(--grid-six) 0 var(--grid-four) 0;
    text-align: center;
  }
}
</style>
