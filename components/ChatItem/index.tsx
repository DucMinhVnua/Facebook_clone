import React from "react";
import styles from "./styles.module.scss";

function ChatItem() {
  return (
    <div className={styles.wrapper_chat}>
      <div className={styles.avatar}>
        <img
          className={styles.img}
          src="https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-1/287486405_1461486484318098_1322503002067329702_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=qociNzYCUvQAX9yCyUj&_nc_ht=scontent.fhan2-1.fna&oh=00_AT_s-ujz9uUEwMx8vCsYzAEEIzyIZYOA4yty_xeCwBlYig&oe=63297B67"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3 className={styles.name}>Nguyễn Văn A</h3>
        </div>
        <div className={styles.message}>
          <p className={styles.text}>Hellooooooooo</p>
          <p className={styles.time}>12 giờ</p>
        </div>
      </div>
    </div>
  );
}

export default ChatItem;
