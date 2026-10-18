import React from "react";

const Navigation = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-10 bg-white pb-30">
      <h6 className="border-b-2 border-solid m-2 "> Daftar Isi</h6>
      <ul className="flex flex-col gap-2">
        <li>
          <a href="#cover" className="font-bold">
            Cover
          </a>
        </li>
        <li>
          <a href="#opening" className="font-bold">
            Pembukaan
          </a>
        </li>
        <li>
          <a href="#1" className="font-bold">
            BAB I
          </a>
        </li>
        <li>
          <a href="#2" className="font-bold">
            BAB II
          </a>
        </li>
        <li>
          <a href="#3" className="font-bold">
            BAB III
          </a>
        </li>
        <li>
          <a href="#4" className="font-bold">
            BAB IV
          </a>
        </li>
        <li>
          <a href="#conclusion" className="font-bold">
            Kesimpulan
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
