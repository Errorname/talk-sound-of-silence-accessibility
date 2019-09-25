const speech = new SpeechRecognition()

speech.lang = 'fr-FR'
speech.continuous = true
speech.interimResults = true

speech.onresult = evt => {
  const text = [...evt.results].map(r => r[0].transcript).join('')

  console.log('Current result: ' + text)
}

speech.start()
