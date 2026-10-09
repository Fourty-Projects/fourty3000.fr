export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "NationsEmpire",
    year: 2026,
    description: {
      fr: "NationsEmpire — Minecraft Semi-RP est un serveur moddé où l'on mélange construction, diplomatie et un peu de roleplay léger.",
      en: "NationsEmpire — Minecraft Semi-RP is a hardcore server blending building, diplomacy and a bit of light roleplay.",
      es: "NationsEmpire — Minecraft Semi-RP es un servidor exigente que combina construcción, diplomacia y algo de roleplay ligero.",
      de: "NationsEmpire — Minecraft Semi-RP ist ein anspruchsvoller Server, der Bauen, Diplomatie und etwas leichtes Roleplay verbindet.",
      it: "NationsEmpire — Minecraft Semi-RP è un server impegnativo che unisce costruzione, diplomazia e un po' di roleplay leggero.",
      pt: "NationsEmpire — Minecraft Semi-RP é um servidor exigente que combina construção, diplomacia e algum roleplay leve.",
    },
    url: "https://nationsempire.eminium.ovh/?ref=fourty3000fr",
  },
  {
    title: "Eminium",
    year: 2024,
    description: {
      fr: "「 🌌 」Plonge dans une aventure Minecraft Moddé PvP-Factions unique créée pour les vrais passionnés",
      en: "「 🌌 」Dive into a unique hardcore Minecraft PvP-Factions adventure built for true enthusiasts",
      es: "「 🌌 」Sumérgete en una aventura única de Minecraft PvP-Factions exigente, creada para los verdaderos apasionados",
      de: "「 🌌 」Tauche ein in ein einzigartiges anspruchsvolles Minecraft-PvP-Factions-Abenteuer, geschaffen für echte Enthusiasten",
      it: "「 🌌 」Immergiti in un'avventura unica di Minecraft PvP-Factions impegnativa, creata per i veri appassionati",
      pt: "「 🌌 」Mergulha-te numa aventura única de Minecraft PvP-Factions exigente, criada para os verdadeiros apaixonados",
    },
    url: "https://eminium.ovh/?ref=fourty3000fr",
  },
];
