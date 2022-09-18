import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { setHidePopupAll } from "../../redux/slices/eventSlice";

interface TypeProps {
  hint: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  styleWrapper?: any;
  styleInput?: any;
  hasHidePopup?: boolean;
}

function Search({
  hint,
  value,
  onChange,
  styleWrapper,
  styleInput,
  hasHidePopup = true,
}: TypeProps) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => hasHidePopup && dispatch(setHidePopupAll())}
      className={clsx(styles.wrapper_search, styleWrapper)}
    >
      <AiOutlineSearch color="#b1b3ba" size={20} />

      <input
        className={clsx(styles.input_search, styleInput)}
        type="text"
        placeholder={hint}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
