import {
  BarChart3,
  CreditCard,
  FileText,
  Home,
  Menu,
  Settings,
  Users,
  X,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  MapPin,
  RefreshCcw,
} from "lucide-react"

export const NewNavigationItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    path: "/home",
    icon: Home,
    items: [],
  },
  {
    id: "routes",
    title: "Rutas",
    path: "/routes",
    icon: MapPin,
    items: [],
  },
  {
    id: "clients",
    title: "Clientes",
    path: "/clients",
    icon: Users,
    items: [],
  },
  {
    id: "loans",
    title: "Préstamos",
    path: "/loans",
    icon: CreditCard,
    items: [
      {
        id: "overdue-payments",
        title: "Cuotas vencidas",
        path: "/overdue",
      },
      {
        id: "pending-payments",
        title: "Cobros pendientes",
        path: "/pending",
      },
    ],
  },
  {
    id: "reports",
    title: "Informes",
    path: "/reports",
    icon: FileText,
    items: [
      {
        id: "expense-control",
        title: "Control de gastos",
        path: "/control-balance",
      },
      {
        id: "monthly-reports",
        title: "Informes mensuales",
        path: "/reports/monthly",
      },
      {
        id: "annual-reports",
        title: "Informes anuales",
        path: "/reports/annual",
      },
    ],
  },
  {
    id: "collaborators",
    title: "Colaboradores",
    path: "/collaborators",
    icon: UserPlus, 
    items: [],
  },

  {
    id: "retanqueo",
    title: "Retanqueo",
    path: "/retanqueo",
    icon: RefreshCcw,
    items: [
      {
        id: "resumen",
        title: "Resumen de fondos",
        path: "/retanqueo",
      },
      {
        id: "",
        title: "Desembolsos",
        path: "/retanqueo/desembolsos",
      },
      {
        id: "gestion-solicitudes",
        title: "Gestionar solicitudes",
        path: "/retanqueo/solicitudes",
      },
    ],
  },

  {
    id: "administration",
    title: "Administración",
    path: "/admin",
    icon: Settings,
    items: [],
  },
  {
    id: "settings",
    title: "Configuración",
    path: "/settings",
    icon: Settings,
    items: [],
  },
];