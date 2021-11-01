import React from "react";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="card home-card">
          <h5>*Name*</h5>
          <div className="card-image">
            <img
              src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="card-content">
            <i className="material-icons" style={{ color: "red" }}>
              favorite
            </i>
            <h6>title</h6>
            <p>this is a nice post</p>
            <input type="text" placeholder="add a comment" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
