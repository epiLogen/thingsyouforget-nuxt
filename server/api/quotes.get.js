import Quote from '../db/models/Quote'

export default defineEventHandler(async (event) => {
    console.log('quotes requested');
    try {
        const quotes = await Quote.find()
        return quotes
    } catch (error) {
        return error
    }
})