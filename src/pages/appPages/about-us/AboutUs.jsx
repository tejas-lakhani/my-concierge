import EditIcon from "@mui/icons-material/Edit";
import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ActionButton from "../../../components/common/ActionButton";
import DeleteAboutUs from "./DeleteAboutUs";
import {
  fetchAboutUs,
  selectAboutUs,
  selectLoading,
} from "../../../redux/slices/appPageSlice/aboutUsSlice";

const AboutUs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const aboutUsData = useSelector(selectAboutUs);

  const decodeHtmlContent = (htmlBuffer) => {
    if (htmlBuffer?.type === "Buffer" && Array.isArray(htmlBuffer.data)) {
      return new TextDecoder().decode(new Uint8Array(htmlBuffer.data));
    }
    return "";
  };

  const htmlContent = useMemo(() => {
    return aboutUsData?.html ? decodeHtmlContent(aboutUsData.html) : "";
  }, [aboutUsData]);

  useEffect(() => {
    dispatch(fetchAboutUs());
  }, [dispatch]);

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">About us</h1>

        {htmlContent ? (
          <div
            style={{
              display: loading ? "none" : "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <ActionButton
              icon={<EditIcon />}
              label="Edit"
              color="#1976d2"
              onClick={() =>
                navigate(`/about-us/edit`, {
                  state: { data: htmlContent, id: aboutUsData?.uuid },
                })
              }
            />
            <DeleteAboutUs id={aboutUsData?.uuid} />
          </div>
        ) : (
          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
              padding: "13px 25px",
              borderRadius: "25px",
              fontSize: { xs: "12px", sm: "13px" },
              display: loading ? "none" : "block",
            }}
            onClick={() => navigate("/about-us/create")}
          >
            Add About us
          </Button>
        )}
      </div>

      {htmlContent ? (
        <div
          className="terms-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      ) : (
        <div className="text-[30px] px-[15px] pt-[200px] text-center">
          {loading ? (
            <CircularProgress color="black" />
          ) : (
            <h1 className="text-[#D9D9D9]">NO DATA FOUND</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default AboutUs;
