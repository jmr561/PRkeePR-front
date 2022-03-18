import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LogInModal from "../../components/LogInModal/LogInModal";
import PRBlock from "../../components/PRBlock/PRBlock";
import "./PRBoard.scss";

const PRBoard = ({
  displayLogInModal,
  setDisplayLogInModal,
  token,
  setUser,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [prToDisplay, setPrToDisplay] = useState([]);

  useEffect(async () => {
    if (!token) {
      setDisplayLogInModal(true);
    } else {
      const userData = await axios.post("http://localhost:3100/prs", {
        token: token,
      });
      setUserData(userData.data);
      setIsLoading(false);
      console.log(userData.data);

      const prExercises = Object.keys(userData.data.prData);
      console.log(prExercises);
      let filteredExerciseArr = [];
      for (let i = 0; i < prExercises.length; i++) {
        if (userData.data.prData[prExercises[i]] > 0) {
          filteredExerciseArr.push(prExercises[i]);
        }
      }
      setPrToDisplay(filteredExerciseArr);
      filteredExerciseArr = [];
    }
  }, [token]);

  return (
    <div className="pr-board-container">
      <div className="pr-board-sub-container">
        <h1>PR Board</h1>
        {!token ? (
          <>
            <LogInModal
              displayLogInModal={displayLogInModal}
              setDisplayLogInModal={setDisplayLogInModal}
              token={token}
              setUser={setUser}
            />
            <p>You must log in to access your PR Board</p>
          </>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <p>
              Hey there, {userData.account.firstName}! Here are your current
              recorded PRs. To update them, click below!
            </p>
            <Link to="/record">
              <div className="update-btn">Update</div>
            </Link>
            {prToDisplay.map((exercise, i) => {
              return (
                <PRBlock
                  key={i}
                  prName={prToDisplay[i]}
                  prValue={userData.prData[prToDisplay[i]]}
                />
              );
            })}
            {prToDisplay.length === 0 && (
              <p className="no-prs-msg">
                No listed PRs yet :( Do you even lift?
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PRBoard;
