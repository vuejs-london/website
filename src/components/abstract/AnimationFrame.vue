<script>
export default {
  abstract: true,

  data() {
    return {
      requestId: -1,
    }
  },

  mounted() {
    this.start()
  },

  beforeDestroy() {
    this.clear()
  },

  methods: {
    start() {
      this.requestId = window.requestAnimationFrame(() => {
        this.$emit('frame')
        this.start()
      })
    },

    clear() {
      window.cancelAnimationFrame(this.requestId)
    },
  },

  render: () => null,
}
</script>
