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
    'short_awoo.mp3',
    'butibwibububwa.mp3'
  ]
}

// TODO: Make a better split between prompts, add more to each section
// TIP: use \xa0 if you need to insert a non-breaking space

// Here goes very general prompts, which can be applied to every single stream
export const regularPrompts = [
  'says she\'s embarrassed',
  'barks',
  '"minawan! stop!"',
  'asks minawan for help',
  'says hi to a bunch of people',
  '36% moment',
  'says "yippie" unprompted',
  'animal noises (except dog ones)',
  'forgets to play the game',
  'sings "Mogu\xa0Mogu"',
  'forgets song lyrics',
  'sings Happy Birthday',
  '"one more song!" but sings more',
  'activity interrupted by lv10+ hype\xa0train',
  'roleplay of any kind',
  'sings unprompted (not karaoke)',
  'mentions Bingo',
  'feeds chat',
  'audio dies'
]

// Any stuff berber can mention prompted or unprompted
export const mentionPrompts = [
  'says "I\'m a\xa0hellhound"',
  'says "Man I Love Minawan"',
  'struggles to come up with a minawan name',
  'asks if someone didn\'t AWOO',
  'greggs mention',
  'slugber mention (RIP)',
  'catber / purrbert mention',
  'says "tangia brainrot"'
]

// chat related
export const chatPrompts = [
  'chat spams :PETTHEMODS:',
  'chat spams WHERE IS CERBER :PANIC:',
  'chat spamming CERBER HATES US',
  'wholesome chat moment',
  'Vedal in chat :Tutel:'
]

// redeem related, turn off for a capitalism-free experience
export const redeemPrompts = [
  'thighs redeem',
  'licks during redeem (not\xa0kith)',
  'duck???',
  'confetti storm',
  'kith redeem',
  'a good boy/girl',
  'put in jail',
  'ara ara redeem',
  'AWOOOO redeem',
  'hydrate redeem',
  'eats a treat',
  'tangia spam',
  'dance party!',
  'redeem breaks',
  'mods reminds about redeems',
  'any redeem not\xa0mentioned on the board'
]

// redeem related, legacy redeems / redeems that are very rarely on
export const rareRedeemPrompts = [
  'chmeese',
  'minawan eaten',
  'stretch redeem'
]

// cerbathon specific
export const cerbathonPrompts = [
  'timer >200hrs at the end of\xa0the stream',
  'cerbathon splash animation more than twice',
  'fact of the day or wisdom',
  'can\'t decide what to do',
  'lore video premiere',
  'lore video twice in 10 minutes',
  'lore video three times in 60 minutes',
  'just chatting until 2\xa0hour mark',
  'someone gifts 100 subs or\xa0100k\xa0bits',
  'Golden Kappa\xa0Train'
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
