const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

export const searchVideos = async (param) => {
    const res = await fetch(`${BASE_URL}/${param}`,
        {method: 'GET',
        headers: {
            'x-rapidapi-key': '8ec80adfd8msha86defd6fa76f0ap148de1jsn5786301d60a2',
		    'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
    })

    const result = await res.json();
    return result;
}