import { logger } from "@canzatrade/logger";
import { CommandResult } from "../types.js";
import { getPid, clearPid } from "../utils/pid.js";

type Options = {
  force: boolean;
};

export async function down(options: Options): Promise<CommandResult> {
  const pid = getPid();

  if (!pid) {
    logger.warn("CanzaTrade already stopped.");
    return {
      result: undefined,
    };
  }

  try {
    if (options.force) {
      process.kill(pid, "SIGKILL");
      logger.info(`CanzaTrade has been forcefully stopped [PID: ${[pid]}]`);
    } else {
      process.kill(pid, "SIGTERM");
      logger.warn(`CanzaTrade has been gracefully stopped [PID: ${[pid]}]`);
    }
  } catch (err) {
    logger.warn(`Failed to stop CanzaTrade process [PID: ${pid}]. Retry with: canzatrade down --force`);
    logger.error(err);
  }

  clearPid();

  return {
    result: undefined,
  };
}
