"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "components/components/ui/button"
import { Input } from "components/components/ui/input"
import { Label } from "components/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import { useAuthService } from "../../hooks/auth/use-auth-service"
import { PATHS } from "../../routes/routes"


export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("") 
  const navigate = useNavigate()
  const { login, isLoading, user, navigateByRole } = useAuthService() // Ahora también extraemos navigateByRole

  // Efecto para manejar redirección cuando el usuario cambia (login exitoso)
  useEffect(() => {
    // Solo si el usuario está autenticado y terminamos de cargar
    if (user && !isLoading) {
      // Usar el método centralizado para redirección basada en roles
      navigateByRole();
    }
  }, [user, isLoading, navigateByRole]) // Se ejecuta cuando cambia el usuario o isLoading

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("") // Limpiar errores anteriores
    
    try {
      // El login actualizará el estado del usuario en el contexto
      // lo que activará el useEffect de arriba para la redirección
      await login({ email, password })
      // No necesitamos redirección aquí, el useEffect se encargará
    } catch (error) {
      console.error("Error de autenticación:", error)
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.")
    }
  }


  return (
    <div className="relative flex min-h-screen w-full overflow-hidden p-4 flex-col justify-center items-center text-sm font-light tracking-wide text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950 to-gray-950 animate-gradient-shift z-0"></div>
      <StarField />
      <div className="relative z-10 flex flex-col px-10 py-10 max-w-full rounded-3xl border border-solid border-slate-700/30 w-[554px] max-md:px-5 backdrop-blur-xl bg-slate-900/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-filter">
        <div className="flex gap-9 self-start text-2xl font-extrabold text-green-400 whitespace-nowrap tracking-[3.75px]">
          <img
            loading="lazy"
            src="/icons/credipath.svg"
            alt="Credipath logo"
            className="object-contain shrink-0 rounded-none aspect-[1.98] w-[89px]"
          />
          <div className="basis-auto glow-text">CREDIPATH</div>
        </div>
        <h1 className="self-start mt-11 text-2xl font-medium tracking-wider max-md:mt-10">Bienvenido a Credipath</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10 mt-12">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Ingresa email o nombre de usuario
            </Label>
            <Input
              placeholder="example@gmail.com"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border-white/20 focus:border-green-400/70 transition-all duration-300 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Contraseña
            </Label>
            <Input
              placeholder="mínimo 8 caracteres"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/5 border-white/20 focus:border-green-400/70 transition-all duration-300 text-white"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm mt-2 bg-red-400/10 px-3 py-2 rounded border border-red-400/20">
              {error}
            </div>
          )}
          
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-white/5 border-white/20 to-emerald-400 hover:from-green-400 hover:to-emerald-300 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </Button>
        </form>

        <div className="flex flex-col items-center gap-2 mt-7">
          <div className="flex w-full justify-between items-center">
            <div className="flex shrink-0 h-px bg-white/20 w-[172px] max-md:ml-1.5" />
            <span className="text-white/60">o</span>
            <div className="flex shrink-0 h-px bg-white/20 w-[172px] max-md:mr-2" />
          </div>

          <button className="flex gap-10 px-5 py-4 w-full rounded-md border border-solid border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/2f6856cd9a643f159a00b92378bd3b25a75d083811bbb2299ed0e29c8c0c60c6?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
              alt="Google logo"
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <span className="flex-auto my-auto">Continuar con Google</span>
          </button>

          <button className="self-center mt-5 font-semibold text-green-400 hover:text-green-300 transition-colors duration-300">
            Registrate
          </button>
        </div>
      </div>
    </div>
  )
}

// Star animation component
const StarField = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number; speed: number }[]>([])

  useEffect(() => {
    // Create stars
    const createStars = () => {
      const starCount = 150
      const newStars = []

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05 + 0.01,
        })
      }

      setStars(newStars)
    }

    createStars()

    // Animate stars
    const animateStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          y: star.y > 100 ? 0 : star.y + star.speed,
          opacity: Math.sin((Date.now() / 1000) * star.speed) * 0.5 + 0.5,
        })),
      )
    }

    const interval = setInterval(animateStars, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-slate-300"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity * 0.6, // Reduce opacity for subtlety
            boxShadow: `0 0 ${star.size * 1.5}px ${star.size * 0.7}px rgba(226, 232, 240, ${star.opacity * 0.4})`,
            transition: "opacity 0.5s ease",
          }}
        />
      ))}
    </div>
  )
}
