import * as vscode from 'vscode'
import output from './output'

export default function showOutputChannel() {
  let channel = vscode.window.createOutputChannel('Skypager Api')
  channel.appendLine(JSON.stringify(output))
  channel.show()
}
