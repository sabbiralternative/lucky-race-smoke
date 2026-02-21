import { SOUND } from "../assets/sound";

const playSound = (src) => new Audio(src).play();

export const playChipChange = () => playSound(SOUND.select_chip);
export const playWinSound = () => playSound(SOUND.chip_win);
export const playSuspendedSound = () => playSound(SOUND.clicking_error);
export const playPlaceChip = () => playSound(SOUND.place_chip);
export const playClick = () => playSound(SOUND.click);
