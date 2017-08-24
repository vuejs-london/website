<script>
export default {
  functional: true,

  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },

  render(h, { data, props }) {
    const { src, alt } = props
    const baseClassName = 'c-page-image'
    const baseClass = {
      [baseClassName]: true,
      ...data.class,
    }

    const attrs = {
      src,
      alt,
      decoding: 'async',
      importance: 'low',
      ...data.attrs,
    }

    return h('img', { ...data, class: baseClass, attrs })
  },
}
</script>

<style>
.c-page-image {
  display: block;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: var(--grid-two);
  border: 1px solid var(--color-grey--light);
  margin-top: var(--grid-four);
  object-fit: cover;
}
</style>
