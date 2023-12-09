"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import TableOrganik from "@/components/table-organik";
import TableAnorganik from "@/components/table-anorganik";
import ModalAddTS from "@/components/modal/add-tempat-sampah";

interface TempatSampah {
  id: number;
  lokasi: string;
  kepenuhan: string;
  updatedAt: string;
  isOrganic?: boolean;
}

export default function TempatSampah() {
  const [dataTS, setDataTS] = useState<TempatSampah[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isOrganic, setIsOrganic] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/tempat-sampah");
        if (response.ok) {
          const data = (await response.json()).data;
          setDataTS(data);
        } else {
          window.alert("Failed to fetch data");
        }
      } catch (error) {
        window.alert("Error fetching data:" + error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex h-screen flex-col items-center justify-between bg-[#DCDA5E] relative">
      <ModalAddTS isOpen={isAddModalOpen} isOrganic={isOrganic} onClose={() => setIsAddModalOpen(false)} />
      <div className="p-12 justify-start items-start ">
        <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-[#DCDA5E] h-[80vh] text-gray-600 transition-all duration-300 border-none sidebar">
          <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col ml-3 py-4 space-y-1">
              <div className="flex items-center justify-center mb-2">
                <img
                  src="/idorm.svg"
                  className="mb-5"
                  alt="idormLogo"
                  style={{ width: "120px" }}
                />
              </div>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black text-black hover:text-white hover:rounded-full  border-l-4 border-transparent z-40"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <img
                      src="/data.png"
                      aria-hidden="true"
                      alt="Icon"
                      className="w-5 h-5 mr-1"
                    />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Data Penghuni
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black  text-black hover:text-white hover:rounded-full border-l-4 border-transparent z-40"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <img
                      src="/seleksi.svg"
                      aria-hidden="true"
                      alt="Icon"
                      className="w-5 h-5 mr-1"
                    />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Seleksi Calon Penghuni
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black text-black hover:text-white hover:rounded-full border-l-4 border-transparent"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <img
                      src="/credit.png"
                      aria-hidden="true"
                      alt="Icon"
                      className="w-5 h-5 mr-1"
                    />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Pembayaran Penghuni
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black text-black hover:text-white hover:rounded-full border-l-4 border-transparent z-40"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <img
                      src="/keluhan.svg"
                      aria-hidden="true"
                      alt="Icon"
                      className="w-5 h-5 mr-1"
                    />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Keluhan dan Permintaan
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black text-black hover:text-white hover:rounded-full border-l-4 border-transparent z-40"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <img
                      src="/laporan.svg"
                      aria-hidden="true"
                      alt="Icon"
                      className="w-5 h-5 mr-1"
                    />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Laporan Pegawai
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none bg-black text-white rounded-full border-l-4 border-transparent z-40"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <img
                      src="/folder.svg"
                      aria-hidden="true"
                      alt="Icon"
                      className="w-5 h-5 mr-1 fill-black"
                    />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Smart Trash Bin
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute h-screen bg-white w-4/5 rounded-l-[4rem] top-0 right-0">
        <div className=" items-start justify-start">
          <div className="h-full text-right">
            <div className="mt-12 ml-20">
              <p className="text-black flex font-semibold text-[30px]">
                Smart Trash Bin
              </p>
            </div>

            <div className="ml-20 mt-4 flex flex-justify-between gap-10">
              <div className="rounded-[20px] bg-[#A5B9C8] w-200 h-36 shadow-lg">
                <div className="flex flex-justify-between gap-10">
                  <div className="mt-2 ml-8 text-start items-center">
                    <div className="flex items-center">
                      <p className=" text-black font-bold text-[50px]">75</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-black font-semibold text-[15px]">
                        Total Tempat
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className=" text-black font-semibold text-[15px]">
                        Sampah
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 ml-10 mr-8">
                    <Image
                      src="/trash.png"
                      alt="logo sampah"
                      width={50} // Adjust the width based on your actual image size
                      height={50} // Adjust the height based on your actual image size
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-[20px] bg-[#D9D9D9] w-200 h-36 shadow-lg">
                <div className="flex flex-justify-between gap-10">
                  <div className=" mt-2 ml-8 text-start items-center">
                    <div className="flex items-center">
                      <p className=" text-black font-bold text-[50px]">30</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-black font-semibold text-[15px]">
                        Total Tempat
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className=" text-black font-semibold text-[15px]">
                        Sampah Organik
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 ml-10 mr-8">
                    <Image
                      src="/daun.png"
                      alt="logo sampah organik"
                      width={50} // Adjust the width based on your actual image size
                      height={50} // Adjust the height based on your actual image size
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-[20px] bg-[#DCE2E7] w-200 h-36 shadow-lg">
                <div className="flex flex-justify-between gap-10">
                  <div className=" mt-2 ml-8 text-start items-center">
                    <div className="flex items-center">
                      <p className=" text-black font-bold text-[50px]">45</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-black font-semibold text-[15px]">
                        Total Tempat
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className=" text-black font-semibold text-[15px]">
                        Sampah Anorganik
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 ml-10 mr-8">
                    <Image
                      src="/gelas.png"
                      alt="logo sampah anorganik"
                      width={50} // Adjust the width based on your actual image size
                      height={50} // Adjust the height based on your actual image size
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-20 mt-5 mr-10 flex flex-row justify-between text-black gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <p className="text-black font-semibold text-[22px]">
                    Tempat Sampah Organik
                  </p>
                  <button
                    onClick={() => {
                      setIsOrganic(true);
                      setIsAddModalOpen(true);
                    }}
                    type="button"
                    className="ml-20 flex text-black bg-[#A5B9C8] hover:bg-[#8195A] focus:outline-none focus:ring-4 focus:ring-[#8195A] font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-[#8195A] dark:hover:bg-[#8195A] dark:focus:ring-[#8195A]"
                  >
                    <img
                      src="/tambah.png"
                      aria-hidden="true"
                      alt="Icon"
                      className="w-5 h-5 mr-1"
                    />
                    Tambah
                  </button>
                </div>
                <TableOrganik data={dataTS.filter(res => res.isOrganic)} />

              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-start">
                  <p className="text-black flex font-semibold text-[22px]">
                    Tempat Sampah Anorganik
                  </p>
                  <button
                    onClick={() => {
                      setIsOrganic(false);
                      setIsAddModalOpen(true);
                    }}
                    type="button"
                    className="ml-20 flex items-center justify-center text-black bg-[#A5B9C8] hover:bg-[#8195A] focus:outline-none focus:ring-4 focus:ring-[#8195A] font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-[#8195A] dark:hover:bg-[#8195A] dark:focus:ring-[#8195A]"
                  >
                    <img
                      src="/tambah.png"
                      aria-hidden="true"
                      alt="Icon"
                      className="w-5 h-5 mr-1"
                    />
                    Tambah
                  </button>
                </div>
                <TableAnorganik data={dataTS.filter(res => !res.isOrganic)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAddModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50" />
      )}
    </main>
  );
}
