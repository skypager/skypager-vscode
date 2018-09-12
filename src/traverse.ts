const traverse = object => {
  let html = ''

  for (let key in object) {
    html += `<h2>${key}</h2>`
    for (let key2 in object[key]) {
      if (typeof object[key] === 'object') {
        html += `<p><strong>${key2}:</strong> `
        if (object[key][key2].constructor !== Array) {
          html += `<code>${object[key][key2]}</code>`
          html += `</p>`
        } else {
          html += `<ul>`
          object[key][key2].forEach((item, i) => {
            html += `<li><code>${item}</code></li>`
          })
          html += `</ul>`
          html += `</p>`
        }
      } else {
        html += `Are there any?`
      }
    }
  }

  return html
}

export default traverse