export default {
  name: 'CodeBlock',
  functional: true,
  props: {
    label: {
      required: true
    }
  },
  render (h, context) {
    return h('div', { class: ['code-block'] }, context.children)
  }
}