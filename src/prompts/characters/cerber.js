export const base = {
  id: 'cerber',
  name: 'Cerber',

  // text color
  color: '#9146FF',

  // assets folder
  assetsFolder: 'cerber',

  // tally background image
  image: 'cerby.png',

  // tally sounds, will be chosen at random
  sounds: [
    'yeah.mp3'
  ]
}

// TODO: Make a better split between prompts, add more to each section
// TIP: use \xa0 if you need to insert a non-breaking space

// Here goes very general prompts, which can be applied to every single stream
export const regularPrompts = [
  // classics
  'embarrassed',
  'melts into puppy\xa0puddle',
  'barks',
  '"no, minawan! stop!"',
  'asks minawan for help',
  'says hi to a bunch of people',
  'cerber of the\xa0day',
  'mods have to remind about redeems',
  'appreciating (not\xa0MILM)',
  '36% moment',
  'says "yippee" unprompted',

  // cerber gaming
  'forgets to actually play the game',

  // karaoke
  'sings "Mogu\xa0Mogu"',
  'forgets song lyrics',
  'sings Happy Birthday',
  '"one more song!" but sings more',

  'activity interrupted by lv10+ hype train'
]

// Any stuff berber can mention prompted or unprompted
export const mentionPrompts = [
  'says "I\'m a hellhound"',
  'Man I Love Minawan',
  'struggles to come up with a minawan name',
  'asks if someone didn\'t AWOO',
  'greggs mention',
  'purrbert mention',
  'slugber mention (RIP)'
]

export const chatPrompts = [
  // chat related
  'chat spams :PETTHEMODS:',
  'chat tells a GOODWAN joke',
  'wholesome chat moment'
]

export const redeemPrompts = [
  // redeem related, turn off for a capitalism-free experience
  'thighs redeem',
  'licks during kith',
  'duck???',
  'confetti storm',
  'kith redeem',
  'someone is called a good boy/girl',
  'put in jail',
  'ara ara redeem',
  'AWOOOO redeem',
  'hydrate redeem',
  'tangia spam',
  'dance party!'
]

export const rareRedeemPrompts = [
  // redeem related, legacy redeems / redeems that are very rarely on
  'chmeese',
  'minawan eaten',
  'eats a treat',
  'stretch redeem'
]

export const cerbathonPrompts = [
  // cerbathon specific
  'stream ends, timer has increased since start',
  'cerbathon splash animation more than once',
  'cerber fact of the\xa0day',
  'cerber can\'t decide what to do',
  '"your timer is broken, it\'s only going up"',
  // 'bingo metagaming' <- this one is kinda unclear & rare so idk
  'lore video premiere',
  'just chatting until 2\xa0hour mark',
  'staring contest',
  'someone gifts 100 subs'
]

/* Only applies for collabs
 *
 * @param {string} name
 */
export const collabPrompts = (name = 'them') => [
  '{x} is nicer on Cerber stream than their own'

].map(x => x.replaceAll('{x}', name))

export default {
  ...base,

  prompts: [
    // Include regular prompts
    ...regularPrompts,

    // Include mention prompts
    ...mentionPrompts,

    // Include redeem prompts
    ...redeemPrompts,

    // Include rare redeem prompts
    ...rareRedeemPrompts
  ]
}
