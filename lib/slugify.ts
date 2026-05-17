export function makeSlug(school: string, program: string) {
    const raw = `${school} ${program}`.toLowerCase();
    return raw
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

export function slugFromString(s: string) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
