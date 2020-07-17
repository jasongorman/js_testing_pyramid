const Pricer = require('./pricer');

class Rental {
    id;
    title;
    price;

    constructor(imdbId) {
        this.id = imdbId;
        const movie = new Pricer().price(imdbId);
        this.title = movie.title;
        this.price = movie.price;
    }
}

module.exports = Rental;