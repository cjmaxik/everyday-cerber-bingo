export const base = {
  id: 'chat',
  name: 'Chat',
  color: '#7f59b6',
  assetsFolder: 'chat',
  image: 'minawan.png',
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
 *
 * ALWAYS check if the emote is not mentioned in the character's `chatPrompts` array.
 */

export const chatPrompts = [
  'AINTNOWAY',
  'Aloo',
  'BASED',
  'Bedge',
  'BOW',
  'British',
  'cerberASSEMBLE',
  'cerberChmeese',
  'cerberPause',
  'cerberPuddle',
  'cerberSCATTER',
  'Clueless',
  'Copege',
  'Corpa',
  'Deadge',
  'dogeDance',
  'dogJAM',
  'EDM',
  'Erm',
  'FlowerCatJAM',
  'Flushed',
  'freddyPls',
  'GIGABER',
  'GOODWAN',
  'ICANT',
  'LETSGO',
  'Listening',
  'Madge',
  'mhm',
  'monkaW',
  'NOOOO',
  'NOPE',
  'NOTED',
  'NOWAYING',
  'PANIC',
  'pogs',
  'RAGEY',
  'ratJAM',
  'RIPBOZO',
  'Sadge',
  'SNIFFA',
  'SoCute',
  'Sure',
  'Susge',
  'uuh',
  'xdx',
  'YES',
  'YIPPIE'
].map(x => `chat spams :${x.replaceAll(' ', ': :')}:`)

export default {
  ...base,

  prompts: [
    ...chatPrompts
  ]
}
