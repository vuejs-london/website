<script>
export default {
  functional: true,

  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: [String, Object],
      default: null,
    },
    variant: {
      type: String, // 'bold'
      default: null,
    },
  },

  render(h, { children, props, data }) {
    const { href, to, variant } = props
    const tag = href !== null ? 'a' : 'nuxt-link'

    const baseClassName = 'c-anchor'
    const baseClass = {
      ...data.class,
      [baseClassName]: true,
      [`${baseClassName}--${variant}`]: !!variant,
    }

    const tranferProps = {
      ...(to !== null ? { to } : {}),
    }

    data.attrs = {
      ...data.attrs,
      ...(href !== null ? { href } : {}),
    }

    return h(tag, { ...data, class: baseClass, props: tranferProps }, children)
  },
}
</script>

<style lang="postcss">
.c-anchor {
  outline: none;
  text-decoration: none;

  &,
  &:visited {
    color: var(--color-text);
  }

  &:active,
  &:hover {
    color: var(--color-text);
  }

  &--bold {
    font-weight: 400;

    &,
    &:visited {
      color: var(--color-green);
    }

    &:hover,
    &:active {
      color: var(--color-green--dark);
    }
  }
}
</style>
