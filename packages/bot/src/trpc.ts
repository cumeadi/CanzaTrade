import { type CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";

import { trpc, appRouter, type Context } from "@canzatrade/trpc";

const ctx = {
  user: {
    id: 1,
    email: "onboarding.canzatrade.pro",
    displayName: "CanzaTrade",
    role: "Admin" as const,
  },
};

// created for each request
export const createContext = ({ req }: CreateFastifyContextOptions): Context => {
  const password = req.headers.authorization;

  if (password === process.env.ADMIN_PASSWORD) {
    return ctx;
  }

  return {
    user: null,
  };
};

const createCaller = trpc.createCallerFactory(appRouter);
export const tServer = createCaller(ctx); // @deprecated
