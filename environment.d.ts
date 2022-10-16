declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DISCORD_TOKEN: string;
      GUILD_ID: string;
      DATABASE_URL: string;
      DATABASE_USERNAME: string;
      DATABASE_PASSWORD: string;
    }
  }
}

export {};
