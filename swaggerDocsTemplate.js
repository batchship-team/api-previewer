// 文档: https://docs.stoplight.io/docs/elements/b074dc47b2826-elements-configuration-options
export default `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title><?title?></title>
    <script src="https://unpkg.com/@stoplight/elements/web-components.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/@stoplight/elements/styles.min.css" />
  </head>
  <body>
    <elements-api
      id="docs"
      router="hash"
      layout="sidebar"
      logo="https://batchship.com/batchship.png"
      hideInternal="true"
      hideSchemas="true"
      hideExport="true"
    />
    <script>
      ;(async () => {
        const docs = document.getElementById('docs')
        const apiDescriptionDocument = <?apiDescriptionDocument?>
        docs.apiDescriptionDocument = apiDescriptionDocument
      })()
    </script>
  </body>
</html>
`
