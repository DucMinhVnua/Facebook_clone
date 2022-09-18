import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { FiSettings } from "react-icons/fi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { BsPatchExclamation } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

function ListOptionAvatar() {
  const mainActions = [
    {
      name: "Cài đặt & quyền riêng tư",
      icon: <FiSettings size={20} color={"#fff"} />,
      link: "#",
    },
    {
      name: "Trợ giúp & hỗ trợ",
      icon: <AiFillQuestionCircle size={20} color={"#fff"} />,
      link: "#",
    },
    {
      name: "Màn hình & trợ năng",
      icon: <MdDarkMode size={20} color={"#fff"} />,
      link: "#",
    },
    {
      name: "Đóng góp ý kiến",
      icon: <BsPatchExclamation size={20} color={"#fff"} />,
      link: "#",
    },
    {
      name: "Đăng xuất",
      icon: <IoLogOutOutline size={20} color={"#fff"} />,
      link: "#",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.wrapper_topOfHeader}>
          <div className={styles.wrapper_avatar}>
            <img
              src={
                "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/300959209_1682470922124544_7455210823334671683_n.jpg?stp=dst-jpg_p120x120&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XQi4JCykSfoAX8Hq5Wx&_nc_ht=scontent.fhan2-4.fna&oh=00_AT-wETPoxKH7eHhrKo4QIkmzkPH6wuISoMV6tc0K-SQlkg&oe=632C48CD"
              }
            />
          </div>
          <div className={styles.wrapper_user_name}>
            <p>Nguyễn Đức Minh</p>
          </div>
        </div>

        <div className={styles.wrapper_see_detail}>
          <Link href="#">
            <a>Xem tất cả trang cá nhân</a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        {mainActions.map((action, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.icon}>{(() => action.icon)()}</div>
            <div className={styles.text}>
              <p>{action.name}</p>
            </div>
            <div className={styles.icon_arrow}>
              <IoIosArrowForward color="#a7abaf" size={30} />
            </div>
          </div>
        ))}
      </main>
      <footer className={styles.footer}>
        <Link href={"#"}>
          <a className={styles.link}>Quyền riêng tư·</a>
        </Link>
        <Link href={"#"}>
          <a className={styles.link}>Điều khoản·</a>
        </Link>
        <Link href={"#"}>
          <a className={styles.link}>Quảng cáo·</a>
        </Link>
        <Link href={"#"}>
          <a className={styles.link}>Lựa chọn·</a>
        </Link>
        <Link href={"#"}>
          <a className={styles.link}>Cookie·</a>
        </Link>
        <Link href={"#"}>
          <a className={styles.link}>Xem thêm·</a>
        </Link>
        <Link href={"#"}>
          <a className={styles.link}>Meta © 2022</a>
        </Link>
      </footer>
    </div>
  );
}

export default ListOptionAvatar;
