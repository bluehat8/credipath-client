"use client";
import { useState, useCallback, FormEvent, ChangeEvent } from "react";

interface FormErrors {
  name?: string;
  district?: string;
  location?: string;
}

interface RouteFormData {
  name: string;
  district: string;
  location: string;
}

export const useRouteForm = (onSubmit: (data: RouteFormData) => Promise<void>) => {
  const [formData, setFormData] = useState<RouteFormData>({
    name: "",
    district: "",
    location: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre de la ruta es obligatorio";
    } else if (formData.name.length > 50) {
      newErrors.name = "El nombre no puede exceder los 50 caracteres";
    }

    if (!formData.district.trim()) {
      newErrors.district = "El distrito es obligatorio";
    }

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
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (!validateForm()) return;

      setIsSubmitting(true);
      try {
        await onSubmit(formData);
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm, onSubmit]
  );

  const resetForm = useCallback(() => {
    setFormData({ name: "", district: "", location: "" });
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