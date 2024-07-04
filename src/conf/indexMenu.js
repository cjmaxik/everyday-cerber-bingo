// @ts-check
// eslint-disable-next-line no-unused-vars
import * as Types from 'helpers/types.d'

/**
 * Upcoming stream
 * @type {Types.StreamMenuData}
 */
export const upcoming = null
// export const upcoming = {
//   to: '',
//   text: '',
//   color: '',
//   date: ''
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
          { to: 'cerbathon', text: 'Cerbathon', color: '#700b1b' },
          { to: 'fnaf', text: 'Five Nights at Freddy\'s', color: '#bb440b' }
        ]
      }
    ]
  }
}
