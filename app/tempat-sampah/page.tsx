import Image from 'next/image';

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
                <table className="table-auto">
                      <thead>
                        <tr>
                          <th>Song</th>
                          <th>Artist</th>
                          <th>Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                          <td>Malcolm Lockyer</td>
                          <td>1961</td>
                        </tr>
                        <tr>
                          <td>Witchy Woman</td>
                          <td>The Eagles</td>
                          <td>1972</td>
                        </tr>
                        <tr>
                          <td>Shining Star</td>
                          <td>Earth, Wind, and Fire</td>
                          <td>1975</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
                
                </div>
              </div>
          </div>
        </main>
      );
}