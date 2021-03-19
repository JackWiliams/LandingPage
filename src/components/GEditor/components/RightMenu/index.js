import React from "react";
import Draggable from "react-draggable";
import { Popconfirm } from "antd";
import {
  SaveOutlined,
  SettingOutlined,
  CloudUploadOutlined,
  ExportOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";

const mapStateToProps = () => ({});
const RightMenu = (props) => {
  const intl = useIntl();
  const history = useHistory();
  return (
    <Draggable handle="#handle">
      <div id="right-menu" className="menu-popup right active">
        <div className="menu-header" id="handle">
          <i className="icon icon-ellipse-h icon-header"></i>
        </div>
        <div className="menu-body">
          {/* Save */}
          <div
            className="menu-item btn-outline-primary"
            onClick={() => props.editor.runCommand("store")}
          >
            <SaveOutlined />
            <div className="item-label">
              {intl.formatMessage({
                id: "pages.landing.edit.leftMenu.save",
              })}{" "}
            </div>
          </div>
          {/* Setting part */}
          <div className="menu-item btn-outline-primary">
            <SettingOutlined />
            <div className="item-label">
              {intl.formatMessage({
                id: "pages.landing.edit.leftMenu.setting",
              })}{" "}
            </div>
          </div>
          {/* Publish part */}
          <div className="menu-item btn-outline-primary">
            <CloudUploadOutlined />
            <div className="item-label">
              {intl.formatMessage({
                id: "pages.landing.edit.leftMenu.publish",
              })}{" "}
            </div>
          </div>
          {/* Quit part */}
          <Popconfirm
            placement="left"
            title="Are you sure to quit？"
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            onConfirm={() => history.push("/landing-pages/manager")}
            cancelButtonProps={{
              type: "default",
              style: { width: 60, height: 30 },
            }}
            okButtonProps={{
              type: "primary",
              style: { width: 60, height: 30 },
            }}
            okText="Yes"
          >
            <div className="menu-item btn-outline-primary">
              <ExportOutlined />
              <div className="item-label">
                {intl.formatMessage({
                  id: "pages.landing.edit.leftMenu.quit",
                })}{" "}
              </div>
            </div>
          </Popconfirm>
        </div>
      </div>
    </Draggable>
  );
};

export default RightMenu;
