const movieList = [
    "The Godfather: Part II",
    "The Godfather: Part III",
    "The Shawshank Redemption",
    "The Dark Knight Rises",
    "Star Wars: Episode V - The Empire Strikes Back",
    "Star Wars: Episode VI - Return of the Jedi",
    "The Lord of the Rings: The Two Towers",
    "The Lord of the Rings: The Return of the King",
    "The Hobbit: An Unexpected Journey",
    "The Hobbit: The Desolation of Smaug",
    "The Hobbit: The Battle of the Five Armies",
    "The Matrix Reloaded",
    "The Matrix Revolutions",
    "Jurassic World",
    "Titanic",
    "Avatar 2",
    "Inception",
    "Interstellar",
    "Gravity",
    "The Martian",
    "The Revenant",
    "Pulp Fiction",
    "Fight Club",
    "Reservoir Dogs",
    "Kill Bill: Vol. 1",
    "Kill Bill: Vol. 2",
    "Django Unchained",
    "Inglourious Basterds",
    "Goodfellas",
    "The Silence of the Lambs",
    "Hannibal",
    "Red Dragon",
    "Schindler's List",
    "Saving Private Ryan",
    "The Green Mile",
    "The Lion King",
    "Aladdin (2019)",
    "Beauty and the Beast (2017)",
    "Cinderella (2015)",
    "Toy Story 2",
    "Toy Story 3",
    "Toy Story 4",
    "Finding Dory",
    "Inside Out",
    "Coco",
    "Moana",
    "The Incredibles 2",
    "Ratatouille",
    "Monsters, Inc.",
    "Monsters University",
    "WALL-E",
    "Brave",
    "The Princess and the Frog",
    "Tangled",
    "Frozen",
    "Frozen 2",
    "Zootopia",
    "Big Hero 6",
    "Up",
    "The Jungle Book (2016)",
    "Mary Poppins Returns",
    "Back to the Future Part II",
    "Back to the Future Part III",
    "Ghostbusters (2016)",
    "Indiana Jones and the Temple of Doom",
    "Indiana Jones and the Last Crusade",
    "E.T. the Extra-Terrestrial",
    "The Terminator 2: Judgment Day",
    "The Terminator 3: Rise of the Machines",
    "Terminator: Genisys",
    "Die Hard 2",
    "Die Hard with a Vengeance",
    "Live Free or Die Hard",
    "A Good Day to Die Hard",
    "Creed",
    "Rocky II",
    "Rocky III",
    "Rocky IV",
    "Rocky Balboa",
    "Jaws 2",
    "Top Gun: Maverick",
    "The Breakfast Club",
    "Ferris Bueller's Day Off",
    "Sixteen Candles",
    "Pretty in Pink",
    "The Outsiders",
    "Dirty Dancing: Havana Nights",
    "Footloose (2011)",
    "Grease 2",
    "The Karate Kid (2010)",
    "Mean Girls",
    "Clueless",
    "10 Things I Hate About You",
    "Bring It On",
    "She's the Man",
    "Pitch Perfect",
    "Easy A",
    "The Devil Wears Prada",
    "Bridget Jones's Diary",
    "Miss Congeniality",
    "The Princess Diaries",
    "The Princess Diaries 2: Royal Engagement",
    "13 Going on 30",
    "How to Lose a Guy in 10 Days",
    "The Notebook",
    "The Fault in Our Stars",
    "A Walk to Remember",
    "Twilight",
    "The Hunger Games",
    
  ];
  
  function getRandomMovie() {
    const movie = document.getElementById("movie");
    const randomIndex = Math.floor(Math.random() * movieList.length);
    const randomMovie = movieList[randomIndex];
    movie.textContent = randomMovie;
  }