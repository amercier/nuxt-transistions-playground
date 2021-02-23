<template>
  <div class="page">
    <div>
      <Logo />
      <h1 class="title">Page transitions</h1>
      <div class="links">
        <NuxtLink to="/with-layout/step1" class="button--green">
          With layout
        </NuxtLink>
        <NuxtLink to="/with-parent-route/step1" class="button--green">
          With parent route
        </NuxtLink>
        <NuxtLink to="/with-single-page" class="button--green">
          With container component (single page)
        </NuxtLink>
        <NuxtLink to="/with-component/step1" class="button--red">
          With container component
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'

export default {
  components: {
    Logo,
  },
}
</script>

<style scoped>
.page {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  margin-bottom: 15px;
  margin-right: 15px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--red {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #bb1414;
  color: #bb1414;
  text-decoration: none;
  padding: 10px 30px;
}

.button--red:hover {
  color: #fff;
  background-color: #bb1414;
}
</style>
