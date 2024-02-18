import React, { FC } from "react";
import "./style.css";
import ItemProgramm from "../item-programm";
import { arrayProgramm } from "../../constants/constants";

const ListProgramm: FC = () => {
  return (
    <div className="listProgramm-container">
      {arrayProgramm.map(({ name, description, value }) => (
        <ItemProgramm name={name} description={description} value={value} />
      ))}
    </div>
  );
};

export default ListProgramm;
