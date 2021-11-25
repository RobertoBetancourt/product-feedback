export const initialDB = {
  feedback: [
    {
      id: 0,
      votes: 112,
      title: 'Add tags for solutions',
      description: 'Easier to search for solutions based on a specific stack',
      comments: [
        {
          id: 0,
          author: 'Joandra Salome',
          username: 'joandra.salome',
          comment: 'I fully support the idea, and would add that tags should be self-explanatory and simple to understand.',
          parentComment: null,
          level: 0
        }
      ],
      alreadyLiked: false,
      isOwner: false,
      type: 'Enhancement'
    },
    {
      id: 1,
      votes: 99,
      title: 'Add a dark theme option',
      description: 'It would help people with light sensitivities and who prefer dark mode.',
      comments: [
        {
          id: 0,
          author: 'Elijah Moss',
          username: 'hexagon.bestagon',
          comment: 'Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.',
          parentComment: null,
          level: 0
        },
        {
          id: 1,
          author: 'James Skinner',
          username: 'hummingbird1',
          comment: 'Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
          parentComment: null,
          level: 0
        },
        {
          id: 2,
          author: 'Anne Valentine',
          username: 'annev1990',
          comment: 'While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.',
          parentComment: 1,
          level: 1
        },
        {
          id: 3,
          author: 'Ryan Welles',
          username: 'voyager.344',
          comment: "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
          parentComment: 2,
          level: 2
        }
      ],
      alreadyLiked: false,
      isOwner: false,
      type: 'Feature'
    },
    {
      id: 2,
      votes: 65,
      title: 'Q&A within the challenge hubs',
      description: 'Challenge-specific Q&A would make for easy reference.',
      comments: [],
      alreadyLiked: false,
      isOwner: false,
      type: 'Feature'
    },
    {
      id: 3,
      votes: 51,
      title: 'Allow image/video upload to feedback',
      description: 'Images and screencasts can enhance comments on solutions.',
      comments: [
        {
          id: 0,
          author: 'James Skinner',
          username: 'hummingbird1',
          comment: "That's an excellent idea! This would make it easier to provide clear feedback with very specific steps.",
          parentComment: null,
          level: 0
        },
        {
          id: 1,
          author: 'Bethel Alyson',
          username: 'alyson_392',
          comment: 'I agree, but the size of the files should be limited.',
          parentComment: 0,
          level: 1
        }
      ],
      alreadyLiked: false,
      isOwner: false,
      type: 'Enhancement'
    },
    {
      id: 4,
      votes: 42,
      title: 'Ability to follow others',
      description: 'Stay updated on comments and solutions other people post.',
      comments: [
        {
          id: 0,
          author: 'Caetlin Amberly',
          username: 'caetlin.amberly',
          comment: 'I second the idea! This would make it easier for us to follow up with specific people and generate a better exchange of ideas.',
          parentComment: null,
          level: 0
        }
      ],
      alreadyLiked: false,
      isOwner: false,
      type: 'Feature'
    },
    {
      id: 5,
      votes: 3,
      title: 'Preview images not loading',
      description: 'Challenge preview images are missing when you apply a filter.',
      comments: [],
      alreadyLiked: false,
      isOwner: false,
      type: 'Bug'
    }
  ],
  roadmap: {
    planned: [
      {
        id: 0,
        title: 'More comprehensive reports',
        description: 'It would be great to see a more detailed breakdown of solutions.',
        category: 'Feature'
      },
      {
        id: 1,
        title: 'Learning paths',
        description: 'Sequenced projects for different goals to help people improve.',
        category: 'Feature'
      }
    ],
    inProgress: [
      {
        id: 2,
        title: 'One-click portfolio generation',
        description: 'Add ability to create professional looking portfolio from profile.',
        category: 'Feature'
      },
      {
        id: 3,
        title: 'Bookmark challenges',
        description: 'Be able to bookmark challenges to take later on.',
        category: 'Feature'
      },
      {
        id: 4,
        title: 'Animated solution screenshots',
        description: 'Screenshots of solutions with animations don’t display correctly.',
        category: 'Bug'
      }
    ],
    live: [
      {
        id: 5,
        title: 'Add micro-interactions',
        description: 'Small animations at specific points can add delight.',
        category: 'Enhancement'
      }
    ]
  }
}
