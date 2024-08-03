/* eslint-env node */

import { fakerEN_US as faker } from '@faker-js/faker';
import { createClient } from '@supabase/supabase-js'


// Create a single supabase client for interacting with your database
const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.SERVICE_ROLE_KEY
)

const logErrorAndExit = (tableName, error) => {
    console.error(
        `An error occurred in table '${tableName}' with code ${error.code}: ${error.message}`
    )
    process.exit(1)
}

const logStep = (stepMessage) => {
    console.log(stepMessage)
}

const seedResources = async (numResources) => {
    logStep('Seeding projects...')
    const resources = []

    const categories = ['documentation', 'tutorial', 'blog', 'article', 'example']
    const tags = ['vue', 'nuxt', 'vuex', 'pinia', 'vue-router', 'components']

    for (let i = 0; i < numResources; i++) {
        const title = faker.lorem.words(5)

        resources.push({
            title,
            url: faker.internet.url(),
            slug: faker.helpers.slugify(title.toLowerCase()),
            author: faker.person.fullName(),
            description: faker.lorem.paragraphs(),
            published_date: faker.date.past(),
            category: faker.helpers.arrayElement(categories),
            tags: faker.helpers.arrayElements(tags)
        })
    }
    const { data, error } = await supabase
        .from('resources')
        .insert(resources)
        .select('id')

    if (error) return logErrorAndExit('Resources', error)

    logStep('Resources seeded successfully.')

    return data
}

const seedInterviewQuestions = async (numQuestions) => {
    logStep('Seeding interview questions...')
    const questions = []

    const difficulties = ['easy', 'medium', 'hard']
    const tags = ['vue', 'nuxt', 'vuex', 'pinia', 'vue-router', 'components']

    for (let i = 0; i < numQuestions; i++) {
        const question = faker.lorem.words(10) + '?'

        questions.push({
            question,
            answer: faker.lorem.sentences({ min: 1, max: 3 }),
            tags: faker.helpers.arrayElements(tags),
            difficulty: faker.helpers.arrayElement(difficulties)
        })
    }
    const { data, error } = await supabase
        .from('interview_questions')
        .insert(questions)
        .select('id')

    if (error) return logErrorAndExit('Interview questions', error)

    logStep('Interview questions seeded successfully.')

    return data
}

const numEntriesPerTable = 10

await seedResources(numEntriesPerTable)
await seedInterviewQuestions(numEntriesPerTable)
