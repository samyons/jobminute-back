

/**
 * offer controller
 */

const {sanitize} = require('@strapi/utils');

const { createCoreController } = require('@strapi/strapi').factories;

// @ts-ignore
module.exports = createCoreController('api::offer.offer', ({strapi}) => ({
    async create(ctx) {

        const response = await super.create(ctx);
        const id = ctx.state.user.id;
        const user = await strapi.entityService.findOne('plugin::users-permissions.user', id, 
        {populate: ['company_user', 'company_user.company']

        }); 
        // @ts-ignore
        const updatedResponse = await strapi.entityService.update('api::offer.offer', response.data.id, {data: {company: user.company_user.company.id}});
        return updatedResponse;
    },
async find(ctx) {
    if (ctx.state.user) {

    const {id} = ctx.state.user;
    const user = await strapi.entityService.findOne('plugin::users-permissions.user', id, 
    {populate: ['company_user', 'company_user.company']

    });

    // @ts-ignore
    if (user.company_user != null) {
       // const sanitizedQueryParams = await this.sanitizeQuery(ctx);
        const response = await strapi.entityService.findMany('api::offer.offer', { 
            // @ts-ignore
            populate: "deep",
            sort: 'createdAt:desc',
            filters: {
            // @ts-ignore
            company: user.company_user.company.id}});

        const model = strapi.getModel('api::offer.offer');
        console.log(response);
        const sanitizedResponse = await this.sanitizeOutput(response, ctx);
        console.log(sanitizedResponse);
        return this.transformResponse(sanitizedResponse);
    }
}
    const response = await super.find(ctx);
    return response;

    // @ts-ignore
   /* const updatedResponse = response.data.filter(offer => offer.company === user.company_user.company.id);
    return updatedResponse;*/
}
          
}));
