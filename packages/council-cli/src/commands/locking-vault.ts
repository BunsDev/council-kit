import path from "node:path";
import { createCommandModule } from "src/utils/createCommandModule";
import {
  COMMAND_FILE_EXTENSIONS,
  selectCommandHandler,
} from "src/utils/selectCommandHandler";

const commandDir = "./locking-vault";

export const { command, describe, builder, handler } = createCommandModule({
  command: "locking-vault [command]",
  describe: "Interact with a LockingVault contract",

  builder: (yargs) => {
    return yargs.commandDir(commandDir, {
      extensions: COMMAND_FILE_EXTENSIONS,
    });
  },

  handler: selectCommandHandler({
    commandsPath: path.resolve(__dirname, commandDir),
  }),
});
