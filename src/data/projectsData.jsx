import Lapince from '../assets/Lapince.png';
import Pokedex from '../assets/Pokedex.png';
import Movie from '../assets/Movie.png';
import Skate from '../assets/SSC.png';
import Rawg from '../assets/Rawglike.png';
import strato from '../assets/strato.png';
import Pulse from '../assets/PulseChat.png';
import FlickFlow from '../assets/flickflow.jpg';
import Wallpit from '../assets/wallpit.png';
import NovaShop from '../assets/NovaShop.png';
import ArtConnect from '../assets/ArtConnect.png';
import Kobu from '../assets/Kobu.png';

const projects = [
  {
    title: 'Kobu - Optimize Kanban',
    img: Kobu,
    description:
      'A modern full-stack Kanban board application with drag-and-drop functionality, built with React, Node.js, and PostgreSQL.',
    repoUrl: 'https://github.com/Lydoww/Kobu',
    liveDemo: 'https://kobu-mu.vercel.app/',
  },
  {
    title: 'WallPit - The board game',
    img: Wallpit,
    description:
      'Strategic tile-based game where players trap opponents by moving 3 squares/turn, leaving blocking walls behind them. It has been build with a microservices architecture using React, Node.js, and MongoDB. The game is inspired by chess but with unique mechanics.',
    repoUrl: 'https://discord.gg/S6TphCguqV',
    liveDemo: 'https://client-beta.up.railway.app/login',
  },
  {
    title: 'ArtConnect – Explore the World Through Artists',
    img: ArtConnect,
    description:
      'A modern React application leveraging the Rijksmuseum API to explore artworks and artists. Features include real-time search with debounced suggestions, Firebase-authenticated favorites sync, and downloadable high-res images. Built with React 19, Zustand for state management, and Framer Motion for animations, this showcase project demonstrates clean architecture, responsive design, and API integration skills.',
    repoUrl:
      'https://github.com/Lydoww/ArtConnect-Explore-the-World-Through-Artists',
    liveDemo: 'https://art-connect-explore-artists.vercel.app/',
  },
  {
    title: 'FlickFlow - Movie App',
    img: FlickFlow,
    description:
      'FlickFlow is a mobile movie library application built with React Native and Expo Go, powered by Appwrite and the TMDB API. It allows users to browse popular movies, search for specific titles, and save favorites to their personal account. FlickFlow is designed to be simple, clean, and efficient',
    repoUrl: 'https://github.com/Lydoww/REACT-NATIVE-MOVIE-APP',
    liveDemo: 'https://streamable.com/oxnp6c?src=player-page-share',
  },
  {
    title: 'PulseChat - Real-time Chat App',
    img: Pulse,
    description:
      'A real-time chat application built with the PERN stack. It features live messaging powered by Socket.io, global state management with Zustand, and a modern, responsive UI using TailwindCSS.',
    repoUrl: 'https://github.com/Lydoww/PERN-CHAT-APP',
    liveDemo: 'https://pern-chat-app-ibpf.onrender.com/',
  },
  {
    title: 'NovaShop - Modern E-commerce Showcase',
    img: NovaShop,
    description:
      'NovaShop is a clean and modern e-commerce project built with React, Tailwind CSS, TanStack, and React Context. The storefront is designed as a client-facing demo. ',
    repoUrl: 'https://github.com/Lydoww/NovaShop',
    liveDemo: 'https://novashop-delta.vercel.app/',
  },
  {
    title: 'Strato Dashboard - Static Dashboard',
    img: strato,
    description:
      'It was a project for a client to develop an admin dashboard for Homonoia, a textile company. The goal was to create a sleek and responsive interface to monitor key metrics such as expenses, customers, and purchases. Built with React, the dashboard leverages Recharts for dynamic data visualization, offering real-time insights with interactive charts for efficient analytics.',
    repoUrl: 'https://github.com/Lydoww/Admin-Dashboard',
    liveDemo: 'https://stratoboard.netlify.app/',
  },
  {
    title: 'Rawg Like - Game Hub',
    img: Rawg,
    description:
      'Game hub, using rawg API, built with React / TypeScript / Chakra v3.',
    repoUrl: 'https://github.com/Lydoww/game-hub',
    liveDemo: 'https://rawglike.vercel.app/',
  },
  {
    title: 'La Pince',
    img: Lapince,
    description:
      'Banking app built with React, Node, Express, PostgreSQL, and Sequelize, enabling users to efficiently manage their finances.',
    repoUrl: 'https://lapinceapi.vercel.app/',
    liveDemo: '',
  },
  {
    title: 'Pokedex',
    img: Pokedex,
    description: 'Pokedex application with React.',
    repoUrl: 'https://github.com/Lydoww/Pokedex-React',
    liveDemo: 'https://pokedex-made-with-react.netlify.app/',
  },
  {
    title: 'Movies',
    img: Movie,
    description: 'Movie App with React and SASS.',
    repoUrl: 'https://github.com/Lydoww/Movie-App',
    liveDemo: 'https://react-sass-movie-app.netlify.app/',
  },
  {
    title: 'Sunset Skate Club',
    img: Skate,
    description: 'Skate Ecommerce built with React / TypeScript / TailwindCSS.',
    repoUrl: 'https://github.com/Lydoww/Skate-Sunset-Club',
    liveDemo: 'https://sunsetskateclub.netlify.app/',
  },
];

export default projects;
