<template>
  <div class="page">
    <div class="page-content">
      <slot />
    </div>

    <nav class="side-panel">
      <Transition name="fade">
        <p v-if="step > 1">Step 1 has been completed</p>
      </Transition>
      <Transition name="fade">
        <p v-if="step > 2">Step 2 has been completed</p>
      </Transition>
      <Transition name="fade">
        <div>
          <button v-if="step < 3" @click="$emit('submit')">Next</button>
        </div>
      </Transition>
      <Transition name="fade">
        <div>
          <button v-if="step >= 3" @click="$emit('submit')">Submit</button>
        </div>
      </Transition>
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
