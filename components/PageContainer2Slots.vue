<template>
  <div class="page">
    <div class="page-content">
      <slot name="page-content" />
    </div>

    <nav class="side-panel">
      <slot name="side-panel" />
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.page {
  display: flex;
}

.page-content {
  flex-basis: 0;
  flex-grow: 1;
}

.side-panel {
  margin-left: 2rem;
  flex-basis: 10rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
