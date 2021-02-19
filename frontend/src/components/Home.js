import React from "react";
import firebase from "../Firebase";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

let userEmail, userUid;

class Home extends React.Component {
  constructor() {
    super();
    const user = firebase.auth().currentUser;
    if (user != null) {
      userEmail = user.email;
      userUid = user.uid;
    }
    const profile = { email: userEmail, uid: userUid };
  }
  handleLogout = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div className="container">
        <p>Home</p>
        <Link to="/profile">Profileへ</Link>
        <br />
        <div>{userEmail}</div>
        <div>{userUid}</div>
        <br />
        <Button onClick={this.handleLogout}>ログアウト</Button>
      </div>
    );
  }
}

export default Home;
