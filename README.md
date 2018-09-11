# Skypager Docs

This is the initial testing repository for the Skypager Docs Visual Studio Code extension. Below is documentation for getting started on creating an extension.

## Installation and Setup

In order to generate a development Visual Studio Code extension, install Yeoman and the [VS Code Extension Generator](https://github.com/Microsoft/vscode-generator-code).

```bash
npm install -g yo generator-code
```

Launch the generator.

```
yo code
```

Select `New Extension <Typescript>` to finish the installation.

### Additional Configuration

To get our preferred Prettier settings configured with Typescript, install the `tslint-config-prettier` package.

```
npm i -D tslint-config-prettier
```

And add the following to `tslint.json`.

```json
// package.json
{
  "extends": [
    "tslint:latest",
    "tslint-config-prettier"
  ]
}
```

These are the settings being used.

```json
// .prettierrc
{
  "semi": false,
  "printWidth": 100,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "bracketSpacing": true
}
```

## Features

### Keybindings

Use `⇧ ⌘ 9` to run the `skypager-docs`.

You can also open the command palette with `⇧ ⌘ P` and find `Show Skypager Docs`.

Finally, if you right click on a page, `Show Skypager Docs` will show up in the context menu.

All of this is configured through the `"contributes"` property.

```json
// package.json
"contributes": {
    "commands": [
      {
        "command": "extension.skypagerDocs",
        "title": "Show Skypager Docs"
      }
    ],
    "menus": {
      "editor/context": [
        {
          "command": "extension.skypagerDocs",
          "group": "Skypager@1"
        }
      ]
    },
    "keybindings": [
      {
        "command": "extension.skypagerDocs",
        "key": "ctrl+shift+9",
        "mac": "cmd+shift+9",
        "when": "editorTextFocus"
      }
    ]
  },
```

## Understanding the VS Code API

- [Documentation for the VS Code Namespace API](https://code.visualstudio.com/docs/extensionAPI/vscode-api)

Everything lives on the `vscode` object.

```typescript
import * as vscode from 'vscode'
```

An extension is loaded through the `activate()` function.

```typescript
export function activate(context: vscode.ExtensionContext) {
  console.log('skypager-vscode is running.')

  //...
}
```

We register the commands we're calling from `package.json` via keybindings, context menus, etc. with `vscode.commands.registerCommand`.

```typescript
vscode.commands.registerCommand('extension.skypagerDocs', customCommandFunction)
```

The API lists all sort of functions we can use - for example, we can open a text-only output in the console panel and display some text with `vscode.window.createOutputChannel`.

```typescript
export default function showOutputChannel() {
let channel = vscode.window.createOutputChannel('Skypager Docs')
  channel.appendLine('Show Skypager Docs in the Output Channel')
  channel.show()
}
```

## Requirements

This extension requires `skypager-runtimes-node`.