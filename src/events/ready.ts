import { client } from "..";
import { Event } from "../utilities/event";

export default new Event("ready", () => {
  console.log("Bot is initialized!");
  client.application?.commands.set(client.unregisteredCommands);
});
