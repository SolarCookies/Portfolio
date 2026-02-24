import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Sebastian Robinson",
  role: "Game Developer - Reverse Engineer",
  introduction: "Hi! I'm a game developer/reverse engineer.. Insert more text here eventually..",
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
    roles: ["Programmer", "Tech Artist", "Gameplay Designer", "UX/UI", "VFX Artist", "Cinematics", "Level Designer"],
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
  },

  {
    name: "Return to Paradise",
    description: "A fan game set in the world of Viva Piñata!",
    genres: ["Creature Collector", "Simulation", "Fan Game"],
    roles: ["Project Manager", "Lead Programmer", "Lead Tech Artist", "Partial Level Designer", "VFX Artist", "Cinematics"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

  {
    name: "Solar Engine",
    description: "A custom game engine ive been working on for fun and learning. Its a C++ engine using OpenGL, it features a custom ECS architecture, a custom scene editor, and basic graphics like shadows, geometry shaders, camera controls, and lighting.",
    genres: ["Game Engine", "C++", "OpenGL"],
    roles: ["Sole Developer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Custom,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

  {
    name: "Geode Digging Game",
    description: "A small game where you dig up geodes and sell them for profit. Its a small project I made to learn more about procedural generation, Though recently ive been testing out the idea of having geode pets that evolve baseed on the gems you feed them.",
    genres: ["Procedural Generation", "Creature Collector", "Simulation"],
    roles: ["Sole Developer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

  {
    name: "Yarn Game",
    description: "A scrapped project due to scope creep, and differing visions. It was a game about collecting yarn creatures and the story revolved around Erikson's Stages of Development. I still have a lot of love for this project and I regret not working on it more, but I learned a lot from the time I spent on it and more importantly I know how to better manage scope and expectations on projects moving forward.",
    genres: ["Creature Collector", "Adventure"],
    roles: ["Project Manager", "Lead Programmer", "Lead Tech Artist", "Gameplay Designer", "VFX Artist", "Level Designer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

  {
    name: "Alien Milkers",
    description: "A project in development, though on hold due to being busy with other projects. Its a stealth game about milking cows in order to power your lactose intolerant UFO, You have to sneak around a procedurally generated farm without waking up the farmer or his wife. The game is meant to be tided to the same universe as nector not included.",
    genres: ["Procedural Generation", "Collectathon", "Stealth", "Comedic Horror"],
    roles: ["Project Manager", "Lead Programmer", "Lead Tech Artist", "Gameplay Designer", "VFX Artist", "External Development Tools Engineer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

  {
    name: "Worms Armageddon X The Powder Toy Amalgamation",
    description: "This is a smaller project of mine that I made when I was inspired by the gameplay of Worms Armageddon, But I wanted to be able to create my own worlds. So I made a 2D powder physics engine from scratch made with a modifyed Solar Engine capable of simulating and rendering 1 million particles at 60fps, Along with having a full map editor, p2p multiplayer, and pvp combat. I Dont actually plan on releasing this game, It was more of a fun learning experience for me, ecpecially the networking code made from scratch.",
    genres: ["Sandbox", "PVP", "Strategy"],
    roles: ["Sole Developer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Custom,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

  {
    name: "Canvis",
    description: "A 3D coloring book game where you can paint on any surface of the map. Not sure why I stopped working on this, I believe It might have been because of level design. I did get the mechanics working well and optimized enough to run on a Samsung S21 Ultra though.",
    genres: ["Sandbox", "Art", "Relaxing"],
    roles: ["Sole Developer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

  
  {
    name: "Viva Pinata ModLoader",
    description: "A modding tool for the original Viva Piñata game on PC. It consist of MinHook based funtion detours that map all the functions ive found useful for modding, as well as a Internal Mod Menu using ImGui.",
    genres: ["Mod Loader", "Reverse Engineering"],
    roles: ["Sole Developer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Custom,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

  {
    name: "Viva Pinata Proprietary Asset Reader/Writer",
    description: "A tool for reading and writing proprietary assets for the original Viva Piñata Port on PC. It allows modders to easily manipulate game assets and create custom content.",
    genres: ["Hexadecimal", "Reverse Engineering"],
    roles: ["Sole Developer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Custom,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

  {
    name: "Project Animalcules",
    description: "A game inspired by Viva Pinata and Spore where you have a petri dish environment where you can add stuff to attract different microbial life and potentially evolve them into new species.",
    genres: ["Simulation", "Creature Collector"],
    roles: ["Sole Developer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

  {
    name: "Pirate Game",
    description: "A game I was paid to work on for a client for a few months, I was the sole developer on the project but unfortunately my skills where not used to their full potential as I was stuck pieceing together asset packs left and right which took up most of my time due to me having to optimize them. One notable thing I did do on this project was making a tile based world system that used level streaming along with a few other tricks in order to get islands to load without a large lag spike. The generator also had the ablity to take pictures of all sides of the island so that from a distance everything looked loaded in.",
    genres: ["Action", "Adventure", "Pirate"],
    roles: ["Sole Developer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

  {
    name: "Raytracing Weekend + Some",
    description: "Basically just a tutorial I followed to learn about raytracing, I ended up diverging from the tutorial by adding multi threading and SFML support so that I could render frames as they render so that I can get a accumulative effect, I was able to get it running at a decent framerate considering it was running and rendering on the CPU but there is only so much you can optimize a raytracer without using a GPU.",
    genres: ["Raytracing", "Tutorial"],
    roles: ["Sole Developer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Custom,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

  {
    name: "Hexagon World Generator",
    description: "A project I made to learn about simulating ecosystems, its a world generator that uses hexagon tiles, it was inspired by a video I seen on youtube. It features a building mechanic where you can place down different tiles that have structures on them, as well as a way to modify the height of the tiles. I also added basic animals and weather. The animals have a food value and have to find bushes in order to survive.",
    genres: ["Procedural Generation", "Hexagon Tiles"],
    roles: ["Sole Developer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Custom,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

  {
    name: "Monkey Heist",
    description: "This one never really got off the ground outside of a prototype with the main character model and some basic mechanics, but the idea was a game where you play as a monkey that has to steal bananas from bananas banks.",
    genres: ["Action", "Stealth", "Comedy"],
    roles: ["Sole Developer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2178120/Return_To_Paradise/" },
    ],
    media: [
      { source: "/images/games/rtp/1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/-N4ZMLJSBKQ", type: MediaType.YouTube },
      { source: "/images/games/rtp/2.png", type: MediaType.Image },
      { source: "/images/games/rtp/3.png", type: MediaType.Image },
      { source: "/images/games/rtp/4.webp", type: MediaType.Image },
    ],
  },

];