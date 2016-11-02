import * as TrackActions from '../actions/track'
import * as AuthActions from '../actions/auth'

export default function tracksReducer(state = {}, action) {
  switch (action.type) {
    case TrackActions.FETCH_TRACKS_SUCCESS:
      return {
        ...action.payload.entities.tracks // using .entities.tracks because of normalizr
      }
    case TrackActions.RECEIVE_TRACK_MESSAGE:
      return {
        ...state,
        [action.payload._id]: action.payload
      }
    case AuthActions.LOGOUT_SUCCESS:
      return { }
    default:
      return state
  }
}