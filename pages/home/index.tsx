import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import ListMessenger from "../../components/Header/view/ListMessenger";
import ListNotification from "../../components/Header/view/ListNotification";
import ListOptionAvatar from "../../components/Header/view/ListOptionAvatar";
import Overlay from "../../components/Overlay";
import styles from "./styles.module.scss";

function HomePage() {
  const { hasClickedMessenger, hasClickedNotification, hasClickedAvatar } =
    useSelector((state: any) => state.event);

  return (
    <div className={styles.container}>
      <Header />
      {/* list messenger */}
      {hasClickedMessenger && <ListMessenger />}
      {hasClickedNotification && <ListNotification />}
      {hasClickedAvatar && <ListOptionAvatar />}
      <Overlay />
    </div>
  );
}

export default HomePage;
