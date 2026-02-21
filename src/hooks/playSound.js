import { useSound } from "../context/ApiProvider";
import { playClick } from "../utils/sound";

export const usePlaySound = () => {
  const { sound } = useSound();

  const playClickSound = () => {
    if (sound) {
      playClick();
    }
  };

  return { playClickSound };
};
