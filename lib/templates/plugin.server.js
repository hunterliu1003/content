import Vue from 'vue'
import NuxtContent from './nuxt-content'
import CodeBlock from './code-block'
import CodeGroup from './code-group'

Vue.component(NuxtContent.name, NuxtContent)
Vue.component(CodeBlock.name, CodeBlock)
Vue.component(CodeGroup.name, CodeGroup)

export default (ctx, inject) => {
  const $content = ctx.ssrContext.$content

  inject('content', $content)
  ctx.$content = $content
}
