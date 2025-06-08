"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "components/components/ui/button"
import { Input } from "components/components/ui/input"
import { Label } from "components/components/ui/label"
import { Github, Shield, Zap, Users, ArrowRight, Eye, EyeOff } from "lucide-react"
import { useAuthService } from "../../hooks/auth/use-auth-service"
import { PATHS } from "../../routes/routes"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [step, setStep] = useState<"email" | "password">("email")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()
  const { login, isLoading: isLoadingAuth, user, navigateByRole } = useAuthService() 


  useEffect(() => {
    // Solo si el usuario está autenticado y terminamos de cargar
    if (user && !isLoading) {
      navigateByRole();
    }
  }, [user, isLoading, navigateByRole]) 

  const handleEmailContinue = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError("Please enter your email")
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address")
      return
    }
    setError("")
    setStep("password")
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      console.log("Login attempt:", { email, password, rememberMe })
      await login({ email, password })
    } catch (error) {
      console.error("Authentication error:", error)
      setError("Invalid credentials. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    setStep("email")
    setPassword("")
    setError("")
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      {/* Left Side - Branding & Features */}

      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden p-12 flex-col justify-between">
        <div 
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4968382/pexels-photo-4968382.jpeg')] bg-cover bg-center"
        />
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
              <h1 className="text-4xl font-monserrat font-bold text-white mb-4 text-center">
                Bienvenido a CREDIPATH
              </h1>
        </div>

      </div>
     
      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex lg:hidden justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16  rounded-lg flex items-center justify-center backdrop-blur-sm">
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
            <h1 className="text-white text-3xl font-bold mb-2">Iniciar sesión</h1>
            <p className="text-zinc-400">Ingresa a tu dashboard de Credipath</p>
          </div>

          {/* Main Card */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800">
            {step === "email" ? (
              <form onSubmit={handleEmailContinue} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-sm font-medium">
                    Correo electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu correo electrónico"
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-0 h-12"
                    autoFocus
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
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email-display" className="text-white text-sm font-medium">
                    Correo electrónico
                  </Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="email-display"
                      type="email"
                      value={email}
                      readOnly
                      className="bg-zinc-800/50 border-zinc-700 text-white flex-1 h-12"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={handleBack}
                      className="text-zinc-400 hover:text-white px-3"
                    >
                      Editar
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white text-sm font-medium">
                    Contraseña
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Ingresa tu contraseña"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-0 h-12 pr-12"
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

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-white focus:ring-0 focus:ring-offset-0"
                    />
                    <span className="text-zinc-400 text-sm">Recordarme</span>
                  </label>
                  <a href="/forgot-password" className="text-white text-sm hover:underline">
                    ¿Olvidaste tu contraseña?
                  </a>
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
                  {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
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

            {/* Sign up link */}
            <div className="text-center mt-8 pt-6 border-t border-zinc-800">
              <span className="text-zinc-400 text-sm">
                {"¿No tienes una cuenta? "}
                <a href="/signup" className="text-white hover:underline font-medium">
                  Crear una ahora
                </a>
              </span>
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
function navigateByRole() {
  throw new Error("Function not implemented.")
}

