<template>
  <button class="s-button">按钮</button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped lang="scss">
.s-button {
  font-size: var(--font-size);
  height: var(--button-height);
  background: var(--button-bg);
  border: 1px solid var(--border-color); border-radius: var(--border-radius);
  padding: 0 1em;
  &:hover { border-color: var(--border-color-hover); }
  &:active { background: var(--button-bg-active); }
  &:focus { outline: none; }
}
</style>
