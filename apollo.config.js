module.exports = {
  client: {
    addTypename: true,
    includes: ['src/pages/**/*.ts', 'src/pages/**/*.tsx'],
    name: 'x-polar',
    service: {
      localSchemaFile: ['schema.graphql'],
      name: 'x-polar',
    },
  },
};
