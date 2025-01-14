export interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export interface NavigationItem {
    id: string;
    icon: string;
    label: string;
    path: string;
    ariaLabel: string;
  }
  
  export interface SidebarItemProps extends NavigationItem {
    isActive: boolean;
    onClick: (path: string) => void;
  }
  
  export interface SidebarLogoProps {
    logoUrl: string;
    companyName: string;
  }