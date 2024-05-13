const { yup, validateYupSchema } = require('@strapi/utils');


const completeOnboardingBodySchema = yup.object().shape({
    personalInformation: yup.object().shape({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      dateOfBirth: yup.date().required(),
      gender: yup.string().oneOf(["Homme", "Femme"]).required(),
    }),
  });

module.exports = {
  validateCompleteOnboardingBody: validateYupSchema(completeOnboardingBodySchema),
}