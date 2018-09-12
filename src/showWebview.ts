import * as vscode from 'vscode'

// const panel = vscode.WebviewPanel

export default function showPreviewPanel() {
  let channel = vscode.window.createWebviewPanel(
    'skypager-preview',
    'Skypager Docs',
    vscode.ViewColumn.Two,
    {
      // Enable javascript in the webview
      enableScripts: true,
    },
  )
}
