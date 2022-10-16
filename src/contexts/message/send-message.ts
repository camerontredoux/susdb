import { ApplicationCommandType } from "discord.js";
import { MessageContextMenu } from "../../utilities/context-menu";

export default new MessageContextMenu({
  name: "Example Option",
  type: ApplicationCommandType.Message,
  execute: async ({ interaction }) => {
    interaction.reply("Message");
  },
});
