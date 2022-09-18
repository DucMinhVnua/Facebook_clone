import React from "react";
import styles from "./styles.module.scss";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoOpen } from "react-icons/io5";
import { RiVideoAddFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import Search from "../../../Search";
import ChatItem from "../../../ChatItem";

function ListMessenger() {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      {/* header */}
      <div className={styles.wrapper_header}>
        <div className={styles.heading}>
          <h3 className={styles.text}>Chat</h3>
        </div>
        <div className={styles.actions}>
          <div className={styles.action}>
            <BiDotsHorizontalRounded color="#a5a7ab" size={20} />
          </div>
          <div className={styles.action}>
            <IoOpen color="#a5a7ab" size={20} />
          </div>
          <div className={styles.action}>
            <RiVideoAddFill color="#a5a7ab" size={20} />
          </div>
          <div className={styles.action}>
            <FiEdit color="#a5a7ab" size={20} />
          </div>
        </div>
      </div>

      {/* search */}
      <div className={styles.wrapper_search}>
        <Search
          hint="Tìm kiếm trên Messenger"
          value={searchValue}
          onChange={onChangeSearch}
          hasHidePopup={false}
          styleInput={styles.input}
        />
      </div>

      {/* listChat */}
      <div className={styles.wrapper_listChat}>
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>

      {/* footer text */}
      <div className={styles.wrapper_footer}>
        <p className={styles.text}>Mở ứng dụng Messenger</p>
      </div>
    </div>
  );
}

export default ListMessenger;
