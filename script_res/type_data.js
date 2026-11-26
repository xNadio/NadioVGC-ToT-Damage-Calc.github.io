var TYPE_CHART_RBY = {
    Normal: {
        category: 'Physical',
        Normal: 1,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Air: 1,
        Bug: 1,
        Poison: 1,
        Earth: 1,
        Gem: 0.5,
        Fighting: 1,
        Psychic: 1,
        Ghost: 0,
        Dragon: 1
    },
    Grass: {
        category: 'Special',
        Normal: 1,
        Grass: 0.5,
        Fire: 0.5,
        Water: 2,
        Electric: 1,
        Ice: 1,
        Air: 0.5,
        Bug: 0.5,
        Poison: 0.5,
        Earth: 2,
        Gem: 2,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 0.5
    },
    Fire: {
        category: 'Special',
        Normal: 1,
        Grass: 2,
        Fire: 0.5,
        Water: 0.5,
        Electric: 1,
        Ice: 2,
        Air: 1,
        Bug: 2,
        Poison: 1,
        Earth: 1,
        Gem: 0.5,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 0.5
    },
    Water: {
        category: 'Special',
        Normal: 1,
        Grass: 0.5,
        Fire: 2,
        Water: 0.5,
        Electric: 1,
        Ice: 1,
        Air: 1,
        Bug: 1,
        Poison: 1,
        Earth: 2,
        Gem: 2,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 0.5
    },
    Electric: {
        category: 'Special',
        Normal: 1,
        Grass: 0.5,
        Fire: 1,
        Water: 2,
        Electric: 0.5,
        Ice: 1,
        Air: 2,
        Bug: 1,
        Poison: 1,
        Earth: 0,
        Gem: 1,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 0.5
    },
    Ice: {
        category: 'Special',
        Normal: 1,
        Grass: 2,
        Fire: 1,
        Water: 0.5,
        Electric: 1,
        Ice: 0.5,
        Air: 2,
        Bug: 1,
        Poison: 1,
        Earth: 2,
        Gem: 1,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 2
    },
    Air: {
        category: 'Physical',
        Normal: 1,
        Grass: 2,
        Fire: 1,
        Water: 1,
        Electric: 0.5,
        Ice: 1,
        Air: 1,
        Bug: 2,
        Poison: 1,
        Earth: 1,
        Gem: 0.5,
        Fighting: 2,
        Psychic: 1,
        Ghost: 1,
        Dragon: 1
    },
    Bug: {
        category: 'Physical',
        Normal: 1,
        Grass: 2,
        Fire: 0.5,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Air: 0.5,
        Bug: 1,
        Poison: 2,
        Earth: 1,
        Gem: 1,
        Fighting: 0.5,
        Psychic: 2,
        Ghost: 0.5,
        Dragon: 1
    },
    Poison: {
        category: 'Physical',
        Normal: 1,
        Grass: 2,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Air: 1,
        Bug: 2,
        Poison: 0.5,
        Earth: 0.5,
        Gem: 0.5,
        Fighting: 1,
        Psychic: 1,
        Ghost: 0.5,
        Dragon: 1
    },
    Earth: {
        category: 'Physical',
        Normal: 1,
        Grass: 0.5,
        Fire: 2,
        Water: 1,
        Electric: 2,
        Ice: 1,
        Air: 0,
        Bug: 0.5,
        Poison: 2,
        Earth: 1,
        Gem: 2,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 1
    },
    Gem: {
        category: 'Physical',
        Normal: 1,
        Grass: 1,
        Fire: 2,
        Water: 1,
        Electric: 1,
        Ice: 2,
        Air: 2,
        Bug: 2,
        Poison: 1,
        Earth: 0.5,
        Gem: 1,
        Fighting: 0.5,
        Psychic: 1,
        Ghost: 1,
        Dragon: 1
    },
    Fighting: {
        category: 'Physical',
        Normal: 2,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 2,
        Air: 0.5,
        Bug: 0.5,
        Poison: 0.5,
        Earth: 1,
        Gem: 2,
        Fighting: 1,
        Psychic: 0.5,
        Ghost: 0,
        Dragon: 1
    },
    Psychic: {
        category: 'Special',
        Normal: 1,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Air: 1,
        Bug: 1,
        Poison: 2,
        Earth: 1,
        Gem: 1,
        Fighting: 2,
        Psychic: 0.5,
        Ghost: 1,
        Dragon: 1
    },
    Ghost: {
        category: 'Physical',
        Normal: 0,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Air: 1,
        Bug: 1,
        Poison: 1,
        Earth: 1,
        Gem: 1,
        Fighting: 1,
        Psychic: 0,
        Ghost: 2,
        Dragon: 1
    },
    Dragon: {
        category: 'Special',
        Normal: 1,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Air: 1,
        Bug: 1,
        Poison: 1,
        Earth: 1,
        Gem: 1,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 2
    },
};

