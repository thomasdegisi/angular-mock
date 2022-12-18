export interface Trx {
  uuid: string;
  typeId: number;
  linkUUID: string | null;
  timestamp: Date,
  tsFormat: string;
  text: string;
  value: number;
}

export const TYPE_TYPE_ID: number = 0;
export const CHRONOLOGY_EVENT_TYPE_ID: number = 1;
export const LOYALTY_TRX_TYPE_ID: number = 2;