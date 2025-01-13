import * as React from 'react';
import { ClientHeaderProps } from './type';

export const ClientHeader: React.FC<ClientHeaderProps> = ({ name, code }) => {
  return (
    <div className="flex flex-col items-start">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/7dd4d3c1b0767ac1023dcf0e825ce64a628057fdf7124b4fceefe0eb48be8874?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
        alt=""
        className="object-contain aspect-square w-[17px]"
      />
      <div className="mt-2 text-xl font-medium tracking-wider text-white">
        {name}
      </div>
      <div className="flex gap-5 justify-between self-stretch mt-2.5 w-full text-xs font-light tracking-wide whitespace-nowrap">
        <div className="flex gap-1.5 text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/49620c817f6d851bd222bb09e46071f5cb57cdd7c84d2512616175ac20668d48?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <div>{code}</div>
        </div>
        <div className="flex gap-1.5 self-start text-green-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/5641251acd6a4b1daab20ef16dfa582813db60ff9aee1341312d85403a6dec56?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
            alt=""
            className="object-contain shrink-0 self-start aspect-square w-[15px]"
          />
          <div>Información</div>
        </div>
      </div>
    </div>
  );
};