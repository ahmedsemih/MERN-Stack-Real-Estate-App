export default (text: string) => {
    let slug = text.toLowerCase();
    slug = slug.replace(/\s+/g, '-');
    return slug;
}