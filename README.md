# webshotgun

[![npm version](https://badge.fury.io/js/webshotgun.svg)](https://www.npmjs.com/package/webshotgun)

Webshotgun uses slimerjs to screenshot a list of urls.

## Install

Webshotgun uses firefox to render screenshots; please [install firefox](https://www.mozilla.org/firefox/) before running.

```shell
$ npm install webshotgun
```

## CLI

To use the CLI globally, install `webshotgun` with the `-g` flag:

```shell
$ npm install -g webshotgun
```

For more information on the CLI, use the `--help` flag:

```shell
$ webshotgun --help

Usage:
   webshotgun [options] <url> [<url> ...]
   webshotgun --file=<file>

Arguments:
   <url>           One or more space-delimited URLs to screenshot.
   <file>          A JSON file containing an array of URLs to screenshot.

Options:
   -d, --dest      The directory in which to save screenshots. [default: './webshotgun']
   -f, --file      Define urls with a JSON file, format: ["URL", "URL", ... ]
   -h, --help      Show this help.
   -q, --quiet     Silence standard output.
   -v, --version   Show version.

```

## Development

Run `npm link` to link the CLI during development.
