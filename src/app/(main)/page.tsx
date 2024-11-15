import { Button, buttonVariants } from '@/components/ui/button'
import WordRotate from '@/components/ui/word-rotate'
import Link from 'next/link'
import React from 'react'

export default async function Home() {
  return (
    <div className="h-screen bg-background flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          <span>Book a Stadium </span>
          <WordRotate words={['Today', 'Now', 'Right Now']} />
        </h1>
        <p className="text-lg mb-6">
          Connecting stadium owners and players for seamless booking and easier splits.
        </p>
        <div className="flex justify-center gap-2">
          <Button>List Your Stadium</Button>
          <Link href="/stadiums" className={buttonVariants({})}>
            Find a Stadium
          </Link>
        </div>
      </div>
    </div>
  )
}
