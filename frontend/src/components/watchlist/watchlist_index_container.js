import { connect } from 'react-redux';
import { getMyWatchlists } from '../../actions/watchlist_actions';
import WatchlistIndex from './watchlist_index';

const mstp = (state, ownProps) => ({
  watchlists: Object.values(state.entities.watchlists),
  userId: ownProps.userId
});

const mdtp = dispatch => ({
  getMyWatchlists: userId => dispatch(getMyWatchlists(userId))
});

export default connect(mstp, mdtp)(WatchlistIndex);