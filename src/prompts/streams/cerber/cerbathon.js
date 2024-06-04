import { mergeUnique } from 'src/helpers/helpers'

import * as cerber from 'characters/cerber'
import * as chat from 'characters/chat'

const regularCerber = {
  ...cerber.base,

  id: 'cerber',
  name: 'Cerber',

  prompts: mergeUnique(
    ...cerber.regularPrompts,
    ...cerber.mentionPrompts
  )
}

const redeemPrompts = {
  ...cerber.base,

  id: 'redeems',
  name: 'Redeems',
  color: '#bb440b',

  prompts: mergeUnique(
    ...cerber.redeemPrompts
    // TODO: add rare redeems if they are more common during the stream
    // ...cerber.rareRedeemPrompts
  )
}

const chatPrompts = {
  ...chat.base,

  prompts: mergeUnique(
    ...cerber.chatPrompts,
    ...chat.chatPrompts
  )
}

export default {
  name: 'Cerbathon',
  image: 'cerber/random/{x}.png',
  participants: [
    regularCerber, chatPrompts, redeemPrompts
  ]
}
