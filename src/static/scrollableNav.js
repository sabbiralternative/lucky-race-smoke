import assets from "../assets";

export const scrollableNav = [
  {
    label: "Lobby",
    image: assets.lobbyNo,
    activeImage: assets.lobbyYes,
    href: "/lobby",
  },
  {
    label: "Casino",
    image: assets.casino,
    activeImage: assets.casino_active,
    href: "/casino",
  },
  {
    label: "Originals",
    image: assets.originals,
    activeImage: assets.originals_active,
    badge: assets.newImg,
    href: "/originals",
  },
  {
    label: "Fast Game",
    image: assets.fast_game,
    activeImage: assets.fast_game_active,
    href: "/fast-games",
  },
  {
    label: "Bollywood",
    image: assets.bollywood,
    activeImage: assets.bollywood_active,
    badge: assets.hot,
    href: "/bollywood",
  },
  {
    label: "Teenpatti",
    image: assets.teenpatti,
    activeImage: assets.teenpatti_active,
    href: "/teenpatti",
  },
  {
    label: "Roulette",
    image: assets.roulette,
    activeImage: assets.roulette_active,
    href: "/roulette",
  },
];
