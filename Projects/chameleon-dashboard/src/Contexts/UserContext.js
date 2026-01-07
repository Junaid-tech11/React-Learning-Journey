import { createContext, useContext } from "react";

export const UserContext = createContext({
    user: null,
    login: (userData) => { },
    logout: () => { }
})

export const UserProvider = UserContext.Provider

export default function useAuth() {
    return useContext(UserContext)
}