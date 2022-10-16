import { ApplicationCommandType } from "discord.js";
import { UserContextMenu } from "../../utilities/context-menu";

export default new UserContextMenu({
  name: "Picture",
  type: ApplicationCommandType.User,
  execute: async ({ interaction }) => {
    const avatarURL = interaction.targetUser.avatarURL();

    if (avatarURL) {
      await interaction.reply(avatarURL);
    } else {
      await interaction.reply("This user does not have an avatar");
    }
  },
});
