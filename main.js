const {app,BrowserWindow }=require("electron")
const url = require("url")
const path= require("path")

let mainWindow

app.on("ready",()=>{
     mainWindow=  new BrowserWindow({
        icon:  'defaulticon.ico'

     });
     mainWindow.setMenuBarVisibility(false)
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,"index.html"),
        protocol: 'file',
        slashes:true,
       
        
    }))
    
})