var TYPE_CHART_GSC = $.extend(true, {}, TYPE_CHART_RBY, {
    Normal: {
        Dark: 1,
        Metal: 0.5,
        Typeless: 1,
        '???': 1
    },
    Grass: {
        Dark: 1,
        Metal: 0.5,
        Typeless: 1,
        '???': 1
    },
    Fire: {
        Dark: 1,
        Metal: 2,
        Typeless: 1,
        '???': 1
    },
    Water: {
        Dark: 1,
        Metal: 1,
        Typeless: 1,
        '???': 1
    },
    Electric: {
        Dark: 1,
        Metal: 1,
        Typeless: 1,
        '???': 1
    },
    Ice: {
        Fire: 0.5,
        Dark: 1,
        Metal: 0.5,
        Typeless: 1,
        '???': 1
    },
    Air: {
        Dark: 1,
        Metal: 0.5,
        Typeless: 1,
        '???': 1
    },
    Bug: {
        Poison: 0.5,
        Dark: 2,
        Metal: 0.5,
        Typeless: 1,
        '???': 1
    },
    Poison: {
        Bug: 1,
        Dark: 1,
        Metal: 0,
        Typeless: 1,
        '???': 1
    },
    Earth: {
        Dark: 1,
        Metal: 2,
        Typeless: 1,
        '???': 1
    },
    Gem: {
        Dark: 1,
        Metal: 0.5,
        Typeless: 1,
        '???': 1
    },
    Fighting: {
        Dark: 2,
        Metal: 2,
        Typeless: 1,
        '???': 1
    },
    Psychic: {
        Dark: 0,
        Metal: 0.5,
        Typeless: 1,
        '???': 1
    },
    Ghost: {
        Psychic: 2,
        Dark: 0.5,
        Metal: 0.5,
        Typeless: 1,
        '???': 1
    },
    Dragon: {
        Dark: 1,
        Metal: 0.5,
        Typeless: 1,
        '???': 1
    },
    Dark: {
        category: 'Special',
        Normal: 1,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Air: 1,
        Bug: 1,
        Poison: 1,
        Earth: 1,
        Gem: 1,
        Fighting: 0.5,
        Psychic: 2,
        Ghost: 2,
        Dragon: 1,
        Dark: 0.5,
        Metal: 0.5,
        Typeless: 1,
        '???': 1
    },
    Metal: {
        category: 'Physical',
        Normal: 1,
        Grass: 1,
        Fire: 0.5,
        Water: 0.5,
        Electric: 0.5,
        Ice: 2,
        Air: 1,
        Bug: 1,
        Poison: 1,
        Earth: 1,
        Gem: 2,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Metal: 0.5,
        Typeless: 1,
        '???': 1
    },
    '???': {
        category: 'Physical',
        Normal: 1,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Air: 1,
        Bug: 1,
        Poison: 1,
        Earth: 1,
        Gem: 1,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Metal: 1,
        Typeless: 1,
        '???': 1
    },
    Typeless: {
        category: 'Physical',
        Normal: 1,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Air: 1,
        Bug: 1,
        Poison: 1,
        Earth: 1,
        Gem: 1,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Metal: 1,
        Typeless: 1,
        '???': 1
    },
});

var TYPE_CHART_BW = $.extend(true, {}, TYPE_CHART_GSC, {});
delete TYPE_CHART_BW['???'];

