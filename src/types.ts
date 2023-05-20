export interface Ticker extends Array<string | number> {
  0: string; // SYMBOL
  1: number; // BID
  2: number; // BID_SIZE
  3: number; // ASK
  4: number; // ASK_SIZE
  5: number; // DAILY_CHANGE
  6: number; // DAILY_CHANGE_RELATIVE
  7: number; // LAST_PRICE
  8: number; // VOLUME
  9: number; // HIGH
  10: number; // LOW
}

export interface Trade extends Array<number | string | number> {
  0: number; // ID
  1: number; // MTS
  2: number; // AMOUNT
  3: number; // PRICE
}
export interface Candle extends Array<number | string | number> {
  0: number; // MTS
  1: number; // OPEN
  2: number; // CLOSE
  3: number; // HIGH
  4: number; // LOW
  5: number; // VOLUME
}
