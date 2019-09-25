class SpeechRecognition {
  all = ''
  current = ''
  callback = null

  constructor(lang = 'fr-FR') {
    this.recognition = new window.webkitSpeechRecognition()
    this.recognition.lang = lang
    this.recognition.continuous = true
    this.recognition.interimResults = true

    window.tools = { recognition: this }

    this.recognition.onstart = () => {
      console.log('onstart')
    }

    this.recognition.onerror = evt => {
      console.log(evt.error)
    }

    this.recognition.onend = evt => {
      this.resetCurrent()
      this.recognition.start()
    }

    this.recognition.onresult = evt => {
      this.current = [...evt.results].map(r => r[0].transcript).join('')
      if (this.callback) {
        this.callback(this.all + this.current)
      }
    }
  }

  resetCurrent() {
    this.all += this.current + '. '
    this.current = ''
  }

  start() {
    this.recognition.start()
  }

  stop() {
    this.recognition.onend = null
    this.recognition.stop()
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
