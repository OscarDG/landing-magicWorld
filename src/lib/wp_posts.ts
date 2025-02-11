const domain = import.meta.env.WP_DOMAIN
const apiUrl = `${domain}/wp-json/wp/v2`


export const getPostsInfo = async ({perPage= 10}: {perPage?: number} = {}) => {
    const response = await fetch(`${apiUrl}/posts?per_page=${perPage}&_embed`)

    if(!response.ok) throw new Error('Failed to fetch posts info')

    const results = await response.json()
    if(!results.length) throw new Error("No posts found")

    const posts = results.map(post => {
        const { title: {rendered: title},
        excerpt: {rendered: excerpt},
        content: {rendered: content},
        date,
        slug,
        categories,
        link
    } = post

    const featuredImage = post._embedded['wp:featuredmedia'][0].source_url

    return {title, excerpt, content, date, slug, link, categories, featuredImage}

    })

    return posts
}

export const getAllPostSlugs = async () => {
    const response = await fetch(`${apiUrl}/posts?per_page=100`)
    if(!response.ok) throw new Error('Failed to fetch posts info')

    const results = await response.json()
    if(!results.length) throw new Error("No posts found")

    const slugs = results.map((post) => post.slug)
    console.log(slugs)
    return slugs
}
