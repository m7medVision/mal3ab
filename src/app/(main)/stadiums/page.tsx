import { StadiumCardComponent } from "@/components/stadium-card";
import { faker } from "@faker-js/faker"
export default function Page() {
  return (
    <div className="mx-auto w-5/6">
      <h1 className="text-4xl font-bold pt-10 pb-2">Book a Stadium</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          Array.from({ length: 18 }).map((_, index) => (
            <StadiumCardComponent
              key={index}
              id={index}
              name={faker.company.name()}
              location={faker.address.streetAddress()}
              price={Number(faker.commerce.price())}
              images={["https://picsum.photos/1000/1000?random=1", "https://picsum.photos/1000/1000?random=2", "https://picsum.photos/1000/1000?random=3"]}
            />
          ))
        }
      </div>
    </div>
  )
}


