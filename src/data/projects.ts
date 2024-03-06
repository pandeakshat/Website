export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Status Window",
    techs: ["AstroJS", "TypeScript","TailWindCSS", "Python", "Flask"],
    link: "https://status.pandeakshat.com",
  },
  {
    title: "BSE-Simulation",
    techs: ["Python", "MatplotLib", "Streamlit"],
    link: "https://bse-simulation.streamlit.app/",
  },
  {
    title: "Anime Wisdom Vault",
    techs: ["Python", "Pandas", "Streamlit"],
    link: "https://animewisdomvault.streamlit.app/",

  },
  {
    title: "Music Genre",
    techs: ["Python", "Pandas", "AI", "Streamlit"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "Carbon Chain",
    techs: ["Python", "Pandas", "Blockchain","Streamlit"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "Carbon Activity",
    techs: ["Python", "Pandas", "Streamlit"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "Property NFT Marketplace",
    techs: ["Javascript", "React", "Blockchain"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
