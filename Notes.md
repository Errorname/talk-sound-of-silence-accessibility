# Notes

## Before

- Set VSCode in light mode
- Open presentation
- Open https://zenika.faq.team
- Open https://nantes.zenika.com
- Go into "Do Not Disturb" mode

## During

**Introduction**

- Tell a Story:
  - Bon, il faut le dire. Je suis privilégié. Je suis un homme, blanc, jeune, avec un salaire confortable. Et surtout, je n'ai aucun handicap, quel qu'il soit.
  - C'est cool, je ne vais pas m'en plaindre. Le problème, c'est que quand on est privilégié, on a en pas forcément conscience. Alors, quand j'ai commencé à développer dans le web, les problèmes d'accessibilités, c'était pas forcément ma priorité.
  - Et puis, petit à petit, à force d'en entendre parler, j'ai commencé à m'y intéresser, et me rendre compte que l'accessibilité, ça nous concerne tous en fait! Et l'innovation dans ce domaine avance régulièrement !
  - Donc, pour ce talk, j'avais envie de vous faire découvrir un peu les nouveautés, que ça soit au niveau des outils, ou au niveau des APIs.
  - Mais avant ça, reprenons les bases:

**Qu'est ce qu'une déficience ?**

- Selon Wikipédia: (_définition_)
- Avec des exemples, ça donne ça!
- Bon, c'est bien de savoir ça, mais on veut des faits:

**Combien sont concernés ?**

- Selon l'OMS, il y aurait dans le monde 253 millions de personnes présentant une déficience visuelle et 360 millions présentant une déficience auditive.
- Pour donner un ordre de grandeur, il s'agit d'une personne sur 20
- Et ça ne concerne que ceux qui ont des déficiences permanentes !
- Selon les dernières estimations, ce serait 2 à 3 fois plus que d'utilisateurs d'Internet Explorer.

- Bon. Maintenant qu'on comprend mieux ce que c'est, et quel importance cela représente: comment faire pour adapter au mieux nos applications à leurs besoins ?

**La référence de l'accessibilité: WCAG**

- Et bien, on peut se tourner vers les WCAG (Web Content Accessibility Guidelines), mis en place par le WAI (Web Accessibility Initiative) qui est un sous-groupe du W3C (World Wide Web Consortium)
- Les WCAG sont un ensemble de règles applicables à tout type d'application pour définir son niveau d'accessibilité: Allant de A pour le minimum requis à AAA pour la meilleure accessibilité. La dernière version des WCAG, la 2.1 est sortie en Juin 2018, il y a seulement un an.
- En tout, il y a 78 règles répartis entre les 3 niveaux. Cela va du simple texte alternatif pour les images à la longueur des timeouts des notifications et alertes.

- Alors, j'en entend déjà certains parmis vous dire: "Ouhlala, mais j'ai pas le temps de lire toutes les règles !". Et ça tombe bien, car je vais maintenant vous montrer des outils pour vous aider à atteindre cet objectif !

**Microsoft Accessibility Insights**

- Et on commence avec Accessibility Insights de Microsoft !
- Fraichement lancé en Décembre 2018, Accessibility Insights est une extension de navigateur permettant de vérifier l'accessibilité d'une application web.
- Cette outil se démarque par sa simplicité d'utilisation permettant aux développeurs de checker la majorité des erreurs d'accessibilité en moins de 5 mins.
- Accessibility Insights permet aussi de tester l'ensemble des règles d'accessibilités des WCAG 2.1 pour un niveau AA.
- Comme à son habitude depuis quelques temps, Microsoft a open-sourcé l'extension sur Github pour collaborer avec la communauté.
- Enfin, l'outil rajoute des petits helpers visuels pour aider au débuggage de l'accessibilité des applications
- D'ailleurs, on va tester ça tout de suite, it's demo time ! (https://faq.team.zenika / Assessment)

- Comme on vient de le voir, c'est vraiment très complet. Mais j'en entend encore certains parmis vous dire: "Je n'ai toujours pas assez de temps pour vérifier toutes les règles!". Et bien, encore une fois, ça tombe bien, car je vais maintenant vous montrer un autre outil:

**Lighthouse**

- Lighthouse, par Google, est une extension permettant de faire des audits d'une application web. Pas seulement d'accessibilité, mais aussi de performance, des bonnes pratiques, de SEO et de PWA. A la différence des Accessibility Insights, LightHouse ne vérifie que ce qui est vérifiable de manière automatique.
- Il donne un score dans chacune de ses catégories. Par exemple ici, avec le site de Zenika Nantes. (Peut mieux faire !)
- Evidemment, le but est d'attendre le 100 dans chaque catégorie. Bento-starter est à ça d'y arriver !
- Là où ça devient intéressant, c'est qu'il est possible de télécharger Lighthouse pour scripter la vérification, ce qui peut être utile pour de l'intégration continue !
- Et on va tester ça tout de suite, it's demo time again ! (https://nantes.zenika.com / Extension puis lighthouse puis lighthouse-ci)

- `lighthouse https://nantes.zenika.com --only-categories=accessibility --view`
- `lighthouse-ci https://nantes.zenika.com --accessibility=100 -s`

- Bon, c'est bien sympa tout ça, mais ça manque un peu de code dans ce talk ! Heureusement, je vais maintenant vous montrer 3 apis HTML et JS qui peuvent intervenir dans l'accessibilité.

**Speech Recognition API**

- On commence avec la Speech Recognition API. Comme son nom l'indique, cette API va permettre de retranscrire les phrases que j'énonce dans le micro.
- Vous l'aurez peut-être compris, c'est cette API que j'utilise dans le support de ce talk pour le rendre accessible aux personnes possédant des déficiences auditives.
- Voilà comment elle fonctionne: ...

- Maintenant, passons à l'api suivante:

**SpeechSynthesis API**

- Cette API permet d'utiliser une voix de synthèse pour énoncer du texte. Un autre nom utilisé pour ce genre de fonctionnalité, c'est le "Text to Speech".
- Pour changer, ce ne sera pas moi qui vais vous parler de cette API, mais Thomas. \*clic\*

- Passons à la 3ème API que je vais vous présenter:

**HTML5 Video Subtitles**

- Quand on parle de sous-titre, on pense aux sous-titre pour regarder des films ou séries dans des langues étrangères. Mais ce n'est pas leur seule utilité !
- Pour revenir sur les différents types de déficiences, un cas que l'on peut régulièrement rencontrer est la déficience visuelle de part la situation: quand on regarde une vidéo dans les transports en commun et qu'on a oublié ses écouteurs par exemple. Dans ces cas là, des sous-titres peuvent vraiment nous être utile.
- Pour ce talk, je vais prendre l'exemple d'une vidéo tiré du film "Sintel", un Open Movie créé par la Blender Fondation.
- Pour le rajouter à mon application: ... (explication de code)

- Et ce n'est pas tout, on peut aussi styliser les sous-titres ! (background-color: red)

**The End**
