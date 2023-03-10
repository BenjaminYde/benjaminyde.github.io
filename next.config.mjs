/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig   = {
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: isProd ? 'https://benjaminyde.github.io/' : undefined,
};

export default   nextConfig;