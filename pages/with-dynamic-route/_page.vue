<template>
  <PageContainer :step="step" @submit="handleSubmit">
    <component :is="pageComponent" ref="pageComponent" />
  </PageContainer>
</template>

<script>
import PageContainer from '../../components/PageContainer.vue'

import Step1Page from './-step1.vue'
import Step2Page from './-step2.vue'
import Step3Page from './-step3.vue'

const PAGES = {
  step1: Step1Page,
  step2: Step2Page,
  step3: Step3Page,
}

const STEPS = {
  step1: 1,
  step2: 2,
  step3: 3,
}

export default {
  key: 'with-dynamic-route',

  components: {
    PageContainer,
  },

  asyncData({ params }) {
    return {
      page: params.page,
    }
  },

  computed: {
    step() {
      return STEPS[this.page]
    },

    pageComponent() {
      return PAGES[this.page]
    },
  },

  methods: {
    handleSubmit(...args) {
      this.$refs.pageComponent.handleSubmit(...args)
    },
  },
}
</script>
