declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GOOGLE_MAP_APIkey: string;
    }
  }
}

export {};
