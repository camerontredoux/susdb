import { SlashCommand } from "../../utilities/command";

export default new SlashCommand({
    name: "howsus",
    description: "How sus are you?",
    execute: async ({ interaction }) => {
        const options = interaction.options;
        await interaction.deferReply();

        const sus = Math.floor(Math.random() * 101);

        await interaction.followUp(`You are ${sus}% sus!`);
    }
});