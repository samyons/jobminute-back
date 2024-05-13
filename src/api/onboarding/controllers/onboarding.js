'use strict';
const {sanitize} = require("@strapi/utils");
const { validateCompleteOnboardingBody } = require("./validation/onboarding");

/**
 * A set of functions called "actions" for `onboarding`
 */
const sanitizeOutput = async (user, ctx) => {
  const schema = strapi.getModel('api::job-seeker.job-seeker');
  const { auth } = ctx.state;

  return sanitize.contentAPI.output(user, schema, { auth });
};

module.exports = {
  completeOnboarding: async (ctx) => {
    await validateCompleteOnboardingBody(ctx.request.body);

    const data = await strapi.service('api::onboarding.onboarding').completeOnboarding(ctx);
    console.log(data);
    const sanitizedData = await sanitizeOutput(data, ctx);
    console.log(this.transformResponse(sanitizedData));
  }
};
