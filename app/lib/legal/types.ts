export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export type Section = {
  title: string;
  blocks: Block[];
};

export type LegalPage = {
  heading: string;
  intro?: string;
  updated?: string;
  updatedLabel?: string;
  sections: Section[];
};
