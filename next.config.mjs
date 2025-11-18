/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // ✅ Ajoute cette ligne pour les images locales
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.pravatar.cc",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "github.com",
            },
            {
                protocol: "https",
                hostname: "youtu.be",
            }
        ],
    },
};

export default nextConfig;