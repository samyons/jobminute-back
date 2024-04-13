'use strict';

/**
 * levels-of-language router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::levels-of-language.levels-of-language');
