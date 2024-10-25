import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";

export const UploadButton = ({loading}:{loading:boolean}) => {
  return (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
};
