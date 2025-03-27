"use client";
import React from "react";
import ActionButton from "components/ui/ActionButton";

interface RouteItemProps {
  name: string;
  district: string;
  location: string;
  onEdit: () => void;
  onDelete: () => void;
  isEditLoading?: boolean;
  isDeleteLoading?: boolean;
  isDisabled?: boolean;
}

const RouteItem: React.FC<RouteItemProps> = ({
  name,
  district,
  location,
  onEdit,
  onDelete,
  isEditLoading = false,
  isDeleteLoading = false,
  isDisabled = false,
}) => {
  return (
    <article className="flex flex-wrap gap-5 justify-between py-5 pr-14 pl-7 w-full rounded-xl bg-zinc-700 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-6 text-white">
        <img
          src="/route.png"
          className="object-contain shrink-0 my-auto rounded-full aspect-square w-[52px]"
          alt={`Profile for ${name}`}
        />
        <div className="flex flex-col">
          <div className="flex gap-2 items-end self-start">
            <div className="flex flex-col self-stretch">
              <h3 className="text-base font-medium tracking-wide">{name}</h3>
              <div className="flex gap-2 self-start mt-1.5 text-xs font-light tracking-wide">
                <img
                  src="/location.svg"
                  className="object-contain shrink-0 aspect-square w-[15px]"
                  alt="Location icon"
                />
                <span>{district}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 text-xs font-light tracking-wide">
            <img
              src="/address.svg"
              className="object-contain shrink-0 self-start aspect-square w-[15px]"
              alt="Address icon"
            />
            <span className="grow shrink w-[178px]">{location}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-8 my-auto text-base font-light tracking-wide whitespace-nowrap">
        <ActionButton
          icon="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/497e173d9e5494ea2411c198e4e6bcab010d969d1084d21f1c171b0b9f4f0da4?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
          text="Editar"
          onClick={onEdit}
          variant="primary"
          isLoading={isEditLoading}
          disabled={isDisabled}
          ariaLabel={`Editar ${name}`}
        />
        <ActionButton
          icon="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/519eb87536b8573346762e6942175d8df1f106fbc27e1320dc8d1f37af9efd77?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
          text="Eliminar"
          onClick={onDelete}
          variant="danger"
          isLoading={isDeleteLoading}
          disabled={isDisabled}
          ariaLabel={`Eliminar ${name}`}
        />
      </div>
    </article>
  );
};

export default RouteItem;