import React, { useState, useEffect } from "react";
import { Select } from "antd";
import grapesjs from "grapesjs";
import {
  EyeOutlined,
  PlusCircleOutlined,
  ProfileOutlined,
  DesktopOutlined,
  ReloadOutlined,
  MobileOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import { useIntl } from "react-intl";

const mapStateToProps = () => ({});
const AddBlocks = (props) => {
  const intl = useIntl();
  const [className, setClassName] = useState("ld-add-blocks");

  useEffect(() => {
    if (props.visible) {
      setClassName("ld-add-blocks active");
    } else setClassName("ld-add-blocks");
  }, [props.visible]);

  return (
    <div className={className}>
      <div className="ld-cbo-blocks">
        <Select style={{ width: 180 }} defaultValue={0}>
          <Select.Option value={0}>Basic Blocks</Select.Option>
          <Select.Option value={1}>Built-in Blocks</Select.Option>
        </Select>
      </div>
      <div id="blocks" className="blocks"></div>
    </div>
  );
};

export default AddBlocks;
