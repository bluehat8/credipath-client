import * as React from "react";
import { ClientCardProps } from "../utils/types";
import { Link } from "react-router-dom";

export const ClientCard: React.FC<ClientCardProps> = ({ name, phone, countryCode, email, profileImage }) => {
  return (
<div className="flex flex-wrap gap-5 justify-between py-5 pr-14 pl-7 mt-5 max-w-full text-xs font-light tracking-wide text-white rounded-xl bg-zinc-700 w-full mx-auto max-lg:w-full max-lg:px-5">
<div className="flex gap-5">
        <div className="flex shrink-0 my-auto bg-green-400 rounded-full h-[52px] w-[52px]" 
             role="img" 
             aria-label={`Profile picture of ${name}`} />
        <div className="flex flex-col items-start">
          <div className="text-base font-medium tracking-wide">{name}</div>
          {phone && (
            <div className="flex gap-6 mt-3 whitespace-nowrap">
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/305024da34dee3323b33b54693311e16a96887f1ce22323f9f781fd87ff52a2a?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                  className="object-contain shrink-0 aspect-square w-[15px]"
                  alt=""
                />
                <div>{phone}</div>
              </div>
              {countryCode && (
                <div className="flex gap-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/e0b2c238dc36646a0dc4c9fb26e9ff5a0059a55b6a3d8e4b08e4cc12aee4f99a?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                    className="object-contain shrink-0 aspect-square w-[15px]"
                    alt=""
                  />
                  <div>{countryCode}</div>
                </div>
              )}
            </div>
          )}
          <div className="flex gap-2 self-stretch mt-1 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/c218e1d125d31231ca267803b8b9f937701e84ab57f99b60f0b11cf374d75a04?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
              className="object-contain shrink-0 aspect-square w-[15px]"
              alt=""
            />
            <div className="grow shrink w-[142px]">{email}</div>
          </div>
        </div>
      </div>
      
      <Link
        to="/details-client" 
        className="object-contain shrink-0 my-auto aspect-square w-[50px]"
        aria-label="Actions menu"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/cd790db57f8e125b0bed33476a5de25a6046d988182cad8d13652e993e7a0452?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
          alt="Actions menu"
        />
      </Link>

    </div>
  );
};