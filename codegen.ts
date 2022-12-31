import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  documents: ['./src/pages/**/*.ts', './src/pages/**/*.tsx'],
  generates: {
    'gqltypes/': {
      plugins: [],
      preset: 'client',
    },
  },
  overwrite: true,
  schema: 'http://localhost:5001/',
};

export default config;
