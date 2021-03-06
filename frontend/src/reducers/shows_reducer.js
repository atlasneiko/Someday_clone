import { RECEIVE_A_SHOW, RECEIVE_SHOWS, RECEIVE_POPULAR_SHOWS } from '../actions/show_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_A_SHOW:
      const newShow = action.show.data.title
      return {
        ...oldState,
        [action.show.data.id.split('/')[2]]: { ...newShow, id: newShow.id.split('/')[2] }
      }

    case RECEIVE_POPULAR_SHOWS:
      newState = {};
      action.shows.data.slice(0, 8).forEach(show => {
        const showId = show.split('/')[2]
        newState[showId] = { id: showId }
      });
      return { ...oldState, ...newState }
    case RECEIVE_SHOWS:
      newState = {};
      action.shows.data.d.forEach(show => newState[show.id] = show)
      return { ...oldState, ...newState }
    default:
      return oldState
  }
}