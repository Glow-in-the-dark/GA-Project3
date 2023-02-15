import React, { useState } from "react";
import { useDropzone } from "React-dropzone";
import BaseButton from "../../comp-commons/BaseButton";
import "../../index.css";
import FeatureCompany from "./FeatureCompany";

const StaffRegistration = ({ open }) => {
  const [dispFeature, setDisplayFeature] = useState(false);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleSubmit = () => {
    setDisplayFeature(true);
  };

  return (
    <div className="bg-white rounded-2xl">
      <div className="flex px-16">
        <img
          src="../../donateImages/number3.png"
          style={{ display: "inline" }}
          className="mr-2"
        />
        <h1 className="text-2xl">Registration of staff</h1>
      </div>
      <p className="px-16 ml-10">Download registration template here</p>

      <div className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drop your file here</p>
          <BaseButton
            type="button"
            label="Click to select files"
            className="mt-8"
          />
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
      </div>
      <div onClick={handleSubmit}>
        <BaseButton label="Upload File"/>
      </div>
      <button onClick={handleSubmit}>Upload File</button>
      {console.log(dispFeature)}
      {dispFeature && <FeatureCompany />}
    </div>
  );
};

export default StaffRegistration;
