// @ts-check

/**
 * Use this board to test emotes and settings
 * Available ONLY via direct link (see `prompts.js`)
 */

import * as chat from 'characters/chat.js'

const emoteTest = {
  ...chat.base,

  name: 'Emote test',

  prompts: Array.from({
    ...chat.chatPrompts,
    length: 48
  })
}

export default {
  name: 'Emote test',
  image: 'chat/chatting.png',
  participants: [
    emoteTest
  ]
}
