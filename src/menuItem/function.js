const { Menu, MenuItem,globalShortcut  } = require('electron')
const handleMenu = () => {
  const menu = new Menu()
  menu.append(new MenuItem({
    label: 'Electron',
    submenu: [{
      role: 'help',
      accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
      click: () => { console.log('Electron rocks!') }
    }]
  }))
  
  Menu.setApplicationMenu(menu)  
}

const handleGlobalShortcut = () => {
  globalShortcut.register('Alt+CommandOrControl+I', () => {
    console.log('Electron loves global shortcuts!')
  })  
}

module.exports = {
  handleMenu,
  handleGlobalShortcut
}