import React, { useState } from "react";
import { Dropdown } from "../dropdown";

interface ModalAddTSProps {
  isOpen: boolean;
  isOrganic: boolean;
  onClose: () => void;
}

const ModalAddTS = (props: ModalAddTSProps) => {
  const { isOpen, isOrganic, onClose } = props;
  const [payload, setPayload] = useState({
    lokasi: "",
    isOrganic: isOrganic,
    kepenuhan: "kosong",
  });

  if (!isOpen) {
    return null;
  }

  const tingkatKepenuhan = [
    {
      text: "Kosong",
      onClick: () => setPayload({ ...payload, kepenuhan: "kosong" }),
    },
    {
      text: "Terisi",
      onClick: () => setPayload({ ...payload, kepenuhan: "terisi" }),
    },
    {
      text: "Penuh",
      onClick: () => setPayload({ ...payload, kepenuhan: "penuh" }),
    },
  ];

  const handleSave = () => {
    if (payload.lokasi === "") {
      window.alert("Form tidak boleh kosong");
      return;
    }

    console.log(payload)

    fetch("/api/tempat-sampah", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "success") {
          onClose();
          window.alert("Berhasil menambahkan tempat sampah");
          window.location.reload();
        } else {
          window.alert(JSON.stringify(res.error));
        }
      });
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-xl">
        <div className="flex flex-col mb-4">
          <p className="text-2xl font-bold text-black flex justify-center mb-10" id="modal-title">
            Tambah Tempat Sampah
          </p>
          <div className="mt-4 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="id_user" className="text-xl font-bold text-black">
                Lokasi Tempat Sampah
              </label>
              <input
                type="text"
                name="id_user"
                id="id_user"
                className="text-md mb-5 py-3 px-5 border rounded-2xl border-black placeholder:text-gray-400"
                placeholder="Selasar Lantai 1"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPayload({ ...payload, lokasi: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="id_user" className="text-xl font-bold text-black">
                Tingkat Kepenuhan
              </label>
              <div>
                <Dropdown elements={tingkatKepenuhan} type={2} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button
            className="justify-center rounded-full border-[#B4ACAC] bg-white px-14 py-2 text-base font-semibold text-black ring-1 ring-inset ring-gray-300 hover:bg-[#dedcdc] sm:w-auto"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="justify-center rounded-full bg-[#A5B9C8]/70 px-14 py-2 text-base font-semibold text-white hover:bg-[#A5B9C8] sm:w-auto"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div >
  );
};

export default ModalAddTS;
