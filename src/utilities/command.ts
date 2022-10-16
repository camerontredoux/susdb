import { SlashCommandType } from "../typings/command";

export class SlashCommand {
  constructor(options: SlashCommandType) {
    Object.assign(this, options);
  }
}
