import { createContext } from "react";

const MyAge = createContext();

const AgeProvider = MyAge.Provider;
const AgeConsumer = MyAge.Consumer;

export {AgeConsumer, AgeProvider}