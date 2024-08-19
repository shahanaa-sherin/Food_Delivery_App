import React from "react";
import "./Users.css";
import PropTypes from "prop-types";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Dummy",
        location: "Default",
        avatar_url:"https://avatars.githubusercontent.com/u/1997560?v=4"
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shahana");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }
  componentDidUpdate() {
    console.log("Component Updated");
  }
  componentWillUnmount() {
    console.log("Component Unmounted");
  }
  render() {
   const { login, location, avatar_url } = this.state.userInfo;
    return (

      <>
        <div className="users-card">
          <h2>Our Team</h2>
          <div className="user-container">
            <div className="user-card">
              <div className="user-image">
                <img className="img" src={avatar_url} alt="User 1" />
              </div>
              <div className="user-info">
                <h3>Name:{login}</h3>
                <h4>Location:{location}</h4>
                <p>Frontend Developer</p>
              </div>
            </div>
            <div className="user-card">
              <div className="user-image">
              <img className="img" src={avatar_url} alt="User 1" />
              </div>
              <div className="user-info">
              <h3>Name:{login}</h3>
              <h4>Location:{location}</h4>
                <p>Backend Developer</p>
              </div>
            </div>
            <div className="user-card">
              <div className="user-image">
              <img className="img" src={avatar_url} alt="User 1" />
              </div>
              <div className="user-info">
              <h3>Name:{login}</h3>
              <h4>Location:{location}</h4>
                <p> Web Designer</p>
              </div>
            </div>
            <div className="user-card">
              <div className="user-image">
              <img className="img" src={avatar_url} alt="User 1" />
              </div>
              <div className="user-info">
              <h3>Name:{login}</h3>
              <h4>Location:{location}</h4>
                <p>HR manager</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
Users.propTypes = {
  name: PropTypes.string.isRequired, // Define the 'name' prop as a required string
};

export default Users;
