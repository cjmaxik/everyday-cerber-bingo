/**
 * Use this board for a web poster screenshots
 * Available ONLY via direct link (see `prompts.js`)
 */

import * as cerber from 'characters/cerber'

const youWinPrompts = {
  ...cerber.base,

  id: 'cerber',
  name: 'Cerber',

  prompts: Array.from({
    length: 48
  }, () => 'YOU WIN!')
}

export default {
  name: 'YOU WIN!',
  image: 'cerber/36percent.png',
  participants: [
    youWinPrompts
  ]
}
