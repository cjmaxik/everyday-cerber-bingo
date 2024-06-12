/**
 * Use this board to test emotes and settings
 * Available ONLY via direct link (see `prompts.js`)
 */

import * as chat from 'characters/chat'
import emotesList from 'helpers/emotesList.json'

const overridenEmotes = []
Object.entries(emotesList).forEach(([key, value]) => {
  if (value.includes('_')) {
    overridenEmotes.push(key)
  }
})

console.log(overridenEmotes)

const emoteTest = {
  ...chat.base,

  name: 'Emotes',

  prompts: Array.from({
    ...overridenEmotes.map(emote => `:${emote}:`),
    length: 25
  })
}

console.log(emoteTest)

export default {
  name: 'Frame override test',
  image: 'chat/chatting.png',
  participants: [
    emoteTest
  ]
}
