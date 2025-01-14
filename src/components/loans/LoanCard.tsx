import * as React from 'react';
import { LoanCardProps } from './type';

export const LoanCard: React.FC<LoanCardProps> = ({
  amount,
  installments,
  interestRate,
  date,
  interestType,
  note,
  status,
  imageUrl
}) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between py-4 pr-14 pl-6 mt-5 max-w-full text-xs font-light tracking-wide text-white rounded-xl bg-zinc-700 w-full max-md:px-5">
      <div className="flex flex-wrap gap-10 max-md:max-w-full">
        <div className="flex gap-6">
          <img
            loading="lazy"
            src={imageUrl}
            alt={`Loan status ${status}`}
            className="object-contain shrink-0 my-auto rounded-none aspect-[2] w-[60px]"
          />
          <div className="flex flex-col items-start">
            <div className="text-base font-medium tracking-wide">
              ${amount}
            </div>
            <div className="flex gap-1.5 mt-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/379632d3f861c4d1df2fe714bcaeac348710f13d4f6f212bf804f659e5172888?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                alt=""
                className="object-contain shrink-0 aspect-square w-[17px]"
              />
              <div>Cuotas: {installments}</div>
            </div>
            <div className="flex gap-1.5 items-start self-stretch mt-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/bfbef85cb438b35b66ea8a74d80024af7c7f055434cc3058b26173c1257fed39?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                alt=""
                className="object-contain shrink-0 aspect-square w-[17px]"
              />
              <div>Intereses: {interestRate}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-auto gap-2 self-start">
          <div className="flex shrink-0 self-start w-px bg-stone-500 h-[62px]" />
          <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
            <div className="text-base font-medium tracking-wide">
              {date}
            </div>
            <div className="flex gap-1 self-stretch">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/bfbef85cb438b35b66ea8a74d80024af7c7f055434cc3058b26173c1257fed39?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                alt=""
                className="object-contain shrink-0 self-start aspect-square w-[17px]"
              />
              <div className="grow shrink w-[244px]">
                Tipo de interés: {interestType}
              </div>
            </div>
            <div className="flex gap-1 mt-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/ce03670bd686376760c23d24a8b86095d993aa7998d093cd9be3f13bbd506ce9?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                alt=""
                className="object-contain shrink-0 aspect-square w-[17px]"
              />
              <div className="my-auto basis-auto">
                Nota: {note}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/cd790db57f8e125b0bed33476a5de25a6046d988182cad8d13652e993e7a0452?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
        alt=""
        className="object-contain shrink-0 my-auto aspect-square w-[50px]"
      />
    </div>
  );
};