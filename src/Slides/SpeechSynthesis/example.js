const allVoices = window.speechSynthesis.getVoices()

// Alex (en-US), Alice (it-IT), Amelie (fr-CA), ... , Thomas (fr-FR), ...

const voice = allVoices.filter(v => v.name === 'Thomas')

const sentence = new SpeechSynthesisUtterance(text)

sentence.voice = voice
sentence.pitch = 1
sentence.rate = 1

window.speechSynthesis.speak(sentence)

// Et voilà !
