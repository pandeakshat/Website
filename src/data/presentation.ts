type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "akshat.pande@outlook.com",
  title: "Hi, I’m Akshat Pande 👋",
  // profile: "/profile.webp",
  description:
    "",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/iam_akshatpande",
    },
    {
      label: "Medium",
      link: "https://medium.com/@pandeakshat",
    },
    {
      label: "Github",
      link: "https://github.com/pandeakshat",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/pandeakshat/",
    },
    {
      label: "YouTube",
      link: "https://www.youtube.com/@pandeakshat",
    },
    {
      label: "Newsletter",
      link: "https://exp-er.beehiiv.com",
    },
    {
      label: "Odyssey",
      link: "https://odyssey.pandeakshat.com",
    },
    {
      label: "Dashboard",
      link: "https://dashboard.pandeakshat.com",
    },

  ],
};

export default presentation;
