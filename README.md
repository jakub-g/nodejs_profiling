# What is this

It's a tiny script that allows to log all invocations of `node` executable when you run a script which runs nested `node` processes
(i.e. when you're calling JS scripts or globally installed modules like `npm`, `eslint`, `prettier` etc. through `spawn` or `exec`).

# Logging vs writing to files

Naive thing would be to `console.log`, but this does not show all invocations: in case the parent process swallows the stdout/stderr,
not all processes will show up.

Hence apart from logging, it also writes to tmp files (one file per node process created).

You can display contents of all written files with `cat /path/to/nodejs_profiling/tmp* | tee log.log`.

See https://gist.github.com/jakub-g/46c2ef2b9677eaba86837a2160752e42 and https://github.com/npm/cli/issues/3088.

# Usage

```sh
# NODE_OPTIONS: see https://nodejs.org/api/cli.html#cli_node_options_options
# START_TIME: we create unix timestamp before starting node, to show timestamps relative to it as we execute commands one by one
START_TIME=$(date +%s%N | cut -b1-13) NODE_OPTIONS='--require C:\git\nodejs_profiling\debug_rich.js' node /path/to/somefile.js
```

# Example output

```
[ 1451] C:\NODE_DIR\node.exe C:\git\myproject\node_modules\pre-commit\index.js
[ 2038] C:\NODE_DIR\node.exe C:\NODE_DIR\node_modules\npm\bin\npm-cli.js prefix -g
[ 2724] C:\NODE_DIR\node.exe C:\NODE_DIR\node_modules\npm\bin\npm-cli.js run precommit-hook --silent
```
