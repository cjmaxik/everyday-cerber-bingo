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
    cerbathon: () => import('streams/cerber/cerbathon')
  },

  /**
   * Test boards
   */
  dev: {
    emoteTest: () => import('streams/tests/emote')
  }
}
