import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHidePopupAll } from "../../redux/slices/eventSlice";
import styles from "./styles.module.scss";

function Overlay() {
  const dispatch = useDispatch();
  const {
    hasClickedMessenger,
    hasClickedNotification,
    hasClickedActionInNotification,
    hasClickedAvatar,
  } = useSelector((state: any) => state.event);

  function handleHidePopup() {
    if (hasClickedMessenger) {
      dispatch(setHidePopupAll());
    }

    if (hasClickedNotification) {
      dispatch(setHidePopupAll());
    }

    if (hasClickedActionInNotification) {
      dispatch(setHidePopupAll());
    }

    if (hasClickedAvatar) {
      dispatch(setHidePopupAll());
    }
  }

  return <div onClick={handleHidePopup} className={styles.container} />;
}

export default Overlay;
