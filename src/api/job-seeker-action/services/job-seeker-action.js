'use strict';

/**
 * job-seeker-action service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-seeker-action.job-seeker-action');
