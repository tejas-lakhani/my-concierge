import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateSubCategory } from "../../../redux/slices/subCategorySlice";
import SelectCategoryDialog from "./components/SelectCategoryDialog";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const EditSubCategory = () => {
  const location = useLocation();
  const subCategoryData = location.state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [catIdName, setCatIdName] = useState(
    subCategoryData?.categoryDetaile?.name
  );

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);

  // Initialize React Hook Form with default values
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: subCategoryData?.name || "",
      cat_id: subCategoryData?.category_id || "",
      description: subCategoryData?.description || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(
        updateSubCategory({
          uuid: subCategoryData.uuid,
          name: data.name,
          category_id: data.cat_id,
          description: data.description,
        })
      ).unwrap();

      toast.success("Category updated successfully!");
      navigate("/sub-category");
    } catch (error) {
      toast.error("Failed to update category. Please try again.");
    }
  };

  return (
    <form
      className="bg-white py-4 px-[20px] sm:px-[70px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Edit Category</h1>
      </div>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="start"
        gap={isMobile ? "20px" : "50px"}
        maxWidth={"1400px"}
      >
        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          sx={{
            maxWidth: isMobile ? "100%" : "75%",
            boxShadow: "0px 4px 8px 0px #00000026",
            padding: { xs: "15px", sm: "30px" },
            borderRadius: "20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full rounded-md p-3"
                placeholder="Category Name"
                style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Category<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div
                  className="mt-1 w-full rounded-md p-3 relative flex justify-between cursor-pointer"
                  style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                  onClick={handleOpenDialog}
                >
                  <p>{catIdName ? catIdName : "Select Category"}</p>
                  <ExpandMoreIcon />
                </div>
                <SelectCategoryDialog
                  open={dialogOpen}
                  setOpen={setDialogOpen}
                  setCatId={(id) => {
                    setValue("cat_id", id.id);
                    setCatIdName(id.name);
                  }}
                />
              </div>
              {errors.sequence && (
                <p className="text-red-500">{errors.sequence.message}</p>
              )}
            </Grid>

            <Grid item xs={12}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                className="w-full min-h-[200px] border-none focus:ring-0 p-3"
                style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
              ></textarea>
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </Grid>
          </Grid>
        </Box>

        <Card
          sx={{
            width: isMobile ? "100%" : "300px",
            marginTop: isMobile ? "20px" : "0",
            boxShadow: "0px 4px 8px 0px #00000026",
            borderRadius: "20px",
          }}
        >
          <CardContent>
            <Typography variant="body1" gutterBottom fontWeight={"500"}>
              Created at
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {subCategoryData?.created_at || "-"}
            </Typography>
            <Typography variant="body1" mt={3} gutterBottom fontWeight={"500"}>
              Last modified at
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {subCategoryData?.last_modified_at || "-"}
            </Typography>
          </CardContent>
        </Card>
      </Box>

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
            padding: "7px 20px",
            color: "#454545",
            textTransform: "unset",
          }}
          onClick={() => navigate("/sub-category")}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{
            background:
              "linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
            padding: "7px 20px",
            textTransform: "unset",
          }}
        >
          Update Category
        </Button>
      </Box>
    </form>
  );
};

export default EditSubCategory;
