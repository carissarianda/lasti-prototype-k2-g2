import Image from 'next/image';

export default function TempatSampah() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#DCDA5E] relative">
          <div className="p-12 justify-start items-start">
            <Image
              src="/idorm.svg"
              alt="iDorm Logo"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="absolute h-screen bg-white w-4/5 rounded-l-[4rem] top-0 right-0">
            <div className="h-full flex items-start justify-start">
              <div className="text-right">
                <div className="mt-20 ml-20">
                  <p className="text-black font-semibold text-[28px]">
                    Smart Trash Bin
                  </p>
                  <div className="flex flex-col-reverse gap-4">
                  </div>
                <div>
                <div className="rounded-[12px] bg-[#A5B9C8] w-200 h-40">
                <Image
                    src="/trash.png"
                    alt="logo sampah"
                    width={100}  // Adjust the width based on your actual image size
                    height={100} // Adjust the height based on your actual image size
                    priority
                    />
                  <p className="text-black">Total Tempat Sampah</p>
                </div>
                <div className="rounded-[12px] bg-[#A5B9C8]">
                  <p className="text-black">Total Tempat Sampah</p>
                </div>
                <div className="rounded-[12px] bg-[#A5B9C8]">
                  <p className="text-black">Total Tempat Sampah</p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
}