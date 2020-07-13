//npm run electron


//all code related to creating windows and handling the electron side will be placed here
//restart electron from terminal if changes are made here, if on other files, just click command+r
const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg')

//overall running process
const {app, BrowserWindow, ipcMain} = electron
let mainWindow

//electron on ready event
app.on('ready', () => {
    console.log('app is now ready')

    //creates new window
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
          }
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on('video:submit', (event, path) => {
    console.log('path')
    ffmpeg.ffprobe(path, (err, metadata) => {

        mainWindow.webContents.send('video:get-metadata', metadata.format.duration);
    })
});