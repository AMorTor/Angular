interface AudioPlayer{
    audioVlolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVlolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = "new song";
const {song:anotherSong, songDuration: duration, details: {author}} = audioPlayer;
// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

/*  Destructuring arrays */
const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];

console.error('Personaje 3: ', trunks);