import * as cerber from 'characters/cerber'

export const base = {
  ...cerber.base,

  id: 'chat',
  name: 'Chat',
  color: '#9146FF',
  assetsFolder: 'chat',
  image: 'chatting.png',
  sounds: [
    'generic.mp3'
  ]
}

/**
 * HOW TO USE:
 * 2. Go to https://7tv.app/emotes and search for an emote
 * 3. Copy the emote ID (random text at the end of URL) and the exact emote name
 * 4. Paste them in `emotesList.json`
 * 5. Run `npm run emotePrep` to obtain new emotes
 * 6. Use `/emoteTest` board to evaluate the result
 * Please keep the list in alphabetical order.
 *
 * STATIC EMOTE OVERRIDE:
 * - Add `_` followed by the number of the frame at the end of the emote ID.
 * - You will have to play with the numbers to choose a perfect frame number.
 */

export const chatPrompts = [
  'NOOOO',
  'SNIFFA',
  'RAGEY',
  'ratJAM',
  'NOWAYING',
  'BOW',
  'SoCute',
  'SCATTER',
  'ASSEMBLE',
  'EDM',
  'Erm',
  'YIPPIE',
  'Susge',
  'YES',
  'Yesyes',
  'LETSGO',
  'dogeDance',
  'Smelly',
  'RIPBOZO',
  'Corpa',
  'freddyPls',
  'mhm',
  'NOTED',
  'uuh',
  'Flushed',
  'Pog',
  'NOPE',
  'FlowerCatJAM',
  'OMEGALUL',
  'PepeLaugh',
  'Aloo',
  'PANIC',
  'Sure',
  'Deadge',
  'British',
  'Copege',
  'xdx',
  'AINTNOWAY',
  'monkaW',
  'YEP',
  'peepoShy',
  'Sadge',
  'pogs',
  'Clueless',
  'dogJAM',
  'BASED',
  'Listening',
  'PETTHEMODS',
  'GIGACHAD',
  'Bedge',
  'LUBBERS',
  'Madge',
  'ICANT',
  'cerberPause',
  'cerberSCATTER',
  'cerberASSEMBLE',
  'GOODWAN',
  'cerberChmeese',
  'FLASHBANG',
  'minaSquish',
  'GIGABER',
  'cerberPuddle'
].map(x => `chat spams :${x.replaceAll(' ', ': :')}:`)

export default {
  ...base,

  prompts: [
    ...chatPrompts
  ]
}
