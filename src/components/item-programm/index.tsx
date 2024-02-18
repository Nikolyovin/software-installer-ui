import React, { FC } from "react";
import "./style.css";
import { Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const ItemProgramm: FC = () => {
  return (
    <div className="itemProgramm-container">
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
      />
      <div className="itemProgramm-textWrap">
        <span className="itemProgramm-name">Intellect</span>
        <span className="itemProgramm-description">видеонаблюдение</span>
      </div>
    </div>
  );
};

export default ItemProgramm;
