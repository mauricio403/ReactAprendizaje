import { heroes } from "../data/Heroes";

export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {

        throw new Error(`publisher "${publisher}" no es correcto`)  // con esta instruccion forzo un error
    }

    return heroes.filter(hero => hero.publisher === publisher)

}