const ss = 'SpihitchSynthaisihiss'
const ssu = ss + 'Uttérennss'

const lines = [
  {
    phon: "Bonjour ! Moi, c'est Thomas.",
    text: "Bonjour ! Moi, c'est Thomas.",
    after: 0
  },
  {
    phon: "Et je suis une voix synthétique associée à l'A.P.I",
    text: "Et je suis une voix synthétique associée à l'API.",
    after: 1000
  },
  {
    phon: `Il existe d'autres voix comme la mienne.`,
    text: "Il existe d'autres voix comme la mienne.",
    after: 0
  },
  {
    phon: `Et je vais vous expliquer comment les utiliser grâce à l'A.P.I ${ss}`,
    text: "Et je vais vous expliquer comment les utiliser grâce à l'API SpeechSynthesis.",
    after: 1000
  },
  {
    phon: "Tout d'abord, il faut récupérer la liste des voix disponibles avec gaitVoïsses",
    text: "Tout d'abord, il faut récupérer la liste des voix disponibles avec getVoice().",
    after: 500
  },
  {
    phon: 'Puis, on sélectionne la voix qui nous convient.',
    text: 'Puis, on sélectionne la voix qui nous convient.',
    after: 2000
  },
  {
    phon: `Ensuite, il faut créer une nouvelle instance de ${ssu}`,
    text: 'Ensuite, il faut créer une nouvelle instance de SpeechSynthesisUtterance.',
    after: 1000
  },
  {
    phon: 'On lui donne en paramètres, le texte.',
    text: 'On lui donne en paramètres le texte.',
    after: 1000
  },
  {
    phon:
      'On lui assigne ensuite la voix choisie et optionnellement le ton et la vitesse de la voix.',
    text:
      'On lui assigne ensuite la voix choisie et optionnellement le ton et la vitesse de la voix.',
    after: 1000
  },
  {
    phon: `Enfin, il nous reste à donner notre instance de ${ssu} à l'A.P.I ${ss}, avec la méthode speak`,
    text:
      "Enfin, il nous reste à donner notre instance de SpeechSynthesisUtterance à l'API SpeechSynthesis avec la méthode speak().",
    after: 1000
  },
  {
    phon: 'Et voilà!',
    text: 'Et voilà!',
    after: 1000
  },
  {
    phon: 'Cette A.P.I est disponible sur la majorité des navigateurs web.',
    text: 'Cette API est disponible sur la majorité des navigateurs web.',
    after: 500
  },
  {
    phon: 'Sauf Internet Explorer bien sûr!',
    text: 'Sauf Internet Explorer bien sûr!',
    after: 0
  },
  {
    phon: 'Ah ah, ah ah, ah ah',
    text: 'Ah ah ah.',
    after: 1000
  },
  {
    phon: "Merci de m'avoir écouté, je vais maintenant laisser Thibaud, continuer sa présentation",
    text: "Merci de m'avoir écouté, je vais maintenant laisser Thibaud continuer sa présentation.",
    after: 1000
  }
]

export default lines
