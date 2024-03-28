/*const z = {
    object: {
        id: Number,
        title: String,
        image: new Option(),
        imageType: new Option(),
        servings: Number,
        readyInMinutes: Number,
        sourceUrl: String,
        sourceName: String,
        summary: String,
        analyzedInstructions: [{
            name: String,
            steps: [{
                number: Number,
                step: String,
                ingredients: [{
                    id: Number,
                    name: String,
                    localizedName: String,
                    image: String
                }],
                equipment: [{
                    id: Number,
                    name: String,
                    localizedName: String,
                    image: String
                }],
            }]
        }],
    },

};

const recipeSchema = z.object({
    id: Number,
    title: String,
    image: new Option(),
    imageType: new Option(),
    servings: Number,
    readyInMinutes: Number,
    sourceUrl: String,
    sourceName: String,
    summary: String,
    analyzedInstructions: z.array(z.object({
        name: String,
        steps: z.array(z.object({
            number: Number,
            step: String,
            ingredients: z.array(z.object({
                id: Number,
                name: String,
                localizedName: String,
                image: String
            })),
            equipment: z.array(z.object({
                id: Number,
                name: String,
                localizedName: String,
                image: String
            }))
        }))
    })),
    extendedIngredients: z.array(z.object({
        id: Number,
        name: String,
        nameClean: z.nullable(String),
        original: String,
        originalName: String,
        amount: Number,
        unit: String,
        image: z.nullable(String),
        meta: z.array(String),
        measures: z.object({
            us: z.object({
                amount: Number,
                unitShort: String,
                unitLong: String
            }),
            metric: z.object({
                amount: Number,
                unitShort: String,
                unitLong: String
            })
        })
    })),
    diets: z.array(String),
    dishTypes: z.array(String),
    cuisines: z.array(String),
    instructions: String
})

export default defineCachedEventHandler(async event => {
    console.log('making fresh recipes request')
    const { recipes } = await fetch<{ recipes: unknown }>('https://api.spoonacular.com/recipes/random', {
        query: {
            limitLicense: true,
            number: 100,
            apiKey: useRuntimeConfig().spoonacular.apiKey
        }
    })

    try {
        return z.parse(z.array(recipeSchema), recipes)
    } catch (e) {
        // @ts-expect-error untyped error
        console.log(e.issues.map(i => i.path))
        return []
    }
}, {
    base: 'recipes',
    getKey: () => 'recipes',
    shouldBypassCache: () => false,
    maxAge: 1000 * 60 * 60 * 24,
    staleMaxAge: 1000 * 60 * 60 * 24 * 7
})*/
