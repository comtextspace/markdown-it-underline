# Underline plugin for markdown-it

This plagen parses markdown and replaces `_` to HTML-tag `span`.

from

```
this test is _underline_
```

to

```
this test is <span class="md-it-underline">underline</span>
```

## Installation

With [Yarn](https://yarnpkg.com/):

```
yarn add -D @comtext/markdown-it-underline
```

With npm

```
npm i @comtext/markdown-it-underline
```

## Using

```js
const md = require("markdown-it")();
const mk = require("@comtext/markdown-it-underline");

md.use(mk);

var result = md.render("this test is _underline_");
```

## CSS

Example CSS

```css
.md-it-underline {
    text-decoration: underline;
}
```
