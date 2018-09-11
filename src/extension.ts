import * as vscode from 'vscode'
import showOutputChannel from './functions'
import showPreviewPanel from './experimental-functions'

export function activate(context: vscode.ExtensionContext) {
  console.log('skypager-vscode is running.')

  let command = vscode.commands.registerCommand('extension.skypagerDocs', showOutputChannel)

  context.subscriptions.push(command)
}
