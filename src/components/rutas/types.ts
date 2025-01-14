interface RouteCardProps {
    name: string;
    district: string;
    code: string;
    location: string;
    onEdit: () => void;
    onDelete: () => void;
  }


  export type { RouteCardProps };