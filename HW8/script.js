class Slide {
    constructor(image, name, description, artist, year) {
        this.image = image;
        this.name = name;
        this.description = description;
        this.artist = artist;
        this.year = year;
    }
}

//image found at https://www.theguardian.com/environment/gallery/2023/nov/27/environmental-photographer-of-the-year-2023-in-pictures
var slide1 = new Slide(
    "media/hazmat.avif",
    "Recovering Nature - Slow Violence",
    "We're looking at biologist Laura Rosati who gathers and analyses plastics and microplastics in increasingly contaminated waters. This image is connecting to the science and research behind marine pollution. To see a scientist who studies the effect of microplastics on marine life collecting her samples in a full hazmat suit really highlights how dangerous microplastics are. The person who knows the most about the effects of this stuff feels the need to be in full hazmat gear.",
    "Fabrizio Maffei",
    "2022"
);

//The next 4 images found at https://oceanimagebank.theoceanagency.org/search-result?s=trash
var slide2 = new Slide(
    "media/fresh.jpg",
    "Paper Nautilas on piece of plastic pollution",
    "As the title suggests this is a Paper Nautilas next to a piece of plastic pollution. My favorite thing about this image is that the trash says 'Stay Fresh' on it as we see it deep in the ocean next to a creature that is so far from ourselves. This image is dripping with irony over the state of packaging and marketing.",
    "Liang Fu",
    "2018"
);

var slide3 = new Slide(
    "media/lid.jpg",
    "Coffee cup lid found littered in sand_New England",
    "A coffee cup lid partially submerged in the sand. Like an ancient treasure being unearthed by an archeologist. However instead of something of immense value, it is a cheap plastic lid of which millions upon millions exist around the world. This picture really gets me thinking about how imbedded and permanent our trash will become in this world.",
    "Brian Yurasits",
    "approx. 2021"
);

var slide4 = new Slide(
    "media/fish.jpg",
    "Juvenile fish swimming in plastic at the surface",
    "These poor fish in regions with high water pollution must feel like they're enduring through a post-apocalyptic waste land. This image does a really great job of establishing scale from the fish perspective. The plastic looks massive, like a crashed ship.  But when you analyze the trash, you see it's just some grocery bags and some cord, not very large objects at all. Something so inconsequential and trivial to us is gargantuan to the marine life.",
    "Naja Bertolt Jensen",
    "approx. 2020"
);

var slide5 = new Slide(
    "media/cleanup.jpg",
    "Beach cleanup in Bali, Indonesia",
    "It's always powerful to see people taking care of the environment, but this shows me just how rare it is. Seeing only 5 people here doing cleanup on such a vast beach makes me wish that beach was full of people there to help, but that's not the world we live in. Something about the composition of this photo speaks to the grimy aspects of this task while also still being rewarding. This image highlights the tough but fulfilling nature of this work.",
    "Vincent Kneefel",
    "approx. 2020"
);

var slides = [slide1, slide2, slide3, slide4, slide5];
var index = 1;
update();

function displaySlide(index) {
    var slide = slides[index];
    document.getElementById("slide-image").src = slide.image;
    document.getElementById("slide-image").alt = slide.name;
    document.getElementById("slide-title").innerHTML = slide.name;
    document.getElementById("slide-description").innerHTML = slide.description;
    document.getElementById("slide-artist-year").innerHTML = slide.artist + " - " + slide.year;
}

function getRandomIndex(currentIndex) {
    var randomIndex = Math.floor(Math.random() * slides.length);
    while(randomIndex == currentIndex){
        randomIndex = Math.floor(Math.random() * slides.length);
    }
    return randomIndex;
}

function update(){
    index = getRandomIndex(index);
    displaySlide(index);
}