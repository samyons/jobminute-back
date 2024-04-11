const middlewares = require("../../../../config/middlewares");

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/onboarding',
      handler: 'onboarding.completeOnboarding',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};
