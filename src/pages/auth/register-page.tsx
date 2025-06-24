"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "components/components/ui/button"
import { Input } from "components/components/ui/input"
import { Label } from "components/components/ui/label"
import { Checkbox } from "components/components/ui/checkbox"
import { ArrowRight, Eye, EyeOff, ArrowLeft, Check, LogIn } from "lucide-react"
import { useAuthService } from "../../hooks/auth/use-auth-service"
import { useNavigate } from "react-router-dom"
import { PATHS } from "routes"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [step, setStep] = useState<"info" | "credentials" | "success">("info")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { register, user, isLoading: isAuthLoading } = useAuthService()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleInfoContinue = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.firstName || !formData.lastName || !formData.username || !formData.email) {
      setError("Por favor completa todos los campos")
      return
    }
    if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      setError("El nombre de usuario solo puede contener letras, números y guiones bajos")
      return
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Por favor ingresa un correo electrónico válido")
      return
    }
    setError("")
    setStep("credentials")
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.password || !formData.confirmPassword) {
      setError("Por favor completa todos los campos de contraseña")
      return
    }
    if (formData.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres")
      return
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    setIsLoading(true)

    try {
      await register({
        name: `${formData.firstName} ${formData.lastName}`,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: 'user' // a eliminar
      });
      
      // The auth service will handle login automatically after registration
      setStep("success")
    } catch (error: any) {
      console.error("Registration error:", error);
      const errorMessage = error.response?.data?.message || "Error al crear la cuenta. Por favor intenta de nuevo.";
      setError(errorMessage);
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    if (step === "credentials") {
      setStep("info")
      setError("")
    }
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (step === "success") {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-white text-2xl font-bold mb-4">¡Cuenta creada exitosamente!</h1>
            <p className="text-zinc-400 mb-8">
              Hemos enviado un correo de verificación a <strong className="text-white">{formData.email}</strong>
            </p>
            <Button
              onClick={() => navigate(PATHS.LOGIN)}
              className="w-full bg-white text-black hover:bg-gray-100 font-medium h-12 text-base"
            >
              Ir al inicio de sesión
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      {/* Left Side - Branding & Features */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden p-12 flex-col justify-between">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4968382/pexels-photo-4968382.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <img
                loading="lazy"
                src="/icons/credipath.svg"
                alt="Credipath logo"
                className="object-contain shrink-0 rounded-none aspect-[1.98] w-[89px]"
              />
            </div>
            <h1 className="text-white text-xl font-bold">CREDIPATH</h1>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-center flex-1">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Únete a CREDIPATH</h1>
          <p className="text-xl text-white/80 text-center">Comienza tu camino hacia el éxito financiero</p>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex lg:hidden justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <img
                  loading="lazy"
                  src="/icons/credipath.svg"
                  alt="Credipath logo"
                  className="object-contain shrink-0 rounded-none aspect-[1.98] w-[89px]"
                />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-white text-3xl font-bold mb-2">Crear cuenta</h1>
            <p className="text-zinc-400">
              {step === "info" ? "Ingresa tu información personal" : "Configura tu contraseña"}
            </p>
          </div>

          {/* Progress Indicator */}
          {/* <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step === "info" ? "bg-white text-black" : "bg-green-500 text-white"
                }`}
              >
                {step === "info" ? "1" : <Check className="w-4 h-4" />}
              </div>
              <div className="w-12 h-0.5 bg-zinc-700"></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step === "credentials" ? "bg-white text-black" : "bg-zinc-700 text-zinc-400"
                }`}
              >
                2
              </div>
            </div>
          </div> */}

          {/* Main Card */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800">
            {step === "info" ? (
              <form onSubmit={handleInfoContinue} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white text-sm font-medium">
                      Nombre
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      placeholder="Tu nombre"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-0 h-12"
                      autoFocus
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white text-sm font-medium">
                      Apellido
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      placeholder="Tu apellido"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-0 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username" className="text-white text-sm font-medium">
                    Nombre de usuario
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    value={formData.username}
                    onChange={(e) => updateFormData("username", e.target.value)}
                    placeholder="tu_usuario"
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-0 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-sm font-medium">
                    Correo electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="tu@correo.com"
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-0 h-12"
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-100 font-medium h-12 text-base"
                >
                  Continuar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={handleBack}
                    className="text-zinc-400 hover:text-white p-0"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Atrás
                  </Button>
                </div>

                <div className=" gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white text-sm font-medium">
                      Contraseña
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => updateFormData("password", e.target.value)}
                        placeholder="Mínimo 8 caracteres"
                        className="w-full bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-0 h-12 pr-12"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white text-sm font-medium">
                      Confirmar
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                        placeholder="Repite tu contraseña"
                        className="w-full bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-0 h-12 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                      className="mt-0.5"
                    />
                    <Label htmlFor="terms" className="text-zinc-400 text-sm leading-relaxed">
                      Acepto los{" "}
                      <a href="/terms" className="text-white hover:underline">
                        términos y condiciones
                      </a>{" "}
                      y la{" "}
                      <a href="/privacy" className="text-white hover:underline">
                        política de privacidad
                      </a>
                    </Label>
                  </div>


                </div>

                {error && (
                  <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white text-black hover:bg-gray-100 font-medium disabled:opacity-50 h-12 text-base"
                >
                  {isLoading ? "Creando cuenta..." : "Crear cuenta"}
                  {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </form>
            )}

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-zinc-700"></div>
              <span className="text-zinc-400 text-sm font-medium">O CONTINUAR CON</span>
              <div className="flex-1 h-px bg-zinc-700"></div>
            </div>

            {/* OAuth Buttons */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full bg-transparent border-zinc-700 text-white hover:bg-zinc-800 hover:text-white h-12"
              >
                <img src="/icons/google.svg" alt="Google" className="w-5 h-5 mr-3" />
                Continuar con Google
              </Button>
            </div>

            {/* Sign in link */}
            <div className="text-center mt-4">
  <p className="text-zinc-400 flex items-center justify-center text-sm">
    ¿Ya tienes una cuenta?{' '}
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault();
        navigate(PATHS.LOGIN);
      }} 
      className="text-white hover:underline flex items-center gap-2 ml-2"
    >
      Inicia sesión <LogIn className="w-4 h-4" />
    </a>
  </p>
</div>
          </div>

          {/* Footer Links */}
          <div className="flex justify-center gap-6 mt-8 text-sm text-zinc-500">
            <a href="/privacy" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Términos de Servicio
            </a>
            <a href="/help" className="hover:text-white transition-colors">
              Centro de Ayuda
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
