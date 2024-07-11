import { mergeUnique } from 'src/helpers/helpers'

import * as cerber from 'characters/cerber'
import * as chat from 'characters/chat'

const fnafSounds = [
  'peetza/1.mp3',
  'peetza/2.mp3',
  'peetza/3.mp3',
  'peetza/4.mp3',
  'peetza/5.mp3',
  'peetza/6.mp3'
]

const regularCerber = {
  ...cerber.base,

  id: 'cerber',
  name: 'Cerber',
  sounds: fnafSounds,

  prompts: mergeUnique(
    ...cerber.regularPrompts,
    ...cerber.mentionPrompts,
    ...cerber.redeemPrompts,
    ...cerber.cerbathonPrompts
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
  sounds: fnafSounds,

  id: 'fnaf',
  name: 'Five Nights at Freddy\'s',
  color: '#bb440b',

  prompts: [
    'death on a\xa0first\xa0night',
    'died twice on\xa0nights 1-3',
    'died five times on\xa0nights 4-5',
    'sings any fnaf\xa0song',
    '"har\xa0har harhar\xa0har"',
    'scared by a\xa0redeem',
    'Toreador March',
    'won with no\xa0battery left',
    '"I ALWAYS COME\xa0BACK"',
    'chat spams "WAS\xa0THAT THE BITE\xa0OF\xa087?"',
    'nose honk in two\xa0games',
    'golden freddy on\xa0screen',
    'killed by\xa0Foxy',
    'dies (outside of other prompts on your board)'
  ]
}

export default {
  name: 'Five Nights at Freddy\'s',
  image: 'cerber/random/{x}.png',
  participants: [
    regularCerber, fnafPrompts, chatPrompts
  ]
}
