/**
 * UNIQUE SMP - CONTENT CONSTANTS
 * 
 * All text content for the website
 * Organized by section for easy maintenance
 */

export const content = {
    // Hero Section
    hero: {
      title: 'UNIQUE SMP',
      tagline: 'Where Legends Forge Their Legacy',
      subtitle: 'A premium vanilla survival experience with cross-platform play',
      cta: {
        discord: 'Join Discord',
        whitelist: 'Get Whitelisted',
      },
    },

    // About Section
    about: {
      title: 'Experience Pure Survival',
      subtitle: 'Built for the community, powered by passion',
      features: [
        {
          title: 'Pure Vanilla',
          description: 'Authentic Minecraft survival without game-breaking modifications',
          icon: 'grass',
        },
        {
          title: 'Land Claims',
          description: 'Protect your builds with our intuitive claim plugin',
          icon: 'shield',
        },
        {
          title: 'Voice Chat',
          description: 'Immersive in-game voice communication with your team',
          icon: 'mic',
        },
        {
          title: 'Cross-Platform',
          description: 'Play together on Java and Bedrock editions',
          icon: 'platform',
        },
        {
          title: 'Team System',
          description: 'Form strategic alliances with up to 4 members',
          icon: 'team',
        },
        {
          title: 'Shop Economy',
          description: 'Build your empire with a player-driven marketplace',
          icon: 'shop',
        },
      ],
    },

    // Rules Section
    rules: {
      title: 'Server Rules',
      subtitle: 'Fair play keeps the world alive',
      videoTitle: 'Watch the Full Rules Explanation',
      rules: [
        {
          title: 'Team Limit',
          description: 'Maximum 4 members per team for balanced gameplay',
          icon: '👥',
        },
        {
          title: 'Shop Required',
          description: 'Every team must establish a shop at spawn',
          icon: '🏪',
        },
        {
          title: 'No Griefing',
          description: 'Respect others\' builds and claimed territories',
          icon: '🚫',
        },
        {
          title: 'Arena PvP Only',
          description: 'Combat restricted to designated arena with item betting',
          icon: '⚔️',
        },
        {
          title: 'Respect All',
          description: 'Maintain a friendly and inclusive community',
          icon: '🤝',
        },
      ],
    },

    // Whitelist Section
    whitelist: {
      title: 'Join Our Community',
      subtitle: 'Get whitelisted in 3 simple steps',
      steps: [
        {
          step: 1,
          title: 'Join Discord',
          description: 'Connect with our community on Discord',
          action: 'Join Now',
        },
        {
          step: 2,
          title: 'Enter Waiting Room',
          description: 'Join the "Unique Whitelist Waiting" voice channel',
          action: 'Find Channel',
        },
        {
          step: 3,
          title: 'Staff Interview',
          description: 'A staff member will interview you and approve your access',
          action: 'Get Ready',
        },
        {
          step: 4,
          title: 'Start Playing',
          description: 'Welcome to Unique SMP! Begin your adventure',
          action: 'Play Now',
        },
      ],
    },

    // Cross Platform Section
    crossPlatform: {
      title: 'Play Your Way',
      subtitle: 'One world, two platforms',
      java: {
        title: 'Java Edition',
        features: ['Full mod support', 'Advanced redstone', 'Original experience'],
      },
      bedrock: {
        title: 'Bedrock Edition',
        features: ['Mobile & Console', 'Controller support', 'Smooth performance'],
      },
      note: 'Both editions play together seamlessly',
    },

    // Footer
    footer: {
      tagline: 'A Kerala-based Minecraft community',
      discord: 'Join Discord',
      copyright: '© 2025 Unique SMP. All rights reserved.',
      links: {
        rules: 'Rules',
        whitelist: 'Whitelist',
        discord: 'Discord',
      },
    },

    // Common
    common: {
      loading: 'Loading...',
      learnMore: 'Learn More',
      comingSoon: 'Coming Soon',
    },
  },
} as const;
