<script>
export default {
  functional: true,

  props: {
    size: {
      type: String, // small | regular | large
      default: 'regular',
    },
    tag: {
      type: String, // button | a | nuxt-link
      default: 'button',
    },
  },

  render(h, { data, props, children }) {
    const { tag, size } = props

    const baseClassName = 'c-button'
    const className = {
      'u-font--larger': size === 'regular' || size === 'large',
      [baseClassName]: true,
      [`${baseClassName}--${size}`]: size,
      ...data.class,
    }

    return h(tag, { ...data, class: className }, children)
  },
}
</script>

<style lang="postcss">
.c-button {
  display: block;
  padding: var(--grid-two) var(--grid-four);
  border: 0;
  margin: var(--grid-three) 0;
  background-color: var(--color-green);
  border-radius: var(--grid-half);
  color: var(--color-white);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:hover,
  &:active {
    background-color: var(--color-green--dark);
  }

  &a {
    outline: none;
    text-decoration: none;
  }
}
</style>
