export function chooseFile() {
  return new Promise((resolve, reject) => {
    const el = document.createElement('input')
    el.type = 'file'
    el.style.display = 'none'
    el.addEventListener('change', (e) => {
      const files = e.target.files
      if (!files || !files.length) {
        return reject()
      }
      resolve(files)
    })
    document.body.appendChild(el)
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