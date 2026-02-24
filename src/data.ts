import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Sebastian Robinson",
  role: "Game Developer - Reverse Engineer",
  introduction: "Hi! I'm a game developer/reverse engineer with 12 years of experience working on games in Unreal Engine. I specialize in making toon like graphics and desginging gameplay systems. About 2 years ago I started Learning IDA Pro and Hexadecimal to reverse engineer games. I have a passion for learning how games work and sharing that knowledge with others.",
  description: "TELL_ABOUT_YOURSELF",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/SolarCookies",
    itchIO: "https://solarcookies.itch.io",
    linkedIn: "https://www.linkedin.com/in/sebastian-robinson-00a518344/",
  }
};

export const games: Game[] = [
  {
    name: "Nectar Not Included",
    description: "Take control of a butterfly’s final flight in this cozy arcade game where you need to collect nectar, avoid rival butterflies to survive and search for hidden power-ups as you fight against the time limit. It may seem trivial, but the smallest of things can have the largest consequences, how will your butterfly’s story end?",
    genres: ["Collectathon", "Arcade"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://solarcookies.itch.io/nectar-not-included" },
    ],
    media: [
      { source: "/images/games/Nector/1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/Y01q6lMdMMM", type: MediaType.YouTube },
      { source: "/images/games/Nector/2.png", type: MediaType.Image },
      { source: "/images/games/Nector/3.png", type: MediaType.Image },
      { source: "/images/games/Nector/4.png", type: MediaType.Image },
    ],
  }
];