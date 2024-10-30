import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomSwitch from "../../../components/common/CustomSwitch";
import EntriesSelector from "../../../components/common/EntriesSelector";
import Pagination from "../../../components/common/Pagination";
import SearchBar from "../../../components/common/SearchBar";
import TableLayoutBox from "../../../components/common/TableLayoutBox";

const Notification = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [checked, setChecked] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handleEntriesChange = (event) => {
    setEntries(event.target.value);
  };

  const handleChangeSwitch = () => {
    setChecked((prev) => !prev);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Notification</h1>
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
        </div>
      </div>

      <TableLayoutBox>
        <table className="w-full bg-white rounded-[8px] ">
          <thead className="bg-[#F6F6F6] border border-[#F6F6F6]">
            <tr>
              <th className="py-[15px] px-4 text-[#454545] font-medium">
                Title
              </th>
              <th className="py-[15px] px-4 text-[#454545] font-medium">
                Text
              </th>

              <th className="py-2 px-4 text-[#454545] font-medium">Action</th>
            </tr>
          </thead>
        </table>

        <div className="text-center border-[1px] border-[#D0D0D0] text-[#9E9E9E] p-[20px]">
          No data available in table
        </div>
      </TableLayoutBox>

      <Pagination
        currentPage={currentPage}
        totalPages={3} // Example total pages
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Notification;
