export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';

export interface ServiceItem {
  id: string;
  number: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  category: 'security' | 'telecom' | 'contracting' | 'facility';
  scopeAr: string[];
  scopeEn: string[];
  iconName: string;
}

export interface SupplierItem {
  id: string;
  name: string;
  categoryAr: string;
  categoryEn: string;
}

export interface ClientItem {
  id: string;
  nameAr: string;
  nameEn: string;
  sectorAr: string;
  sectorEn: string;
}

export interface HowWeWorkPhase {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  scopeItemsEn: string[];
  scopeItemsAr: string[];
  summaryEn?: string;
  summaryAr?: string;
}
