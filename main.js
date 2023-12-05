// main.js

// Modules to control application life and create native browser window
// const { app, BrowserWindow,ipcMain,dialog,Menu,MessageChannelMain } = require('electron')
// const path = require('node:path')
// const { ipcHandle } = require('./src/DarkMode/funtion')
// const { ipcHandle } = require('./src/webBluetoothApi/function')
// const { ipchandle } = require('./src/webHidApi/function')
// const { ipcHandle } = require('./src/webSerialApi/function')
// const { ipchandle } = require('./src/webUsbApi/function')
// const { handleMenu,handleGlobalShortcut } = require('./src/menuItem/function')


// async function handleFileOpen () {
//   const { canceled, filePaths } = await dialog.showOpenDialog()
//   if (!canceled) {
//     return filePaths[0]
//   }
// }

// let mainWindow

// if (process.defaultApp) {
//   if (process.argv.length >= 2) {
//     app.setAsDefaultProtocolClient('electron-fiddle', process.execPath, [path.resolve(process.argv[1])])
//   }
// } else {
//   app.setAsDefaultProtocolClient('electron-fiddle')
// }

// const gotTheLock = app.requestSingleInstanceLock()

// if (!gotTheLock) {
//   app.quit()
// } else {
//   app.on('second-instance', (event, commandLine, workingDirectory) => {
//     // Someone tried to run a second instance, we should focus our window.
//     if (mainWindow) {
//       if (mainWindow.isMinimized()) mainWindow.restore()
//       mainWindow.focus()
//     }

//     dialog.showErrorBox('Welcome Back', `You arrived from: ${commandLine.pop().slice(0, -1)}`)
//   })

//   // Create mainWindow, load the rest of the app, etc...
//   app.whenReady().then(() => {
//     createWindow()
//   })

//   app.on('open-url', (event, url) => {
//     dialog.showErrorBox('Welcome Back', `You arrived from: ${url}`)
//   })
// }

// const createWindow = () => {
//   // Create the browser window.
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       // preload: path.join(__dirname, 'preload.js'), // 再渲染进程中运行 先于网页内容加载
//       // preload: path.join(__dirname,'src/DarkMode/preload.js'), // Dark mode
//       // preload: path.join(__dirname,'src/webBluetoothApi/preload.js'), // webBluetoothApi
//       // preload: path.join(__dirname,'src/DeepLinks/preload.js'), // Deep Links
//       nodeIntegration: true, 
//       // contextIsolation: false
//       sandbox: false
//     }
//   })

//   // ipcHandle(mainWindow)
//   // ipchandle(mainWindow)
//   mainWindow.loadFile('src/Dock/index.html')

//   // 打开开发工具
//   mainWindow.webContents.openDevTools()
// }

// ipcHandle()

// handleMenu()

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
// app.whenReady().then(() => {
//   // handleGlobalShortcut()
//   createWindow()
//   app.on('activate', () => {
//     // 在 macOS 系统内, 如果没有已开启的应用窗口
//     // 点击托盘图标时通常会重新创建一个新窗口
//     if (BrowserWindow.getAllWindows().length === 0) createWindow()
//   })  
// })

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常
// 对应用程序和它们的菜单栏来说应该时刻保持激活状态, 
// 直到用户使用 Cmd + Q 明确退出
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit()
// })

// 在当前文件中你可以引入所有的主进程代码
// 也可以拆分成几个文件，然后用 require 导入。

// Handle window controls via IPC
// ipcMain.on('shell:open', () => {
//   const pageDirectory = __dirname.replace('app.asar', 'app.asar.unpacked')
//   const pagePath = path.join('file://', pageDirectory, 'index.html')
//   shell.openExternal(pagePath)
// })


// const dockMenu = Menu.buildFromTemplate([
//   {
//     label: 'New Window',
//     click () { console.log('New Window') }
//   }, {
//     label: 'New Window with Settings',
//     submenu: [
//       { label: 'Basic' },
//       { label: 'Pro' }
//     ]
//   },
//   { label: 'New Command...' }
// ])

// app.whenReady().then(() => {
//   if (process.platform === 'darwin') {
//     app.dock.setMenu(dockMenu)
//   }
// }).then(createWindow)

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow()
//   }
// })

