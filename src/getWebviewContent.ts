import * as vscode from 'vscode'
import traverse from './traverse'
import output from './output'

const getWebviewContent = () => {
  const body = traverse(output)

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Skypager Api</title>
    <style>
      body {
        background: white;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        color: #333;
      } 
      img {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 150px;
        height: auto;
        z-index: 2;
      }
      h2 {
        margin-top: 1.8rem;
        padding-bottom: 5px;
        border-bottom: 2px solid #ccc;
      }
      code {
        display: inline-block;
        font-family: Menlo, monospace;
        font-size: .9rem;
        color: #444;
        padding: 4px;
      }
      strong {
        font-size: .95rem;
      }
    </style>
  </head>
  <body>
    <h1>Skypager API</h1>
    <img src="https://raw.githubusercontent.com/skypager/skypager/develop/skypager-logo.png">
    ${body}
  </body>
  </html>`
}

export default getWebviewContent
