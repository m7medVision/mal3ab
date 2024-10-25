import { StadiumCardComponent } from "@/components/stadium-card";
import { getPayloadHMR } from "@payloadcms/next/utilities"
import config from "@payload-config"
export default async function Page() {
  const payload = await getPayloadHMR({ config })
  const stadiums = await payload.find({
    collection: 'stadiums',
    limit: 20,
  })
  return (
    <div className="mx-auto w-5/6">
      <h1 className="text-4xl font-bold pt-10 pb-2">Book a Stadium</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          stadiums.docs.map((stadium) => {
            return (
              <StadiumCardComponent
                key={stadium.id}
                id={stadium.id}
                name={stadium.name}
                location={stadium.location.address}
                images={[]}
                price={stadium.hourlyRate}
              />
            )
          }
          )
        }
      </div>
    </div>
  )
}


