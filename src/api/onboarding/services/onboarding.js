'use strict';

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
  }
}
