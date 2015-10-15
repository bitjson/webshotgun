# webshotgun
[![npm version](https://badge.fury.io/js/webshotgun.svg)](https://www.npmjs.com/package/webshotgun)

<h4>Webshotgun allows you to rapidly take high fidelity screenshots of websites.<h4>

Webshotgun uses [SlimerJS](https://slimerjs.org/), scripting for Firefox. Because SlimerJS always uses a very recent version of firefox, modern CSS support and rendering is much more reliable than tools based on [PhantomJS](http://phantomjs.org/).

## Quickstart
Be sure you've installed [Node](https://nodejs.org/) and [Firefox](https://www.mozilla.org/firefox/). You can get started quickly with the CLI:

```bash
$ npm install -g webshotgun
$ webshotgun --dest 'shots' google.com reddit.com nodejs.org
```

For more information on the CLI, use the `--help` flag:

```bash
$ webshotgun --help

Usage: webshotgun [options] <urls ...>

Options:

  -h, --help         output usage information
  -V, --version      output the version number
  -f, --file <file>  Read urls from a JSON – ["URL", "URL", ... ] – or CSV file. (URLs separated by whitespace or commas.)
  -d, --dest <path>  Set the directory in which to save screenshots. [default: './webshotgun']
  -w, --width        Set the viewport width (in pixels) at which to take screenshots. [default: '1500']
  -t, --tree         Organize screenshots into a folder tree matching the URL structure.
  -q, --quiet        Silence standard output.

Examples:

  $ webshotgun google.com reddit.com nodejs.org
  $ webshotgun --file urls.json --tree
  $ webshotgun --file urls.csv
  $ webshotgun --file urls.txt --width 500 --dest mobile-shots
```

## API

```bash
$ npm install webshotgun
```

```js
var webshotgun = require('webshotgun');

webshotgun.shoot({
    dest: 'destination folder',
    urls: ['http://google.com', 'http://reddit.com', 'http://nodejs.org'],
    quiet: true,
    tree: true,
    width: 2000
});
```

## Development
Run `npm link` to link the CLI during development.
