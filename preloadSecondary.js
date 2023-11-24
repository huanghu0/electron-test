const { ipcRenderer } = require('electron')

ipcRenderer.on('port', e => {
  // 接收到端口，使其全局可用。
  window.electronMessagePort = e.ports[0]

  window.electronMessagePort.onmessage = messageEvent => {
    // 处理消息
    console.log('yyyyyyyyyyyyyy')
  }
})