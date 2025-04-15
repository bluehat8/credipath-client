import * as React from "react";
import { InputField } from "../../components/common/InputField";
import { Button } from "../../components/common/Button";

export const LoginPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen p-4 flex-col justify-center items-center text-sm font-light tracking-wide text-white bg-neutral-900">
      <div className="flex flex-col px-10 py-10 max-w-full rounded-3xl border border-solid border-neutral-600 w-[554px] max-md:px-5">
        <div className="flex gap-9 self-start text-2xl font-extrabold text-green-400 whitespace-nowrap tracking-[3.75px]">
          <img
            loading="lazy"
            src="/icons/credipath.svg"
            alt=""
            className="object-contain shrink-0 rounded-none aspect-[1.98] w-[89px]"
          />
          <div className="basis-auto">CREDIPATH</div>
        </div>

        <h1 className="self-start mt-11 text-2xl font-medium tracking-wider max-md:mt-10">
          Bienvenido a Credipath
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10 mt-12">
          <InputField
            label="Ingresa email o nombre de usuario"
            placeholder="example@gmail.com"
            type="email"
            id="email"
            value=""
            onChange={() => {}}
          />

          <InputField
            label="Contraseña"
            placeholder="mínimo 8 caracteres"
            type="password"
            id="password"
            value=""
            onChange={() => {}}
          />

          <Button>Iniciar sesión</Button>
        </form>

        <div className="flex flex-col items-center gap-2 mt-7">
          <div className="flex w-full justify-between items-center">
            <div className="flex shrink-0 h-px bg-neutral-600 w-[172px] max-md:ml-1.5" />
            <span className="text-stone-600">o</span>
            <div className="flex shrink-0 h-px bg-neutral-600 w-[172px] max-md:mr-2" />
          </div>

          <button className="flex gap-10 px-5 py-4 w-full rounded-md border border-solid border-neutral-600 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/2f6856cd9a643f159a00b92378bd3b25a75d083811bbb2299ed0e29c8c0c60c6?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
              alt=""
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <span className="flex-auto my-auto">Continuar con Google</span>
          </button>

          <button className="self-center mt-5 font-semibold text-green-400">
            Registrate
          </button>
        </div>
      </div>
    </div>
  );
};
