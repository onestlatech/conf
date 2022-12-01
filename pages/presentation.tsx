/**
 * Copyright 2022 onestla.tech
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 import Page from '@components/page';
 import Layout from '@components/layout';
 import Header from '@components/header';
 import ReactMarkdown from 'react-markdown';
 import cn from 'classnames';
 import styles from './presentation.module.css';

 import { META_DESCRIPTION } from '@lib/constants';
 
 export default function Presentation() {
   const meta = {
     title: 'Présentation - conférence onestla.tech',
     description: META_DESCRIPTION
   };
   return (
     <Page meta={meta}>
       <Layout>
         <Header hero="Présentation" description="Mettre l’automatisation au service du bien commun" />

         <ReactMarkdown className={cn(styles.content)}>{`
Ça fait un moment que c'était dans les cartons, et ça va enfin se faire :
[**le collectif onestla.tech**](https://onestla.tech) (collectif militant de travailleuses et travailleurs de la tech formé
pendant la lutte contre la réforme des retraites) va organiser sa première conférence
le 15 décembre à la Cité des sciences et de l'industrie de Paris de 11h à 17h30 et se finira par une AG.

La conférence sera gratuite, ouverte à toutes et tous, et en français.

Cette 1ère conférence onestla.tech aura lieu en marge des [apidays](https://www.apidays.global/paris/), une conférence tech internationale qui attire 3 000 personnes
chaque année et qui parle de logiciel et de transformation numérique, qui nous fait le plaisir de nous héberger.

L'entrée aux apidays donnera également accès à la conférence onestla.tech, c’est donc l’occasion aussi de convaincre de nouveaux membres à rejoindre le mouvement !

Les sujets abordés lors de la conférence reprendront les différents thèmes
sur lesquels s'investit le collectif depuis 3 ans :

- Bâtir une société écologiste, égalitaire et autogestionnaire dans laquelle la technologie
  servirait l'émancipation des femmes et des hommes : automatiser pour travailler
  et produire moins, mais mieux, pour polluer moins et tenter de réparer les dégâts causés
  à l’environnement par le capitalisme.
- Organiser les travailleuses et travailleurs du secteur du numérique - moteur de
  l'économie mondiale - pour qu'ils reprennent le pouvoir sur ce qu’ils produisent des mains
  de l’oligopole des BigTech qui s’en est accaparé.
- Promouvoir et développer le logiciel libre, les communs, le web décentralisé et les outils
  garantissant la confidentialité et l'anonymat pour lutter contre le capitalisme de surveillance
  et la technopolice.
- Lutter contre les discriminations sexistes, racistes, homophobes (et autres) qui sont encore
  trop courantes au sein de la tech et qui s’appliquent désormais de manière algorithmique à cause
  de biais désormais inclus dans les algorithmes et l’IA.
- Lutter contre les algorithmes prédateurs conçus pour exploiter toujours plus les travailleuses
  et les travailleurs, surveiller, ficher, répandre le racisme et la xénophobie, favoriser
  l'extrême-droite et d'une manière générale, défendre les intérêts des dominants.
- Utiliser la technologie de manière raisonnée pour des usages raisonnés, et réparer ce qui peut
  l'être plutôt que pour consommer plus d’énergie, plus de ressources et détruire encore plus
  rapidement l’environnement.
- Populariser la pratique de l'autogestion et de la démocratie directe, et utiliser les outils
  numériques pour y arriver.
- Tisser des liens et des solidarités avec les autres groupes et personnes qui se rendent compte
  que l’humanité fonce droit dans le mur et qui veulent agir vite et fort pour éviter le crash.

À la fin de la journée se déroulera une Assemblée Générale visant à donner les grandes
orientations du collectif pour l’année à venir.  
Nous t'invitons également à y participer !

**PS**: Le collectif avait animé une discussion sur le thème "Comment (re)mettre la tech au service du bien commun ?" lors de la API Platform Conference 2022.
[Regardez l'enregistrement](https://api-platform.com/con/2022/conferences/comment-remettre-la-tech-au-service-du-bien-commun/) pour découvrir à quoi vous attendre.`}
         </ReactMarkdown>
       </Layout>
     </Page>
   );
 }
