import { SlashCommand } from "../../utilities/command";
import { ApplicationCommandOptionType } from "discord.js";

export default new SlashCommand({
    name: "howsus",
    description: "How sus are you?",
    options: [
        {
            name: "susfactor",
            description: "Think you can be less sus?",
            type: ApplicationCommandOptionType.Integer,
            required: false,
        },
    ],
    execute: async ({ interaction }) => {
        const susFactor = interaction.options.get("susfactor")?.value as number

        let sus = Math.floor(Math.random() * 101);
        if (susFactor !== 0) {
            sus *= (susFactor % sus) / 100 + Math.PI;
        }
        let susLevel = "Not sus at all!";
        if( sus > 100.00) {
            susLevel = "Extremely sus!";
        } else if (sus > 75.00) {
            susLevel = "Very sus!";
        } else if (sus > 50.00) {
            susLevel = "Somewhat sus!";
        } else if (sus > 25.00) {
            susLevel = "A little sus!";
        } else {
            susLevel = "Barely sus!";
        }
        interaction.reply(`You are ${sus}% sus! ${susLevel}`);
    }
});