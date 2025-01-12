import { createContext } from "react";

export const itemContext = createContext(
    {
        itemName: "",
        itemPrice: "",
        itemDescryption: "", 
    }
);
