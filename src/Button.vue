<template>
  <button :class="['s-button', {[`icon-${iconPosition}`]: icon}]">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    icon: { type: String },
    iconPosition: { type: String, default: 'left' }
  }
}
</script>

<style scoped lang="scss">
.s-button {
  font-size: var(--font-size);
  height: var(--button-height);
  background: var(--button-bg);
  border: 1px solid var(--border-color); border-radius: var(--border-radius);
  display: inline-flex; align-items: center;
  vertical-align: middle;
  padding: 0 1em;
  &:hover { border-color: var(--border-color-hover); }
  &:active { background: var(--button-bg-active); }
  &:focus { outline: none; }
  &.icon-left {
    > .icon { order: 1; margin-right: .2em; }
    > .content { order: 2; }
  }
  &.icon-right {
    > .icon { order: 2; margin-left: .2em; margin-right: 0; }
    > .content { order: 1; }
  }
}
</style>
