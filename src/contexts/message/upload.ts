import { ApplicationCommandType } from "discord.js";
import { client } from "../..";
import { MessageContextMenu } from "../../utilities/context-menu";
import { prisma } from "../../utilities/db";

export default new MessageContextMenu({
  name: "Upload",
  type: ApplicationCommandType.Message,
  execute: async ({ interaction }) => {
    const { content, author, createdTimestamp } = interaction.targetMessage;

    const { id } = author;

    await prisma.author.upsert({
      where: { id },
      update: {
        messages: {
          create: {
            content,
            createdTimestamp: new Date(createdTimestamp),
          },
        },
      },
      create: {
        id,
        messages: {
          create: {
            content,
            createdTimestamp: new Date(createdTimestamp),
          },
        },
      },
    });

    interaction.reply(
      `Author: ${author}, Content: ${content}, Timestamp: ${createdTimestamp}`
    );
  },
});
