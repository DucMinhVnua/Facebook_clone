import React, { memo, useCallback, useEffect, useMemo } from "react";
import styles from "./styles.module.scss";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Button from "../../../Button";
import Link from "next/link";
import { AiOutlineCheck, AiOutlineSetting } from "react-icons/ai";
import { CgSidebarOpen } from "react-icons/cg";
import NotificationItem from "../../../NotificationItem";
import { useDispatch, useSelector } from "react-redux";
import { setHasClickedActionInNotification } from "../../../../redux/slices/eventSlice";

function ListNotification() {
  const [statusButtons, setStatusButtons] = React.useState({
    isActiveAll: true,
    isUnRead: false,
  });

  const dispatch = useDispatch();
  const { hasClickedActionInNotification } = useSelector(
    (state: any) => state.event
  );

  const handleActiveAll = useCallback(() => {
    setStatusButtons({
      isActiveAll: true,
      isUnRead: false,
    });
  }, []);

  const handleUnRead = useCallback(() => {
    setStatusButtons({
      isActiveAll: false,
      isUnRead: true,
    });
  }, []);

  const handleActionSelected = useCallback(() => {
    dispatch(
      setHasClickedActionInNotification(!hasClickedActionInNotification)
    );
  }, [hasClickedActionInNotification]);

  const handleClickNotificationContainer = useCallback(() => {
    hasClickedActionInNotification &&
      dispatch(
        setHasClickedActionInNotification(!hasClickedActionInNotification)
      );
  }, [hasClickedActionInNotification]);

  // handle scroll event => hide notification action
  useEffect(() => {
    const notification = document.getElementById("notification");

    if (notification && hasClickedActionInNotification) {
      notification.addEventListener("scroll", () => {
        if (notification.scrollTop > 20) {
          dispatch(
            setHasClickedActionInNotification(!hasClickedActionInNotification)
          );
        }
      });
    }

    return () => {
      notification &&
        notification.removeEventListener("scroll", () => {
          if (notification.scrollTop > 20) {
            dispatch(
              setHasClickedActionInNotification(!hasClickedActionInNotification)
            );
          }
        });
    };
  }, [hasClickedActionInNotification]);

  return (
    <div className={styles.container}>
      <div
        id="notification"
        onClick={handleClickNotificationContainer}
        className={styles.wrapper_notification}
      >
        {/* header */}
        <header className={styles.wrapper_heading_dotsIcon}>
          <div className={styles.layout_heading}>
            <span className={styles.heading}>Thông báo</span>
          </div>
          <div
            className={styles.layout_dotsIcon}
            onClick={handleActionSelected}
          >
            <div className={styles.wrapper_dotsIcon}>
              <BiDotsHorizontalRounded color="#a7abaf" size={20} />
            </div>
          </div>
        </header>

        {/* double button */}
        <div className={styles.wrapper_doubleButton}>
          <div className={styles.layout_button}>
            <Button
              title="Tất cả"
              radius={5}
              onClick={handleActiveAll}
              isActive={statusButtons.isActiveAll}
            />
            <span style={{ marginRight: "0.7rem" }}></span>
            <Button
              title="Chưa đọc"
              radius={5}
              onClick={handleUnRead}
              isActive={statusButtons.isUnRead}
            />
          </div>
        </div>

        {/* list notification */}
        <main className={styles.wrapper_notification_list}>
          <div className={styles.wrapper_notification_heading}>
            <p className={styles.title}>Trước đó</p>
            <Link href={"/"}>
              <a className={styles.action}>Xem tất cả</a>
            </Link>
          </div>

          <div className={styles.wrapper_notification_main}>
            <NotificationItem />
            <NotificationItem isSelected />
            <NotificationItem isSelected />
            <NotificationItem />
            <NotificationItem isSelected />
            <NotificationItem />
            <NotificationItem isSelected />
            <NotificationItem />
          </div>
        </main>
      </div>

      {/* popup action */}
      {hasClickedActionInNotification && (
        <div className={styles.wrapper_popup_action}>
          <ul className={styles.list_action}>
            <li className={styles.item_action}>
              <div className={styles.wrapper_icon}>
                <AiOutlineCheck color="#FFF" size={20} />
              </div>
              <Link href="#">
                <a className={styles.link_action}>Đánh dấu tất cả là đã đọc</a>
              </Link>
            </li>
            <li className={styles.item_action}>
              <div className={styles.wrapper_icon}>
                <AiOutlineSetting color="#FFF" size={20} />
              </div>
              <Link href="#">
                <a className={styles.link_action}>Cài đặt thông báo</a>
              </Link>
            </li>
            <li className={styles.item_action}>
              <div className={styles.wrapper_icon}>
                <CgSidebarOpen color="#FFF" size={20} />
              </div>
              <Link href="#">
                <a className={styles.link_action}>Mở thông báo</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default memo(ListNotification);
