import * as React from "react"

export const useClientDashboard = () => {
  const clients = [
    {
      name: "Ricardo Morales",
      phone: "8222453",
      countryCode: "505",
      email: "alguien@example.com",
      route: "Ruta 1",
    },
    {
      name: "Silvia Ramírez",
      phone: "8222453",
      countryCode: "105",
      email: "alguien@example.com",
      route: "Ruta 2",
    },
    {
      name: "Antonio Ramírez",
      phone: "8222453",
      countryCode: "205",
      email: "antonio22@example.com",
      route: "Ruta 2",
    },
  ]

  const routes = ["Ruta 1", "Ruta 2"]

  const [isFormVisible, setIsFormVisible] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedRoute, setSelectedRoute] = React.useState("")
  const [isFilterExpanded, setIsFilterExpanded] = React.useState(false)

  const handleOpenForm = () => setIsFormVisible(true)
  const handleCloseForm = () => setIsFormVisible(false)
  const toggleFilters = () => setIsFilterExpanded(true)

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedRoute("")
  }

  const filteredClients = clients.filter(
    (client) =>
      (selectedRoute === "" || client.route === selectedRoute) &&
      (client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.phone.includes(searchTerm) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return {
    clients,
    routes,
    isFormVisible,
    searchTerm,
    selectedRoute,
    isFilterExpanded,
    filteredClients,
    handleOpenForm,
    handleCloseForm,
    toggleFilters,
    clearFilters,
    setSearchTerm,
    setSelectedRoute,
    setIsFilterExpanded,
  }
}