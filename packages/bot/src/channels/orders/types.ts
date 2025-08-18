import type { OrderWithSmartTrade } from "@canzatrade/db";
import type { ExchangeCode, IWatchOrder } from "@canzatrade/types";

export type OrderEventType = "onFilled" | "onCanceled" | "onPlaced";

export type Subscription = {
  event: OrderEventType;
  callback: (
    exchangeOrder: IWatchOrder,
    order: OrderWithSmartTrade,
    exchangeCode: ExchangeCode,
    isDemoMarket: boolean,
  ) => void;
};
