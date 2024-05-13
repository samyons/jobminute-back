'use strict';

/**
 * job-seeker controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::job-seeker.job-seeker', ({strapi}) => ({
    async create(ctx) {
        const {id} = ctx.state.user;
        const response = await super.create(ctx);
        const updatedResponse = await strapi.entityService.update('api::job-seeker.job-seeker', response.data.id, {data: {user: id}});
        return updatedResponse;
    },
}));