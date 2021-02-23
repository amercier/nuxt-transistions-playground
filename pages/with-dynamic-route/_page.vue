<template>
  <Component :is="pageComponent" />
</template>

<script>
import Step1Page from './-step1.vue'
import Step2Page from './-step2.vue'
import Step3Page from './-step3.vue'

const PAGES = {
  step1: Step1Page,
  step2: Step2Page,
  step3: Step3Page,
}

export default {
  key: 'with-dynamic-route',

  asyncData({ params }) {
    return {
      page: params.page,
    }
  },

  computed: {
    pageComponent() {
      return PAGES[this.page]
    },
  },
}
</script>
