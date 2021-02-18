import React from "react";
import firebase from "../Firebase";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class Home extends React.Component {
  constructor() {
    super();
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      uid = user.uid;
    }
    console.log(name);
    console.log(email);
    console.log(uid);
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
        <br />
        <Button onClick={this.handleLogout}>ログアウト</Button>
      </div>
    );
  }
}

export default Home;
