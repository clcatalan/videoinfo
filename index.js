//npm run electron


//all code related to creating windows and handling the electron side will be placed here
//restart electron from terminal if changes are made here, if on other files, just click command+r
const electron = require('electron');

//overall running process
const {app, BrowserWindow, ipcMain} = electron


//electron on ready event
app.on('ready', () => {
    console.log('app is now ready')

    //creates new window
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
          }
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on('video:submit', (path) => {
    console.log('path')
});