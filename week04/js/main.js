class Movie{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

}

const theMovie = new Movie("Stranger things", 2021);
document.getElementById('demo').innerHTML = theMovie.name + "-" + theMovie.year;
