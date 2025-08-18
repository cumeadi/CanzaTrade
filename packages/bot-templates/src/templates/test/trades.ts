import { z } from "zod";
import { logger } from "@canzatrade/logger";
import { TBotContext } from "@canzatrade/bot-processor";

export function* testTrades(ctx: TBotContext<any>) {
  logger.info("[TRADES]: Strategy exec");
  console.log("[TRADE]", ctx.market?.trade);
}

testTrades.displayName = "Trades Strategy";
testTrades.hidden = true;
testTrades.schema = z.object({});
testTrades.watchers = {
  watchTrades: ["BTC/USDT", "ETH/USDT"],
};
