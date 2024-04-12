import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      userinfo: {
        name: "",
      },
      setUserInfo() {
        set(() => {
          return {
            userinfo: {
              name: "张三丰",
            },
          };
        });
      },
    }),
    {
      name: "user_store_persist",
    }
  )
);

export default useUserStore;
