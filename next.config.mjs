/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sellerapi.techdino.in',
                port: '',
                pathname: '/uploads/**',
                search: '',
            },
        ],
    }
};

export default nextConfig;
