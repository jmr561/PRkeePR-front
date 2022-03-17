import { useState, useEffect } from "react";
import LogInModal from "../../components/LogInModal/LogInModal";
import "./PRBoard.scss";

const PRBoard = ({ displayLogInModal, setDisplayLogInModal, token }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      setDisplayLogInModal(true);
    }
  }, []);

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
            />
            <p>You must log in to access your PR Board</p>
          </>
        ) : (
          <p>This is where the PR components will be displayed... TBD</p>
        )}
      </div>
    </div>
  );
};

export default PRBoard;
