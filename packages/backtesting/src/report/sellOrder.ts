import { Trade } from '@canzatrade/bot-processor';
import { OrderSideEnum } from "@canzatrade/types";
import type { ActiveOrder } from "../types/index.js";

export function sellOrder(smartTrade: Trade): ActiveOrder {
  return {
    side: OrderSideEnum.Sell,
    quantity: smartTrade.entryOrder.quantity,
    price: (smartTrade.tpOrder!.filledPrice || smartTrade.tpOrder!.price)!,
  };
}
