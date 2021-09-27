const AVAILABLE_SPEECH_RECOGNITION = !!window.webkitSpeechRecognition
const ENABLE_SPEECH_RECOGNITION = AVAILABLE_SPEECH_RECOGNITION && true

class SpeechRecognition {
  all = ''
  current = ''
  callback = null

  constructor(lang = 'fr-FR') {
    if (!ENABLE_SPEECH_RECOGNITION) return

    this.recognition = new window.webkitSpeechRecognition()
    this.recognition.lang = lang
    this.recognition.continuous = true
    this.recognition.interimResults = true

    window.tools = { recognition: this }

    this.recognition.onstart = () => {
      console.log('onstart')
    }

    this.recognition.onerror = (evt) => {
      console.log(evt.error)
    }

    this.recognition.onend = (evt) => {
      console.log('onend', evt)
      this.resetCurrent()
      this.recognition.start()
    }

    this.recognition.onresult = (evt) => {
      this.current = [...evt.results].map((r) => r[0].transcript).join('')
      if (this.callback) {
        this.callback(this.all + this.current)
      }
    }
  }

  resetCurrent() {
    if (this.current) {
      this.all += this.current + '. '
    }
    this.callback(this.all);
    this.current = ''
  }

  start() {
    if (ENABLE_SPEECH_RECOGNITION) {
      this.recognition.start()
    } else {
      console.log('Speech recognition is disabled')
    }
  }

  stop() {
    this.recognition.onend = null
    this.recognition.abort()
    this.resetCurrent()
  }

  onUpdate(callback) {
    this.callback = callback
  }

  addSentence(text) {
    this.all += text + ' '
    this.callback(this.all)
  }
}

const speech = new SpeechRecognition()

export default speech
