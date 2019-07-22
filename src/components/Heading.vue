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
      type: String, // block | style-only
      default: null,
    },
    color: {
      type: String, // light | bright
      default: null,
    },
  },

  render(h, { children, props, data }) {
    const { level, tag = `h${level}`, variant, color } = props

    const baseClassName = `c-heading`
    const baseClass = {
      [baseClassName]: true,
      [`${baseClassName}--${level}`]: true,
      [`${baseClassName}--${variant}`]: !!variant,
      [`${baseClassName}--color-${color}`]: !!color,
      ...data.class,
    }

    return h(tag, { ...data, class: baseClass }, children)
  },
}
</script>

<style lang="postcss">
.c-heading {
  font-weight: 300;

  &--1 {
    margin-top: var(--grid-five);
    font-size: var(--grid-six);
    line-height: 1.4;
  }

  &--2 {
    margin-top: var(--grid-four);
    font-size: var(--grid-five);
    line-height: 1.4;
  }

  &--3 {
    margin-top: var(--grid-three);
    font-size: var(--grid-four);
    line-height: 1.25;
  }

  &--4 {
    margin-top: var(--grid-two);
    font-size: calc(var(--grid-three) + var(--grid-half));
    line-height: 1.15;
  }

  &--5 {
    margin-top: var(--grid-two);
    font-size: var(--grid-three);
    line-height: 1.1;
  }

  &--6 {
    margin-top: var(--grid-one);
    font-size: calc(var(--grid-two) + var(--grid-half));
    font-weight: 50;
    line-height: 1.05;
  }

  &--style-only {
    margin-top: 0;
  }

  &--block {
    padding: var(--grid-one) var(--grid-two);
    border: 1px solid var(--color-grey);
    margin: var(--grid-six) 0 var(--grid-four) 0;
    text-align: center;
  }

  &--color-light {
    color: var(--color-text--light);
  }

  &--color-bright {
    color: var(--color-green);
  }
}
</style>
