import { Status } from "../const";
import { playSuspendedSound } from "./sound";

export const handleShowSuspendedStatus = (
  status,
  sound,
  setShowSuspendedWarning
) => {
  if (status === Status.SUSPENDED) {
    if (sound) {
      playSuspendedSound();
    }
    setShowSuspendedWarning(true);
  }
};
