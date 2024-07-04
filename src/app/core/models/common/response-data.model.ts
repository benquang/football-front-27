export interface IResponseErrorData {
  error: string;
  message: string;
  path: string;
  status: number;
  timestamp: Date;
}

export interface IPagedResults<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  pageable: IPageable;
  last: boolean;
  first: boolean;
  sort: ISort;
  size: number;
  // eslint-disable-next-line id-blacklist
  number: number;
  numberOfElements: number;
  empty: boolean;
}

export interface IPageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
  sort: ISort;
}

export interface ISort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
