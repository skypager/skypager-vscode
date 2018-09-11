import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  console.log('skypager-ts is running.')

  let disposable = vscode.commands.registerCommand('extension.skypagerDocs', () => {
    vscode.window.showInformationMessage('Hello Skypager!')
  })

  context.subscriptions.push(disposable)
}
