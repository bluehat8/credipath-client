"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { routeSchema, RouteFormData } from "schemas/routeSchema";

interface RouteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: RouteFormData) => Promise<void>;
  initialData?: RouteFormData | null;
  mode: "add" | "edit";
  isSubmitting?: boolean;
}

const RouteFormModal: React.FC<RouteFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  mode,
  isSubmitting = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<RouteFormData>({
    resolver: zodResolver(routeSchema),
    defaultValues: {
      name: "",
      district: "",
      phoneNumber: "",
      location: "",
    },
  });

  // Set initial form data when editing
  useEffect(() => {
    if (initialData && mode === "edit") {
      Object.entries(initialData).forEach(([key, value]) => {
        if (value !== undefined) {
          setValue(key as keyof RouteFormData, value);
        }
      });
    } else if (mode === "add") {
      reset();
    }
  }, [initialData, mode, setValue, reset]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const onFormSubmit = async (data: RouteFormData) => {
    try {
      await onSubmit(data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-zinc-800 rounded-xl p-8 w-full max-w-md mx-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="modal-title"
          className="text-xl font-medium text-white mb-6 tracking-wider"
        >
          {mode === "add" ? "Agregar Nueva Ruta" : "Editar Ruta"}
        </h2>

        <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
          <div className="space-y-4">
            {/* Name Field */}
            <div className="form-group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-300 mb-1"
              >
                Nombre de la Ruta
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className={`w-full px-4 py-2 bg-zinc-700 border ${
                  errors.name ? "border-red-500" : "border-zinc-600"
                } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1 text-sm text-red-500"
                  role="alert"
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* District Field */}
            <div className="form-group">
              <label
                htmlFor="district"
                className="block text-sm font-medium text-zinc-300 mb-1"
              >
                Distrito
              </label>
              <input
                type="text"
                id="district"
                {...register("district")}
                className={`w-full px-4 py-2 bg-zinc-700 border ${
                  errors.district ? "border-red-500" : "border-zinc-600"
                } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-invalid={errors.district ? "true" : "false"}
                aria-describedby={
                  errors.district ? "district-error" : undefined
                }
                disabled={isSubmitting}
              />
              {errors.district && (
                <p
                  id="district-error"
                  className="mt-1 text-sm text-red-500"
                  role="alert"
                >
                  {errors.district.message}
                </p>
              )}
            </div>

            {/* Phone Number Field */}
            <div className="form-group">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-zinc-300 mb-1"
              >
                Número de Teléfono
              </label>
              <input
                type="tel"
                id="phoneNumber"
                {...register("phoneNumber")}
                className={`w-full px-4 py-2 bg-zinc-700 border ${
                  errors.phoneNumber ? "border-red-500" : "border-zinc-600"
                } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-invalid={errors.phoneNumber ? "true" : "false"}
                aria-describedby={
                  errors.phoneNumber ? "phoneNumber-error" : undefined
                }
                disabled={isSubmitting}
              />
              {errors.phoneNumber && (
                <p
                  id="phoneNumber-error"
                  className="mt-1 text-sm text-red-500"
                  role="alert"
                >
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Location Field */}
            <div className="form-group">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-zinc-300 mb-1"
              >
                Ubicación
              </label>
              <textarea
                id="location"
                {...register("location")}
                rows={3}
                className={`w-full px-4 py-2 bg-zinc-700 border ${
                  errors.location ? "border-red-500" : "border-zinc-600"
                } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-invalid={errors.location ? "true" : "false"}
                aria-describedby={
                  errors.location ? "location-error" : undefined
                }
                disabled={isSubmitting}
              />
              {errors.location && (
                <p
                  id="location-error"
                  className="mt-1 text-sm text-red-500"
                  role="alert"
                >
                  {errors.location.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              disabled={isSubmitting}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Procesando...
                </span>
              ) : mode === "add" ? (
                "Agregar Ruta"
              ) : (
                "Guardar Cambios"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RouteFormModal;
