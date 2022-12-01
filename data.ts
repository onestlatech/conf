import { Stage, Speaker, Talk } from '@lib/types';
import { ta } from 'date-fns/locale';

/*-
- [**Antonio A. Casilli**](https://www.casilli.fr/) : professeur de sociologie à l’Institut
Polytechnique de Paris, où il coordonne le groupe de recherche DiPLab (Digital Platform Labor). Il est parmi les
fondateurs du réseau INDL (International Network on Digital Labor).  
  En 2020 il a été conseiller éditorial de la série documentaire de France Télévisions 
“Invisibles – Les travailleurs du clic“, basée sur ses recherches.  
Parmi ses ouvrages :
  - _En attendant les robots_ (Seuil,  2019/Points 2021) 
  - _Qu'est-ce que le digital labor ?_ (INA, 2015; avec D. Cardon)
  - _Les liaisons numériques_ (Seuil, 2010)
- [**Hubert Guillaud**](https://twitter.com/hubertguillaud) : blogueur et journaliste.
- [**Guillaume Champeau**](https://www.champeau.info/) : directeur juridique et affaires publiques chez Clever Cloud, fondateur de Numérama.
- [**Marine Gandy**](https://twitter.com/mupsigraphy) : présidente de Drupal France, ingénieure chez Platform.sh, militante féministe.
- [**Magali Milbergue**](https://twitter.com/MagaliMilbergue) : membre du bureau de l'AFUP (Association Française des Utilisateurs de PHP), développeuse, formatrice, activiste et militante féministe.
- [**Marcy Charollois**](https://twitter.com/MarcyChama) : membre de Duchess, consultante, militante féministe.
- [**Emmanuelle Aboaf**](https://twitter.com/eaboaf_) : développeuse et spécialiste de l'accessibilité.
- **Camille Gaquiere** : Camille officie dans les métiers du web depuis plus de 10 ans, et plus particulièrement comme 
Product Owner depuis 2014. Poste qu’elle occupe aujourd’hui chez Les-Tilleuls.coop à Rennes.  
Elle aime concevoir des interfaces et rédiger de la doc (oui, c’est possible !) mais aussi le yoga et les jeux vidéos.
- [**Agathe Mametz**](https://www.amametz.fr/) : créatrice de jeux, fondatrice de Wiki Trans.
- [**Mehdi Medjaoui**](https://twitter.com/medjawii) : fondateur des **apidays** et d'oauth.io, co-fondateur du collectif OnEstLaTech.
- [**Sacha André**](https://twitter.com/sachaandre3309) : technicien du numérique, ancien candidat NUPES LFI de la 9ᵉ circo de Gironde.
- [**Kévin Dunglas**](https://dunglas.dev) : cofondateur de la société coopérative Les-Tilleuls.coop et du collectif OnEstLaTech.
- [**Anne Lesouef**](https://offensive.eco) : coprésidente de la confédération l’Offensive, militante syndicale et féministe.
- [**Hélène Maître Marchois**](https://twitter.com/HeleneMaitre) : cofondatrice de la coopérative Fairness et du collectif OnEstLaTech.
- [**Benjamin Sonntag**](https://fr.wikipedia.org/wiki/Benjamin_Sonntag_(ing%C3%A9nieur)) : Co-fondateur de la Quadrature du Net,
association de défense des libertés à l'ère numérique, et gérant d'Octopuce, hébergeur français rassemblant des informaticiens
""du temps long"", entreprise qui héberge des entreprise et aide des activistes.  
Concerné très tôt par les problèmes d'écologie politique, il propose aujourd'hui de réfléchir ensemble aux enjeux de 
l'écologie du numérique, en prenant en compte la complexité de nos sociétés, l'intrication de nos outils industriels,
la prise d'otage de notre cognition, et la difficulté qu'a l'humanité de revenir sur ses choix.
- **Thomas Luquet** : Syndicaliste OCTO.
- **Jerome Denis** : Chercheur, Auteur du "Soin des choses".
- **Alexandre Monnin** : Chercheur, auteur de "Heritage et Fermeture", intervant sur les Ingenieurs Deserteurs.
*/
const stages: Stage[] = [
  {
    name: 'Conférence onestla.tech',
    slug: 'main',
    schedule: [
      {
        title: 'Le soin de choses, ou qui maintient la société',
        description: '',
        start: '2022-12-15T09:50:00.00Z',
        end: '2022-12-15T10:10:00.00Z',
        speaker: [
          {
            name: "Jérôme Denis",
            bio: 'Chercheur, auteur du "Soin des choses"',
            title: '',
            slug: 'jerome-denis',
            twitter: '',
            github: '',
            company: 'Auteur',
            image: { url: '/default.png'},
            imageSquare: { url: '/default.png'}

          }
        ]
      },
      {
        title: 'Les ingénieurs déserteurs',
        description: '',
        start: '2022-12-15T10:10:00.00Z',
        end: '2022-12-15T10:30:00.00Z',
        speaker: [
          {
            name: 'Alexandre Monnin',
            bio: 'Chercheur, auteur de "Héritage et fermeture", intervenant sur les Ingénierus Déserteurs',
            title: '',
            slug: 'alexandre-monnin',
            twitter: '',
            github: '',
            company: 'Auteur',
            image: { url: '/default.png'},
            imageSquare: { url: '/default.png'}
          }
        ]
      },
      {
        title: 'Tech et Politique',
        description: '',
        start: '2022-12-15T10:30:00.00Z',
        end: '2022-12-15T10:50:00.00Z',
        speaker: [
          {
            name: 'Sacha André',
            bio: 'technicien du numérique, ancien candidat NUPES LFI de la 9ᵉ circo de Gironde',
            title: '',
            slug: 'sacha-andre',
            twitter: 'https://twitter.com/sachaandre3309',
            github: '',
            company: '',
            image: { url: '/default.png'},
            imageSquare: { url: '/default.png'}
          }
        ]
      },
      {
        title: 'Les algorithmes contre la Sociale',
        description: '',
        start: '2022-12-15T10:50:00.00Z',
        end: '2022-12-15T11:10:00.00Z',
        speaker: [
          {
            name: 'Hubert Guillaud',
            bio: 'blogueur, journaliste et auteur de "Coincés dans Zoom à qui profite le télétraval"',
            title: '',
            slug: 'hubert-guillaud',
            twitter: 'https://twitter.com/hubertguillaud',
            github: '',
            company: '',
            image: { url: '/default.png'},
            imageSquare: { url: '/default.png'}
          }
        ]
      },
      {
        title: 'En attendant les robots',
        description: '',
        start: '2022-12-15T11:10:00.00Z',
        end: '2022-12-15T11:30:00.00Z',
        speaker: [
          {
            name: 'Antonio A. Casilli',
            bio: 'professeur de sociologie à l’Institut\n' +
                'Polytechnique de Paris, où il coordonne le groupe de recherche DiPLab (Digital Platform Labor). Il est parmi les\n' +
                'fondateurs du réseau INDL (International Network on Digital Labor).  \n' +
                '  En 2020 il a été conseiller éditorial de la série documentaire de France Télévisions \n' +
                '“Invisibles – Les travailleurs du clic“, basée sur ses recherches.  \n' +
                'Parmi ses ouvrages :\n' +
                '  - En attendant les robots (Seuil,  2019/Points 2021) \n' +
                '  - Qu\'est-ce que le digital labor ? (INA, 2015; avec D. Cardon)\n' +
                '  - Les liaisons numériques (Seuil, 2010)',
            title: '',
            slug: 'antonio-casili',
            twitter: '',
            github: '',
            company: 'https://www.casilli.fr/',
            image: { url: '/default.png'},
            imageSquare: { url: '/default.png'}
          }
        ]
      },
      {
        title: 'Table ronde "Femmes dans la tech"',
        description: '',
        start: '2022-12-15T12:40:00.00Z',
        end: '2022-12-15T13:20:00.00Z',
        speaker: [
          {
            name: 'Marine Gandy',
            bio: 'présidente de Drupal France, ingénieure chez Platform.sh, militante féministe.',
            title: '',
            slug: 'marine-gandy',
            twitter: 'https://twitter.com/mupsigraphy',
            github: '',
            company: '',
            image: { url: '/default.png'},
            imageSquare: { url: '/default.png'}
          },
          {
            name: 'Magali Milbergue',
            bio: 'membre du bureau de l\'AFUP (Association Française des Utilisateurs de PHP), développeuse, formatrice, activiste et militante féministe.',
            title: '',
            slug: 'magali-milbergue',
            twitter: 'https://twitter.com/MagaliMilbergue',
            github: '',
            company: '',
            image: { url: '/default.png'},
            imageSquare: { url: '/default.png'}
          },
          {
            name: 'Marcy Charollois',
            bio: 'membre de Duchess, consultante, militante féministe.',
            title: '',
            slug: 'marcy-charollois',
            twitter: 'https://twitter.com/MarcyChama',
            github: '',
            company: '',
            image: { url: '/default.png'},
            imageSquare: { url: '/default.png'}
          },
          {
            name: 'Emmanuelle Aboaf',
            bio: 'développeuse et spécialiste de l\'accessibilité.',
            title: '',
            slug: 'emmanuelle-aboaf',
            twitter: 'https://twitter.com/eaboaf_',
            github: '',
            company: '',
            image: { url: '/default.png'},
            imageSquare: { url: '/default.png'}
          }
        ]
      },
      {
        title: 'Wiki Trans : l\'inclusion ouverte, libre et collaborative',
        description: '',
        start: '2022-12-15T13:20:00.00Z',
        end: '2022-12-15T13:40:00.00Z',
        speaker: [
          {
            name: 'Agathe Mametz',
            bio: 'créatrice de jeux, fondatrice de Wiki Trans.',
            title: '',
            slug: 'agathe-mametz',
            twitter: '',
            github: '',
            company: 'https://www.amametz.fr/',
            image: { url: '/default.png'},
            imageSquare: { url: '/default.png'}
          }
        ]
      },
      {
        title: 'Le modèle coopératif',
        description: '',
        start: '2022-12-15T13:40:00.00Z',
        end: '2022-12-15T14:00:00.00Z',
        speaker: [
          {
            name: 'Marion Agé',
            bio: 'Cogérante et CTO de Les-Tilleuls.coop',
            title: '',
            slug: 'marion-age',
            twitter: 'https://twitter.com/marion_age',
            github: 'https://github.com/K-mos',
            company: 'Les-Tilleuls.coop',
            image: { url: '/image1.png' },
            imageSquare: { url: '/image1.png' }
          },
          {
            name: 'Cécile Staehle',
            bio: 'Coopératrice en charge du développement RH chez Troopers',
            title: '',
            slug: 'cecile-staehle',
            twitter: '',
            github: 'mos',
            company: 'Troopers',
            image: { url: '/image1.png' },
            imageSquare: { url: '/image1.png' }
          }
        ]
      },
      {
        title: 'Données Personnelles',
        description: '',
        start: '2022-12-15T14:50:00.00Z',
        end: '2022-12-15T15:20:00.00Z',
        speaker: [
          {
            name: 'Guillaume Champeau',
            bio: 'directeur juridique et affaires publiques chez Clever Cloud, fondateur de Numérama.',
            title: '',
            slug: 'guillaume-champeau',
            twitter: '',
            github: '',
            company: 'https://www.champeau.info',
            image: { url: '/default.png'},
            imageSquare: { url: '/default.png'}
          }
        ]
      },
      {
        title: 'Ecologie Numérique concrète',
        description: '',
        start: '2022-12-15T15:20:00.00Z',
        end: '2022-12-15T15:40:00.00Z',
        speaker: [
          {
            name: 'Benjamin Sonntag',
            bio: 'Co-fondateur de la Quadrature du Net,\n' +
                'association de défense des libertés à l\'ère numérique, et gérant d\'Octopuce, hébergeur français rassemblant des informaticiens\n' +
                '""du temps long"", entreprise qui héberge des entreprise et aide des activistes.  \n' +
                'Concerné très tôt par les problèmes d\'écologie politique, il propose aujourd\'hui de réfléchir ensemble aux enjeux de \n' +
                'l\'écologie du numérique, en prenant en compte la complexité de nos sociétés, l\'intrication de nos outils industriels,\n' +
                'la prise d\'otage de notre cognition, et la difficulté qu\'a l\'humanité de revenir sur ses choix.',
            title: '',
            slug: 'benjamin-sonntag',
            twitter: '',
            github: '',
            company: 'https://fr.wikipedia.org/wiki/Benjamin_Sonntag_(ing%C3%A9nieur)',
            image: { url: '/default.png'},
            imageSquare: { url: '/default.png'}
          }
        ]
      },
      {
        title: 'L\'Offensive',
        description: '',
        start: '2022-12-15T15:40:00.00Z',
        end: '2022-12-15T16:00:00.00Z',
        speaker: [
          {
            name: 'Kévin Dunglas',
            bio: 'cofondateur de la société coopérative Les-Tilleuls.coop et du collectif OnEstLaTech.',
            title: '',
            slug: 'kevin-dunglas',
            twitter: 'https://twitter.com/dunglas',
            github: 'https://github.com/dunglas',
            company: 'Les-Tilleuls.coop',
            image: { url: '/image1.png' },
            imageSquare: { url: '/image1.png' }
          },
          {
            name: 'Anne Lesouef',
            bio: 'coprésidente de la confédération l’Offensive, militante syndicale et féministe.',
            title: '',
            slug: 'anne-lesouef',
            twitter: '',
            github: '',
            company: '',
            image: { url: '/image1.png' },
            imageSquare: { url: '/image1.png' }
          }
        ]
      }
    ]
  }
];

export default stages;

export function getSpeakers() {
  const speakers: Speaker[] = [];

  stages.forEach(stage =>
    stage.schedule.forEach(talk =>
      talk.speaker.forEach(speaker => {
        const talkCopy = {...talk};
        talkCopy.speaker = [];

        speaker.talk = talkCopy;
        speakers.push(speaker);
      })
    )
  );

  return speakers;
}
