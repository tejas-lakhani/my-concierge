import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ActionButton from "../../../components/common/ActionButton";
import CircularIndeterminate from "../../../components/common/CircularIndeterminate";
import CustomSwitch from "../../../components/common/CustomSwitch";
import EntriesSelector from "../../../components/common/EntriesSelector";
import NoData from "../../../components/common/NoData";
import Pagination from "../../../components/common/Pagination";
import SearchBar from "../../../components/common/SearchBar";
import TableLayoutBox from "../../../components/common/TableLayoutBox";
import {
  fetchSubCategories,
  selectLoading,
  selectNoData,
  selectSubCategories,
  selectSubCategoriesPagination,
} from "../../../redux/slices/subCategorySlice";
import DeleteSubCategory from "./DeleteSubCategory";

const SubCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const subCategories = useSelector(selectSubCategories);
  const categoriesPagination = useSelector(selectSubCategoriesPagination);
  const loading = useSelector(selectLoading);
  const noData = useSelector(selectNoData);

  const [entries, setEntries] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    categoriesPagination.total_records / categoriesPagination.records_per_page
  );

  const handleEntriesChange = (event) => {
    setEntries(event.target.value);
    setCurrentPage(1); // Reset to page 1 on changing entries per page
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(
      fetchSubCategories({
        page: currentPage,
        records_per_page: entries,
        search: searchTerm,
      })
    );
  }, [dispatch, currentPage, entries, searchTerm]);

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Sub Category</h1>
      </div>
      <div className="flex justify-between md:items-center mb-4 max-md:flex-col">
        <div className="flex items-center space-x-2 max-md:mb-4">
          <span className="text-gray-700">Show</span>
          <EntriesSelector
            entries={entries}
            handleChange={handleEntriesChange}
          />
          <span className="text-gray-700">Entries</span>
        </div>

        <div className="flex gap-5 justify-between items-center flex-wrap">
          <SearchBar onSearch={handleSearch} />
          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
              padding: "13px 25px",
              borderRadius: "25px",
              fontSize: { xs: "12px", sm: "13px" },
            }}
            onClick={() => navigate("/sub-category/create")}
          >
            Add New Sub Category
          </Button>
        </div>
      </div>

      <TableLayoutBox>
        <table className="w-full bg-white rounded-[8px]">
          <thead className="bg-[#F6F6F6] border border-[#F6F6F6]">
            <tr>
              {/* <th className="py-[15px] px-4 text-[#454545] font-medium">
                Profile
              </th> */}
              <th className="py-[15px] px-4 text-[#454545] font-medium">
                Sequence
              </th>
              <th className="py-[15px] px-4 text-[#454545] font-medium">
                Name
              </th>
              <th className="py-[15px] px-4 text-[#454545] font-medium">
                Description
              </th>
              <th className="py-2 px-4 text-[#454545] font-medium">Status</th>
              <th className="py-2 px-4 text-[#454545] font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="border">
            {subCategories.map((item, index) => (
              <tr key={index}>
                {/* <td className="py-2 border-[1px] border-[#D0D0D0]  px-4 border-b text-center">
                  <img
                    src={profileImage}
                    alt=""
                    className="bock mx-auto w-[40px]"
                  />
                </td> */}
                <td className="py-2 border-[1px] border-[#D0D0D0]  px-4 border-b text-center">
                  {item.sequence}
                </td>
                {/* <td className="py-2 border-[1px] border-[#D0D0D0] px-4 border-b text-center">
                  {index + 1}
                </td> */}
                <td className="py-2 border-[1px] border-[#D0D0D0] min-w-[200px] px-4 border-b text-center">
                  {item?.name}
                </td>
                <td className="py-2 min-w-[200px] border-[1px] border-[#D0D0D0] px-4 border-b text-center">
                  {item?.description}
                </td>
                <td className="py-2 border-[1px] border-[#D0D0D0] px-4 border-b text-center">
                  <CustomSwitch checked={item?.is_active} />
                </td>
                <td className="py-2 border-[1px] border-[#D0D0D0] px-4 border-b text-center">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <ActionButton
                      icon={<VisibilityIcon />}
                      label="View"
                      color="#3f3f3f"
                    />
                    <ActionButton
                      icon={<EditIcon />}
                      label="Edit"
                      color="#1976d2"
                      onClick={() =>
                        navigate(`/sub-category/edit`, { state: item })
                      }
                    />
                    <DeleteSubCategory id={item?.uuid} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {noData && <NoData />}
        {loading && <CircularIndeterminate />}
      </TableLayoutBox>

      {!noData && !loading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default SubCategory;
