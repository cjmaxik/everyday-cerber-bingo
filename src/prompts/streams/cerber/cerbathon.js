import { mergeUnique } from 'src/helpers/helpers'

import * as cerber from 'characters/cerber'
import * as chat from 'characters/chat'

const regularNeuro = {
  ...cerber.base,

  id: 'cerber',
  name: 'Cerber',

  prompts: cerber.regularPrompts
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
  image: 'cerber/36percent.png',
  participants: [
    regularNeuro, chatPrompts
  ]
}
