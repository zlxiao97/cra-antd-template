import { delay } from "@/utils";

export const fetchUserInfo = async () => {
  await delay();
  return {
    success: true,
    data: {
      t: Date.now()
    }
  };
};
