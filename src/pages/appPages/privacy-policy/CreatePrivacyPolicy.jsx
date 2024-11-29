import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPrivacyPolicy } from "../../../redux/slices/appPageSlice/privacyPolicySlice";

const CreatePrivacyPolicy = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "link",
    "align",
  ];

  const onSubmit = async (data) => {
    try {
      await dispatch(
        createPrivacyPolicy({
          title: "",
          html: content,
          type: "Privacy policy",
        })
      ).unwrap();

      toast.success("Privacy Policy created successfully!");
      navigate("/privacy-policy");
    } catch (error) {
      toast.error("Failed to create Privacy Policy. Please try again.");
    }
  };

  return (
    <div className="bg-white py-4 px-[50px]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Create Privacy Policy</h1>
      </div>

      <div
        style={{
          boxShadow: "0px 4px 8px 0px #00000026",
          borderRadius: "20px",
          border: "1px solid #DDDDDD",
        }}
      >
        <label className="block text-[17px] font-medium text-gray-700 p-[25px]">
          Description<span className="text-red-500">*</span>
        </label>

        <ReactQuill
          style={{ border: "none" }}
          value={content}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          placeholder="Enter your text here..."
        />
      </div>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "16px",
          justifyContent: "start",
          mt: 4,
          gap: "20px",
        }}
        className="max-sm:flex-col "
      >
        <Button
          variant="contained"
          sx={{
            background: "#ffffff",
            boxShadow:
              "6.22px 6.22px 15px 0px #0000001A,-6.22px -6.22px 15px 0px #F9FCFF",
            padding: "7px 20px",
            color: "#454545",
            textTransform: "unset",
          }}
          className="max-sm:w-full"
          onClick={() => navigate("/privacy-policy")}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{
            background:
              "linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
            boxShadow:
              "8px 8px 12.8px 0px #FFFFFF1A inset, -8px -8px 12.8px 0px #0000004D inset, 0px 3.46px 3.46px 0px #00000040 inset",
            padding: "7px 40px",
            textTransform: "unset",
          }}
          className="max-sm:w-full"
          onClick={onSubmit}
        >
          Save
        </Button>
      </Box>
    </div>
  );
};

export default CreatePrivacyPolicy;
