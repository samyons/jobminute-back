'use strict';

const { forEach } = require("../../../../config/middlewares");

/**
 * onboarding service
 */

module.exports = {
  completeOnboarding: async (ctx) => {

    return await strapi.entityService.create(
      "api::job-seeker.job-seeker",
      {
        data: {
          firstName: ctx.request.body.firstName,
          lastName: ctx.request.body.lastName,
          dateOfBirth: ctx.request.body.dateOfBirth,
          gender: ctx.request.body.gender,
          user: ctx.state.user.id,
        }
      }
    );
  }
}