SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;

const render = document.getElementById('render')
let counter = 0

const init = () => {
  bindEvents()
}

const bindEvents = () => {
  let recordButton = document.getElementById('record')
  let isRecording = false
  recordButton.addEventListener('click', (e) => {
    e.currentTarget.innerText = isRecording ? 'Start Recording' : 'Stop'
    isRecording ? recognition.stop() : recognition.start()
    isRecording = !isRecording
    counter = 0
  })

  recognition.onresult = (event) => {
    render.innerText = render.innerText + event.results[counter][0].transcript + '\n'
    counter++
  }
}

window.addEventListener('load', () => {
  init()
})