const APIKEY = process.env.APIKEY;

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${APIKEY}&language=en-US`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${APIKEY}&language=en-US`
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${APIKEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: "comedy",
        url: `/discover/movie?api_key=${APIKEY}&with_genres=35`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/discover/movie?api_key=${APIKEY}&with_genres=28`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/discover/movie?api_key=${APIKEY}&with_genres=28`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/discover/movie?api_key=${APIKEY}&with_genres=28`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/discover/movie?api_key=${APIKEY}&with_genres=28`
    }
}