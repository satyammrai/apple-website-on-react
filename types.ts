
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  imageUrl: string;
  category: 'Mac' | 'iPhone' | 'Vision' | 'Aura';
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export enum UIState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  CHATTING = 'CHATTING',
}
