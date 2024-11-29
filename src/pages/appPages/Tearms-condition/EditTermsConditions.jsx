import { Button } from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateTermsAndCondition } from "../../../redux/slices/appPageSlice/termsAndConditionsSlice";

const EditTermsConditions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const defaultData = location.state;

  const [content, setContent] = useState(defaultData.data);

  const handleChange = (value) => {
    setContent(value);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
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
    "image",
    "align",
  ];

  const onSubmit = async (data) => {
    try {
      await dispatch(
        updateTermsAndCondition({
          title: "",
          html: content,
          type: "Terms and conditions",
          uuid: defaultData?.id,
        })
      ).unwrap();

      toast.success("Terms and Conditions updated successfully!");
      navigate("/terms-and-conditions");
    } catch (error) {
      toast.error("Failed to update Terms and Conditions. Please try again.");
    }
  };

  return (
    <div className="bg-white py-4 px-[50px]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Edit Terms and Condition</h1>
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
          onClick={() => navigate("/terms-and-conditions")}
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

export default EditTermsConditions;
