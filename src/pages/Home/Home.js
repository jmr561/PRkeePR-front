import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-sub-container">
        <div className="home-text">
          <h1>
            Welcome to <span>PR</span>kee<span>pr</span>
          </h1>
          <p>
            <span>Need a spot?</span> PRkeepr is a trusty tool that makes
            keeping tabs on your PRs a breeze! Sign up now to start tracking
            your PRs for a wide variety of lifts and exercises.
          </p>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2012/04/24/18/19/weightlifting-40803_1280.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
