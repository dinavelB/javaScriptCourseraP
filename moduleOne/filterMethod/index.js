const ratings = [4,10,6,5,4,3,6,7,8]


    //a shortcut fucntion uses a filter method in array and the name of the function is theRatings.
    //make the code shorter it can ever be
    const theRatings = ratings.filter(rates => rates > 5 ? rates: console.log()) //one line
    
    //const theRatings = ratings.filter((rates) => {}) this is how you make a shorthand function with multiple blocks of code.

    const evenNumbers =  ratings.filter((numbers) =>{
        const result = numbers % 2 === 0
        return result;
    })

     const oddNumbers =  ratings.filter((numbers) =>{
        const evenNums = numbers % 2 === 0
        return !evenNums; //you can negate the returning value also.
    })

    //tasK: you need to filter a movie based on their ratings:
    
    const theMovies = [{
        movieName: 'Breaking Bad',
        ratings: 10
    },
    {
        movieName: 'Minecraft',
        ratings: 5
    }]

    function addMovies (movieName, ratings){
        const movies = {
            movieName,
            ratings
        }
        theMovies.push(movies)
    }
    addMovies('Harry Potter', 9);

    const goodMovies = theMovies.filter((obj) => {
        const result = obj.rating > 1? obj : ''
        return result;
    })

console.log(goodMovies);