import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import HistorylistIndexContainer from '../historylist/historylist_index_container';
import WatchlistIndexContainer from '../watchlist/watchlist_index_container';

class ProfileShow extends Component {

  componentDidMount() {
    this.props.fetchThisUser(this.props.match.params.userId)
  }

  render() {
    const { user } = this.props;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // if (user) { console.log(user._id) }
    return user ? (
      <div>
        <div className="user-info">
          <label> Username:
            <strong>{user.handle}</strong>
          </label>
          <label> Email:
            <strong>{user.email}</strong>
          </label>
          <label> User Created On:
            <p>{user.date.slice(0, 10)}</p>
          </label>
          {/* favorite movie added from history list */}
        </div>

        {/* <WatchlistIndexContainer userId={user._id} />
        <HistorylistIndexContainer userId={user._id} /> */}
      </div>
    ) : null;
  }
}

export default withRouter(ProfileShow);