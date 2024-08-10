ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: 'minecraft:flint',
            inputs: ['minecraft:gravel', 'minecraft:gravel', 'minecraft:gravel'],
            id: 'crowpack:shapeless/flint_from_gravel'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
})