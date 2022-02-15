module.exports = (on: any, config: any) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  return Object.assign({}, config, {
    fixturesFolder: "test/e2e/fixtures",
    integrationFolder: "test/e2e/integration",
    supportFile: "test/e2e/support/index.ts",
  });
};
