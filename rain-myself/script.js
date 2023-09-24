

function rain() {
  const e = document.createElement('div')
  const left = Math.random() * 310
  const width = Math.random() * 5
  const height = Math.random() * 50
  const duration = Math.random() * 0.5
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const color = `rgb(${r},${g},${b})`
  e.classList.add('drop')

  e.style.left = left + 'px'
  e.style.width = width + 'px'
  e.style.height = height + 'px'
  e.style.animationDuration = 1 + duration + 's'
  e.style.backgroundColor = color
  const cloud = document.querySelector('.cloud')
  cloud.append(e)
  setTimeout(() => {
    // cloud.remove(e)
    e.remove()
  }, 2000)
}

setInterval(() => {
  rain()
}, 20)





