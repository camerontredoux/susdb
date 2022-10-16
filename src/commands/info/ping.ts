import { SlashCommand } from "../../utilities/command";

export default new SlashCommand({
  name: "ping",
  description: "Pong!",
  execute: async ({ interaction }) => {
    await interaction.deferReply();

    await interaction.followUp("Pong!");
  },
});
