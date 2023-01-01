import { DbType } from "./db-type";

export interface Trx extends DbType {
  id: number | null;
  typeId: number | null;
  linkId: number | null;
  timestamp: Date | null;
  tsFormat: string | null;
  text: string | null;
  value: number | null;
}

export const NEW: Trx = {
  id: null,
  typeId: null,
  linkId: null,
  timestamp: null,
  tsFormat: null,
  text: null,
  value: null,
};

export const ALL_TYPES_TYPE_ID: number = -2;
export const INVALID_TYPE_ID: number = -1;
export const TYPE_TYPE_ID: number = 0;
export const CHRONOLOGY_EVENT_TYPE_ID: number = 1;
export const GET_LOYALTY_TYPE_ID: number = 2;
export const SPEND_LOYALTY_TYPE_ID: number = 3;
export const LOYALTY_TRX_TYPE_ID: number = 4;

// Update as transaction types are added.
export const MAX_TRX_TYPE_ID: number = LOYALTY_TRX_TYPE_ID;
