import type { Schema, Attribute } from '@strapi/strapi';

export interface TestLanguage extends Schema.Component {
  collectionName: 'components_test_languages';
  info: {
    displayName: 'language';
  };
  attributes: {
    language: Attribute.Relation<
      'test.language',
      'oneToOne',
      'api::language.language'
    >;
    level: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.language': TestLanguage;
    }
  }
}
