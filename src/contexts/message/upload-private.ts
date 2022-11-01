import { ApplicationCommandType } from "discord.js";
import { MessageContextMenu } from "../../utilities/context-menu";

export default new MessageContextMenu({
  name: "Upload (Private)",
  type: ApplicationCommandType.Message,
  execute: async ({ interaction }) => {
    interaction.reply("Message");
  },
});
