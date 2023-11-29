import Image from 'next/image';
import Table from "@/components/table";
import React, { useState, useEffect } from "react";

interface Item {
  id: number;
  nama: string;
  harga: number;
  gambar: string;
  kategori: string;
  status: string;
}

export default function TempatSampah() {
  const [dataProduk, setDataProduk] = useState([]);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#DCDA5E] relative">
          <div className="p-12 justify-start items-start ">
     
          

  <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-[#DCDA5E] h-full text-gray-600 transition-all duration-300 border-none z-80 sidebar">
    <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
      <ul className="flex flex-col ml-3 py-4 space-y-1">
      <div className="flex items-center justify-center mb-2">
         <img src="/idorm.svg" className="mb-5" alt="idormLogo" style={{width:'120px'}} />
      </div>
        <li>
        <a
          href="#"
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black text-black hover:text-white hover:rounded-full  border-l-4 border-transparent z-40"
        >
           <span className="inline-flex justify-center items-center ml-4">
            <img src="/data.png" aria-hidden="true" alt="Icon" className="w-5 h-5 mr-1" />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">Data Penghuni</span>
        </a>
        </li>
        <li>
        <a
          href="#"
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black text-black hover:text-white hover:rounded-full border-l-4 border-transparent z-40"
        >
          <span className="inline-flex justify-center items-center ml-4">
            <img src="/seleksi.svg" aria-hidden="true" alt="Icon" className="w-5 h-5 mr-1" />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">Seleksi Calon Penghuni</span>
        </a>
        </li>
        <li>
        <a
          href="#"
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black text-black hover:text-white hover:rounded-full border-l-4 border-transparent"
        >
          <span className="inline-flex justify-center items-center ml-4">
            <img src="/credit.png" aria-hidden="true" alt="Icon" className="w-5 h-5 mr-1" />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">Pembayaran Penghuni</span>
        </a>
        </li>
        <li>
        <a
          href="#"
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black text-black hover:text-white hover:rounded-full border-l-4 border-transparent z-40"
        >
          <span className="inline-flex justify-center items-center ml-4">
            <img src="/keluhan.svg" aria-hidden="true" alt="Icon" className="w-5 h-5 mr-1" />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">Keluhan dan Permintaan</span>
        </a>
        </li>
        <li>
        <a
          href="#"
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black text-black hover:text-white hover:rounded-full border-l-4 border-transparent z-40"
        >
          <span className="inline-flex justify-center items-center ml-4">
            <img src="/laporan.svg" aria-hidden="true" alt="Icon" className="w-5 h-5 mr-1" />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">Laporan Pegawai</span>
        </a>
        </li>
        <li>
        <a
          href="#"
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black text-black hover:text-white hover:rounded-full border-l-4 border-transparent z-40"
        >
          <span className="inline-flex justify-center items-center ml-4">
            <img src="/cancel.png" aria-hidden="true" alt="Icon" className="w-5 h-5 mr-1" />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">Smart Trash Bin</span>
        </a>
        </li>
      </ul>
     
    </div>
  </div>

              </div>
          <div className="absolute h-screen bg-white w-4/5 rounded-l-[4rem] top-0 right-0 z-50">
            <div className="h-full flex items-start justify-start">
              <div className="text-right">
                <div className="mt-20 ml-20">
                  <p className="text-black flex font-semibold text-[28px]">
                    Smart Trash Bin
                  </p>
                </div>
             
                <div className="ml-20 mt-5 flex flex-justify-between gap-10">
                  <div className="rounded-[20px] bg-[#A5B9C8] w-200 h-40">
                    <div className="flex flex-justify-between gap-10">
                      <div className=" mt-3 ml-8 text-start items-center">
                        <div className="flex items-center">
                          <p className=" text-black font-bold text-[50px]" >75</p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-black font-semibold text-[15px]">Total Tempat</p>
                        </div>
                        <div className="flex items-center">
                        <p className=" text-black font-semibold text-[15px]">Sampah</p>
                        </div>
                      </div>
                      <div className="flex items-center mt-5 ml-10 mr-8">
                        <Image
                            src="/trash.png"
                            alt="logo sampah"
                            width={50}  // Adjust the width based on your actual image size
                            height={50} // Adjust the height based on your actual image size
                            priority
                            />
                      </div>
                    </div>      
                  </div>
                  <div className="rounded-[20px] bg-[#D9D9D9] w-200 h-40">
                    <div className="flex flex-justify-between gap-10">
                      <div className=" mt-3 ml-8 text-start items-center">
                        <div className="flex items-center">
                          <p className=" text-black font-bold text-[50px]" >30</p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-black font-semibold text-[15px]">Total Tempat</p>
                        </div>
                        <div className="flex items-center">
                        <p className=" text-black font-semibold text-[15px]">Sampah Organik</p>
                        </div>
                      </div>
                      <div className="flex items-center mt-5 ml-10 mr-8">
                        <Image
                            src="/daun.png"
                            alt="logo sampah organik"
                            width={50}  // Adjust the width based on your actual image size
                            height={50} // Adjust the height based on your actual image size
                            priority
                            />
                      </div>
                    </div>      
                  </div>
                  <div className="rounded-[20px] bg-[#DCE2E7] w-200 h-40">
                    <div className="flex flex-justify-between gap-10">
                      <div className=" mt-3 ml-8 text-start items-center">
                        <div className="flex items-center">
                          <p className=" text-black font-bold text-[50px]" >45</p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-black font-semibold text-[15px]">Total Tempat</p>
                        </div>
                        <div className="flex items-center">
                        <p className=" text-black font-semibold text-[15px]">Sampah Anorganik</p>
                        </div>
                      </div>
                      <div className="flex items-center mt-5 ml-10 mr-8">
                        <Image
                            src="/gelas.png"
                            alt="logo sampah anorganik"
                            width={50}  // Adjust the width based on your actual image size
                            height={50} // Adjust the height based on your actual image size
                            priority
                            />
                      </div>
                    </div>      
                  </div>
                </div>

                <div className="ml-20 mt-5 flex flex-justify-between gap-10">
                  <p className="text-black flex font-semibold text-[22px]">
                    Tempat Sampah Organik
                  </p>
                  <button type="button" className="ml-7 flex items-center justify-center text-black bg-[#A5B9C8] hover:bg-[#8195A] focus:outline-none focus:ring-4 focus:ring-[#8195A] font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-[#8195A] dark:hover:bg-[#8195A] dark:focus:ring-[#8195A]">
                   <img src="/tambah.png" aria-hidden="true" alt="Icon" className="w-5 h-5 mr-1" />Tambah
                  </button>
                  <p className=" ml-5 text-black flex font-semibold text-[22px]">
                    Tempat Sampah Anorganik
                  </p>
                  <button type="button" className="ml-7 flex items-center justify-center text-black bg-[#A5B9C8] hover:bg-[#8195A] focus:outline-none focus:ring-4 focus:ring-[#8195A] font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-[#8195A] dark:hover:bg-[#8195A] dark:focus:ring-[#8195A]">
                    <img src="/tambah.png" aria-hidden="true" alt="Icon" className="w-5 h-5 mr-1" />Tambah
                  </button>
                </div>
                <div className="ml-20 mt-5 flex flex-justify-between gap-10">
                <Table data={dataProduk} allowUpdateLaundry={true} allowDelete={true} />
</div>

                </div>
                
              </div>
          </div>
        </main>
      );
}