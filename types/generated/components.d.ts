import type { Schema, Attribute } from '@strapi/strapi';

export interface TestLanguage extends Schema.Component {
  collectionName: 'components_test_languages';
  info: {
    displayName: 'language';
    description: '';
  };
  attributes: {
    language: Attribute.Relation<
      'test.language',
      'oneToOne',
      'api::language.language'
    >;
    language_level: Attribute.Relation<
      'test.language',
      'oneToOne',
      'api::language-level.language-level'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.language': TestLanguage;
    }
  }
}
