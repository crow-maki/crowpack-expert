ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: tome(),
            inputs: ['minecraft:book', '#forge:bookshelves'],
            id: 'eccentrictome:tome'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
