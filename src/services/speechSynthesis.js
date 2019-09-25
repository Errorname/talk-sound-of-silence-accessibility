class SpeechSynthesis {
  voices = []

  constructor(name) {
    this.defaultVoice = name
    window.speechSynthesis.onvoiceschanged = () => {
      this.voices = window.speechSynthesis.getVoices()
    }
  }

  getVoice(name) {
    return this.voices.filter(v => v.name === name)[0]
  }

  speak(text, { pitch, rate, name } = {}) {
    const voice = this.getVoice(name || this.defaultVoice)

    const sentence = new SpeechSynthesisUtterance(text)
    sentence.voice = voice
    if (pitch) sentence.pitch = pitch
    if (rate) sentence.rate = rate

    window.speechSynthesis.speak(sentence)

    return new Promise(resolve => {
      const wait = () => {
        if (!window.speechSynthesis.speaking) resolve()
        setTimeout(wait, 100)
      }

      wait()
    })
  }
}

const speech = new SpeechSynthesis('Thomas')

export default speech
