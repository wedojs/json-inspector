const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

// Reference: https://electronjs.org/docs/tutorial/first-app

let win

function createWindow() {
    // Create the main browser window.
    win = new BrowserWindow({ width: 1366, height: 768 })

    // remove default menu
    win.setMenu(null)

    // and load the index.html of the app.
    win.loadURL(url.format({
        protocol: 'file:',
        pathname: path.join(__dirname, '/dist/json-inspector/index.html'),
        slashes: true
    }));

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})