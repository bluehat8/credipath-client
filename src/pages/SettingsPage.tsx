// import React, { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/components/ui/tabs";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/components/ui/card";
// import { User, Lock, FileText, LogOut } from "lucide-react";
// import ProfileSettings from "components/settings/ProfileSettings";
// import PasswordSettings from "components/settings/PasswordSettings";
// import TermsConditions from "components/settings/TermsConditions";
// import LogoutConfirmation from "components/settings/LogoutConfirmation";

// export default function SettingsPage() {
//   const [activeTab, setActiveTab] = useState("profile");

//   return (
//     <div className="container mx-auto py-6">
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-slate-50">Configuración</h1>
//         <p className="text-slate-400 mt-2">
//           Administra tu perfil, seguridad y preferencias de la cuenta
//         </p>
//       </div>

//       <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
//         <TabsList className="grid grid-cols-4 mb-8 bg-zinc-800 border border-zinc-700">
//           <TabsTrigger 
//             value="profile" 
//             className="flex items-center gap-2 text-slate-50 data-[state=active]:bg-zinc-700 data-[state=active]:text-slate-50 hover:bg-zinc-700 hover:text-green-cpt"
//           >
//             <User className="h-4 w-4" />
//             <span>Perfil</span>
//           </TabsTrigger>
//           <TabsTrigger 
//             value="password" 
//             className="flex items-center gap-2 text-slate-50 data-[state=active]:bg-zinc-700 data-[state=active]:text-slate-50 hover:bg-zinc-700 hover:text-green-cpt"
//           >
//             <Lock className="h-4 w-4" />
//             <span>Contraseña</span>
//           </TabsTrigger>
//           <TabsTrigger 
//             value="terms" 
//             className="flex items-center gap-2 text-slate-50 data-[state=active]:bg-zinc-700 data-[state=active]:text-slate-50 hover:bg-zinc-700 hover:text-green-cpt"
//           >
//             <FileText className="h-4 w-4" />
//             <span>Términos</span>
//           </TabsTrigger>
//           <TabsTrigger 
//             value="logout" 
//             className="flex items-center gap-2 text-slate-50 data-[state=active]:bg-zinc-700 data-[state=active]:text-slate-50 hover:bg-zinc-700 hover:text-green-cpt"
//           >
//             <LogOut className="h-4 w-4" />
//             <span>Cerrar Sesión</span>
//           </TabsTrigger>
//         </TabsList>

//         <Card className="border border-zinc-700 bg-zinc-800 shadow-sm">
//           <TabsContent value="profile">
//             <CardHeader>
//               <CardTitle className="text-slate-50">Información del Perfil</CardTitle>
//               <CardDescription className="text-slate-400">
//                 Actualiza tu información personal y detalles de contacto
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ProfileSettings />
//             </CardContent>
//           </TabsContent>

//           <TabsContent value="password">
//             <CardHeader>
//               <CardTitle className="text-slate-50">Cambiar Contraseña</CardTitle>
//               <CardDescription className="text-slate-400">
//                 Actualiza tu contraseña para mantener tu cuenta segura
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <PasswordSettings />
//             </CardContent>
//           </TabsContent>

//           <TabsContent value="terms">
//             <CardHeader>
//               <CardTitle className="text-slate-50">Términos y Condiciones</CardTitle>
//               <CardDescription className="text-slate-400">
//                 Revisa los términos y condiciones de uso de la plataforma
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <TermsConditions />
//             </CardContent>
//           </TabsContent>

//           <TabsContent value="logout">
//             <CardHeader>
//               <CardTitle className="text-slate-50">Cerrar Sesión</CardTitle>
//               <CardDescription className="text-slate-400">
//                 Cierra tu sesión actual en el sistema
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <LogoutConfirmation />
//             </CardContent>
//           </TabsContent>
//         </Card>
//       </Tabs>
//     </div>
//   );
// }



