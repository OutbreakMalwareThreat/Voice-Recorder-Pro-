const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  saveRecording: (data) => ipcRenderer.invoke('save-recording', data),
  showInFolder: (filePath) => ipcRenderer.invoke('show-in-folder', filePath),
});
