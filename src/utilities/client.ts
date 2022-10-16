import {
  ApplicationCommandDataResolvable,
  Client,
  ClientEvents,
  Collection,
} from "discord.js";

import glob from "glob";
import { promisify } from "util";
import { SlashCommandType } from "../typings/command";
import {
  MessageContextMenuType,
  UserContextMenuType,
} from "../typings/context-menu";
import { Event } from "./event";

const globPromise = promisify(glob);

export class ExtendedClient extends Client {
  slashCommands: Collection<string, SlashCommandType> = new Collection();
  messageContextMenus: Collection<string, MessageContextMenuType> =
    new Collection();
  userContextMenus: Collection<string, UserContextMenuType> = new Collection();

  unregisteredCommands: ApplicationCommandDataResolvable[] = [];

  constructor() {
    super({
      intents: ["Guilds", "GuildMembers", "GuildMessages", "MessageContent"],
    });
  }

  start(token: string) {
    this.registerEvents();
    this.registerCommands();
    this.login(token);
  }

  private async registerCommands() {
    this.importSlashCommands();
    this.importContextMenus();
  }

  private async importSlashCommands() {
    const commandFiles = await globPromise(
      `${__dirname}/../commands/*/*{.ts,.js}`
    );

    commandFiles.forEach(async (filePath) => {
      const command: SlashCommandType = await this.importFile(filePath);
      if (!command.name) return;

      this.slashCommands.set(command.name, command);

      this.unregisteredCommands.push(command);
    });
  }

  private async importContextMenus() {
    const messageContextMenuFiles = await globPromise(
      `${__dirname}/../contexts/message/*{.ts,.js}`
    );

    const userContextMenuFiles = await globPromise(
      `${__dirname}/../contexts/user/*{.ts,.js}`
    );

    messageContextMenuFiles.forEach(async (filePath) => {
      const command: MessageContextMenuType = await this.importFile(filePath);
      if (!command.name) return;

      this.messageContextMenus.set(command.name, command);

      this.unregisteredCommands.push(command);
    });

    userContextMenuFiles.forEach(async (filePath) => {
      const command: UserContextMenuType = await this.importFile(filePath);
      if (!command.name) return;

      this.userContextMenus.set(command.name, command);

      this.unregisteredCommands.push(command);
    });
  }

  private async registerEvents() {
    const eventFiles = await globPromise(`${__dirname}/../events/*{.ts,.js}`);

    eventFiles.forEach(async (filePath) => {
      const event: Event<keyof ClientEvents> = await this.importFile(filePath);
      this.on(event.event, event.run);
    });
  }

  private async importFile(filePath: string) {
    return (await import(filePath))?.default;
  }
}
