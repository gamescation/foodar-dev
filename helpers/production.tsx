export function isProduction() {
    if (process.env.NODE_ENV === 'production' || process.env.PRODUCTION) {
        return true;
    }

    return false;
}