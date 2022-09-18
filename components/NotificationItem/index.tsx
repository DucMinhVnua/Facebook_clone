import React from "react";
import styles from "./styles.module.scss";
import { HiUserGroup } from "react-icons/hi";
import clsx from "clsx";
import Link from "next/link";

interface TypeProps {
  isSelected?: boolean;
}

function NotificationItem({ isSelected = false }: TypeProps) {
  return (
    <Link href={"/"}>
      <a className={styles.wrapper_notification_item}>
        <article className={styles.wrapper_avatar}>
          <img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-1/290915200_1359221737889599_7844486098376806042_n.jpg?stp=dst-jpg_s240x240&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=WZ3zY8dm9nUAX-PiGkX&_nc_ht=scontent.fhan2-2.fna&oh=00_AT8o58PahzFl6oKXTM8tZ9UcaPLyNygDiltzi1niqG7bPA&oe=632AFB50" />
          <article className={styles.wrapper_icon}>
            <HiUserGroup color="#fff" />
          </article>
        </article>

        <article className={styles.wrapper_content}>
          <p className={styles.content}>
            <strong className={styles.user_name}>Nguyễn Đức Minh </strong>
            Đã đăng trong Nhóm Học Tập vào Thứ Tư: Ae biết lib carosel nào có
            thanh trượt hình chữ nhật, rồi lấy ra không cần dữ liệu không ạ?
          </p>
          <span
            className={clsx(styles.time, {
              [styles.time_active]: isSelected,
            })}
          >
            4 giờ trước
          </span>
        </article>
      </a>
    </Link>
  );
}

export default NotificationItem;
