export interface Heroe {
    id: string,
    name: string,
    slug: string,
    powerstats: {
        intelligence: string,
        strength: string,
        speed: string,
        durability: string,
        power: string,
        combat: string
    },
    appearance: {
        gender: string,
        race: string,
        eyeColor: string,
        hairColor:string
      },
      biography: {
        fullName: string,
        alterEgos: string,
        placeOfBirth: string,
        firstAppearance: string,
        publisher: string,
        alignment: string
      },
      work: {
        occupation: string,
        base: string
      },
      connections: {
        groupAffiliation: string,
        relatives: string
      },
      images: {
        xs: string,
        sm: string,
        md: string,
        lg: string
      }
}
