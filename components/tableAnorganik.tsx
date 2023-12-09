"use client"

import {useState} from "react"

export default function TableAnorganik(props: { data: any[] }) {
const { data: InitialData } = props;
  const titles = Object.keys(InitialData[0]);
  const currencyIndexes = titles
    .map((title, index) => (title.includes("total") ? index : undefined))
    .filter((index) => index !== undefined);

  const padding = "px-2 py-2";
  const totalData = InitialData.length;
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const toCurrency = (num: number) => "Rp" + num.toLocaleString("id-ID");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalData);
  const currentPageData = InitialData.slice(startIndex, endIndex);
  const maxPageData = Math.ceil(totalData / itemsPerPage);

  return (
    <div className="shadow-xl rounded-xl bg-black">
      <table className="w-full text-center bg-white text-black ">
        <thead className="text-xl capitalize bg-white border-b-2 border-[#6C6C6C]">
          <tr>
            {titles.map((item, idx) => (
              <th
                key={idx}
                className={`px-4 py-2 text-[#8C8F96] font-semibold`}
              >
                {item.replaceAll("_", " ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item, index) => (
            <tr
              key={index + (currentPage - 1) * 5}
              className="bg-white border-b-2 border-[#6C6C6C] text-xl capitalize"
            >
              {Object.values(item).map((val, idx) => (
                <td
                  key={idx}
                  className={`${padding}`}
                >
                  {idx === titles.length - 1 || idx === titles.length -2 ? ( // Assuming status is the last column
                    <button
                      className={`px-6 py-3 rounded capitalize ${
                        val === 'Penuh' ? 'bg-[#F9BA42] rounded-full font-semibold' :
                        val === 'Isi' ? 'bg-[#227B3D] rounded-full font-semibold' :
                        val === 'Kosong' ? 'bg-[#D9D9D9] rounded-full font-semibold' :
                        'bg-gray-500'
                      }`}
                    >
                      {val as string}
                    </button>
                  ) : (
                    idx === 2 ? (
                      <div className="flex items-center justify-center font-semibold">
                        {toCurrency(item.total_nominal)}
                      </div>
                    ) : currencyIndexes.includes(idx) ? (
                      toCurrency(val as number)
                    ) : (
                      <p className="font-semibold">{val as string}</p>
                    )
                  )}
                </td>
              ))}
              
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
      <div className="flex justify-center gap-8 items-center bg-white py-8 ">
        <div className="flex justify-center">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? "text-[#9b9b9b]" : "text-black"
            } bg-[#D9D9D9] px-4 py-1 rounded-l-full`}
          >
            {"<<"}
          </button>
          <button className="bg-[#BBB7B7] px-4 py-1">{currentPage}</button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === maxPageData}
            className={`${
              currentPage === maxPageData ? "text-[#9b9b9b]" : "text-black"
            } bg-[#D9D9D9] px-4 py-1 rounded-r-full`}
          >
            {">>"}
          </button>
        </div>
        <p className="text-xl">
          Showing {currentPage} to {maxPageData} of {totalData} entries
        </p>
      </div>
    </div>
  );
}