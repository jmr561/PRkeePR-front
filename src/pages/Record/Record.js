import { useState, useEffect } from "react";
import LogInModal from "../../components/LogInModal/LogInModal";
import "./Record.scss";

const Record = ({ token, displayLogInModal, setDisplayLogInModal }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      setDisplayLogInModal(true);
    }
  }, []);

  return (
    <div className="record-container">
      <div className="record-sub-container">
        <h1>Record/Update Your PRs</h1>
        {!token ? (
          <>
            <LogInModal
              displayLogInModal={displayLogInModal}
              setDisplayLogInModal={setDisplayLogInModal}
              token={token}
            />
            <p>You must log in to record/update your PRs</p>
          </>
        ) : (
          <p>This is where you'll be able to update/record PRs</p>
        )}
      </div>
    </div>
  );
};

export default Record;
