import React from "react";
import "./Users.css";

class Users extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="users-card">
          <h2>Our Team</h2>
          <div className="user-container">
            <div className="user-card">
              <div className="user-image">
                <img src="https://i.pravatar.cc/150?img=1" alt="User 1" />
              </div>
              <div className="user-info">
                <h3>User 1</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
            <div className="user-card">
              <div className="user-image">
                <img src="https://i.pravatar.cc/150?img=4" alt="User 1" />
              </div>
              <div className="user-info">
                <h3>User 2</h3>
                <p>Backend Developer</p>
              </div>
            </div>
            <div className="user-card">
              <div className="user-image">
                <img src="https://i.pravatar.cc/150?img=5" alt="User 1" />
              </div>
              <div className="user-info">
                <h3>User 3</h3>
                <p> Web Designer</p>
              </div>
            </div>
            <div className="user-card">
              <div className="user-image">
                <img src="https://i.pravatar.cc/150?img=8" alt="User 1" />
              </div>
              <div className="user-info">
                <h3>User 4</h3>
                <p>HR manager</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Users;
