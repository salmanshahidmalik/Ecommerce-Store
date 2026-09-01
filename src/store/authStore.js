import { create } from "zustand";

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  login: () => {
    localStorage.setItem("isLoggedIn", "true");
    set({isLoggedIn: true})},

}));



 
 
 
export default useAuthStore;