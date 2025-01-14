import * as React from "react";
import { RouteCardProps } from "./types.ts";

export function RouteCard({ name, district, code, location, onEdit, onDelete }: RouteCardProps) {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between py-5 pr-14 pl-7 w-full rounded-xl bg-zinc-700 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-6 text-white">
          <div className="flex shrink-0 my-auto bg-green-400 rounded-full h-[52px] w-[52px]" role="presentation" />
          <div className="flex flex-col">
            <div className="flex gap-2 items-end self-start">
              <div className="flex flex-col self-stretch">
                <div className="text-base font-medium tracking-wide">{name}</div>
                <div className="flex gap-2 self-start mt-1.5 text-xs font-light tracking-wide">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/fe838e6615cb9fd9a010ceb7972b1e781fb6ddfeac0c246125bce77dcc98088e?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                    className="object-contain shrink-0 aspect-square w-[15px]"
                    alt=""
                  />
                  <div>{district}</div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/e5f41e2937eeb92a2f0358a237584f04339e62c87621f1091b3ebf1af6f2d70d?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                className="object-contain shrink-0 mt-7 aspect-square w-[15px]"
                alt=""
              />
              <div className="mt-7 text-xs font-light tracking-wide">{code}</div>
            </div>
            <div className="flex gap-1.5 text-xs font-light tracking-wide">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/3cea25c70ff4a4c327be8b9129d6e3e7fba5441a01610530baf1d99e6a6b4ef2?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                className="object-contain shrink-0 self-start aspect-square w-[15px]"
                alt=""
              />
              <div className="grow shrink w-[178px]">{location}</div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 my-auto text-base font-light tracking-wide whitespace-nowrap">
          <button
            onClick={onEdit}
            className="flex gap-7 px-7 py-3 rounded-md bg-zinc-800 shadow-[0px_0px_10px_rgba(38,71,95,0.25)] text-zinc-100 max-md:px-5"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/497e173d9e5494ea2411c198e4e6bcab010d969d1084d21f1c171b0b9f4f0da4?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
              className="object-contain shrink-0 w-6 aspect-square"
              alt=""
            />
            <span>Editar</span>
          </button>
          <button
            onClick={onDelete}
            className="flex gap-4 px-6 py-3 text-rose-600 rounded-md bg-zinc-800 shadow-[0px_0px_10px_rgba(38,71,95,0.25)] max-md:px-5"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/519eb87536b8573346762e6942175d8df1f106fbc27e1320dc8d1f37af9efd77?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
              className="object-contain shrink-0 w-6 aspect-square"
              alt=""
            />
            <span>Eliminar</span>
          </button>
        </div>
      </div>
    </div>
  );
}