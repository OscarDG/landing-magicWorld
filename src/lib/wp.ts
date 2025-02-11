const domain = import.meta.env.WP_DOMAIN
const apiUrl = `${domain}/wp-json/wp/v2`

export const getPageInfo = async (slug: string) => {
    const response = await fetch(`${apiUrl}/pages?slug=${slug}`)
    
    if(!response.ok) throw new Error('Failed to fetch page info')
 
    const [data] = await response.json()
    const {title: {rendered: title }, content: {rendered: content}} = data

    return {title, content}
};

export const getPostSlug = async (slug: string) => {
    const response = await fetch(`${apiUrl}/posts?slug=${slug}`)
    
    if(!response.ok) throw new Error('Failed to fetch posts info')

    const [data] = await response.json()
    const { title: {rendered: title }, content: {rendered: content} } = data

    return {title, content}
}
