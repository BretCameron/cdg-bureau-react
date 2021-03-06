const printers = {
  "Omni Factory 2.0": {
    name: "Omni Factory 2.0",
    image: require("../images/omni.png"),
    placeholder: require("../images/placeholders/omni_1.svg"),
    technology: "FFF",
    description: "For large builds up to 500x500x500mm in high performance plastics including ABS and Carbon-fibre filled Nylon."
  },
  "Intamsys Funmat HT": {
    name: "Intamsys Funmat HT",
    image: require("../images/intamsys-funmat-ht.png"),
    placeholder: require("../images/placeholders/intamsys-funmat-ht_1.svg"),
    technology: "FFF",
    description: "For plastic part models in super high-temp PEEK and Ultem/PEI."
  },
  "Fusion3": {
    name: "Fusion3",
    image: require("../images/fusion3.png"),
    placeholder: require("../images/placeholders/fusion3_1.svg"),
    technology: "FFF",
    description: "For plastic part models in a choice of colours and ABS or Nylon materials."
  },
  // "Zmorph": {
  //     name: "Zmorph",
  //     technology: "FFF",
  //     description: "For plastic part models in TPU or laser cut/engraved."
  // },
  "ProJet 3500 HDMax": {
    name: "ProJet 3500 HDMax",
    image: require("../images/projet-3600.png"),
    placeholder: require("../images/placeholders/projet-3600_1.svg"),
    technology: "MJP",
    description: "For super-high resolution models, thin walls and fine detail in resin with 16 micron layers."
  },
  "ProJet 2500 Plus": {
    name: "ProJet 2500 Plus",
    image: require("../images/projet-2500-plus.png"),
    placeholder: require("../images/placeholders/projet-2500-plus_1.svg"),
    technology: "MJP",
    description: "For super-high resolution models in black, white, clear, grey resin plus Armor ABS and ProFlex PP, plus elastomers."
  },
  "ProJet 2500 Wax": {
    name: "ProJet 2500 Wax",
    image: require("../images/projet-2500-wax.png"),
    placeholder: require("../images/placeholders/projet-2500-wax_1.svg"),
    technology: "MJP",
    description: "For super high resolution models using investment casting wax."
  },
  "Figure-4": {
    name: "Figure-4",
    image: require("../images/figure-4.png"),
    placeholder: require("../images/placeholders/figure-4_1.svg"),
    technology: "DLP",
    description: "For high resolution rapid turn-around parts."
  },
  "FabPro 1000": {
    name: "FabPro 1000",
    image: require("../images/fabpro-1000.png"),
    placeholder: require("../images/placeholders/fabpro-1000_1.svg"),
    technology: "DLP",
    description: "For high resolution small parts."
  },
  "ProJet 660 / Z650": {
    name: "ProJet 660 / Z650",
    image: require("../images/projet-660-pro.png"),
    placeholder: require("../images/placeholders/projet-660-pro_1.svg"),
    technology: "CJP",
    description: "For full colour plaster prints."
  },
  "iPro 8000": {
    name: "iPro 8000",
    image: require("../images/projet-7000.png"),
    placeholder: require("../images/placeholders/projet-7000_1.svg"),
    technology: "SLA",
    description: "For parts in a choice of white or clear plastic."
  },
  "Sinterit LISA Pro": {
    name: "Sinterit LISA Pro",
    image: require("../images/sinterit-lisa.png"),
    placeholder: require("../images/placeholders/sinterit-lisa_1.svg"),
    technology: "SLS",
    description: "For parts in super-strong nylon materials."
  },
  "ProX 300": {
    name: "ProX 300",
    image: require("../images/dmp-350.png"),
    placeholder: require("../images/placeholders/dmp-350_1.svg"),
    technology: "DMP",
    description: "For direct metal sintered parts in a choice of metal powders."
  },

};

export default printers;