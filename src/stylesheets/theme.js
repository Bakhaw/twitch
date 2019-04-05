import palette from './palette';

const { black, purple, white } = palette;

export default {
  Light: {
    GameCard: {
      background: black.light,
      title: purple.default
    },
    LiveStream: {
      background: white.light,
      boxShadow:
        '0 15px 35px 0 rgba(42, 51, 83, 0.12), 0 5px 15px rgba(0, 0, 0, 0.06)'
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
        'linear-gradient(0deg, #faf9fa 0, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.3))',
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
    LiveStream: {
      background: purple.superDark,
      boxShadow:
        '0 15px 35px 0 rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)'
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
