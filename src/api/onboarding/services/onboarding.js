'use strict';

const { forEach } = require("../../../../config/middlewares");

/**
 * onboarding service
 */

module.exports = {
  completeOnboarding: async (ctx) => {

    await strapi.entityService.update(
        "plugin::users-permissions.user",
        ctx.state.user.id,
        {
          data: {
            onboardingCompleted: true,
            firstName: ctx.request.body.firstName,
            lastName: ctx.request.body.lastName,
          }
        }
    );

    console.log("cccc");

    ctx.request.body.levelsOfLanguages.forEach(async element =>  {
      await strapi.entityService.create(
        "api::levels-of-language.levels-of-language",
        {
          data: {
            language: element.language.id,
            language_level: element.level.id,
            job_seeker: ctx.state.user.id,
          }
        }
      )
    });     
  }
}
