import {
  CommandInteractionOptionResolver,
  MessageContextMenuCommandInteraction,
  UserContextMenuCommandInteraction,
} from "discord.js";
import { client } from "..";
import { ExtendedCommandInteraction } from "../typings/command";
import { Event } from "../utilities/event";

export default new Event("interactionCreate", (interaction) => {
  if (interaction.isChatInputCommand()) {
    const command = client.slashCommands.get(interaction.commandName);

    if (!command) return interaction.followUp("Bad");

    command.execute({
      args: interaction.options as CommandInteractionOptionResolver,
      client,
      interaction: interaction as ExtendedCommandInteraction,
    });
  } else if (interaction.isMessageContextMenuCommand()) {
    const command = client.messageContextMenus.get(interaction.commandName);

    if (!command) return;

    command.execute({
      args: interaction.options as CommandInteractionOptionResolver,
      client,
      interaction: interaction as MessageContextMenuCommandInteraction,
    });
  } else if (interaction.isUserContextMenuCommand()) {
    const command = client.userContextMenus.get(interaction.commandName);

    if (!command) return;

    command.execute({
      args: interaction.options as CommandInteractionOptionResolver,
      client,
      interaction: interaction as UserContextMenuCommandInteraction,
    });
  }
});
