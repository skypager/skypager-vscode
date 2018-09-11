import * as vscode from 'vscode'

export default function showPreviewPanel() {
  let previewUri = vscode.Uri.parse('skypager-preview://authority/skypager-preview')

  return vscode.commands
    .executeCommand(
      'vscode.previewHtml',
      previewUri,
      vscode.ViewColumn.Two,
      'Skypager Docs Preview'
    )
    .then(
      success => {},
      reason => {
        vscode.window.showErrorMessage(reason)
      }
    )
}
