//lec 30 filter map and reduce in js

let languages = ["CPP", "JS", "python", "html", "rust", "swift"];

const result = languages.forEach((item) => {
  console.log(item);
  return item;
}); //doesnot return any thing //shows output as undefined

console.log(result); //undefined
//* foreach koi value return ni krta humay ya chahiye hota k jaisy even ho to return kry etc to kia */

// filter number py achy smjh ata hy , filter my arroe funtion use krty hy, or ya value return krta hy

const arr = [1, 2, 3, 4, , 5, 6, 7, 8, , 9, 10];
// const RESULT = arr.filter((num)=>(num >= 5))//if use () then no need to use return keyword
const RESULT = arr.filter((num) => {
  return num >= 5;
}); //if use  { scope} then return keyword is must
console.log(RESULT);

// example
const anime =[
  {
    "name": "Naruto",
    "start_year": 2002,
    "end_year": 2007,
    "genres": ["Action", "Adventure", "Shounen"]
  },
  {
    "name": "Attack on Titan",
    "start_year": 2013,
    "end_year": 2023,
    "genres": ["Action", "Drama", "Fantasy"]
  },
  {
    "name": "Death Note",
    "start_year": 2006,
    "end_year": 2007,
    "genres": ["Mystery", "Psychological", "Thriller"]
  },
  {
    "name": "One Piece",
    "start_year": 1999,
    "end_year": null,
    "genres": ["Action", "Adventure", "Fantasy"]
  },
  {
    "name": "Jujutsu Kaisen",
    "start_year": 2020,
    "end_year": null,
    "genres": ["Action", "Supernatural", "Shounen"]
  },
  {
    "name": "Demon Slayer",
    "start_year": 2019,
    "end_year": 2024,
    "genres": ["Action", "Supernatural", "Historical"]
  },
  {
    "name": "My Hero Academia",
    "start_year": 2016,
    "end_year": null,
    "genres": ["Action", "Comedy", "Superhero"]
  },
  {
    "name": "Fullmetal Alchemist: Brotherhood",
    "start_year": 2009,
    "end_year": 2010,
    "genres": ["Action", "Adventure", "Fantasy"]
  }
]
let useranime = anime.filter((gn) => (gn.genres.includes("Adventure") ));
useranime = anime.filter((year)=> { return year.start_year >2000;})
console.log(useranime);
