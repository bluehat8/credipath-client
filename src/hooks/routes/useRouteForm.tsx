"use client";
import { useState, useCallback, FormEvent, ChangeEvent } from "react";
// import { RouteFormData } from "./RouteFormModal";

interface FormErrors {
  name?: string;
  district?: string;
  phoneNumber?: string;
  location?: string;
}

interface RouteFormData {
  name: string;
  district: string;
  phoneNumber: string;
  location: string;
}

export const useRouteForm = (
  onSubmit: (data: RouteFormData) => Promise<void>,
) => {
  const [formData, setFormData] = useState<RouteFormData>({
    name: "",
    district: "",
    phoneNumber: "",
    location: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "El nombre de la ruta es obligatorio";
    } else if (formData.name.length > 50) {
      newErrors.name = "El nombre no puede exceder los 50 caracteres";
    }

    // Validate district
    if (!formData.district.trim()) {
      newErrors.district = "El distrito es obligatorio";
    }

    // Validate phone number
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "El número de teléfono es obligatorio";
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "El número de teléfono debe contener solo dígitos";
    }

    // Validate location
    if (!formData.location.trim()) {
      newErrors.location = "La ubicación es obligatoria";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Clear error when user types
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);

      try {
        await onSubmit(formData);
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        // You could set a general form error here if needed
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm, onSubmit],
  );

  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      district: "",
      phoneNumber: "",
      location: "",
    });
    setErrors({});
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
    setFormData,
  };
};
