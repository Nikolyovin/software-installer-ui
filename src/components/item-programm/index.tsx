import React, { FC } from "react";
import "./style.css";
import { Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

interface IProps {
  name: string;
  description: string;
  value: string;
}

const ItemProgramm: FC<IProps> = ({ name, description, value }) => {
  return (
    <div className="itemProgramm-container">
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
      />
      <div className="itemProgramm-textWrap">
        <span className="itemProgramm-name">{name}</span>
        <span className="itemProgramm-description">{description}</span>
      </div>
    </div>
  );
};

export default ItemProgramm;
