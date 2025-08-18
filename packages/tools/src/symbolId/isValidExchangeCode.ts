import { ExchangeCode } from "@canzatrade/types";

export function isValidExchangeCode(exchangeCode: ExchangeCode) {
  return Object.keys(ExchangeCode).includes(exchangeCode);
}
