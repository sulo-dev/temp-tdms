import type { StatData, TicketMenu } from '../types';

export const dashboardStats: StatData[] = [
  { title: "Pengunjung Hari Ini", value: 1240, trend: "+12% dari kemarin" },
  { title: "Pendapatan Harian", value: "Rp 15.450.000", trend: "+5% dari kemarin" },
  { title: "Okupansi Homestay", value: "85%", trend: "17/20 Kamar Terisi" },
];

export const tiketData: TicketMenu[] = [
  { id: 1, nama: "Tiket Masuk Dewasa", harga: 25000, kategori: "Dewasa" },
  { id: 2, nama: "Tiket Masuk Anak", harga: 15000, kategori: "Anak" },
  { id: 3, nama: "Turis Mancanegara", harga: 150000, kategori: "Mancanegara" },
  { id: 4, nama: "Sewa Perahu Katinting", harga: 250000, kategori: "Dewasa" },
];