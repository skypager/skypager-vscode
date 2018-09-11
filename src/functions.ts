import * as vscode from 'vscode'
const runtime = require('skypager-runtimes-node')

export default function showOutputChannel() {
  const { omitBy, isEmpty } = runtime.lodash

  const output = runtime.chain
    .invoke('features.allMembers')
    .mapValues((feature, name) =>
      omitBy(
        {
          name,
          shortcut: feature.shortcut || feature.createGetter,
          ...describe(feature),
          ...describe(feature, 'runtime'),
        },
        isEmpty
      )
    )
    .value()

  function describe(feature, type = 'feature') {
    const { mapValues, groupBy } = runtime.lodash

    const list = (type === 'runtime' ? feature.runtimeMethods : feature.featureMethods) || []

    const grouped = groupBy(list, methodName => {
      if (methodName.startsWith('lazy') || methodName.startsWith('get')) {
        return type + 'Properties'
      } else {
        return type + 'Methods'
      }
    })

    const { lowerFirst } = runtime.stringUtils

    return mapValues(grouped, (group, groupName) => {
      if (groupName === 'methods') {
        return group
      } else {
        return group.map(item => lowerFirst(item.replace(/^(get|lazy)/, '')))
      }
    })
  }

  let channel = vscode.window.createOutputChannel('Skypager Docs')
  channel.appendLine(JSON.stringify(output))
  channel.show()
}
