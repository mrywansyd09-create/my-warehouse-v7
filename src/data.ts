export type ProductLocation = 'بان' | 'مخزن' | 'عرض' | '';

export interface ProductHistoryEntry {
  date: string;
  stock: number;
  price: number;
  action: string;
  user: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  minStock: number;
  price: number;
  priceCurrency?: 'USD' | 'IQD';
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  lastUpdated: string;
  updatedBy?: string;
  color?: string;
  iconType?: 'fridge' | 'freezer' | 'stove' | 'water_cooler' | 'display_fridge' | 'display_freezer' | 'water_filter' | 'ac' | 'washing' | 'dishwasher' | 'washing_manual' | 'split' | 'cooler' | 'fan' | 'iron' | 'oven' | 'vacuum' | 'blender' | 'grinder' | 'juicer' | 'fryer' | 'sofa' | 'bedroom' | 'carpet_item' | 'default';
  customIconName?: string;
  imageUri?: string;
  location?: ProductLocation;
  description?: string;
  specs?: Record<string, string>;
  history?: ProductHistoryEntry[];
  lastAction?: string;
}

export interface DamagedItem {
  id: string;
  productId: string;
  productName: string;
  sku: string;
  date: string;
  quantity: number;
  reason: 'شکانی فیزیکی' | 'هەڵەی کارگە' | 'زیانی گواستنەوە' | 'کۆنبەش' | 'تر';
  action: 'چاککردنەوە' | 'گەڕاندنەوە بۆ بریکار' | 'فڕێدان' | 'فرۆشتن بە داشکاندن';
  status: 'pending' | 'fixed' | 'replaced' | 'scrapped';
  sparePartImage?: string;
  notes?: string;
  reportedBy?: string;
}

export interface SparePart {
  id: string;
  name: string;
  code: string;
  image: string;
  addedDate: string;
  notes?: string;
}

export const MOCK_PRODUCTS: Product[] = [];
