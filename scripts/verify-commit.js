/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from 'chalk';
import { readFileSync } from 'fs';
import path from 'path';

// 获取 git commit message
const msgPath = path.resolve('.git/COMMIT_EDITMSG');
const msg = readFileSync(msgPath, 'utf-8').trim();

const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n${
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      )
    }    ${chalk.green(`feat(compiler): add 'comments' option`)}\n`
      + `    ${chalk.green(`fix(v-model): handle events on blur (close #28)`)}`,
  );

  // eslint-disable-next-line no-undef
  process.exit(1);
}
