import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { sql } from 'drizzle-orm' 
export default async function Page() {
  const payload = await getPayloadHMR({ config })
  // get parties that is public
  const parties = await payload.find({
    collection: 'party',
    where: {
      isPublic: {
        equals: true
      }
    }
  })
  // parties that ve 
  return (
    <div className="container mx-auto max-w-7xl px-4">
      <h1 className="text-4xl font-bold pt-10 pb-2 text-center">Book a Stadium</h1>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-end'>
          <NewPartyComp />
        </div>
        <PartyList />
      </div>
    </div>
  )
}

const NewPartyComp = () => {
  return (
    <Button className=""> Create New Party </Button>
  )
}

const PartyList = () => {
  const parties = [
    { id: 1, name: 'Party A', date: '2023-12-01', location: 'Location A' },
    { id: 2, name: 'Party B', date: '2023-12-05', location: 'Location B' },
    { id: 3, name: 'Party C', date: '2023-12-10', location: 'Location C' },
  ]

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {parties.map((party) => (
        <Card key={party.id} className="p-4">
          <h2 className="text-xl font-semibold">{party.name}</h2>
          <p className="text-sm text-gray-500">{party.date}</p>
          <p className="text-sm text-gray-500">{party.location}</p>
          <Button className="mt-4">Join Party</Button>
        </Card>
      ))}
    </div>
  )
}