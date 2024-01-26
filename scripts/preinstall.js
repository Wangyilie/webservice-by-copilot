/* eslint-disable no-console */
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository requires using pnpm as the package manager `
      + ` for scripts to work properly.\u001b[39m\n`,
  );
  // eslint-disable-next-line no-undef
  process.exit(1);
}
