export default {
  state: () => ({
    currentStep: 0,
  }),

  mutations: {
    setCurrentStep(state, currentStep) {
      state.currentStep = currentStep
    },
  },
}
