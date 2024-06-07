// @ts-check
// eslint-disable-next-line no-unused-vars

// see `./emotes.md` for details
import emotes from './emotesList.json'
const assetsURL = '/assets/images/emotes'

/**
 * Generate an emote object with URLs from the list
 * @param {string} name Emote name
 * @returns {import('types.d.js').Emote} Emote object or null
 */
export const generateEmote = (name) => {
  const emoteId = emotes[name]
  if (!emoteId) return null

  return {
    name,
    src: {
      animated: `${assetsURL}/${name}_a.webp`,
      static: `${assetsURL}/${name}_s.webp`
    }
  }
}

/**
 * Prepare base text
 * @param {string} text Initial prompt text
 * @returns {string} Base text
 */
export const prepareBaseText = (text) => {
  return text
    // remove emote wrappers
    .replaceAll(':', '')

  // replace long emote names
  // .replace('neuroplushsittingverycomfortablewhilesheroastsaporowithherfriends', 'neuroPlush with Poro')
  // .replace('spams reallyGunPull vedalPls', 'shoots Vedal')
  // .replace('AnnyLebronJam', 'Anny LebronJam')
}
