import * as React from "react";
import { CollaboratorCardProps } from "../utils/types";

export const CollaboratorCard: React.FC<CollaboratorCardProps> = ({
  name,
  phone,
  email,
  onEdit,
  onDelete
}) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between py-5 pr-20 pl-7 mt-5 max-w-full font-light rounded-xl bg-zinc-700 w-[1009px] max-md:px-5">
      <div className="flex gap-5 text-xs tracking-wide text-white">
        <div className="flex shrink-0 my-auto bg-green-400 rounded-full h-[52px] w-[52px]" role="img" aria-label={`${name}'s avatar`} />
        <div className="flex flex-col items-start">
          <div className="text-base font-medium tracking-wide">{name}</div>
          <div className="flex gap-2 mt-3 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/305024da34dee3323b33b54693311e16a96887f1ce22323f9f781fd87ff52a2a?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
              className="object-contain shrink-0 aspect-square w-[15px]"
              alt=""
            />
            <div>{phone}</div>
          </div>
          <div className="flex gap-2 self-stretch mt-1 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/8faf090ea524c89d0d81377be33862458776a58ab8bcfe03f582eaae0a305f94?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
              className="object-contain shrink-0 aspect-square w-[15px]"
              alt=""
            />
            <div className="grow shrink w-[142px]">{email}</div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 my-auto text-base tracking-wide whitespace-nowrap">
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
  );
};