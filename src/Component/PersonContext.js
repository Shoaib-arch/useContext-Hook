import { createContext } from "react";

const MyAge = createContext();

const AgeProvider = MyAge.Provider;
const AgeConsumer = MyAge.Consumer;
//exporting the consumer and provider
export {AgeConsumer, AgeProvider}