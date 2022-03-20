import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import LogInModal from "../../components/LogInModal/LogInModal";
import "./Record.scss";

const Record = ({
  token,
  displayLogInModal,
  setDisplayLogInModal,
  setUser,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [prData, setPRData] = useState(null);
  const [userID, setUserID] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const frontSquat = +parseFloat(prData.frontSquat).toFixed(2);
      const overheadSquat = +parseFloat(prData.overheadSquat).toFixed(2);
      const backSquat = +parseFloat(prData.backSquat).toFixed(2);
      const strictPress = +parseFloat(prData.strictPress).toFixed(2);
      const pushPress = +parseFloat(prData.pushPress).toFixed(2);
      const pushJerk = +parseFloat(prData.pushJerk).toFixed(2);
      const deadLift = +parseFloat(prData.deadLift).toFixed(2);
      const clean = +parseFloat(prData.clean).toFixed(2);
      const powerClean = +parseFloat(prData.powerClean).toFixed(2);
      const cleanJerk = +parseFloat(prData.cleanJerk).toFixed(2);
      const hangPowerSnatch = +parseFloat(prData.hangPowerSnatch).toFixed(2);
      const powerSnatch = +parseFloat(prData.powerSnatch).toFixed(2);
      const squatSnatch = +parseFloat(prData.squatSnatch).toFixed(2);
      const maxPullups = +parseFloat(prData.maxPullups).toFixed(2);

      console.log(frontSquat);
      console.log(overheadSquat);
      console.log(backSquat);
      console.log(strictPress);
      console.log(pushPress);
      console.log(pushJerk);
      console.log(deadLift);
      console.log(clean);
      console.log(powerClean);
      console.log(cleanJerk);
      console.log(hangPowerSnatch);
      console.log(powerSnatch);
      console.log(squatSnatch);
      console.log(maxPullups);

      if (
        isNaN(frontSquat) ||
        frontSquat < 0 ||
        frontSquat > 500 ||
        isNaN(overheadSquat) ||
        overheadSquat < 0 ||
        overheadSquat > 500 ||
        isNaN(backSquat) ||
        backSquat < 0 ||
        backSquat > 500 ||
        isNaN(strictPress) ||
        strictPress < 0 ||
        strictPress > 500 ||
        isNaN(pushPress) ||
        pushPress < 0 ||
        pushPress > 500 ||
        isNaN(pushJerk) ||
        pushJerk < 0 ||
        pushJerk > 500 ||
        isNaN(deadLift) ||
        deadLift < 0 ||
        deadLift > 500 ||
        isNaN(clean) ||
        clean < 0 ||
        clean > 500 ||
        isNaN(powerClean) ||
        powerClean < 0 ||
        powerClean > 500 ||
        isNaN(cleanJerk) ||
        cleanJerk < 0 ||
        cleanJerk > 500 ||
        isNaN(hangPowerSnatch) ||
        hangPowerSnatch < 0 ||
        hangPowerSnatch > 500 ||
        isNaN(powerSnatch) ||
        powerSnatch < 0 ||
        powerSnatch > 500 ||
        isNaN(squatSnatch) ||
        squatSnatch < 0 ||
        squatSnatch > 500 ||
        isNaN(maxPullups) ||
        maxPullups < 0 ||
        maxPullups > 500
      ) {
        setErrorMessage("Invalid PR input(s)");
      } else {
        try {
          const userData = await axios.put(
            "https://prkeepr-backend.herokuapp.com/update",
            {
              id: userID,
              frontSquatPR: frontSquat,
              overheadSquatPR: overheadSquat,
              backSquatPR: backSquat,
              strictPressPR: strictPress,
              pushPressPR: pushPress,
              pushJerkPR: pushJerk,
              deadLiftPR: deadLift,
              cleanPR: clean,
              powerCleanPR: powerClean,
              cleanJerkPR: cleanJerk,
              hangPowerSnatchPR: hangPowerSnatch,
              powerSnatchPR: powerSnatch,
              squatSnatchPR: squatSnatch,
              maxPullupsPR: maxPullups,
            }
          );
          console.log(userData);
          navigate("/pr-board");
        } catch (error) {
          console.log(error.message);
        }
      }
    } catch (error) {
      setErrorMessage("Error!");
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!token) {
      setDisplayLogInModal(true);
    } else {
      try {
        async function fetchData() {
          const userData = await axios.post(
            "https://prkeepr-backend.herokuapp.com/prs",
            {
              token: token,
            }
          );
          console.log(userData);
          setUserID(userData.data._id);
          setPRData(userData.data.prData);
          setIsLoading(false);
          console.log(userData.data.prData);
        }
        fetchData();
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [setDisplayLogInModal, token]);

  return (
    <div className="record-container">
      <div className="record-sub-container">
        <h1>Record Your PRs</h1>
        {!token || isLoading ? (
          <>
            <LogInModal
              displayLogInModal={displayLogInModal}
              setDisplayLogInModal={setDisplayLogInModal}
              token={token}
              setUser={setUser}
            />
            <p>You must log in to record/update your PRs</p>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="top-section">
              <div className="label-col">
                <div>Front Squat</div>
                <div>Overhead Squat</div>
                <div>Back Squat</div>
                <div>Strict Press</div>
                <div>Push Press</div>
                <div>Push Jerk</div>
                <div>Deadlift</div>
                <div>Clean</div>
                <div>Power Clean</div>
                <div>Clean & Jerk</div>
                <div>Hang Power Snatch</div>
                <div>Power Snatch</div>
                <div>Squat Snatch</div>
                <div>Max Pull-Ups</div>
              </div>
              <div className="input-col">
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.frontSquat}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.frontSquat = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  kg
                </div>
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.overheadSquat}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.overheadSquat = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  kg
                </div>
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.backSquat}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.backSquat = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  kg
                </div>
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.strictPress}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.strictPress = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  kg
                </div>
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.pushPress}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.pushPress = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  kg
                </div>
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.pushJerk}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.pushJerk = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  kg
                </div>
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.deadLift}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.deadLift = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  kg
                </div>
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.clean}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.clean = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  kg
                </div>
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.powerClean}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.powerClean = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  kg
                </div>
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.cleanJerk}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.cleanJerk = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  kg
                </div>
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.hangPowerSnatch}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.hangPowerSnatch = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  kg
                </div>
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.powerSnatch}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.powerSnatch = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  kg
                </div>
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.squatSnatch}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.squatSnatch = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  kg
                </div>
                <div className="input-row">
                  <input
                    type="number"
                    value={prData.maxPullups}
                    onChange={(e) => {
                      setErrorMessage("");
                      const placeholderObj = { ...prData };
                      placeholderObj.maxPullups = e.target.value;
                      setPRData(placeholderObj);
                    }}
                  />{" "}
                  reps
                </div>
              </div>
            </div>
            <div className="btm-section">
              <input
                type="submit"
                value="Submit"
                className="record-submit-btn"
              />
              <div className="record-err-msg">{errorMessage}</div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Record;
