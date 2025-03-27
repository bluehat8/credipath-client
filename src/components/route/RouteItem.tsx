"use client";
import React from "react";
import ActionButton from "components/ui/ActionButton";

interface RouteItemProps {
  name: string;
  district: string;
  phoneNumber: string;
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
  phoneNumber,
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
            <img
              src="/identifier.svg"
              className="object-contain shrink-0 mt-7 aspect-square w-[15px]"
              alt="Phone icon"
            />
            <span className="mt-7 text-xs font-light tracking-wide">
              {phoneNumber}
            </span>
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
          icon="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/8c263edc0c0432df154a44ec9aec13eb10fab18a?placeholderIfAbsent=true"
          text="Editar"
          onClick={onEdit}
          variant="primary"
          isLoading={isEditLoading}
          disabled={isDisabled || isEditLoading || isDeleteLoading}
          ariaLabel={`Editar ${name}`}
        />
        <ActionButton
          icon="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/502aef42978c20e751b099b41d6c5b65a6ed69fa?placeholderIfAbsent=true"
          text="Eliminar"
          onClick={onDelete}
          variant="danger"
          isLoading={isDeleteLoading}
          disabled={isDisabled || isEditLoading || isDeleteLoading}
          ariaLabel={`Eliminar ${name}`}
        />
      </div>
    </article>
  );
};

export default RouteItem;
