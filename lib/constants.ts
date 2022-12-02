/**
 * Copyright 2020 Vercel Inc.
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

export const SITE_URL = 'https://conf.onestla.tech';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'OnEstLaTech';
export const BRAND_NAME = 'onestla.tech ✊';
export const SITE_NAME_MULTILINE = ['1ère conférence', 'onestla.tech'];
export const SITE_NAME = '1ère conférence onestla.tech';
export const META_DESCRIPTION =
  '1ère conférence du collectif onestla.tech le 15 décembre à la Cité des sciences : mettre la technologie au service du bien commun';
export const SITE_DESCRIPTION =
  'Mettre la technologie au service du bien commun.';
export const DATE = '15 décembre 2022';
export const SHORT_DATE = '15/12';
export const FULL_DATE = '15 décembre';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.apidays.global/code-of-conduct/';
export const REPO = 'https://github.com/onestlatech/conf';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Présentation',
    route: '/presentation'
  },
  {
    name: 'Intervenant•es',
    route: '/speakers'
  },
  {
    name: 'Programme',
    route: '/programme'
  },
  {
    name: 'Le collectif',
    route: 'https://onestla.tech'
  },
];

export type TicketGenerationState = 'default' | 'loading';
