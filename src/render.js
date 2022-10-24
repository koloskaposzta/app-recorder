const videoelement = document.querySelector('video');

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const videoSelectBtn = document.getElementById('videoSelectBtn');
videoSelectBtn.onclick = getVideoSources;
const { desktopCapturer, remote } = require('electron');
const { Menu } = remote;
async function getVideoSources() {
  const inputSources = await desktopCapturer.getVideoSources({
    types: ['window', 'screen'],
  });

  const videoOptMenu = Menu.buildFromTemplate(
    inputSources.map((source) => {
      return {
        label: source.name,
        click: () => selectSource(source),
      };
    })
  );

  videoOptMenu.popup();
}
async function selectSource(source) {
  videoSelectBtn.innerText;
}
