<template>
  <div class="s-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  mounted() {
    for (let node of this.$el.children) {
      const tagName = node.nodeName.toLowerCase()
      if (tagName !== 'button') {
        console.warn(`s-button-group 的子元素应该全是 s-button，但是你写了 ${tagName}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.s-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .s-button {
    border-radius: 0;
    &:first-child { border-radius: var(--border-radius) 0 0 var(--border-radius); }
    &:last-child { border-radius: 0 var(--border-radius) var(--border-radius) 0; }
    &:not(:first-child) { margin-left: -1px; }
    &:hover { position: relative; z-index: 1; }
  }
}
</style>
