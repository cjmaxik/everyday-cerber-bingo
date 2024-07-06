// @ts-check
const fs = require('fs')
const path = require('path')

const assetsPath = path.resolve(__dirname, '../src/helpers/emotesList.json')
const apiUrl = 'https://7tv.io/v3/emote-sets/661eb372740d0db81544b867'

/**
 * Typical workflow:
 * 1. Add `staticEmoteOverrides`.
 * 2. Add `removeEmotes`.
 * 3. Run `npm run emotePrep`
 */

/**
 * STATIC EMOTE OVERRIDE:
 * Use this if the first frame of the animation does not quite represent the emote.
 * You can test if the override works well by using the `/dev/emoteTest` board.
 * Use Frames feature on `ezgif.com` to get the list of frames (frame number - 1).
*/
const staticEmoteOverrides = {
  ASSEMBLE: 104,
  AWOO: 47,
  British: 53,
  catKISS: 35,
  cerberLore: 149,
  cerberPuddle: 170,
  docnotL: 22,
  FlowerCatJAM: 42,
  freddyPls: 146,
  GOODWAN: 11,
  Listening: 105,
  NO: 23,
  NOWAYING: 25,
  PANIC: 11,
  pogs: 42,
  SCATTER: 21,
  YES: 24
}

/**
 * REMOVE EMOTES:
 * Use this if you want to filter emotes from the list.
 */
const filterList = [
  // the filename cannot have `:`
  ':0',

  // too much frames
  'Dance',
  'TIMER',

  // already have an applicable emote
  'GIGACHAD',
  'happie',
  'peepoShy',
  'Yesyes',
  'TUCKK',

  // not needed
  '4Evil',
  'BLELELE',
  'JUDGE',
  'catPls',
  'cerberChmeese',
  'cerberOnline',
  'ekiDay',
  'FLASHBANG',
  'GroupStripp',
  'LUBBERS',
  'lurkk',
  'minaSquish',
  'MyHonestReaction',
  'ohCry',
  'okak',
  'ono',
  'poggcrazy',
  'sajj',
  'sitt',
  'Smelly',
  'stripp',
  'YIPPIE',
  'LickTheMods',
  'OFFLINECHAT'
]

const main = async () => {
  const response = await fetch(apiUrl)
  const data = await response.json()

  const emotes = data.emotes
    .filter((item) => !filterList.includes(item.name))
    .sort((a, b) => a.name.localeCompare(b.name))

  const emoteSet = emotes.reduce((acc, item) => {
    if (staticEmoteOverrides[item.name]) {
      acc[item.name] = `${item.id}_${staticEmoteOverrides[item.name]}`
    } else {
      acc[item.name] = item.id
    }

    return acc
  }, {})

  fs.writeFileSync(assetsPath, JSON.stringify(emoteSet, null, 2))

  console.log('`emotesList.json` has been updated.')
}

main()
