import * as vscode from 'vscode'
import getWebviewContent from './getWebviewContent'

export default function showPreviewPanel() {
  const panel = vscode.window.createWebviewPanel(
    'skypager-preview',
    'Skypager Api',
    vscode.ViewColumn.Two,
    {
      enableScripts: true,
    }
  )

  panel.webview.html = getWebviewContent()

  panel.onDidDispose(() => {})
}
