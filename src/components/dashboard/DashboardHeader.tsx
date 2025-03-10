import { CalendarIcon } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
        <p className="text-muted-foreground">Resumen de préstamos y pagos del sistema</p>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <CalendarIcon className="h-4 w-4" />
        <span className="text-sm">
          {new Date().toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  )
}

