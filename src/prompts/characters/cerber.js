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
    'yeah.mp3',
    'ara-ara.mp3',
    'garggle.mp3',
    'bah.mp3',
    'tequila.mp3',
    'short_awoo.mp3'
  ]
}

// TODO: Make a better split between prompts, add more to each section
// TIP: use \xa0 if you need to insert a non-breaking space

// Here goes very general prompts, which can be applied to every single stream
export const regularPrompts = [
  // classics
  'says she\'s embarrassed',
  'barks',
  '"no, minawan! stop!"',
  'asks minawan for help',
  'says hi to a bunch of people',
  '36% moment',
  'says "yippee" unprompted',
  'animal noises (except dog ones)',
  'forgets to play the game',
  'sings "Mogu\xa0Mogu"',
  'forgets song lyrics',
  'sings Happy Birthday',
  '"one more song!" but sings more',
  'activity interrupted by lv10+ hype\xa0train',
  'cleaning RP',
  'sings unprompted (not karaoke)',
  'mentions Bingo'
]

// Any stuff berber can mention prompted or unprompted
export const mentionPrompts = [
  'says "I\'m a hellhound"',
  'Man I Love Minawan',
  'struggles to come up with a minawan name',
  'asks if someone didn\'t AWOO',
  'greggs mention',
  'slugber mention (RIP)',
  'catber / purrbert mention',
  'mentions "tangia brainrot"'
]

// chat related
export const chatPrompts = [
  'chat spams :PETTHEMODS:',
  'chat spams WHERE IS CERBER :PANIC:',
  'chat tells a GOODWAN joke',
  'chat spams "cerber hates us"'
]

// redeem related, turn off for a capitalism-free experience
export const redeemPrompts = [
  'thighs redeem',
  'licks during redeem (not\xa0ith)',
  'duck???',
  'confetti storm',
  'kith redeem',
  'someone is called a good boy/girl',
  'put in jail',
  'ara ara redeem',
  'AWOOOO redeem',
  'hydrate redeem',
  'eats a treat',
  'dance party!',
  'redeem breaks',
  'mods have to remind about redeems'
]

// redeem related, legacy redeems / redeems that are very rarely on
export const rareRedeemPrompts = [
  'chmeese',
  'minawan eaten',
  'stretch redeem'
]

// cerbathon specific
export const cerbathonPrompts = [
  'stream ends, timer has increased since start',
  'cerbathon splash animation more than once',
  'cerber fact of the\xa0day',
  'can\'t decide what to do',
  '"your timer is broken, it\'s only going up"',
  'lore video premiere',
  'lore video plays more than once in 10 minutes',
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
