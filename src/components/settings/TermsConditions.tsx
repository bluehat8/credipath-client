import React from "react";
import { Card } from "components/components/ui/card";
import { ScrollArea } from "components/components/ui/scroll-area";
import { Checkbox } from "components/components/ui/checkbox";
import { Label } from "components/components/ui/label";
import { Button } from "components/components/ui/button";

export default function TermsConditions() {
  const [accepted, setAccepted] = React.useState(true);
  const lastUpdated = "15 de abril, 2025";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-slate-400">Última actualización</h3>
          <p className="text-sm text-slate-50">{lastUpdated}</p>
        </div>
        <Button variant="outline" size="sm" className="border-zinc-700 text-slate-50 hover:bg-zinc-700 hover:text-green-cpt">
          Descargar PDF
        </Button>
      </div>

      <Card className="border border-zinc-700 bg-zinc-800">
        <ScrollArea className="h-[400px] p-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-50">Términos y Condiciones de Uso de CrediPath</h3>
            
            <p className="text-slate-50">
              Bienvenido a CrediPath. Estos términos y condiciones describen las reglas y regulaciones para el uso de la plataforma CrediPath.
            </p>
            
            <h4 className="text-md font-semibold mt-4 text-slate-50">1. Aceptación de los Términos</h4>
            <p className="text-slate-50">
              Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. No continúes usando la plataforma CrediPath si no aceptas todos los términos y condiciones establecidos en esta página.
            </p>
            
            <h4 className="text-md font-semibold mt-4 text-slate-50">2. Licencia de Uso</h4>
            <p className="text-slate-50">
              A menos que se indique lo contrario, CrediPath y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en CrediPath. Todos los derechos de propiedad intelectual están reservados.
            </p>
            
            <h4 className="text-md font-semibold mt-4 text-slate-50">3. Restricciones</h4>
            <p className="text-slate-50">
              Está específicamente prohibido utilizar este sitio web para los siguientes fines:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-50">
              <li>Publicar cualquier material que sea difamatorio, ofensivo o malicioso</li>
              <li>Usar el sitio web de manera que cause, o pueda causar, daño al sitio o deterioro de la disponibilidad o accesibilidad</li>
              <li>Usar este sitio web de cualquier manera que sea ilegal, fraudulenta o dañina</li>
              <li>Usar este sitio web para copiar, almacenar, alojar, transmitir, enviar, usar, publicar o distribuir cualquier material</li>
              <li>Realizar cualquier actividad de recopilación de datos sistemática o automatizada en este sitio web</li>
            </ul>
            
            <h4 className="text-md font-semibold mt-4 text-slate-50">4. Privacidad</h4>
            <p className="text-slate-50">
              La privacidad de nuestros usuarios es extremadamente importante para nosotros. Consulta nuestra Política de Privacidad para entender cómo recopilamos y utilizamos la información personal.
            </p>
            
            <h4 className="text-md font-semibold mt-4 text-slate-50">5. Limitación de Responsabilidad</h4>
            <p className="text-slate-50">
              En ningún caso CrediPath, ni sus directores, empleados, socios, agentes, proveedores o afiliados serán responsables por cualquier daño indirecto, consecuente, especial, incidental o punitivo, incluyendo sin limitación, pérdida de beneficios, datos, uso, buena voluntad, u otras pérdidas intangibles, resultantes de:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-50">
              <li>El uso o la imposibilidad de usar el servicio</li>
              <li>Cualquier cambio realizado en el servicio</li>
              <li>Acceso no autorizado o alteración de tus transmisiones o datos</li>
              <li>Declaraciones o conducta de cualquier tercero en el servicio</li>
              <li>Cualquier otra cuestión relacionada con el servicio</li>
            </ul>
            
            <h4 className="text-md font-semibold mt-4 text-slate-50">6. Cambios en los Términos</h4>
            <p className="text-slate-50">
              Nos reservamos el derecho de modificar estos términos de servicio en cualquier momento. Si realizamos cambios materiales a estos términos, te notificaremos a través de un aviso prominente en nuestro sitio web o por correo electrónico.
            </p>
            
            <h4 className="text-md font-semibold mt-4 text-slate-50">7. Ley Aplicable</h4>
            <p className="text-slate-50">
              Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de México, y te sometes irrevocablemente a la jurisdicción exclusiva de los tribunales en esa ubicación.
            </p>
          </div>
        </ScrollArea>
      </Card>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="terms" 
          checked={accepted} 
          onCheckedChange={(checked) => setAccepted(checked as boolean)}
        />
        <Label htmlFor="terms" className="text-sm text-slate-50">
          He leído y acepto los términos y condiciones
        </Label>
      </div>

      <div className="flex justify-end">
        <Button 
          className="bg-zinc-800 hover:bg-zinc-700 text-slate-50 hover:text-green-cpt"
          disabled={!accepted}
        >
          Confirmar aceptación
        </Button>
      </div>
    </div>
  );
}
