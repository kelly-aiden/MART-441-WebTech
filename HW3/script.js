/* I wanted to give my old CS skills a whirl so I used indexing arrays for a couple of these sets of three */
let websites = ["Dropout.tv", "Depop.com", "dcuniverseinfinite.com"];
let games = ["Cocoon", "Horizon Zero Dawn", "Spikeball"];

console.log("My favorite websites are:");
for (let i = 0; i < websites.length; i++){
    console.log(websites[i]);
}
console.log("");
/* I use console.log("") to create a line break in the console log */

console.log("My favorite games are:")
for (let i = 0; i < 3; i++){
    console.log(games[i]);
}
console.log("");

console.log("A Tribe Called Quest was one of the most influential voices in 90's Hip Hop. They brought a unique level of jazz and funk to hip-hop and spoke to a lot of cultural heritage and social conciousness which was beginning to fade from hip-hop in the 90s as it became more mainstream. Ask any old school hip hop head and they know Tribe.");
console.log("Jean Michael Basquiat is my favorite painter of all time. Basquiat brought street art and African American culture to prestigous art circles in a way never done before. As any great painter, he pushed the boundaries of what was considered good art. He brought the topics of race, social justice, and marganilazation to the gallery world in a big way.");
console.log("Stevie Wonder, what more do I have to say. He helped pioneer electronic instruments in music, broke so many racial barriers in the music industry, spoke to poverty, peace, and racism in his music, influenced more people than I can comprehend, and just made some of the best music ever.");
console.log("");

let answer = prompt("Who is your favorite painter?");
console.log("Wow! " + answer + " is such a great choice!");