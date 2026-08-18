export type UserRole = 'Admin' | 'Kasir' | 'Pemandu' | 'Pengelola';

export interface MenuItem {
  title: string;
  path: string;
  icon: any; 
  allowedRoles: UserRole[];
}

export interface StatData {
  title: string;
  value: string | number;
  trend: string;
}

export interface TicketMenu {
  id: number;
  nama: string;
  harga: number;
  kategori: 'Dewasa' | 'Anak' | 'Mancanegara';
}