var TYPE_CHART_XY = $.extend(true, {}, TYPE_CHART_BW, {
    Normal: {
        Fairy: 1
    },
    Grass: {
        Fairy: 1
    },
    Fire: {
        Fairy: 1
    },
    Water: {
        Fairy: 1
    },
    Electric: {
        Fairy: 1
    },
    Ice: {
        Fairy: 1
    },
    Air: {
        Fairy: 1
    },
    Bug: {
        Fairy: 0.5
    },
    Poison: {
        Fairy: 2
    },
    Earth: {
        Fairy: 1
    },
    Gem: {
        Fairy: 1
    },
    Fighting: {
        Fairy: 0.5
    },
    Psychic: {
        Fairy: 1
    },
    Ghost: {
        Metal: 1,
        Fairy: 1
    },
    Dragon: {
        Fairy: 0
    },
    Dark: {
        Metal: 1,
        Fairy: 0.5
    },
    Metal: {
        Fairy: 2
    },
    Fairy: {
        Normal: 1,
        Grass: 1,
        Fire: 0.5,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Air: 1,
        Bug: 1,
        Poison: 0.5,
        Earth: 1,
        Gem: 1,
        Fighting: 2,
        Psychic: 1,
        Ghost: 1,
        Dragon: 2,
        Dark: 2,
        Metal: 0.5,
        Typeless: 1,
        Fairy: 1
    },
    Typeless: {
        Fairy: 1
    }
});

var TYPE_CHART_SV = $.extend(true, {}, TYPE_CHART_XY, {
    Normal: {
        Cosmic: 1,
        Light: 1
    },
    Grass: {
        Ice: 0.5,
        Cosmic: 1,
        Light: 1,
        Metal: 1
    },
    Fire: {
        Light: 1,
        Cosmic: 1
    },
    Water: {
        Light: 1,
        Cosmic: 1
    },
    Electric: {
        Light: 1,
        Cosmic: 1,
        Fire: 0.5,
        Metal: 2
    },
    Ice: {
        Light: 1,
        Cosmic: 1
    },
    Air: {
        Light: 1,
        Cosmic: 2,
        Bug: 1
    },
    Bug: {
        Light: 1,
        Cosmic: 1,
        Bug: 0.5,
        Gem: 0.5,
        Metal: 1
    },
    Poison: {
        Light: 1,
        Cosmic: 1
    },
    Earth: {
        Light: 1,
        Cosmic: 1
    },
    Gem: {
        Light: 2,
        Cosmic: 1,
        Gem: 0.5
    },
    Fighting: {
        Light: 0.5,
        Cosmic: 1
    },
    Psychic: {
        Light: 1,
        Cosmic: 2,
        Psychic: 1
    },
    Ghost: {
        Light: 0.5,
        Cosmic: 1
    },
    Dragon: {
        Light: 0.5,
        Cosmic: 1
    },
    Dark: {
        Light: 2,
        Cosmic: 2
    },
    Metal: {
        Light: 2,
        Cosmic: 1
    },
    Fairy: {
        Light: 0.5,
        Cosmic: 1
    },
    Typeless: {
        Light: 1,
        Cosmic: 1
    },
    Cosmic: {
        Normal: 1,
        Grass: 1,
        Fire: 2,
        Water: 2,
        Electric: 1,
        Ice: 1,
        Air: 0.5,
        Bug: 0.5,
        Poison: 1,
        Earth: 2,
        Gem: 1,
        Fighting: 1,
        Psychic: 0.5,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Metal: 1,
        Fairy: 1,
        Typeless: 1,
        Cosmic: 2, 
        Light: 1     
    },
    Light: {
        Normal: 1,
        Grass: 0.5,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Air: 1,
        Bug: 1,
        Poison: 1,
        Earth: 0.5,
        Gem: 2,
        Fighting: 1,
        Psychic: 1,
        Ghost: 2,
        Dragon: 1,
        Dark: 2,
        Metal: 1,
        Fairy: 1,
        Typeless: 1,
        Light: 1,
        Cosmic: 0.5 
    }
});
