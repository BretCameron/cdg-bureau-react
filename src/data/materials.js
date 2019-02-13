const materials = {
    'Plastic Filament': {
        category: 'Plastic Filament',
        image: require('../images/materials/filament.png'),
        variants: ['ABS', 'ASA', 'PC-ABS', 'PETG', 'Nylon', 'Carbon-fibre', 'PLA', 'HIPS', 'PVA', 'PEEK', 'PEI'],
        description: 'The most common type of 3D printing material...',
    },
    'Plastic Powder': {
        category: 'Plastic Powder',
        image: require('../images/materials/powder.png'),
        variants: ['Nylon', 'TPU'],
        description: 'Plastic powders can produce some of the highest-quality, strongest, and...',
    },
    'Plastic Resin': {
        category: 'Plastic Resin',
        image: require('../images/materials/resin.png'),
        variants: ['Rigid', 'Opaque', 'Clear', 'ABS', 'PP'],
        description: 'Similar to plastic powders, plastic resins...',
    },
    'Ceramic': {
        category: 'Ceramic',
        image: require('../images/materials/ceramic.png'),
        variants: ['Plaster'],
        description: 'Ceramic materials are useful for...',
    },
    'Flex': {
        category: 'Flex',
        image: require('../images/materials/flex.png'),
        variants: ['TPU', 'Elastomers', 'Shore A', 'Shore D'],
        description: 'For flexible parts and prototypes, we offer a versatile range of...',
    },
    'Wax': {
        category: 'Wax',
        image: require('../images/materials/wax.png'),
        variants: ['Investment Casting Real Wax'],
        description: 'Our wax parts are perfect for lost wax metal casting...',
    },
    'Metal': {
        category: 'Metal',
        image: require('../images/materials/metal.png'),
        variants: ['Stainless Steel', 'Maraging Steel', 'Titanium', 'Nickel Alloy', 'Aluminium'],
        description: 'For those who need the greatest strength and rigidity, metal offers...',
    },
}

export default materials;