import { EmbedBuilder } from "discord.js";
import { client } from "../..";
import { SlashCommand } from "../../utilities/command";

export default new SlashCommand({
  name: "help",
  description: "Learn how to use SusDB",
  execute: async ({ interaction }) => {
    const embed = new EmbedBuilder()
      .setTitle("General Information")
      .setDescription("Upload messages to the TLMBZ database and more!")
      .setThumbnail(client.user?.displayAvatarURL()!)
      .addFields({
        name: "Slash Commands",
        value: "Below are the available slash commands",
      })
      .addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "Context Menu Commands",
          value: "Below are the available context menu commands",
        },
        {
          name: "Upload",
          value:
            "Uploads the message to the database and sends a message to users announcing this.",
        },
        {
          name: "Upload (Private)",
          value:
            "Uploads the message to the database without sending a message to other users.",
        }
      )
      .setColor(0xff6622)
      .setFooter({
        text: "SusDB",
        iconURL: client.user?.displayAvatarURL()!,
      })
      .setTimestamp();
    interaction.reply({
      content: `Hey ${interaction.user}! Thanks for using SusDB. Here's some help to get started using the bot.`,
      embeds: [embed],
      ephemeral: true,
    });
  },
});
