<template>
  <div>
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
  </div>
</template>

<script>
export default {
  layout: 'steps',

  beforeMount() {
    this.$root.$on('sideSubmit', this.handleSubmit)
    this.$store.commit('setCurrentStep', 1)
  },

  beforeDestroy() {
    this.$root.$off('sideSubmit', this.handleSubmit)
  },

  methods: {
    handleSubmit() {
      // eslint-disable-next-line no-console
      console.log('Step 1 submit')

      this.$router.push('/with-layout/step2')
    },
  },
}
</script>
