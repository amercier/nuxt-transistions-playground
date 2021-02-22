<template>
  <div class="app">
    <div class="page">
      <div class="page-content">
        <Nuxt />
      </div>

      <nav class="side-panel">
        <Transition name="fade">
          <p v-if="step > 1" key="step1">Step 1 has been completed</p>
        </Transition>

        <Transition name="fade">
          <p v-if="step > 2" key="step2">Step 2 has been completed</p>
        </Transition>

        <!--
            Note: we are using root app component as an event bus for
            consiceness, but any global event bus would have worked.
          -->
        <Transition name="fade">
          <div>
            <button
              v-if="step < 3"
              key="next"
              @click="$root.$emit('sideSubmit')"
            >
              Next
            </button>
          </div>
        </Transition>

        <Transition name="fade">
          <div>
            <button
              v-if="step >= 3"
              key="submit"
              @click="$root.$emit('sideSubmit')"
            >
              Submit
            </button>
          </div>
        </Transition>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'StepsLayout',

  computed: {
    ...mapState({
      step: (state) => state.currentStep,
    }),
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.app {
  margin: 3rem auto;
  max-width: 40rem;
}

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
</style>
