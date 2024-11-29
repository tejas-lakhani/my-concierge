import EditIcon from "@mui/icons-material/Edit";
import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ActionButton from "../../../components/common/ActionButton";
import {
  fetchTermsAndCondition,
  selectLoading,
  selectTermsConditions,
} from "../../../redux/slices/appPageSlice/termsAndConditionsSlice";
import DeleteTermsConditions from "./DeleteTermsConditions";

const TermsCondition = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const termsData = useSelector(selectTermsConditions);

  const decodeHtmlContent = (htmlBuffer) => {
    if (htmlBuffer?.type === "Buffer" && Array.isArray(htmlBuffer.data)) {
      return new TextDecoder().decode(new Uint8Array(htmlBuffer.data));
    }
    return "";
  };

  const htmlContent = useMemo(() => {
    return termsData?.html ? decodeHtmlContent(termsData.html) : "";
  }, [termsData]);

  useEffect(() => {
    dispatch(fetchTermsAndCondition());
  }, [dispatch]);

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Terms and Conditions</h1>

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
                navigate(`/terms-and-conditions/edit`, {
                  state: { data: htmlContent, id: termsData?.uuid },
                })
              }
            />
            <DeleteTermsConditions id={termsData?.uuid} />
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
            onClick={() => navigate("/terms-and-conditions/create")}
          >
            Add Terms and Condition
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

export default TermsCondition;
