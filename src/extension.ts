import * as vscode from 'vscode'
import showOutputChannel from './showOutputChannel'
import showWebview from './showWebview'

export function activate(context: vscode.ExtensionContext) {
  console.log('skypager-vscode is running.')

  // Just replace the function here to switch between options
  let command = vscode.commands.registerCommand('extension.skypagerDocs', showOutputChannel)

  context.subscriptions.push(command)
}
