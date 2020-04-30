export default {
  name: 'CodeGroup',
  functional: true,
  render (h, context) {
    return h('div', { class: ['code-group'] }, context.children)
  }
}