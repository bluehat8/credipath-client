import { NavigationItem } from './types';
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
} from "lucide-react"

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/d09fa7973c351f42fadb27aaffc6408f9ecf89c6b3adf2f3fbb8cc091b8e9274?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    label: "Home",
    path: "/",
    ariaLabel: "Navigate to home page"
  },
  {
    id: 'routes',
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/94a6ad8327b2054489aad3c61bb8819b51c383017e9ad737c70bb3288ddd03f7?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    label: "Rutas",
    path: "/routes",
    ariaLabel: "Navigate to routes"
  },
  {
    id: 'clients',
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/7e9dc196c1b8f050673419e90c7ffc560d1ff99e233282c449cec6ae029d7f48?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    label: "Clientes",
    path: "/clients",
    ariaLabel: "Navigate to clients"
  },
  {
    id: 'overdue',
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/b9d830dc3450c67d618510326573f2e6a971eadbc72628c776da3a8442345db8?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    label: "Cuotas vencidas",
    path: "/overdue",
    ariaLabel: "View overdue payments"
  },
  {
    id: 'pending',
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/a11ff7fad8f5fe8f31e4e78b279e24e7847314e26c49279cf5f8e2662c072130?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    label: "Cobros pendientes",
    path: "/pending",
    ariaLabel: "View pending collections"
  },
  {
    id: 'collaborators',
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/d0e97c591b5287608106897583394155069189e1ca30937d3c7d3eecce2f44ba?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    label: "Colaboradores",
    path: "/collaborators",
    ariaLabel: "Manage collaborators"
  },
  {
    id: 'reports',
    icon: "/icons/wallets.svg",
    label: "Control gastos",
    path: "/control-balance",
    ariaLabel: "View reports"
  },
  {
    id: 'admin',
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/3fdd60087f660b5f80dabbac0dfe14a0922a3d9bee3ba2d8fef6d56c07048a72?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    label: "Administración",
    path: "/admin",
    ariaLabel: "Access administration"
  }
];



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