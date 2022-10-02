<template>
  <div class="s-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup'
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
