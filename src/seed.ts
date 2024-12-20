import { faker } from "@faker-js/faker"
import { Payload as Payload_Type } from "payload"
import payload from "payload"
import config from "@payload-config"

export const seed = async (payload: Payload_Type): Promise<void> => {
  payload.logger.info('Seeding data...')
  // seeding users data
  for (let i = 0; i < 5; i++) {
    await payload.create({
      collection: 'users',
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        role: "stadium_owner",
        password: faker.internet.password(),
      },
    })
  }
  for (let i = 0; i < 5; i++) {
    await payload.create({
      collection: 'stadiums',
      data: {
        name: faker.location.city().split(" ")[0] + " Stadium",
        owner: await randomUser(payload),
        location: {
          address: faker.location.streetAddress(),
          coordinates: [faker.location.latitude(), faker.location.longitude()],
        },
        hourlyRate: Number(faker.finance.amount({ min: 10, max: 100 }))
      },
    })
  }
  payload.logger.info('Data seeded successfully')
}
async function randomUser(payload: Payload_Type) {
  const users = await payload.find({
    collection: 'users',
    limit: 5,
  })
  return Math.floor(Math.random() * users.docs.length)
}
const payloadx = await payload.init({
  config,
})
seed(payloadx)
