import { SquareDashed, Clock7, DoorOpen  } from "lucide-react";
export const points = [
  {
    id: 1,
    item: [
      {
        icons: [
          { icon: SquareDashed, text: "37 m²" },
          { icon: DoorOpen, text: "2 kamers" },
          { icon: Clock7, text: "1 maand te koop" },
        ],
        text: "3432 GL, Nieuwegein",
        value: "€ 225.000,-k.k.",
      },
    ],
    imageSrc: "/images/1st.png",
  },
  {
    id: 2,
    item: [
      {
        icons: [
          { icon: SquareDashed, text: "77 m²" },
          { icon: DoorOpen, text: "4 kamers" },
          { icon: Clock7, text: "20 maand te koop" },
        ],
        text: "3581 WB, Utrecht",
        value: "€ 375.000,- k.k.",
      },
    ],
    imageSrc: "/images/2nd (1).png",
  },
  {
    id: 3,
    item: [
      {
        icons: [
          { icon: SquareDashed, text: "133 m²" },
          { icon: DoorOpen, text: "6 kamers" },
          { icon: Clock7, text: "30 maand te koop" },
        ],
        text: "3402 BA, Ijsselstein",
        value: "€ 450.000,- k.k.",
      },
    ],
    imageSrc: "/images/3rd.png",
  },
];
export const mapdata = [
  {
    id: 1,
    title: "Algemene informatie",
    item: [
      { text: "Aangeboden Sind:", value: "degen to koop" },
      { text: " Aamarrding:", value: "In over leg" },
      { text: "Soot bouw:", value: "Bestaan de bouw" },
      { text: "Bovwjaar:", value: "2016" },
    ],
  },
  {
    id: 2,
    title: "Grootte en oppervlakte",
    item: [
      { text: "Gebruiksoppervlakten wonen:", value: "88 m²" },
      {
        text: "Overige inpandige ruimte :",
        value: "Toilet, gang, hal, stookruimte, balkon, wasruimte",
      },
      { text: "Externe bergruimte:", value: "18 m²" },
      { text: "Inhoud:", value: "291 m²" },
    ],
  },
  {
    id: 3,
    title: "Kamers en indeling",
    item: [
      { text: "Aantal woonlagen:", value: "1" },
      { text: "Aantal kamers:", value: "4" },
      { text: "Aantal slaapkamers:", value: "3" },
      { text: "Aantal badkamers:", value: "1" },
    ],
  },
  {
    id: 4,
    title: "Buitenruimte",
    item: [
      { text: "Soort dak:", value: "Plat dak" },
      { text: "Soort buitenruimte:", value: "Parkeerkelder" },
      { text: "Schuur/Berging soort:", value: "Inpandig" },
    ],
  },
  {
    id: 5,
    title: "Garage en parkeren",
    item: [{ text: "Garage isolatie:", value: "Parkeerkelder" }],
  },
  {
    id: 6,
    title: "Garage Voorzieningen",
  },
];


