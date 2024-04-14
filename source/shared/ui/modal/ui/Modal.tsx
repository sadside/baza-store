import React from "react";
import s from "./index.module.scss";
import classNames from "classnames";

type Props = {
  visible: boolean
  setVisible: any
  children: React.ReactNode
}

export const Modal = ({ visible, setVisible, children }: Props) => {
  return (
    <div className={classNames(s.MyModal, visible && s.active, visible && "hidden")} onClick={() => setVisible(false)}>
      <div className={s.MyModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
