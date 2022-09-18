import Link from "next/link";
import React, { useEffect } from "react";
import LogoFacebook from "./svg/Logo";
import styles from "./styles.module.scss";
import MessageIcon from "./svg/Message";
import BellIcon from "./svg/Bell";
import ArrowIcon from "./svg/ArrowDown";
import Search from "../Search";
import { useDispatch, useSelector } from "react-redux";
import {
  setHasClickedAvatar,
  setHasClickedMessenger,
  setHasClickedNotification,
  setHidePopupAll,
} from "../../redux/slices/eventSlice";

interface TypeAction {
  icon: React.ReactNode;
  badge: number;
  link: string;
  alt?: string;
  onClick?: () => void;
}

function Header() {
  const dispatch = useDispatch();

  const [searchResult, setSearchResult] = React.useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchResult(e.target.value);
  };

  const { hasClickedMessenger, hasClickedNotification, hasClickedAvatar } =
    useSelector((state: any) => state.event);
  const handleClickMessage = () => {
    dispatch(setHidePopupAll());

    dispatch(setHasClickedMessenger(!hasClickedMessenger));
  };

  const handleClickNotification = () => {
    dispatch(setHidePopupAll());

    dispatch(setHasClickedNotification(!hasClickedNotification));
  };

  const handleClickAvatar = () => {
    dispatch(setHidePopupAll());

    dispatch(setHasClickedAvatar(!hasClickedAvatar));
  };

  // variable actions
  const actions: TypeAction[] = [
    {
      icon: <MessageIcon />,
      badge: 2,
      link: "/",
      alt: "Messenger",
      onClick: handleClickMessage,
    },
    {
      icon: <BellIcon />,
      badge: 0,
      link: "/",
      alt: "Thông báo",
      onClick: handleClickNotification,
    },
  ];

  return (
    <div className={styles.container}>
      {/* icon */}
      <Link href={"/"}>
        <a>
          <LogoFacebook />
        </a>
      </Link>

      {/* search */}
      <div className={styles.wrapper_search}>
        <Search
          hint="Tìm kiếm trên Facebook"
          value={searchResult}
          onChange={handleOnChange}
          styleInput={styles.input}
        />
      </div>

      {/* actions */}
      <div className={styles.wrapper_actions}>
        {actions.map((item, index) => {
          return (
            <div
              title={item.alt}
              onClick={item.onClick}
              key={index}
              className={styles.action}
            >
              {(() => item.icon)()}

              {item.badge > 0 && (
                <div className={styles.badge}>
                  <span className={styles.badge_title}>{item.badge}</span>
                </div>
              )}
            </div>
          );
        })}

        {/* avatar */}
        <div onClick={handleClickAvatar} className={styles.avatar}>
          <img
            className={styles.avatar_img}
            src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/300959209_1682470922124544_7455210823334671683_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=N4SzsXXATMcAX_KCblI&_nc_ht=scontent.fhan2-4.fna&oh=00_AT-MGb-rWdrsKIzcwQsvMH-EyzmWpHSwjkAFUu_B7uBr-A&oe=6328544D"
            alt="avatar"
          />

          <div className={styles.badge_avt}>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
