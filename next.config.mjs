import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
    ],
  },
}

export default withPayload(nextConfig)
