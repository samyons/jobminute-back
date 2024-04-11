'use strict';

const { completeOnboarding } = require("../services/onboarding");

/**
 * A set of functions called "actions" for `onboarding`
 */

module.exports = {
  completeOnboarding: async (ctx) => {
    console.log("salam");
    await strapi.service('api::onboarding.onboarding').completeOnboarding(ctx);
    return "ok";
  }
};
