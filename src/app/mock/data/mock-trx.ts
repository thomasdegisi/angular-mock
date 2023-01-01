import {
  TYPE_TYPE_ID,
  CHRONOLOGY_EVENT_TYPE_ID,
  GET_LOYALTY_TYPE_ID,
  SPEND_LOYALTY_TYPE_ID,
  LOYALTY_TRX_TYPE_ID,
  Trx,
} from 'src/app/models/trx';

export const TRX_LIST: Trx[] = [
  {
    id: 1,
    typeId: 0, // Define transaction types using typeId of 0.
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Type',
    value: TYPE_TYPE_ID, // Types (like this one) will have typeId: 0
  },
  {
    id: 2,
    typeId: 0,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Chronology Event',
    value: CHRONOLOGY_EVENT_TYPE_ID, // Chronology Events will have typeId: 1
  },
  {
    id: 3,
    typeId: 0,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Get Loyalty',
    value: GET_LOYALTY_TYPE_ID, // Get Loyalty will have typeId: 2
  },
  {
    id: 4,
    typeId: 0,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Spend Loyalty',
    value: SPEND_LOYALTY_TYPE_ID, // Spend Loyalty will have typeId: 3
  },
  {
    id: 5,
    typeId: 0,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Loyalty Transaction',
    value: LOYALTY_TRX_TYPE_ID, // Loyalty Transactions will have typeId: 4
  },
  {
    id: 43,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2023, 0, 1, 12, 15, 0, 0),
    tsFormat: 'YYYY-MM-dd HH:mm',
    text: "Added route and Cancel to all edit screens. They still flash, and Submit doesn't save yet. Chronology uses scrollWindow.",
    value: null,
  },
  {
    id: 42,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 31, 22, 9, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Fixed pagination and sort. Added DbType for better type checking. Began adding route to customer screen.',
    value: null,
  },
  {
    id: 41,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 30, 17, 36, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Routing now standard. Added all transactions view.',
    value: null,
  },
  {
    id: 40,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 30, 0, 9, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'All fields in trx-edit, all buttons hooked up.',
    value: null,
  },
  {
    id: 39,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 29, 14, 6, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Added generic data service, events table, began implementing all delete.',
    value: null,
  },
  {
    id: 38,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 28, 22, 17, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Added edit buttons, dialog component, began implementing customer delete.',
    value: null,
  },
  {
    id: 37,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 28, 13, 35, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Added status messages component. Brand component hides itself.',
    value: null,
  },
  {
    id: 36,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 26, 23, 36, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'All data loaded via HTTP In Data Memory Service.',
    value: null,
  },
  {
    id: 6,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 21, 22, 15, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Added observable data services.',
    value: null,
  },
  {
    id: 7,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 20, 12, 9, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Added DatePicker. UUIDs now read only in forms.',
    value: null,
  },
  {
    id: 8,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 18, 22, 20, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Added navigation, Customers, two forms and Points.',
    value: null,
  },
  {
    id: 9,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 17, 12, 43, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Added Chronlogy.',
    value: null,
  },
  {
    id: 10,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 13, 12, 0, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Initial commit of Angular Mock.',
    value: null,
  },
  {
    id: 11,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 9, 12, 0, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Tom looking for work.',
    value: null,
  },
  {
    id: 12,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 11, 8, 12, 0, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Tom laid off by Leading EDJE due to lack of work.',
    value: null,
  },
  {
    id: 13,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2022, 8, 12, 12, 0, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Tom employed by Leading EDJE.',
    value: null,
  },
  {
    id: 14,
    typeId: 1,
    linkId: null,
    timestamp: new Date(2002, 0, 15, 12, 0, 0, 0),
    text: 'Tom employed by Sprint (now T-Mobile) - year correct, no month or day.',
    tsFormat: 'YYYY',
    value: null,
  },
  {
    id: 15,
    typeId: 1,
    linkId: null,
    timestamp: new Date(1999, 0, 15, 12, 0, 0, 0),
    text: 'Tom employed by Bradford & Galt - year correct, no month or day.',
    tsFormat: 'YYYY',
    value: null,
  },
  {
    id: 16,
    typeId: 1,
    linkId: null,
    timestamp: new Date(1998, 6, 14, 12, 0, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Lydia Hope DeGisi born.',
    value: null,
  },
  {
    id: 17,
    typeId: 1,
    linkId: null,
    timestamp: new Date(1997, 2, 28, 12, 0, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Talia Joy DeGisi born.',
    value: null,
  },
  {
    id: 18,
    typeId: 1,
    linkId: null,
    timestamp: new Date(1996, 0, 15, 12, 0, 0, 0),
    text: 'Tom employed by S.A.I.C - year correct, no month or day.',
    tsFormat: 'YYYY',
    value: null,
  },
  {
    id: 19,
    typeId: 1,
    linkId: null,
    timestamp: new Date(1995, 1, 20, 12, 0, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Mariah Grace DeGisi born.',
    value: null,
  },
  {
    id: 20,
    typeId: 1,
    linkId: null,
    timestamp: new Date(1992, 0, 15, 12, 0, 0, 0),
    text: 'Tom employed by CompuSpeak - year correct, no month or day.',
    tsFormat: 'YYYY',
    value: null,
  },
  {
    id: 21,
    typeId: 1,
    linkId: null,
    timestamp: new Date(1989, 4, 28, 12, 0, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Jane marries Tom.',
    value: null,
  },
  {
    id: 22,
    typeId: 1,
    linkId: null,
    timestamp: new Date(1988, 0, 15, 12, 0, 0, 0),
    tsFormat: 'YYYY',
    text: 'Tom employed by Computer Programming Services - year correct, no month or day.',
    value: null,
  },
  {
    id: 23,
    typeId: 1,
    linkId: null,
    timestamp: new Date(1961, 7, 19, 12, 0, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Jane Schlicht born.',
    value: null,
  },
  {
    id: 24,
    typeId: 1,
    linkId: null,
    timestamp: new Date(1960, 5, 17, 12, 0, 0, 0),
    text: 'Janice DeGisi gives birth to Thomas Louis.',
    tsFormat: 'YYYY-MM-dd',
    value: null,
  },
  {
    id: 25,
    typeId: 1,
    linkId: null,
    timestamp: new Date(1930, 10, 12, 12, 0, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Sabino Lucas DeGisi born.',
    value: null,
  },
  {
    id: 26,
    typeId: 1,
    linkId: null,
    timestamp: new Date(1926, 4, 24, 12, 0, 0, 0),
    tsFormat: 'YYYY-MM-dd',
    text: 'Janice Marie Clark born.',
    value: null,
  },
  {
    id: 27,
    typeId: 2,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Buy a premium cocktail.',
    value: 200,
  },
  {
    id: 28,
    typeId: 2,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Buy a bottle.',
    value: 300,
  },
  {
    id: 29,
    typeId: 2,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Buy a full price meal.',
    value: 500,
  },
  {
    id: 30,
    typeId: 2,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Buy a premium bottle.',
    value: 1000,
  },
  {
    id: 31,
    typeId: 2,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Cater an event.',
    value: 5000,
  },
  {
    id: 32,
    typeId: 3,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Buy a full price meal, get a cocktail free.',
    value: 1000,
  },
  {
    id: 33,
    typeId: 3,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Buy a full price meal, get a premium cocktail free.',
    value: 2000,
  },
  {
    id: 34,
    typeId: 3,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Buy a cocktail, get a second cocktail free.',
    value: 4000,
  },
  {
    id: 35,
    typeId: 3,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: 'Buy a premium cocktail, get a second premium cocktail free.',
    value: 8000,
  },
];

/* blank
  {
    id: 1,
    typeId: 0,
    linkId: null,
    timestamp: null,
    tsFormat: null,
    text: null,
    value: null,
  },
*/
