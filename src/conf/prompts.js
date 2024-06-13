// @ts-check

/**
 * 1. The object key is the route path
 * 2. Add the route to ./indexMenu.js
 */

export default {
  /**
   * Cerber
   */
  cerber: {
    // Cerbathon
    cerbathon: () => import('streams/cerber/cerbathon'),

    // FNAF Day
    fnaf: () => import('streams/cerber/fnaf')
  },

  /**
   * Test boards
   */
  dev: {
    emoteTest: () => import('streams/tests/emote'),
    poster: () => import('streams/tests/poster')
  }
}
