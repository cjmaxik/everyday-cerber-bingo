export const base = {
  id: 'cerber',
  name: 'Cerber',

  // text color
  // not changing this because idk how it works on the website
  color: '#843a49',

  // assets folder
  assetsFolder: 'cerber',

  // tally background image
  image: 'smug.png',

  // tally sounds, will be chosen at random
  sounds: [
    'yeah.mp3'
  ]
}

// TODO: Make a better split between prompts, add more to each section

// Here goes very general prompts, which can be applied to every single stream
export const regularPrompts = [
  // classics
  'embarrassed',
  'melts into puppy puddle',
  'barks',
  '"no, minawan! stop!"',
  'asks minawan for help',
  'says hi to a bunch of people',
  'of the day',
  'mods have to remind about redeems',
  'appreciating (not MILM)',

  // cerber gaming
  'forgets to actually play the game',

  // karaoke
  'sings mogu mogu',
  'forgets song lyrics',
  'sings happy birthday',
  '"one more song!" but sings more'
]

// Here goes prompts which only applies when cerber is talking to the chat directly
// idk if cerber needs this category?
export const specificPrompts = [

]

// Any stuff berber can mention prompted or unprompted
export const mentionPrompts = [
  'says "I\'m a hellhound"',
  'Man I Love Minawan'
]

export const chatPrompts = [
  // chat related
  'chat mentions 36%',
  'chat spams :PETTHEMODS:',
  'chat tells a GOODWAN joke',
  'wholesome chat moment'
]

export const redeemPrompts = [
  // redeem related, turn off for a capitalism-free experience
  'thigs redeem',
  'licks during kith',
  'duck',
  'confettistorm',
  'kith redeem',
  'someone is called a good boy/girl',
  'cerber put in jail',
  'ara ara redeem',
  'AWOOOO redeem',
  'someone doesn\'t AWOO when cerber does',
  'hydrate redeem'
]

export const rareRedeemPrompts = [
  // redeem related, legacy redeems / redeems that are very rarely on
  'chmeese',
  'minawan eaten',
  'eats a treat',
  'stretch redeem'
]

/**
 * @param {string} name
 */
export const collabPrompts = (name = 'them') => [
  // cant think of tons for this
  '{x} is nicer on Cerber stream than their own'

].map(x => x.replaceAll('{x}', name))

export default {
  ...base,

  prompts: [
    // Include regular prompts
    ...regularPrompts,

    // Include specific prompts,
    ...specificPrompts,

    // Include mention prompts
    ...mentionPrompts,

    // Include redeem prompts
    ...redeemPrompts,

    // Include rare redeem prompts
    ...rareRedeemPrompts
  ]
}
