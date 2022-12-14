import { Stage, Speaker } from '@lib/types';

const stages: Stage[] = [
  {
    name: 'Conférence onestla.tech',
    slug: 'main',
    schedule: [
      {
        title: 'Le soin de choses, ou qui maintient la société',
        description: `Qu’ont en commun une chaudière, une voiture, un panneau de signalétique, un smartphone, une cathédrale, une œuvre d’art, un satellite, un lave-linge, un pont, une horloge, un serveur informatique, le corps d’un illustre homme d’État, un tracteur ? Presque rien, si ce n’est qu’aucune de ces choses, petite ou grande, précieuse ou banale, ne perdure sans une forme d’entretien. Tout objet s’use, se dégrade, finit par se casser, voire par disparaître. Pour autant, mesure-t-on bien l’importance de la maintenance ? Contrepoint de l’obsession contemporaine pour l’innovation, moins spectaculaire que l’acte singulier de la réparation, cet art délicat de faire durer les choses n’est que très rarement porté à notre attention.`,
        start: '2022-12-15T09:50:00.00Z',
        end: '2022-12-15T10:15:00.00Z',
        speaker: [
          {
            name: "Jérôme Denis",
            bio: 'Chercheur, auteur du "Soin des choses"',
            title: 'Chercheur',
            slug: 'jerome-denis',
            twitter: 'https://twitter.com/jrmdns',
            github: '',
            company: 'CNRS - Mines ParisTech',
            image: { url: 'https://pbs.twimg.com/profile_images/1509556182/BlackCandy_400x400.jpg'},
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1509556182/BlackCandy_400x400.jpg'}
          }
        ]
      },
      {
        title: 'Quel numérique voulons-nous pour demain ?',
        description: `Le numérique est omniprésent dans nos vies pour communiquer, s'informer, consommer, organiser nos tâches du quotidien....

Aujourd'hui les grandes directions de développement des outils numérique sont gérées soit par la dynamique des grandes entreprises comme Google/Alphabet, IBM, Apple, Amazon, Microsoft ou Meta; ou par des politiques publiques qui font souvent fi des volontés des usagers de l'espace numérique et de ses techniciens.

Economie de l'attention développée par les grandes firmes, capitalisme de surveillance propulsée par les gouvernements du monde, une autre tech est elle possible au milieu de tout cela ?`,
        start: '2022-12-15T10:15:00.00Z',
        end: '2022-12-15T10:40:00.00Z',
        speaker: [
          {
            name: 'Sacha André',
            bio: 'Technicien du numérique, ancien candidat NUPES LFI de la 9ᵉ circo de Gironde',
            title: 'Militant',
            slug: 'sacha-andre',
            twitter: 'https://twitter.com/sachaandre3309',
            github: '',
            company: 'LFI / NUPES',
            image: { url: 'https://pbs.twimg.com/profile_images/1531605964805357568/VR6hYLpV_400x400.jpg'},
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1531605964805357568/VR6hYLpV_400x400.jpg'}
          }
        ]
      },
      {
        title: 'Les algorithmes contre la Sociale',
        description: 'Plus de détails bientôt',
        start: '2022-12-15T10:40:00.00Z',
        end: '2022-12-15T11:05:00.00Z',
        speaker: [
          {
            name: 'Hubert Guillaud',
            bio: 'blogueur, journaliste et auteur de "Coincés dans Zoom à qui profite le télétraval"',
            title: 'Blogueur, journaliste, auteur',
            slug: 'hubert-guillaud',
            twitter: 'https://twitter.com/hubertguillaud',
            github: '',
            company: 'Indépendant',
            image: { url: 'https://pbs.twimg.com/profile_images/595606190861721600/qX0u5un__400x400.jpg'},
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/595606190861721600/qX0u5un__400x400.jpg'}
          }
        ]
      },
      {
        title: `Qu'est-ce qu'une technologie vraiment éthique? Travail globalisé et durabilité environnementale`,
        description: 'Plus de détails bientôt',
        start: '2022-12-15T11:05:00.00Z',
        end: '2022-12-15T11:30:00.00Z',
        speaker: [
          {
            name: 'Antonio A. Casilli',
            bio: 'Professeur de sociologie à l’Institut\n' +
                'Polytechnique de Paris, où il coordonne le groupe de recherche DiPLab (Digital Platform Labor). Il est parmi les\n' +
                'fondateurs du réseau INDL (International Network on Digital Labor).  \n' +
                '  En 2020 il a été conseiller éditorial de la série documentaire de France Télévisions \n' +
                '“Invisibles – Les travailleurs du clic“, basée sur ses recherches.  \n' +
                'Parmi ses ouvrages :\n' +
                '  - En attendant les robots (Seuil,  2019/Points 2021) \n' +
                '  - Qu\'est-ce que le digital labor ? (INA, 2015; avec D. Cardon)\n' +
                '  - Les liaisons numériques (Seuil, 2010)',
            title: 'Chercheur',
            slug: 'antonio-casili',
            twitter: 'https://twitter.com/AntonioCasilli',
            github: '',
            company: 'Institut Polytechnique de Paris',
            image: { url: 'https://pbs.twimg.com/profile_images/1566140441820536833/eveaI1Kp_400x400.jpg'},
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1566140441820536833/eveaI1Kp_400x400.jpg'}
          }
        ]
      },
      {
        title: 'Pourquoi et comment en est on arrivés à créer OnEstLatech',
        description: 'Petite histoire de la politisation de la tech à la française',
        start: '2022-12-15T12:40:00.00Z',
        end: '2022-12-15T13:05:00.00Z',
        speaker: [
          {
            name: 'Hélène Maître-Marchois',
            bio: 'Cofondatrice de la coopérative Fairness et du collectif OnEstLaTech.',
            title: 'Cofondatrice',
            slug: 'helene-maitre-marchois',
            twitter: 'https://twitter.com/HeleneMaitre',
            github: 'https://github.com/hmmarchois',
            company: 'Fairness',
            image: { url: 'https://pbs.twimg.com/profile_images/1322541489663234049/zjp4TU69_400x400.jpg'},
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1322541489663234049/zjp4TU69_400x400.jpg'}
          }
        ]
      },
      {
        title: 'Les ingénieurs déserteurs',
        description: 'Plus de détails bientôt',
        start: '2022-12-15T13:05:00.00Z',
        end: '2022-12-15T13:30:00.00Z',
        speaker: [
          {
            name: 'Alexandre Monnin',
            bio: 'Chercheur, auteur de "Héritage et fermeture", intervenant sur les Ingénierus Déserteurs',
            title: 'Chercheur',
            slug: 'alexandre-monnin',
            twitter: 'https://twitter.com/aamonnz',
            github: '',
            company: 'ESC Clermont BS',
            image: { url: 'https://pbs.twimg.com/profile_images/1498284532222541827/lUkGTpCZ_400x400.jpg'},
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1498284532222541827/lUkGTpCZ_400x400.jpg'}
          }
        ]
      },
      {
        title: 'Wiki Trans : l\'inclusion ouverte, libre et collaborative',
        description: 'Plus de détails bientôt',
        start: '2022-12-15T13:30:00.00Z',
        end: '2022-12-15T13:55:00.00Z',
        speaker: [
          {
            name: 'Agathe Mametz',
            bio: 'Créatrice de jeux, fondatrice de Wiki Trans',
            title: 'Fondatrice',
            slug: 'agathe-mametz',
            twitter: 'https://twitter.com/MenicaFolden',
            github: 'https://github.com/AgatheMametz',
            company: 'Wiki Trans',
            image: { url: 'https://pbs.twimg.com/profile_images/1586503803112759298/kQWhlMiB_400x400.jpg'},
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1586503803112759298/kQWhlMiB_400x400.jpg'}
          }
        ]
      },
      {
        title: 'Table ronde "Femmes dans la tech"',
        description: 'Plus de détails bientôt',
        start: '2022-12-15T13:55:00.00Z',
        end: '2022-12-15T14:50:00.00Z',
        speaker: [
          {
            name: 'Marine Gandy',
            bio: 'Présidente de Drupal France, ingénieure chez Platform.sh, militante féministe',
            title: 'Présidente',
            slug: 'marine-gandy',
            twitter: 'https://twitter.com/mupsigraphy',
            github: 'https://github.com/Mupsi',
            company: 'Drupal France',
            image: { url: 'https://pbs.twimg.com/profile_images/1564987071084826626/yr9LOcgU_400x400.jpg'},
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1564987071084826626/yr9LOcgU_400x400.jpg'}
          },
          {
            name: 'Magali Milbergue',
            bio: 'Créatrice Web et activiste',
            title: 'Créatrice Web et activiste',
            slug: 'magali-milbergue',
            twitter: 'https://twitter.com/MagaliMilbergue',
            github: '',
            company: '',
            image: { url: 'https://pbs.twimg.com/profile_images/1576863897117757440/exzaC2wf_400x400.jpg'},
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1576863897117757440/exzaC2wf_400x400.jpg'}
          },
          {
            name: 'Marcy Charollois',
            bio: 'Membre de Duchess, consultante, militante féministe',
            title: 'Fondatrice',
            slug: 'marcy-charollois',
            twitter: 'https://twitter.com/MarcyChama',
            github: '',
            company: 'merci marcy',
            image: { url: 'https://pbs.twimg.com/profile_images/1597551893747752964/jO0pJOaK_400x400.jpg'},
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1597551893747752964/jO0pJOaK_400x400.jpg'}
          },
          {
            name: 'Emmanuelle Aboaf',
            bio: "Développeuse, spécialiste de l'accessibilité, #a11y ",
            title: 'developpeuse, accessibilité',
            slug: 'emmanuelle-aboaf',
            twitter: 'https://twitter.com/eaboaf_',
            github: '',
            company: 'DCube',
            image: { url: 'https://pbs.twimg.com/profile_images/1196540483864018944/5BN88UY6_400x400.jpg'},
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1196540483864018944/5BN88UY6_400x400.jpg'}
          },
          {
            name: 'Gaëlle Kubila',
            bio: "Étudiante en BUT informatique",
            title: 'Étudiante',
            slug: 'gaelle-kubila',
            twitter: 'https://twitter.com/RayonnanteGaga',
            github: '',
            company: 'BUT informatique',
            image: { url: 'https://pbs.twimg.com/profile_images/1533784421945311233/Cw9CTP6m_400x400.png'},
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1533784421945311233/Cw9CTP6m_400x400.png'}
          }
        ]
      },
      {
        title: 'Le modèle coopératif',
        description: `Comment s'organiser autrement au sein d'une entreprise privée ? Les coopératives proposent une façon efficace de redonner le contrôle de leur moyen de production aux travailleuses et travailleurs. Leur entreprise leur appartient, les décisions sont prises de manière démocratique, et les bénéfices générés sont répartis équitablement.

Cécile est coopératrice chez [Troopers](https://troopers.coop), une agence qui a évolué en Scop en 2021. 
Marion est coopératrice et co-gérante de [Les-Tilleuls.coop](https://les-tilleuls.coop), société coopérative créée 10 ans plus tôt. 
Deux exemples concrets de coopératives de la tech, avec pourtant un historique et une organisation différente, pour un même objectif : redonner le pouvoir à celles et ceux qui forment la vraie richesse de la société, lutter contre les discriminations et promouvoir une société libertaire et égalitaire.`,
        start: '2022-12-15T14:50:00.00Z',
        end: '2022-12-15T15:15:15.00Z',
        speaker: [
          {
            name: 'Marion Agé',
            bio: 'Cogérante et CTO de Les-Tilleuls.coop',
            title: 'Cogérante',
            slug: 'marion-age',
            twitter: 'https://twitter.com/marion_age',
            github: 'https://github.com/K-mos',
            company: 'Les-Tilleuls.coop',
            image: { url: 'https://pbs.twimg.com/profile_images/897752740956442624/tjkmlKbk_400x400.jpg' },
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/897752740956442624/tjkmlKbk_400x400.jpg' }
          },
          {
            name: 'Cécile Staehle',
            bio: 'Coopératrice en charge du développement RH chez Troopers',
            title: 'Coopératrice',
            slug: 'cecile-staehle',
            twitter: '',
            github: '',
            company: 'Troopers',
            image: { url: 'https://media-exp1.licdn.com/dms/image/C4D03AQGiYBMAZ9-fTw/profile-displayphoto-shrink_800_800/0/1643883516048?e=1675296000&v=beta&t=mT-nIRFNH_2jSNyxAu9GilOqldF_crjyo9df5-8kHtY' },
            imageSquare: { url: 'https://media-exp1.licdn.com/dms/image/C4D03AQGiYBMAZ9-fTw/profile-displayphoto-shrink_800_800/0/1643883516048?e=1675296000&v=beta&t=mT-nIRFNH_2jSNyxAu9GilOqldF_crjyo9df5-8kHtY' }
          }
        ]
      }, 
      {
        title: 'Ecologie Numérique concrète',
        description: `On entend souvent parler de l'écologie dans le monde numérique, sans trop savoir quoi faire pour que nos outils consomment moins de ressource et d'énergie.

Le problème est très complexe, tant l'imbrication  dans nos vies des outils numériques, visibles ou non, est importante.

Je vous propose de parcourir ensemble un chemin rappelant les principes de bases du numérique, de l'écologie, et enfin de l'écologie des outils numériques.

Nous arriverons rapidement à des propositions certaines évidentes, d'autres plus controversées...`,
        start: '2022-12-15T15:15:00.00Z',
        end: '2022-12-15T15:40:00.00Z',
        speaker: [
          {
            name: 'Benjamin Sonntag',
            bio: `Cofondateur de la Quadrature du Net, association de défense des libertés à l'ère numérique,
et gérant d'Octopuce, hébergeur français rassemblant des informaticiens "du temps long", entreprise qui héberge des entreprise et aide des activistes.

Concerné très tôt par les problèmes d'écologie politique, Benjamin propose aujourd'hui de réfléchir ensemble aux enjeux de l'écologie du numérique,
en prenant en compte la complexité de nos sociétés, l'intrication de nos outils industriels, la prise d'otage de notre cognition, et la difficulté qu'a l'humanité de revenir sur ses choix.`,
            title: 'Cofondateur',
            slug: 'benjamin-sonntag',
            twitter: 'https://twitter.com/vincib',
            github: 'https://github.com/vincib',
            company: 'La Quadrature du Net',
            image: { url: 'https://pbs.twimg.com/profile_images/762745456443133952/htyRX-bN_400x400.jpg'},
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/762745456443133952/htyRX-bN_400x400.jpg'}
          }
        ]
      },
      {
        title: 'Ne vous lamentez pas, organisez-vous!',
        description: `La tech a pris le pouvoir. Au cours des dernières décennies, le secteur des nouvelles technologies est devenu la locomotive de l’économie mondiale. La révolution de l’IT a permis à quelques ingénieurs devenus capitaines d’industrie de s’enrichir comme jamais vu auparavant dans l’histoire de l’humanité, et de le prendre le contrôle de l’ensemble des moyens de communication de la planète, donc de sa vie politique.

Mais la tech a pris le pouvoir sur un monde mourant, sur un brasier qui ne cesse de s’étendre sous nos yeux : les cataclysmes climatiques s’enchaînent, les êtres vivants s’éteignent en masse, la pollution, la sécheresse, la montée des océans rendent de plus en plus de régions inhabitables.

Les ingénieuses et les ingénieurs des années 80 avaient rêvé la technologie comme libératrice. Ils ont inventé le logiciel libre, le web, les commons… Mais les plus organisés d’entre-eux ont détruit cet espoir d’émancipation dans l’unique but de faire le maximum de profits possible : surveillance de masse, manipulation de l’opinion à l’échelle planétaire, algorithmes et IA conçus pour perpétuer et accélérer l’exploitation et le racisme…

C’est pourtant cette course irraisonnée aux profits qui est en train de détruire la planète. Notre seul espoir c’est de produire moins, de produire mieux, de produire plus utile et de contrôler cette production démocratiquement pour la mettre au service du bien commun. En d’autres termes : sauver la planète c’est bâtir sans attendre le communisme libertaire.

Aujourd’hui encore, les travailleuses et les travailleurs de la tech sont en mesure de prendre le pouvoir. Ils ont tous les atouts en main : ils disposent des méthodes les plus efficaces, de l’ingéniosité nécessaire et de la capacité à automatiser tout ce qui peut l’être. Encore faudrait-il qu’ils comprennent que les milliardaires (qui les licencient en masse comme de vulgaires ouvriers d’antan) ne sont pas leurs alliés, et qu’ils s’organisent pour - cette fois-ci - vraiment changer le monde.
        
« Don’t mourn, organize! »`,
        start: '2022-12-15T15:40:00.00Z',
        end: '2022-12-15T16:05:00.00Z',
        speaker: [
          {
            name: 'Kévin Dunglas',
            bio: 'Cofondateur de la société coopérative Les-Tilleuls.coop et du collectif OnEstLaTech.',
            title: 'Cofondateur',
            slug: 'kevin-dunglas',
            twitter: 'https://twitter.com/dunglas',
            github: 'https://github.com/dunglas',
            company: 'Les-Tilleuls.coop',
            image: { url: 'https://pbs.twimg.com/profile_images/1559818060424515585/IykzNWKg_400x400.jpg' },
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1559818060424515585/IykzNWKg_400x400.jpg' }
          },
          {
            name: 'Anne Lesouef',
            bio: 'Coprésidente de la confédération l’Offensive, militante syndicale et féministe.',
            title: 'Coprésidente',
            slug: 'anne-lesouef',
            twitter: 'https://twitter.com/OffensiveEco',
            github: '',
            company: `L'Offensive`,
            image: { url: 'https://pbs.twimg.com/profile_images/1438224230320152581/jOD-W7XT_400x400.jpg' },
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1438224230320152581/jOD-W7XT_400x400.jpg' }
          }
        ]
      },
      {
        title: 'Assemblée Générale du collectif',
        description: `Une AG pour déterminer la direction que doit prendre le mouvement.`,
        start: '2022-12-15T16:05:00.00Z',
        end: '2022-12-15T17:00:00.00Z',
        speaker: [
          {
            name: 'Collectif onestla.tech',
            bio: `Parce-qu'une autre tech est possible, nous sommes des travailleuses et travailleurs du numérique qui s'organisent !`,
            title: 'Collectif',
            slug: 'onestlatech',
            twitter: 'https://twitter.com/OnEstLaTech',
            github: 'https://github.com/onestlatech',
            company: 'onestla.tech',
            image: { url: 'https://pbs.twimg.com/profile_images/1204059183085244426/6p_G32V3_400x400.png' },
            imageSquare: { url: 'https://pbs.twimg.com/profile_images/1204059183085244426/6p_G32V3_400x400.png' }
          },
        ],
      },
    ],
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
