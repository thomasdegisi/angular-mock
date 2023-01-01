import { DbType } from "./db-type";

export interface Customer extends DbType {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  postalCode: string | null;
}

export const NEW: Customer = {
  id: null,
  firstName: null,
  lastName: null,
  address: null,
  address2: null,
  city: null,
  state: null,
  postalCode: null,
};

