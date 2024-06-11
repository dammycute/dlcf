import React, { useState, useEffect } from 'react';
import { Form, Upload } from 'antd';
import axios from 'axios'; // Import Axios for making HTTP requests
import { UploadOutlined } from '@ant-design/icons';
import Logo from "../../assets/logo.png";
import SignupImage from "../../assets/signupp.png";
import CloudUpload from '../../assets/cloud-upload.png';
import { useNavigate } from 'react-router-dom';

const baseUrl = "https://dlcf-futa-backend-nodejs.onrender.com";

const UploadPic = ({uploadEndpoint}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const navigate = useNavigate()

  const handleUpload = (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const formData = new FormData();
    formData.append('profilePicture', file);

    const id = localStorage.getItem('userID');
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };

    axios.put(`${baseUrl}/${uploadEndpoint}/${id}`, formData, config)
      .then((response) => {
        console.log('Upload success:', response.data);
        onSuccess("Ok");
        navigate('/signup-success')
      }, (err) => {
        console.log('Upload error:', err);
        onError({ err });
      });
  };

  return (
    <div>
      <div className="container lg:flex justify-between mx-auto">
        <div className="lg:w-2/5 pt-16">
          <img src={Logo} alt="" className="mx-auto" />
          <div className="mt-5 text-center">
            <h1 className="font-bold">Deeper Life Campus Fellowship</h1>
            <p className="mt-3 font-extralight">Akure Region</p>
          </div>
          <div className="mt-12">
            <h1 className="font-bold text-center">Workers Registration</h1>
            <div className="px-12">
              <Form.Item
                name="upload"
                valuePropName="fileList"
                getValueFromEvent={(e) => {
                  if (Array.isArray(e)) {
                    return e;
                  }
                  return e && e.fileList;
                }}
              >
                <Upload.Dragger
                  name="profilePicture"
                  customRequest={handleUpload}
                  listType="picture"
                  maxCount={1}
                >
                  <p className="ant-upload-drag-icon">
                    <img src={CloudUpload} alt="" className='mx-auto' />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single upload. Strictly prohibit from uploading company data or other band files</p>
                </Upload.Dragger>
              </Form.Item>
              <button className='rounded-3xl bg-blue-900 text-[#fff] px-3 mt-6 py-4 w-full'>Submit</button>
            </div>
          </div>
        </div>
        {windowWidth > 970 ? (
          <div className="w-3/5 fixed-position">
            <div className="overlay-container">
              <div className="overlay"></div>
              <img
                src={SignupImage}
                className="w-full"
                style={{ maxWidth: "100%", display: "block" }}
              />
            </div>
            <p className="positioning-text">We are Dean Listers, Christ Followers, Department of Love, Care and Fellowship, Devoted Life-Transformed Followers of Christ.</p>
          </div>) : null}
      </div>
    </div>
  );
}

export default UploadPic;
