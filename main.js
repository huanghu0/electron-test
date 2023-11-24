// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow,ipcMain,dialog,Menu,MessageChannelMain } = require('electron')
const path = require('node:path')

async function handleFileOpen () {
  const { canceled, filePaths } = await dialog.showOpenDialog()
  if (!canceled) {
    return filePaths[0]
  }
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 再渲染进程中运行 先于网页内容加载
      nodeIntegration: true,
      // contextIsolation: false
      sandbox: false
    }
  })

  // const menu = Menu.buildFromTemplate([
  //   {
  //     label: app.name,
  //     submenu: [
  //       {
  //         click: () => mainWindow.webContents.send('update-counter', 1),
  //         label: 'Increment'
  //       },
  //       {
  //         click: () => mainWindow.webContents.send('update-counter', -1),
  //         label: 'Decrement'
  //       }
  //     ]
  //   }

  // ])

  // Menu.setApplicationMenu(menu)

  // ipcMain.on('set-title', (event, title) => {
  //   const webContents = event.sender
  //   const win = BrowserWindow.fromWebContents(webContents)
  //   win.setTitle(title)
  // })  

  // 加载 index.html
  // mainWindow.loadFile('index.html')
  mainWindow.loadURL('http://172.16.15.34:8080/home')

  // 打开开发工具
  mainWindow.webContents.openDevTools()
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  // ipcMain.handle('ping', (event, message) => {
  //   console.log(`message:${message}`)
  //   return 'pong'
  // })

  // ipcMain.handle('dialog:openFile', handleFileOpen)
  // ipcMain.on('counter-value', (_event, value) => {
  //   console.log(value) // will print value to Node console
  // })  

  // const mainWindow = new BrowserWindow({
  //   // show: false,
  //   width: 800,
  //   height: 600,    
  //   webPreferences: {
  //     contextIsolation: false,
  //     preload: path.join(__dirname, 'preloadMain.js'),
  //   }
  // })

  // const secondaryWindow = new BrowserWindow({
  //   // show: false,
  //   width: 800,
  //   height: 600,
  //   webPreferences: {
  //     contextIsolation: false,
  //     preload: path.join(__dirname, 'preloadSecondary.js'),
  //   }
  // })

  // // 建立通道
  // const { port1, port2 } = new MessageChannelMain()

  // // webContents准备就绪后，使用postMessage向每个webContents发送一个端口。
  // mainWindow.once('ready-to-show', () => {
  //   mainWindow.webContents.postMessage('port', null, [port1])
  // })

  // secondaryWindow.once('ready-to-show', () => {
  //   secondaryWindow.webContents.postMessage('port', null, [port2])
  // })  

  // mainWindow.webContents.openDevTools()
  // secondaryWindow.webContents.openDevTools()

  createWindow()
  app.on('activate', () => {
    // 在 macOS 系统内, 如果没有已开启的应用窗口
    // 点击托盘图标时通常会重新创建一个新窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })  

})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常
// 对应用程序和它们的菜单栏来说应该时刻保持激活状态, 
// 直到用户使用 Cmd + Q 明确退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// 在当前文件中你可以引入所有的主进程代码
// 也可以拆分成几个文件，然后用 require 导入。