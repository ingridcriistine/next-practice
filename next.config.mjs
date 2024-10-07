/** @type {import('next').NextConfig} */

const nextConfig = {

    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/login"
            },
            {
                source: "/inicio",
                destination: "/home"
            },
            {
                source: "/cartoes",
                destination: "/cards"
            }
        ]
    }
};

export default nextConfig;
