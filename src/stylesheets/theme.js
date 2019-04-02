import palette from './palette';

const { black, grey, purple, white } = palette;

export default {
  Light: {
    GameCard: {
      background: black.light,
      title: purple.default
    },
    Loader: {
      background: white.default,
      color: black.default
    },
    NavBar: {
      background: purple.default
    },
    PageWrapper: {
      background: white.default
    },
    StreamsBanner: {
      background:
        'linear-gradient(0deg, #fff 0, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.3))',
      title: black.default
    },
    StreamCard: {
      background: black.light,
      subtitle: black.light,
      title: black.default
    }
  },
  Dark: {
    GameCard: {
      background: purple.light,
      title: white.dark
    },
    Loader: {
      background: purple.darkest,
      color: white.dark
    },
    NavBar: {
      background: purple.dark
    },
    PageWrapper: {
      background: purple.darkest
    },
    StreamsBanner: {
      background:
        'linear-gradient(0deg, #25222d 0, rgba(37, 34, 45, 0.9) 25%, rgba(37, 34, 45, 0.3))',
      title: white.dark
    },
    StreamCard: {
      background: purple.light,
      subtitle: purple.light,
      title: white.dark
    }
  }
};
