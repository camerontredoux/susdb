import {
  ApplicationCommandDataResolvable,
  CommandInteractionOptionResolver,
  PermissionResolvable,
} from "discord.js";
import { ExtendedClient } from "../utilities/client";

export interface RegisterCommandsOptions {
  guildId?: string;
  commands: ApplicationCommandDataResolvable[];
}

interface ExecuteBaseOptions<InteractionType> {
  client: ExtendedClient;
  interaction: InteractionType;
  args: CommandInteractionOptionResolver;
}

type ExecuteBaseCommand<InteractionType> = (
  options: ExecuteBaseOptions<InteractionType>
) => any;

export type BaseCommandType<InteractionType> = {
  userPermissions?: PermissionResolvable[];
  cooldown?: number;
  execute: ExecuteBaseCommand<InteractionType>;
};
