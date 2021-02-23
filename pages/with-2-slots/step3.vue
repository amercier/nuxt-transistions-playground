<template>
  <PageContainer2Slots :step="3" @submit="handleSubmit">
    <template #page-content>
      <p>
        Pellentesque et accumsan risus. Duis ut ipsum eleifend, vestibulum leo
        vel, interdum sem. Quisque velit nunc, blandit et viverra vitae, mollis
        eget urna. Suspendisse pellentesque dui consequat, finibus ipsum eu,
        sollicitudin nisi. Duis ut sapien eu magna iaculis sagittis. Mauris
        sagittis ante non sodales vestibulum. Donec tortor odio, convallis non
        mauris et, vehicula rutrum lectus. Curabitur et condimentum felis. In
        commodo ex facilisis, ultrices erat id, molestie augue. Donec egestas
        sapien in orci rhoncus, sit amet condimentum arcu ornare.
      </p>

      <div>
        <button @click="handleSubmit">Submit</button>
      </div>
    </template>

    <template #side-panel>
      <SidePanel :step="3" />
    </template>
  </PageContainer2Slots>
</template>

<script>
import PageContainer2Slots from '../../components/PageContainer2Slots.vue'
import SidePanel from '../../components/SidePanel.vue'

export default {
  components: {
    PageContainer2Slots,
    SidePanel,
  },

  methods: {
    handleSubmit() {
      // eslint-disable-next-line no-console
      console.log('Step 3 submit')

      this.$router.push('/')
    },
  },
}
</script>
