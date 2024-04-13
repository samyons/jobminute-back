'use strict';

/**
 * levels-of-language service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::levels-of-language.levels-of-language');
