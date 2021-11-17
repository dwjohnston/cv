# cv

##

An HTML CV that converts to PDF.

Uses [html5-to-pdf](https://github.com/peterdemartini/html5-to-pdf) a pretty handy node module.

There are quite a few html to pdf converters out there, but I found a lot of them are either very expensive, or they don't support HTML5/flexbox.

It uses Pug as the templating engine. 

## Usage

`npm install`

then:

`npm start` - Start the dev server for development

`npm run publish-html` - Publish the index.html only

`npm run publish-pdf` - Publish the pdf

Or `npm run publish-pdf my-cv.pdf` to give it your own filename. 

Feel free to use this for your own purposes.

The main html file to edit is `src/index.pug`

## Some gotchas

Make sure you your browser set at zoom 100% when creating your HTML, otherwise the generated PDF won't match.

There is a bug on `<a>` tags, so I say just don't use them. Just use `span.link` tags instead. See: https://github.com/peterdemartini/html5-to-pdf/issues/10

There appears to be a bug where content within `<td>` tags loses it style, so as a work around, style `<span>` within `<td>` tags.

There appears to be some issue where if you copy paste the content from the PDF else where, it loses all the spaces. To be honest, it's got me to consider not using this anymore. 
