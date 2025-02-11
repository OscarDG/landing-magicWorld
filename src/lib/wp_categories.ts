const domain = import.meta.env.WP_DOMAIN
const apiUrl = `${domain}/wp-json/wp/v2`

export const getAllCategories = async () => {
    const response = await fetch(`${apiUrl}/categories?per_page=100`)
    if(!response.ok) throw new Error('Failed to fetch posts info')

    const results = await response.json()
    if(!results.length) throw new Error("No categories found")
    
    return results
}