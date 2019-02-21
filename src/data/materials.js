const materials = {
  'Filament': {
    category: 'Filament',
    image: require('../images/materials/filament.png'),
    variants: {
      'ABS': require('../images/materials/abs.jpg'),
      'ASA': require('../images/materials/asa.jpg'),
      'PC-ABS': require('../images/materials/pc-abs.jpg'),
      'PETG': require('../images/materials/petg.jpg'),
      'Nylon': require('../images/materials/nylon-filament.jpg'),
      'Carbon-fibre': require('../images/materials/carbon-fibre.png'),
      'PLA': require('../images/materials/pla.jpg'),
      'HIPS': require('../images/materials/hips.jpg'),
      'PVA': require('../images/materials/pva.jpg'),
      'PEEK': require('../images/materials/peek.jpg'),
      'PEI': require('../images/materials/pei.jpg'),
    },
    description: 'The most common type of 3D printing material...',
  },
  'Powder': {
    category: 'Powder',
    image: require('../images/materials/powder.png'),
    variants: {
      'Nylon': require('../images/materials/powder.png'),
      'TPU': require('../images/materials/tpu.jpg'),
    },
    description: 'Plastic powders can produce some of the highest-quality, strongest, and...',
  },
  'Resin': {
    category: 'Resin',
    image: require('../images/materials/resin.png'),
    variants: {
      'Rigid': require('../images/materials/rigid.jpg'),
      'Opaque': require('../images/materials/opaque.jpg'),
      'Clear': require('../images/materials/clear.jpg'),
      'ABS': require('../images/materials/resin.png'),
      'PP': require('../images/materials/resin.png'),
    },
    description: 'Similar to plastic powders, plastic resins...',
  },
  // 'Ceramic': {
  //     category: 'Ceramic',
  //     image: require('../images/materials/ceramic.png'),
  //     variants: ['Plaster'],
  //     description: 'Ceramic materials are useful for...',
  // },
  'Flex': {
    category: 'Flex',
    image: require('../images/materials/flex.png'),
    variants: {
      'TPU': require('../images/materials/flex.png'),
      'Elastomers': require('../images/materials/flex.png'),
      'Shore A': require('../images/materials/flex.png'),
      'Shore D': require('../images/materials/flex.png'),
    },
    description: 'For flexible parts and prototypes, we offer a versatile range of...',
  },
  'Wax': {
    category: 'Wax',
    image: require('../images/materials/wax.png'),
    variants: {
      'Investment Casting Real Wax': require('../images/materials/wax.png'),
    },
    description: 'Our wax parts are perfect for lost wax metal casting...',
  },
  'Metal': {
    category: 'Metal',
    image: require('../images/materials/metal.png'),
    variants: {
      'Stainless Steel': require('../images/materials/metal.png'),
      'Maraging Steel': require('../images/materials/metal.png'),
      'Titanium': require('../images/materials/metal.png'),
      'Nickel Alloy': require('../images/materials/metal.png'),
      'Aluminium': require('../images/materials/metal.png'),
    },
    description: 'For those who need the greatest strength and rigidity, metal offers...',
  },
}

export default materials;