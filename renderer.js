// const information = document.getElementById('info')
// information.innerText = `本应用正在使用 Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), 和 Electron (v${window.versions.electron()})`

// const func = async () => {
//   const response = await window.versions.ping()
//   console.log(response,'response-------------------------------')
// }
// func()

// // 
// const setButton = document.getElementById('btn')
// const titleInput = document.getElementById('title')

// setButton.addEventListener('click',() => {
//   const title = titleInput.value
//   window.versions.setTitle(title)
// })

// const btn = document.getElementById('btn1')
// const filePathElement = document.getElementById('filePath')

// btn.addEventListener('click', async () => {
//   const filePath = await window.versions.openFile()
//   filePathElement.innerText = filePath
// })

// const counter = document.getElementById('counter')

// window.versions.handleCounter((event, value) => {
//   const oldValue = Number(counter.innerText)
//   const newValue = oldValue + value
//   counter.innerText = newValue
//   event.sender.send('counter-value', newValue)
// })

// elsewhere in your code to send a message to the other renderers message handler
window.electronMessagePort.postMessage('ping')