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
 * Emotes from the channel are populated from 7TV using `npm run emotePrep` script.
 * See `emotePrep.js` for more details.
 */

// TODO: add back support for more than one emote in the prompt
import emotesList from 'helpers/emotesList.json'

export const chatPrompts = Object.keys(emotesList)
  .map(emote => `chat spams :${emote}:`)

export default {
  ...base,

  prompts: [
    ...chatPrompts
  ]
}
