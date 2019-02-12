const printers = {
    "Omni Factory 2.0": {
        name: "Omni Factory 2.0",
        image: require("../images/omni.png"),
        technology: "FFF",
        description: "For large builds up to 500x500x500mm in high performance plastics including ABS and Carbon-fibre filled Nylon."
    },
    "Intamsys Funmat HT": {
        name: "Intamsys Funmat HT",
        image: require("../images/intamsys-funmat-ht.png"),
        technology: "FFF",
        description: "For plastic part models in super high-temp PEEK and Ultem/PEI."
    },
    "Fusion3": {
        name: "Fusion3",
        image: require("../images/fusion3.png"),
        technology: "FFF",
        description: "For plastic part models in a choice of colours and ABS or Nylon materials."
    },
    // "Zmorph": {
    //     name: "Zmorph",
    //     technology: "FFF",
    //     description: "For plastic part models in TPU or laser cut/engraved."
    // },
    "ProJet 3X00 Max": {
        name: "ProJet 3X00 Max",
        image: require("../images/projet-3600.png"),
        technology: "MJP",
        description: "For super-high resolution models, thin walls and fine detail in resin with 16 micron layers."
    },
    "ProJet 2500 Plus": {
        name: "ProJet 2500 Plus",
        image: require("../images/projet-2500-plus.png"),
        technology: "MJP",
        description: "For super-high resolution models in black, white, clear, grey resin plus Armor ABS and ProFlex PP, plus elastomers."
    },
    "ProJet 2500 Wax": {
        name: "ProJet 2500 Wax",
        image: require("../images/projet-2500-wax.png"),
        technology: "MJP",
        description: "For super high resolution models using investment casting wax."
    },
    "Figure-4": {
        name: "Figure-4",
        image: require("../images/figure-4.png"),
        technology: "DLP",
        description: "For high resolution rapid turn-around parts."
    },
    "FabPro 1000": {
        name: "FabPro 1000",
        image: require("../images/fabpro-1000.png"),
        technology: "DLP",
        description: "For high resolution small parts."
    },
    "ProJet X60 / Z650 / Z450": {
        name: "ProJet X60 / Z650 / Z450",
        image: require("../images/projet-660-pro.png"),
        technology: "CJP",
        description: "For full colour plaster prints."
    },
    "ProJet 7000, ProX 800": {
        name: "ProJet 7000, ProX 800",
        image: require("../images/projet-7000.png"),
        technology: "SLA",
        description: "For parts in a choice of white or clear plastic."
    },
    "Sinterit LISA, ProX 6100": {
        name: "Sinterit LISA, ProX 6100",
        image: require("../images/sinterit-lisa.png"),
        technology: "SLS",
        description: "For parts in super-strong nylon materials."
    },
    "DMP 350": {
        name: "DMP 350",
        image: require("../images/dmp-350.png"),
        technology: "DMP",
        description: "For direct metal sintered parts in a choice of metal powders."
    },

};

export default printers;