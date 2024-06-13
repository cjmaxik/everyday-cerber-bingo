import { mergeUnique } from 'src/helpers/helpers'

import * as cerber from 'characters/cerber'
import * as chat from 'characters/chat'

const regularCerber = {
  ...cerber.base,

  id: 'cerber',
  name: 'Cerber',

  prompts: mergeUnique(
    ...cerber.regularPrompts,
    ...cerber.mentionPrompts,
    ...cerber.redeemPrompts
  )
}

const chatPrompts = {
  ...chat.base,

  prompts: mergeUnique(
    ...cerber.chatPrompts,
    ...chat.chatPrompts
  )
}

const fnafPrompts = {
  ...cerber.base,

  id: 'fnaf',
  name: 'Five Nights at Freddy\'s',
  color: '#bb440b',

  prompts: [
    'death on a\xa0first\xa0night',
    '2 deaths on\xa0nights 1-3',
    '5 deaths on\xa0nights 4-5',
    'sings any fnaf\xa0song',
    '"har\xa0har harhar\xa0har"',
    'scared by a\xa0redeem',

    // Only applies to FNAF 1 and maybe 2 if I recall correctly
    'golden freddy spawns'
  ]
}

const cerbathonPrompts = {
  ...cerber.base,
  id: 'cerbathon',
  name: 'Cerbathon',

  prompts: mergeUnique(
    ...cerber.cerbathonPrompts
  )
}

export default {
  name: 'Five Nights at Freddy\'s',
  image: 'cerber/random/{x}.png',
  participants: [
    regularCerber, fnafPrompts, chatPrompts, cerbathonPrompts
  ]
}
