export interface Trx {
  id: number;
  typeId: number;
  linkId: number;
  timestamp: Date,
  tsFormat: string;
  text: string;
  value: number;
}

export const INVALID_TYPE_ID: number = -1;
export const TYPE_TYPE_ID: number = 0;
export const CHRONOLOGY_EVENT_TYPE_ID: number = 1;
export const GET_LOYALTY_TYPE_ID: number = 2;
export const SPEND_LOYALTY_TYPE_ID: number = 3;
export const LOYALTY_TRX_TYPE_ID: number = 4;
