import React, { useState, forwardRef, useImperativeHandle } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingAction = forwardRef(({ children }, ref) => {
  const [loadingInProgress, setLoading] = useState(false);
  useImperativeHandle(ref, () => ({
    loadingOn() {
      setLoading(true);
    },
    loadingOff() {
      setLoading(false);
    },
  }));

  return (
    <div className="LoadingOuterContainer ">
      {loadingInProgress ? (
        <div className="LoadingActionContainer">
          <ClipLoader color={"#3A3086"} size={120} />
        </div>
      ) : (
        <div className="LoadingCompleteContainer">{children}</div>
      )}
    </div>
  );
});

export default LoadingAction;
