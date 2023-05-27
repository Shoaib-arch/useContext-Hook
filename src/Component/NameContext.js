import { createContext } from "react"
const myname = createContext();
const NameProvder=myname.Provider;
const NameConsumer=myname.Consumer;

export {NameConsumer,NameProvder} 