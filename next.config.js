/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: { styledComponents: true, },
    images: {
        domains: ["localhost"],
    },
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
    },
}

module.exports = nextConfig
