<template>
  <div>
    <Transition name="fade">
      <p v-if="step > 1">Step 1 has been completed</p>
    </Transition>
    <Transition name="fade">
      <p v-if="step > 2">Step 2 has been completed</p>
    </Transition>
    <Transition name="fade">
      <div>
        <button v-if="step < 3" @click="$emit('submit')">Next</button>
      </div>
    </Transition>
    <Transition name="fade">
      <div>
        <button v-if="step >= 3" @click="$emit('submit')">Submit</button>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true,
    },
  },
}
</script>
