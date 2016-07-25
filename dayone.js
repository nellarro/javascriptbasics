const pickles = "Hello, World! "

const oranges = "This is a seperate string"

let x = 8

console.log(pickles + x)

const favorites = ["A Song of Ice and Fire",
"The Sound of Music", "Up", "Forrest Gump"]

const info = {Name: "Jenell Pizarro", eyes: "brown", hair: "yes", shoes: "heels"}

const movies = ["Avatar", "The Little Mermaid", "Into the Woods", "The Secret Life of Pets"]

const description = [
  {title: "Avatar", year: "don't care", rating: "all"},

  {title: "The Little Mermaid", year: "like when I was 2", rating:"nifty"},

  {title:"Into the Woods", year: "no idea", rating: "Meryl Streep"},

  {title: "The Secret Life of Pets", year: "stuff", rating:"super cute"}
]

console.log(description[2])

const answer8 = description[2];

let arrayLength = description.length

for ( i=2; i < arrayLength; i++) {
  console.log(description[2].title);
  i++
}

for ( i = 4; i <= arrayLength; i++) {
  console.log(movies)
}

for ( i = 3; i <= arrayLength; i++) {
  console.log(info);
  i++
}
