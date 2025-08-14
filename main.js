import { writeFileSync } from 'fs'
import { minify } from 'html-minifier'
import tempHtml from './swaggerDocsTemplate.js'
import data from './data/batchship.openapi.json' with { type: "json" }

const htmlStr = tempHtml
  .replace('<?title?>', data.info?.title || '')
  .replace('<?apiDescriptionDocument?>', JSON.stringify(data))

writeFileSync(
  './index.html',
  minify(htmlStr, {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
  }),
  { encoding: 'utf-8' },
)