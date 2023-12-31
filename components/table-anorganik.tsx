"use client"

import { SetStateAction, useState } from "react"
import Image from "next/image"
import ModalEditTS from "./modal/edit-tempat-sampah";
import ModalDeleteTS from "./modal/delete-tempat-sampah";

export default function TableAnorganik(props: { data: any[] }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openEditModal = (item: SetStateAction<null>) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (item: SetStateAction<null>) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const handleCloseModals = () => {
    setSelectedItem(null);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    window.location.reload();
  }

  const { data: InitialData } = props;
  let titles, currencyIndexes: (number | undefined)[], totalData = 0;
  if (InitialData && InitialData.length > 0) {
    titles = Object.keys(InitialData[0]);
    currencyIndexes = titles
      .map((title, index) => (title.includes("total") ? index : undefined))
      .filter((index) => index !== undefined);
    totalData = InitialData.length;
  }

  const padding = "px-2 py-2";
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalData);
  const currentPageData = InitialData.slice(startIndex, endIndex);
  const maxPageData = Math.ceil(totalData / itemsPerPage);

  return (
    <div className="shadow-xl rounded-lg border-2 px-4 py-2 bg-white">
      {selectedItem && <ModalEditTS isOpen={isEditModalOpen} item={selectedItem} onClose={handleCloseModals} />}
      {selectedItem && <ModalDeleteTS isOpen={isDeleteModalOpen} item={selectedItem} onClose={handleCloseModals} />}
      <table className="w-full text-center bg-white text-black ">
        <thead className="text-md capitalize bg-white border-b-2 border-[#B7C7D2]">
          <tr>
            {titles?.map((item, idx) => (
              <th
                key={idx}
                className={`px-2 py-2 text-[#8C8F96] font-semibold`}
              >
                {item.replaceAll("_", " ")}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item, index) => (
            <tr
              key={index + (currentPage - 1) * 5}
              className="bg-white border-[#6C6C6C] text-sm capitalize"
            >
              {Object.values(item).map((val, idx) => (
                <td
                  key={idx}
                  className={`${padding}`}
                >
                  {idx === titles.length - 1 ? ( // Assuming status is the last column
                    <button
                      className={`px-6 py-2 w-3/5 rounded capitalize ${val === 'Penuh' ? 'bg-[#F9BA42] rounded-full font-semibold' :
                        val === 'Isi' ? 'bg-[#227B3D] rounded-full font-semibold' :
                          val === 'Kosong' ? 'bg-[#D9D9D9] rounded-full font-semibold' :
                            'bg-gray-500'
                        }`}
                    >
                      {val as string}
                    </button>
                  ) : (
                    <p className="font-semibold">{val as string}</p>
                  )}
                </td>
              ))}
              <td className="flex">
                <Image
                  src="/pencil.svg"
                  className="p-2 cursor-pointer"
                  width={36}
                  height={36}
                  alt={""}
                  onClick={() => openEditModal(item)}
                />
                <Image
                  src="/trash.svg"
                  className="p-2 cursor-pointer"
                  width={36}
                  height={36}
                  alt={""}
                  onClick={() => openDeleteModal(item)}
                />
              </td>
            </tr>
          ))}
          {/* {footer && (
            <tr>
              {titles.map((_, idx) => (
                <td key={idx}>
                  <div
                    className={`h-1.5 bg-[#7689E7] ${idx === 0 && "ml-8"} ${
                      idx == titles.length - 1 && !allowDelete && "mr-8"
                    }`}
                  ></div>
                </td>
              ))}
              {allowDelete && (
                <td>
                  <div className="h-1.5 bg-[#7689E7] mr-8"></div>
                </td>
              )}
            </tr>
          )} */}
        </tbody>
      </table>
      <div className="flex justify-center gap-4 items-center bg-white pt-2 ">
        <div className="flex justify-center">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${currentPage === 1 ? "text-[#9b9b9b]" : "text-black"
              } bg-[#D9D9D9] px-3 py-1 rounded-l-full`}
          >
            {"<<"}
          </button>
          <button className="bg-[#BBB7B7] px-3 py-1">{currentPage}</button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === maxPageData}
            className={`${currentPage === maxPageData ? "text-[#9b9b9b]" : "text-black"
              } bg-[#D9D9D9] px-3 py-1 rounded-r-full`}
          >
            {">>"}
          </button>
        </div>
        <p className="text-base">
          Showing {currentPage} to {maxPageData} of {totalData} entries
        </p>
      </div>
    </div>
  );
}