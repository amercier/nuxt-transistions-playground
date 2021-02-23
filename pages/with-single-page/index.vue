<template>
  <component :is="pageComponent" @stepChange="handleStepChange" />
</template>

<script>
import Step1Page from './-step1.vue'
import Step2Page from './-step2.vue'
import Step3Page from './-step3.vue'

const PAGES = {
  1: Step1Page,
  2: Step2Page,
  3: Step3Page,
}

export default {
  data: () => ({
    step: 1,
  }),

  computed: {
    pageComponent() {
      return PAGES[this.step]
    },
  },

  methods: {
    handleStepChange(step) {
      this.step = step
    },
  },
}
</script>
