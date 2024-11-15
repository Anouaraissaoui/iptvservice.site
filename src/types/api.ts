export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
  etag?: string;
}

export interface QueryConfig {
  staleTime?: number;
  gcTime?: number;
  retry?: boolean | number;
  refetchOnWindowFocus?: boolean;
  refetchOnMount?: boolean;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: 'asc' | 'desc';
}