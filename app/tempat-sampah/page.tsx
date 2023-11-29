import Image from 'next/image';
import table from 'next/table';

export default function TempatSampah() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#DCDA5E] relative">
          <div className="p-12 justify-start items-start">
          </div>
          <div className="absolute h-screen bg-white w-4/5 rounded-l-[4rem] top-0 right-0">
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
                
                </div>
              </div>
          </div>
        </main>
      );
}