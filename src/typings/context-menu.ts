import {
  MessageApplicationCommandData,
  MessageContextMenuCommandInteraction,
  UserApplicationCommandData,
  UserContextMenuCommandInteraction,
} from "discord.js";
import { BaseCommandType } from "./client";

export type MessageContextMenuType =
  BaseCommandType<MessageContextMenuCommandInteraction> &
    MessageApplicationCommandData;

export type UserContextMenuType =
  BaseCommandType<UserContextMenuCommandInteraction> &
    UserApplicationCommandData;
