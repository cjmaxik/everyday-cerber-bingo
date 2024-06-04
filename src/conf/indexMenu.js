// @ts-check
// eslint-disable-next-line no-unused-vars
import * as Types from 'helpers/types.d'

/**
 * Upcoming stream
 * @type {Types.StreamMenuData}
 */
export const upcoming = null
// export const upcoming = {
//   to: 'neuro/lia',
//   text: 'Collab with Lia',
//   color: '#a52174',
//   date: 'Friday, 3 PM EST / 7 PM UTC'
// }

/**
 * Menu structure
 * @type {Types.IndexMenu}
 */
export const indexMenu = {
  cerber: {
    id: 'cerber',
    characterName: 'Cerber',
    streams: [
      {
        name: null,
        entries: [
          { to: 'cerbathon', text: 'Subathon', color: '#700b1b' }
        ]
      }
    ]
  }
}
