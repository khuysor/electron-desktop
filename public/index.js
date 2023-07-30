const { BrowserWindow, app } = require("electron")
const isDev=require("electron-is-dev")
const path=require("path")
const createWindow=()=>{
    const win= new BrowserWindow({
        height:800,
        width:800
    })
    win.loadURL(
        isDev ? "http://localhost:3000" : `file://${path.join(__dirname,"../build/index.html")}`
    )

}
app.whenReady().then(()=>{
createWindow()
})