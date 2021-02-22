<template>
  <PageContainer v-if="step === 1" :step="step" @submit="handleSubmit">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius
      aliquet semper. Proin vulputate nisi nec justo imperdiet, quis lacinia
      massa vehicula. Etiam malesuada accumsan volutpat. Pellentesque ornare,
      odio ut semper pellentesque, nibh diam tincidunt ex, id gravida ante purus
      sed nibh. Aenean interdum faucibus dignissim. Vestibulum et neque
      condimentum, laoreet elit et, volutpat quam. Aliquam et ullamcorper dui.
      Nulla eget consectetur ante. Donec nec sagittis dolor. Mauris gravida
      ligula libero, id hendrerit elit feugiat et. Proin et ante neque. Fusce
      ornare metus quis diam varius, eget sodales tortor dignissim. Vestibulum
      ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
      curae; Phasellus porta nisi id libero volutpat mollis a vitae enim.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae;
    </p>

    <div>
      <button @click="handleSubmit">Next</button>
    </div>
  </PageContainer>

  <PageContainer v-else-if="step === 2" :step="step" @submit="handleSubmit">
    <p>
      Nunc tristique libero eu sapien vestibulum, et pharetra eros commodo.
      Suspendisse sodales metus eu neque consectetur accumsan. Mauris pulvinar
      massa eu suscipit egestas. Nunc elementum sed ligula vitae semper. Nunc id
      dictum justo. Praesent interdum fringilla ligula ac consequat. Quisque
      vitae viverra nulla, vitae faucibus felis. Vivamus tempus in quam at
      rutrum. Cras nec vehicula est, in tristique urna. Aenean ultrices eleifend
      orci, sit amet condimentum dui commodo at. Mauris ante quam, imperdiet
      quis elementum in, cursus vel sapien. Integer feugiat, eros id maximus
      tempor, lectus justo congue lacus, cursus rutrum turpis turpis vitae
      justo. Phasellus sagittis sapien dolor, ut congue ligula pellentesque
      vitae. Nunc vel erat egestas, aliquet sapien gravida, posuere elit.
    </p>

    <div>
      <button @click="handleSubmit">Next</button>
    </div>
  </PageContainer>

  <PageContainer v-else-if="step === 3" :step="step" @submit="handleSubmit">
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
  </PageContainer>
</template>

<script>
import PageContainer from '../../components/PageContainer.vue'

export default {
  components: {
    PageContainer,
  },

  data: () => ({
    step: 1,
  }),

  methods: {
    handleSubmit() {
      switch (this.step) {
        case 1:
          // eslint-disable-next-line no-console
          console.log('Step 1 submit')
          this.step = 2
          break

        case 2:
          // eslint-disable-next-line no-console
          console.log('Step 2 submit')
          this.step = 3
          break

        case 3:
          // eslint-disable-next-line no-console
          console.log('Step 3 submit')
          this.$router.push('/')
          break
      }
    },
  },
}
</script>
