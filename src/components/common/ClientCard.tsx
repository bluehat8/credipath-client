// import * as React from "react";
// import { ClientCardProps } from "../utils/types";
// import { Link } from "react-router-dom";

// export const ClientCard: React.FC<ClientCardProps> = ({ name, phone, countryCode, email, profileImage }) => {
//   return (
// <div className="flex flex-wrap gap-5 justify-between py-5 pr-14 pl-7 mt-5 max-w-full text-xs font-light tracking-wide text-white rounded-xl bg-zinc-700 w-full mx-auto max-lg:w-full max-lg:px-5">
// <div className="flex gap-5">
//         <div className="flex shrink-0 my-auto bg-green-400 rounded-full h-[52px] w-[52px]" 
//              role="img" 
//              aria-label={`Profile picture of ${name}`} />
//         <div className="flex flex-col items-start">
//           <div className="text-base font-medium tracking-wide">{name}</div>
//           {phone && (
//             <div className="flex gap-6 mt-3 whitespace-nowrap">
//               <div className="flex gap-2">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/305024da34dee3323b33b54693311e16a96887f1ce22323f9f781fd87ff52a2a?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
//                   className="object-contain shrink-0 aspect-square w-[15px]"
//                   alt=""
//                 />
//                 <div>{phone}</div>
//               </div>
//               {countryCode && (
//                 <div className="flex gap-2">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/e0b2c238dc36646a0dc4c9fb26e9ff5a0059a55b6a3d8e4b08e4cc12aee4f99a?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
//                     className="object-contain shrink-0 aspect-square w-[15px]"
//                     alt=""
//                   />
//                   <div>{countryCode}</div>
//                 </div>
//               )}
//             </div>
//           )}
//           <div className="flex gap-2 self-stretch mt-1 whitespace-nowrap">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/c218e1d125d31231ca267803b8b9f937701e84ab57f99b60f0b11cf374d75a04?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
//               className="object-contain shrink-0 aspect-square w-[15px]"
//               alt=""
//             />
//             <div className="grow shrink w-[142px]">{email}</div>
//           </div>
//         </div>
//       </div>
      
//       <Link
//         to="/details-client" 
//         className="object-contain shrink-0 my-auto aspect-square w-[50px]"
//         aria-label="Actions menu"
//       >
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/cd790db57f8e125b0bed33476a5de25a6046d988182cad8d13652e993e7a0452?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
//           alt="Actions menu"
//         />
//       </Link>

//     </div>
//   );
// };



"use client"

import type * as React from "react"
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "components/components/ui/avatar"
import { Card, CardContent } from "components/components/ui/card"
import { Button } from "components/components/ui/button"
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react"

export interface ClientCardProps {
  name?: string
  phone?: string
  countryCode?: string
  email?: string
  profileImage?: string
}

// Safely get initials from name
const getInitials = (name?: string): string => {
  if (!name) return "?"

  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)
}

export const ClientCard: React.FC<ClientCardProps> = ({ name = "", phone, countryCode, email, profileImage }) => {
  return (
    <Card className="w-full transition-all hover:shadow-md bg-zinc-700 mt-4">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 border bg-primary/10">
              {profileImage ? <AvatarImage src={profileImage} alt={`${name || "Client"}'s profile`} /> : null}
              <AvatarFallback className="text-primary-foreground bg-primary">{getInitials(name)}</AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <h3 className="font-medium leading-none">{name || "Unnamed Client"}</h3>

              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                {phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5" />
                    <span>{phone}</span>
                    {countryCode && (
                      <span className="flex items-center gap-1 text-xs rounded-full bg-muted px-2 py-0.5">
                        <MapPin className="h-3 w-3" />
                        {countryCode}
                      </span>
                    )}
                  </div>
                )}

                {email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5" />
                    <span className="truncate max-w-[200px]">{email}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full"
            aria-label={`View details for ${name || "client"}`}
          >
            <Link to="/details-client">
              <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

