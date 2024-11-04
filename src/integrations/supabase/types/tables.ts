export interface OrdersTable {
  Row: {
    created_at: string;
    id: string;
    plan_name: string;
    price: number;
    status: string;
    user_id: string;
  };
  Insert: {
    created_at?: string;
    id?: string;
    plan_name: string;
    price: number;
    status?: string;
    user_id: string;
  };
  Update: {
    created_at?: string;
    id?: string;
    plan_name?: string;
    price?: number;
    status?: string;
    user_id?: string;
  };
  Relationships: [];
}

export interface PaymentsTable {
  Row: {
    amount: number;
    created_at: string;
    currency: string;
    id: string;
    status: string;
    stripe_customer_id: string | null;
    stripe_subscription_id: string | null;
    user_id: string;
  };
  Insert: {
    amount: number;
    created_at?: string;
    currency?: string;
    id?: string;
    status?: string;
    stripe_customer_id?: string | null;
    stripe_subscription_id?: string | null;
    user_id: string;
  };
  Update: {
    amount?: number;
    created_at?: string;
    currency?: string;
    id?: string;
    status?: string;
    stripe_customer_id?: string | null;
    stripe_subscription_id?: string | null;
    user_id?: string;
  };
  Relationships: [];
}

export interface ProfilesTable {
  Row: {
    address: string | null;
    created_at: string;
    full_name: string | null;
    id: string;
    phone: string | null;
  };
  Insert: {
    address?: string | null;
    created_at?: string;
    full_name?: string | null;
    id: string;
    phone?: string | null;
  };
  Update: {
    address?: string | null;
    created_at?: string;
    full_name?: string | null;
    id?: string;
    phone?: string | null;
  };
  Relationships: [];
}