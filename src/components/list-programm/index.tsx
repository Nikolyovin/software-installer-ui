import React, { FC } from "react";
import "./style.css";
import ItemProgramm from "../item-programm";

const ListProgramm: FC = () => {
  return (
    <div className="listProgramm-container">
      <ItemProgramm />
    </div>
  );
};

export default ListProgramm;
