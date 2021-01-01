import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from "react-router-dom";
// import LoginFormContainer from '../session/login_form_container';
// import SignupFormContainer from '../session/signup_form_container';
import NavBarContainer from '../nav/navbar_container';
import MovieIndexContainer from '../movie/movie_index_container';
import { Switch, Route } from 'react-router-dom';
import CommentForm from '../comments/comment_form/comment_form_container';
import UserComment from '../comments/user_comment/user_comment_container';
import HistorylistPostForm from "../list_form/historylist_form_container";

import ProfileShow from '../profile/profile_show_container';

export default () => {
  // console.log('mainpage');
  return (
    <div>
      <Route>
        <Switch>

          <ProtectedRoute path='/' exact path='/search-result' component={MovieIndexContainer} />
          <ProtectedRoute path='/profile/:userId' component={ProfileShow} />

        </Switch>

        <Route path='/*' component={NavBarContainer} />

        {/* <ProfileShow /> DOESNOTWORK */}
        <Link to='/mediapage/tt0944947'>click here to see the sample movie</Link>
        <br></br>
        <CommentForm />
        <UserComment />
      </Route>

    </div>
  )
}
///  <CommentForm />  and <UserComment /> should be in movie index, temprorarly here for developing purpose