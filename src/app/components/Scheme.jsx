import React from "react";

const Scheme = () => {
  return (
    <div className="flex flex-col w-[336px] h-[289px] border border-black rounded-[6px]">
      <div className="flex flex-col items-center justify-center h-[186px]">
        <img src="/images/scheme1.png" alt="" />
      </div>
      <div className="flex flex-col p-[12px]">
        <p className="font-medium">Rashtriya Swasthya Bima Yojana</p>
        <p className="mt-[6px] text-[#7A7A7A] text-[14px]">Health Insurance</p>
        <div className="flex flex-row gap-[5px] mt-[16px]">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.50001 8.00011C2.49986 7.03459 2.75388 6.08604 3.23655 5.24981C3.71921 4.41358 4.41351 3.71915 5.24964 3.23633C6.08577 2.7535 7.03427 2.49929 7.99979 2.49925C8.96532 2.49921 9.91384 2.75335 10.75 3.23611C10.8648 3.30137 11.0007 3.31858 11.1281 3.28399C11.2556 3.24939 11.3641 3.1658 11.4301 3.05146C11.4962 2.93712 11.5143 2.8013 11.4805 2.67365C11.4468 2.546 11.3639 2.43689 11.25 2.37011C10.0109 1.65469 8.57029 1.36813 7.15169 1.55487C5.73309 1.74161 4.41575 2.39121 3.40396 3.40294C2.39218 4.41466 1.74249 5.73196 1.55566 7.15055C1.36883 8.56913 1.6553 10.0097 2.37064 11.2489C3.08597 12.4881 4.19021 13.4566 5.51209 14.0043C6.83396 14.552 8.29961 14.6482 9.68173 14.278C11.0638 13.9078 12.2852 13.0919 13.1564 11.9568C14.0275 10.8217 14.4998 9.43095 14.5 8.00011C14.5 7.8675 14.4473 7.74033 14.3536 7.64656C14.2598 7.55279 14.1326 7.50011 14 7.50011C13.8674 7.50011 13.7402 7.55279 13.6465 7.64656C13.5527 7.74033 13.5 7.8675 13.5 8.00011C13.5 9.4588 12.9205 10.8577 11.8891 11.8892C10.8576 12.9206 9.4587 13.5001 8.00001 13.5001C6.54132 13.5001 5.14237 12.9206 4.11092 11.8892C3.07947 10.8577 2.50001 9.4588 2.50001 8.00011Z"
                fill="#1AC26A"
              />
              <path
                d="M15.3537 3.3539C15.4001 3.30741 15.437 3.25222 15.4622 3.19148C15.4873 3.13074 15.5003 3.06564 15.5003 2.9999C15.5003 2.93416 15.4873 2.86906 15.4622 2.80832C15.437 2.74758 15.4001 2.69239 15.3537 2.6459C15.3072 2.59941 15.252 2.56254 15.1912 2.53738C15.1305 2.51222 15.0654 2.49927 14.9997 2.49927C14.9339 2.49927 14.8688 2.51222 14.8081 2.53738C14.7473 2.56254 14.6921 2.59941 14.6457 2.6459L7.99966 9.2929L5.35366 6.6459C5.30717 6.59941 5.25198 6.56253 5.19124 6.53738C5.1305 6.51222 5.0654 6.49927 4.99966 6.49927C4.93391 6.49927 4.86881 6.51222 4.80807 6.53738C4.74733 6.56253 4.69214 6.59941 4.64566 6.6459C4.59917 6.69239 4.56229 6.74758 4.53713 6.80832C4.51197 6.86905 4.49902 6.93415 4.49902 6.9999C4.49902 7.06564 4.51197 7.13074 4.53713 7.19148C4.56229 7.25222 4.59917 7.30741 4.64566 7.3539L7.64566 10.3539C7.6921 10.4005 7.74728 10.4374 7.80802 10.4626C7.86877 10.4878 7.93389 10.5008 7.99966 10.5008C8.06542 10.5008 8.13054 10.4878 8.19129 10.4626C8.25203 10.4374 8.30721 10.4005 8.35366 10.3539L15.3537 3.3539Z"
                fill="#1AC26A"
              />
            </svg>
          </span>
          <p className="text-[12px] text-[#1AC26A] font-medium">ELIGIBLE</p>
        </div>
      </div>
    </div>
  );
};

export default Scheme;
