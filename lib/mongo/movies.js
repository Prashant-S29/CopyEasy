import clientPromise from ".";

let client
let database
let movies

async function init() {
    if (database) return
    try {
        client = await clientPromise
        database = await client.db('sample_mflix')
        movies = await database.collection('movies')
    } catch (error) {
        throw new Error("Failed to establish connection")
    }
}
; (async () => {
    await init()
})()

// MOVIES
export async function getMovies() {
    try {
        if (!movies) await init()
        const result = await movies
            .find({})
            // .limit(50)
            .map(user => ({ ...user, _id: user._id.toString() }))
            .toArray()

        return { movies: result }
    } catch (error) {
        return { error: "failed to fetch movies" }
    }

}