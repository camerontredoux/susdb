import { client } from "..";
import { Event } from "../utilities/event";

export default new Event("ready", () => {
  console.log("🔥 SusDB has been initialized!");
  // client.application?.commands.set(client.unregisteredCommands);
  client.guilds.cache
    .get("972981323130093648")
    ?.commands.set(client.unregisteredCommands);
});
