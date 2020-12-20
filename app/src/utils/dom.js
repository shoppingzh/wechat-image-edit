export function chooseFile() {
  return new Promise((resolve, reject) => {
    const el = document.createElement('input')
    el.type = 'file'
    el.onchange = function() {
      const files = this.files
      if (!files || !files.length) {
        return reject()
      }
      resolve(files)
    }
    el.click()
  })
}

export function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url
    if (img.complete) {
      return resolve(img)
    }
    img.onload = function() {
      resolve(img)
    }
    img.onerror = function(err) {
      reject(err)
    }
  })
}