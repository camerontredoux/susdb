import {
  ChatInputApplicationCommandData,
  CommandInteraction,
  GuildMember,
} from "discord.js";
import { BaseCommandType } from "./client";

export interface ExtendedCommandInteraction extends CommandInteraction {
  member: GuildMember;
}

export type SlashCommandType = BaseCommandType<ExtendedCommandInteraction> &
  ChatInputApplicationCommandData;
