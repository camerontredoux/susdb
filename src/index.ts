import dotenv from "dotenv";
import { ExtendedClient } from "./utilities/client";

dotenv.config();

export const client = new ExtendedClient();

client.start(process.env.DISCORD_TOKEN);
