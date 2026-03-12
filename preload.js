const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  chat: (apiKey, messages) => ipcRenderer.invoke('chat', { apiKey, messages })
});
