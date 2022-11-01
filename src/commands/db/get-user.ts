import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js";
import { SlashCommand } from "../../utilities/command";

import { prisma } from "../../utilities/db";

export default new SlashCommand({
  name: "getuser",
  description: "Retrieve all messages saved for a specified user",
  options: [
    {
      name: "user",
      description: "Which user you want to retrieve messages for",
      type: ApplicationCommandOptionType.User,
      required: true,
    },
  ],
  execute: async ({ interaction }) => {
    const author = interaction.options.getUser("user");

    if (author) {
      const messages = await prisma.message.findMany({
        where: {
          authorId: author.id,
        },
      });

      const list = messages
        .map((msg, i) => `**${i + 1}.** ${msg.content}`)
        .join("\n");

      const embed = new EmbedBuilder()
        .setTitle(`${author.username}'s sus messages`)
        .setDescription(
          "Only the first 10 messages are loaded. Use the buttons to see more."
        )
        .setColor(0xff33ff)
        .setFields({ name: "\u200B", value: list })
        .addFields({ name: "\u200B", value: "\u200B" })
        .setFooter({ text: "Visit tlmbz.com for more" });

      interaction.reply({ embeds: [embed] });
    } else {
      interaction.reply({
        content: "This user does not exist.",
        ephemeral: true,
      });
    }
  },
});
