<template>
  <div class="page">
    <section class="page-content">
      <Transition name="fade">
        <NuxtChild />
      </Transition>
    </section>

    <nav class="side-panel">
      <Transition name="fade">
        <p v-if="step > 1">Step 1 has been completed</p>
      </Transition>
      <Transition name="fade">
        <p v-if="step > 2">Step 2 has been completed</p>
      </Transition>
      <Transition name="fade">
        <div>
          <button v-if="step < 3" @click="$root.$emit('sideSubmit')">
            Next
          </button>
        </div>
      </Transition>
      <Transition name="fade">
        <div>
          <button v-if="step >= 3" @click="$root.$emit('sideSubmit')">
            Submit
          </button>
        </div>
      </Transition>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      step: (state) => state.currentStep,
    }),
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
