import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./PRBlock.scss";

const PRBlock = ({ prName, prValue }) => {
  const [exerciseTitle, setExerciseTitle] = useState(prName);

  useEffect(() => {
    if (prName === "frontSquat") {
      setExerciseTitle("Front Squat");
    } else if (prName === "overheadSquat") {
      setExerciseTitle("Overhead Squat");
    } else if (prName === "backSquat") {
      setExerciseTitle("Back Squat");
    } else if (prName === "strictPress") {
      setExerciseTitle("Strict Press");
    } else if (prName === "pushPress") {
      setExerciseTitle("Push Press");
    } else if (prName === "pushJerk") {
      setExerciseTitle("Push Jerk");
    } else if (prName === "deadLift") {
      setExerciseTitle("Deadlift");
    } else if (prName === "clean") {
      setExerciseTitle("Clean");
    } else if (prName === "powerClean") {
      setExerciseTitle("Power Clean");
    } else if (prName === "cleanJerk") {
      setExerciseTitle("Clean & Jerk");
    } else if (prName === "hangPowerSnatch") {
      setExerciseTitle("Hang Power Snatch");
    } else if (prName === "powerSnatch") {
      setExerciseTitle("Power Snatch");
    } else if (prName === "squatSnatch") {
      setExerciseTitle("Squat Snatch");
    } else if (prName === "maxPullups") {
      setExerciseTitle("Max. Pullups");
    }
  }, [prName]);
  return (
    <div className="pr-block-container">
      <FontAwesomeIcon icon={faStar} /> {exerciseTitle}: {prValue}{" "}
      {exerciseTitle !== "Max. Pullups" && "kg"}
    </div>
  );
};

export default PRBlock;
