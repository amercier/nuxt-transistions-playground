<template>
  <PageContainer :step="2" @submit="handleSubmit">
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
</template>

<script>
import PageContainer from '../../components/PageContainer.vue'

export default {
  components: {
    PageContainer,
  },

  methods: {
    handleSubmit() {
      // eslint-disable-next-line no-console
      console.log('Step 2 submit')

      this.$router.push('/with-component/step3')
    },
  },
}
</script>
