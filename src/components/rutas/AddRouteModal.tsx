import * as React from 'react';

interface ModalAddRouteProps {
  isOpen: boolean;
  onClose: () => void;
  onAddRoute: (route: { name: string; district: string; code: string; location: string; description: string }) => void;
}

export const ModalAddRoute: React.FC<ModalAddRouteProps> = ({ isOpen, onClose, onAddRoute }) => {
  const [name, setName] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [code, setCode] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && district && code && location && description) {
      onAddRoute({ name, district, code, location, description });
      onClose(); // Close modal after adding route
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-2xl max-w-[618px] w-full shadow-lg">
        <header className="flex justify-between items-center mb-6 text-2xl font-black text-zinc-900">
          <div className="flex gap-4 items-center">
            <img
              loading="lazy"
              src="/icons/maps.svg"
              className="object-contain w-9 h-9 rounded-full"
              alt="Modal icon"
            />
            <h1>Agregar Ruta</h1>
          </div>
          <button onClick={onClose} className="focus:outline-none">
            <img
              loading="lazy"
              src="/icons/close.svg"
              className="w-6 h-6"
              alt="Close"
            />
          </button>
        </header>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-zinc-900">Nombre de la Ruta</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-zinc-300 rounded-md"
              placeholder="Nombre de la ruta"
            />
          </div>

          <div>
            <label className="block text-zinc-900">Distrito</label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full px-4 py-2 border border-zinc-300 rounded-md"
            >
              <option value="">Seleccione un distrito</option>
              <option value="distrito1">Distrito 1</option>
              <option value="distrito2">Distrito 2</option>
            </select>
          </div>

          <div>
            <label className="block text-zinc-900">Código</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-2 border border-zinc-300 rounded-md"
              placeholder="Código"
            />
          </div>

          <div>
            <label className="block text-zinc-900">Ubicación</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-zinc-300 rounded-md"
            >
              <option value="">Seleccione ubicación</option>
              <option value="ubicacion1">Ubicación 1</option>
              <option value="ubicacion2">Ubicación 2</option>
            </select>
          </div>

          <div>
            <label className="block text-zinc-900">Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-zinc-300 rounded-md"
              placeholder="Descripción de la ruta"
            />
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-transparent border border-gray-400 rounded-md hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-native text-white rounded-md hover:bg-green-500"
            >
              Agregar Ruta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
