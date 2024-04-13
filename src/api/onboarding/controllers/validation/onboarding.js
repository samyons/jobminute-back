const { yup, validateYupSchema } = require('@strapi/utils');


const completeOnboardingBodySchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  });

module.exports = {
  validateCompleteOnboardingBody: validateYupSchema(completeOnboardingBodySchema),
}