import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/components/ui/tabs";
import { Card } from "components/components/ui/card";
import { User, Lock, FileText, LogOut } from "lucide-react";
import ProfileSettings from "components/settings/ProfileSettings";
import PasswordSettings from "components/settings/PasswordSettings";
import TermsConditions from "components/settings/TermsConditions";
import LogoutConfirmation from "components/settings/LogoutConfirmation";



export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
          <div className="relative">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-purple-400 to-pink-400">
              Configuración
            </h1>
            <p className="text-zinc-400 mt-2 text-lg">
              Personaliza tu experiencia en la plataforma
            </p>
          </div>
        </div>

        <div className="grid gap-8">
       
        <Tabs value={activeTab} onValueChange={setActiveTab} orientation="vertical" className="space-y-8 md:space-y-0">
  {/* Contenedor de las pestañas */}
  <TabsList className="flex flex-col md:flex-row h-auto p-1 w-full bg-zinc-800/50 backdrop-blur-xl border border-zinc-700/50 rounded-xl">
    {/* Perfil */}
    <TabsTrigger 
      value="profile" 
      className="flex items-center gap-3 p-4 w-full md:w-auto md:flex-1 justify-start text-left data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:border-l-2 md:data-[state=active]:border-b-2 data-[state=active]:border-blue-400"
    >
      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
        <User className="h-5 w-5 text-blue-400" />
      </div>
      <div>
        <p className="font-medium text-zinc-200">Perfil</p>
        <p className="text-xs text-zinc-400">Información personal</p>
      </div>
    </TabsTrigger>

    {/* Seguridad */}
    <TabsTrigger 
      value="password"
      className="flex items-center gap-3 p-4 w-full md:w-auto md:flex-1 justify-start text-left data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:border-l-2 md:data-[state=active]:border-b-2 data-[state=active]:border-purple-400"
    >
      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
        <Lock className="h-5 w-5 text-purple-400" />
      </div>
      <div>
        <p className="font-medium text-zinc-200">Seguridad</p>
        <p className="text-xs text-zinc-400">Contraseña y acceso</p>
      </div>
    </TabsTrigger>

    {/* Términos */}
    <TabsTrigger 
      value="terms"
      className="flex items-center gap-3 p-4 w-full md:w-auto md:flex-1 justify-start text-left data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500/20 data-[state=active]:to-red-500/20 data-[state=active]:border-l-2 md:data-[state=active]:border-b-2 data-[state=active]:border-pink-400"
    >
      <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500/20 to-red-500/20">
        <FileText className="h-5 w-5 text-pink-400" />
      </div>
      <div>
        <p className="font-medium text-zinc-200">Términos</p>
        <p className="text-xs text-zinc-400">Condiciones de uso</p>
      </div>
    </TabsTrigger>

    {/* Cerrar Sesión */}
    <TabsTrigger 
      value="logout"
      className="flex items-center gap-3 p-4 w-full md:w-auto md:flex-1 justify-start text-left data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500/20 data-[state=active]:to-orange-500/20 data-[state=active]:border-l-2 md:data-[state=active]:border-b-2 data-[state=active]:border-red-400"
    >
      <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20">
        <LogOut className="h-5 w-5 text-red-400" />
      </div>
      <div>
        <p className="font-medium text-zinc-200">Cerrar Sesión</p>
        <p className="text-xs text-zinc-400">Finalizar sesión</p>
      </div>
    </TabsTrigger>
  </TabsList>

  {/* Contenido de las pestañas */}
  <div className="relative pt-5">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-3xl" />
    <Card className="relative overflow-hidden border-zinc-700/50 bg-zinc-800/50 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />
      
      {/* Contenido de cada pestaña */}
      <TabsContent value="profile" className="relative p-4">
        <ProfileSettings />
      </TabsContent>

      <TabsContent value="password" className="relative p-4">
        <PasswordSettings />
      </TabsContent>

      <TabsContent value="terms" className="relative p-4">
        <TermsConditions />
      </TabsContent>

      <TabsContent value="logout" className="relative p-4">
        <LogoutConfirmation />
      </TabsContent>
    </Card>
  </div>
</Tabs>
      
        </div>
      </div>
    </div>
  );
}