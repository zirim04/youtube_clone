const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

export const searchVideos = (query) => {
    const res = fetch(`${BASE_URL}/${query}`,
        {method: 'GET',
        headers: {
            'x-rapidapi-key': '8ec80adfd8msha86defd6fa76f0ap148de1jsn5786301d60a2',
		    'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
    })

    const result = res.json();
    return result;
}