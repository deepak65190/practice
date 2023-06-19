import React from "react";

const Main = () => {
  return (
    <main>
      <div className="post">
        <div>
          <img
            className="image"
            src="https://images.unsplash.com/photo-1686903430773-1bbd4f74f48b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="iamge loading"
          />
        </div>
        <div className="texts">
          <h2>Full house battery backup coming later this year</h2>
          <p className="info">
            <a href="" className="author">
              Deepak Bisht
            </a>
            <time>2023-01-06 16:14</time>
          </p>
          <p className="summuary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            unde ab alias, molestiae nulla autem similique quod pariatur
            voluptates aliquid
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
