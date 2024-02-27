import "./App.css";
import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import Footer from "./Components/Footer";
import Data from "./Components/Data";
function App() {
  const [progress, setProgress] = useState(0);
  const [mname, setMname] = useState(" ");
  const [result, setResult] = useState([
    {
      genre: ["Action", "Comedy", "Thriller"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BMWMzYWE2NDgtN2JiMy00MTZlLWJhODktYzBmMDg4NjUwYTYxXkEyXkFqcGdeQXVyNTM1Mzk2ODI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt6244266",
      imdbrating: 7.8,
      released: 2020,
      synopsis:
        "Two days after the 2016 U.S. Presidential Election, a young careerist is abducted by an at-large intelligence operative carrying a mysterious briefcase, while being hotly pursued by a driven agency director and her dull-witted team.",
      title: "Counterintelligence",
      type: "movie",
    },
    {
      genre: ["Action", "Thriller"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BMmUyYTU5MjItMGNhOC00ZGFhLTkwYjctMjBmNTlkOTIzYmM1XkEyXkFqcGdeQXVyOTUyOTM3MDc@._V1_UY268_CR110,0,182,268_AL_.jpg",
      ],
      imdbid: "tt9286908",
      imdbrating: 7.6,
      released: 2020,
      synopsis:
        "In a bid to save the last of his family, Gutjuk, a young Aboriginal man, teams up with ex-soldier Travis to track down Baywara, the most dangerous warrior in the Territory, his uncle.",
      title: "High Ground",
      type: "movie",
    },
    {
      genre: ["Action", "Adventure", "Animation"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt9580138",
      imdbrating: 7.5,
      released: 2020,
      synopsis:
        "Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.",
      title: "Mortal Kombat Legends: Scorpion's Revenge",
      type: "movie",
    },
    {
      genre: ["Action"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BMjM5NjY3ODU5Nl5BMl5BanBnXkFtZTgwMDQ0NjEzNTE@._V1_UY268_CR3,0,182,268_AL_.jpg",
      ],
      imdbid: "tt2766800",
      imdbrating: 7.4,
      released: 2020,
      synopsis:
        "The life of Grainne Uaile, the 16th century Pirate Queen from Ireland.",
      title: "Grainne Uaile: The Movie",
      type: "movie",
    },
    {
      genre: ["Action"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BZjA3YmI2YzgtYzkzNi00MTM1LWJhNTAtZjg0ZDQyYjliYzMyXkEyXkFqcGdeQXVyMzM0OTc4NQ@@._V1_UY268_CR16,0,182,268_AL_.jpg",
      ],
      imdbid: "tt5518714",
      imdbrating: 7.4,
      released: 2020,
      synopsis:
        "Ratnik, is the story of a World War III soldier returning home after a quarterly phase rotation programme, only to find out that her home front has now descended into some kind of chaos. ...",
      title: "Ratnik",
      type: "movie",
    },
    {
      genre: ["Action", "Comedy"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BZDk4ZDM0YmQtOTRjMC00MmYyLTgyZjAtNzE3YzVhZWM3MmMzXkEyXkFqcGdeQXVyMTEyOTgxMDA5._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt11690838",
      imdbrating: 7.3,
      released: 2020,
      synopsis:
        "Fritz, a young Tongan man grappling with his wrestling superstar father Baron To'a's legacy, both metaphorically and literally following in his deceased father's footsteps by fighting for the return of his dad's stolen championship belt.",
      title: "The Legend of Baron To'a",
      type: "movie",
    },
    {
      genre: ["Action", "Sci-Fi", "Thriller"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BMjlkZTJjMDQtMzI1My00YmViLWE0M2ItZTEwMzk1NDhlNDkwXkEyXkFqcGdeQXVyMzgxODI0MTk@._V1_UY268_CR1,0,182,268_AL_.jpg",
      ],
      imdbid: "tt7638348",
      imdbrating: 7.2,
      released: 2020,
      synopsis:
        "A retired special forces officer is trapped in a never ending time loop on the day of his death.",
      title: "Boss Level",
      type: "movie",
    },
    {
      genre: ["Action"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BOTlkOTk1ZGQtMDM0Yi00OTQ5LWE3MDEtOGMxMTg3YjEwOTIyXkEyXkFqcGdeQXVyMjUxMzU3MTM@._V1_UY268_CR10,0,182,268_AL_.jpg",
      ],
      imdbid: "tt6984230",
      imdbrating: 7.2,
      released: 2020,
      synopsis:
        "Top special agent Lucinda Kavsky works for a secret part of the CIA. She's given a special assignment but then set up by her own agency.",
      title: "The Serpent",
      type: "movie",
    },
    {
      genre: ["Action", "Horror"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BNGNhZTk5M2MtMzUzYy00NmZkLTljZmItZTU5MDU4Y2M0N2I4XkEyXkFqcGdeQXVyMjM1NTY3Njk@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt5654204",
      imdbrating: 7.2,
      released: 2020,
      synopsis:
        "A romantic spring getaway turns sinister when unexpected visitors join the party in a high-tech house that no one can escape.",
      title: "#Slaughterhouse",
      type: "movie",
    },
    {
      genre: ["Action", "Adventure", "Drama"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BMDdiM2UwYTctYmRlZi00YmE4LTlhZTAtODhmYjFiMGFlMDcyXkEyXkFqcGdeQXVyMTQ2OTU2OTQ@._V1_UY268_CR5,0,182,268_AL_.jpg",
      ],
      imdbid: "tt3380766",
      imdbrating: 7.2,
      released: 2020,
      synopsis:
        "King's Gambit is an Independent, live-action feature film set in present-day Florida about Bryce, a man who uses a mystic journal to alter the world around him.",
      title: "King's Gambit",
      type: "movie",
    },
    {
      genre: ["Action", "Drama", "History"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BZTFkZjYxNWItZmE2MC00MGE4LWIxYTgtZmIzOWM1YmI2YWEzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt6048922",
      imdbrating: 7.1,
      released: 2020,
      synopsis:
        "Early in World War II, an inexperienced U.S. Navy captain must lead an Allied convoy being stalked by Nazi U-boat wolfpacks.",
      title: "Greyhound",
      type: "movie",
    },
    {
      genre: ["Action", "Horror", "Thriller"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BODAzZDc2NGEtODZmMS00YWE5LWIxZmEtZWRiMzI1MzgwNjVmXkEyXkFqcGdeQXVyOTA2OTEwNA@@._V1_UY268_CR4,0,182,268_AL_.jpg",
      ],
      imdbid: "tt10126136",
      imdbrating: 7.1,
      released: 2020,
      synopsis:
        "Elite military personnel Caitlin Ross retires from service after suffering from PTSD. Along with former team member and close friend Brad Johnson, they opted for the 'easy life' and now ...",
      title: "Tribal Get Out Alive",
      type: "movie",
    },
    {
      genre: ["Action", "Comedy", "Mystery"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BOTdhMDY2OWQtZDBjOC00ZTJiLTkzMTktODA3MDJkMTJkOGJkXkEyXkFqcGdeQXVyNjkzMzA2Njk@._V1_UY268_CR5,0,182,268_AL_.jpg",
      ],
      imdbid: "tt10370822",
      imdbrating: 7.1,
      released: 2020,
      synopsis:
        "A major crime occurs in Tokyo when detectives Tang Ren and Qin Feng are invited to investigate the crime by Noda Hiroshi. A battle between the strongest detectives in Asia is about to break out with bursts of laughter.",
      title: "Detective Chinatown 3",
      type: "movie",
    },
    {
      genre: ["Action", "Drama", "Thriller"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BYTA3MDRlMzgtM2RjMS00MTgwLTgyNzktNmVhN2M2OGQwODg0XkEyXkFqcGdeQXVyMzcwMjQzMw@@._V1_UY268_CR9,0,182,268_AL_.jpg",
      ],
      imdbid: "tt10820008",
      imdbrating: 6.9,
      released: 2020,
      synopsis:
        "An idealistic woman is kidnapped and forced to compete in an underground fight ring. Every night is a fight for her life as she plans to overthrow her captors and save the lives of many others doomed to the same endless cycle.",
      title: "Unchained",
      type: "movie",
    },
    {
      genre: ["Action", "Horror", "Sport"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BOTE3MzRkODctZjJmNi00NTI1LTk3NmItZTMxNzg2NWJkZDBiXkEyXkFqcGdeQXVyNjQyNjgwNjU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt7397552",
      imdbrating: 6.8,
      released: 2020,
      synopsis: "",
      title: "Adrenaline Rush",
      type: "movie",
    },
    {
      genre: ["Action"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BMjllMzgyMWQtMWM1Mi00OGQyLThlYjItNTJjNzE0ZWVhMjRmXkEyXkFqcGdeQXVyMTExMjM4OTQ@._V1_UY268_CR110,0,182,268_AL_.jpg",
      ],
      imdbid: "tt8365306",
      imdbrating: 6.8,
      released: 2020,
      synopsis:
        "An ex-convict released from prison comes to the aid of a young prostitute from a gang. He has one day to stay out of trouble before he leaves to start his new life. As events accelerate out...",
      title: "Relentless",
      type: "movie",
    },
    {
      genre: ["Action", "Thriller"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt8936646",
      imdbrating: 6.7,
      released: 2020,
      synopsis:
        "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
      title: "Extraction",
      type: "movie",
    },
    {
      genre: ["Action", "Thriller"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt7737786",
      imdbrating: 6.7,
      released: 2020,
      synopsis:
        "A family struggles for survival in the face of a cataclysmic natural disaster.",
      title: "Greenland",
      type: "movie",
    },
    {
      genre: ["Action", "Adventure", "Fantasy"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt7556122",
      imdbrating: 6.7,
      released: 2020,
      synopsis:
        "A covert team of immortal mercenaries are suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.",
      title: "The Old Guard",
      type: "movie",
    },
    {
      genre: ["Action"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BOGMxNDZmYzQtMTE5Ny00NDAxLWE0OTYtMjVhODcwMWViN2MxXkEyXkFqcGdeQXVyMjYwODI4Mw@@._V1_UY268_CR4,0,182,268_AL_.jpg",
      ],
      imdbid: "tt6458744",
      imdbrating: 6.7,
      released: 2020,
      synopsis:
        "'In the year 2035, survivors of a now almost completely evacuated post-apocalyptic Britain compete for a government bounty to retrieve a mysterious bio weapon known only as Unit Eleven...'",
      title: "Unit Eleven",
      type: "movie",
    },
    {
      genre: ["Action", "Drama", "History"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BNWYyMzNjY2EtODVmYi00ODBmLWIyNGMtNDdhMGViY2RhNjcxXkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt3833480",
      imdbrating: 6.7,
      released: 2020,
      synopsis:
        "A small team of U.S. soldiers battle against hundreds of Taliban fighters in Afghanistan.",
      title: "The Outpost",
      type: "movie",
    },
    {
      genre: ["Action", "Drama", "Thriller"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BNmZkNmU3ODItNWE1Yi00ZDA4LTk1M2EtMDlkOGQ3YTk0ZmIzXkEyXkFqcGdeQXVyMTM5MjI4Mjc@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt8332454",
      imdbrating: 6.6,
      released: 2020,
      synopsis:
        "A small town community comes together to eradicate the heroin epidemic from its midst by whatever means necessary.",
      title: "Shooting Heroin",
      type: "movie",
    },
    {
      genre: ["Action", "Comedy", "Crime"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt1502397",
      imdbrating: 6.6,
      released: 2020,
      synopsis:
        "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
      title: "Bad Boys for Life",
      type: "movie",
    },
    {
      genre: ["Action", "Adventure", "Comedy"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt3794354",
      imdbrating: 6.6,
      released: 2020,
      synopsis:
        "After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him.",
      title: "Sonic the Hedgehog",
      type: "movie",
    },
    {
      genre: ["Action", "Horror", "Thriller"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BNjg4MjRhZjgtNTIxOS00MmRjLTg4NTEtNjBkNzkwZjAxMjMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt8244784",
      imdbrating: 6.5,
      released: 2020,
      synopsis:
        "Twelve strangers wake up in a clearing. They don't know where they are, or how they got there. They don't know they've been chosen - for a very specific purpose - The Hunt.",
      title: "The Hunt",
      type: "movie",
    },
    {
      genre: ["Action", "Comedy"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BZjk0ZTk4OTQtYWYyZC00MTU5LTkxMjQtZDRlYjRkN2Y3ZjA5XkEyXkFqcGdeQXVyOTA1MDE3OA@@._V1_UY268_CR4,0,182,268_AL_.jpg",
      ],
      imdbid: "tt11041352",
      imdbrating: 6.5,
      released: 2020,
      synopsis:
        "An American action star from the 90's is shooting a movie in Bulgaria, while three of his (now grown up) fans try to meet their childhood idol. After a series of bad decisions, the three ...",
      title: "Action",
      type: "movie",
    },
    {
      genre: ["Action", "Adventure", "Animation"],
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BZWY2MDEzNjYtOWVlMC00MGYzLWFhNjUtMTAzZTQ4MmQ3N2U4XkEyXkFqcGdeQXVyOTMwNjU3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      imdbid: "tt10841384",
      imdbrating: 6.4,
      released: 2020,
      synopsis:
        "A group of brave superheroes has to come together to save the multiverse from evil terrorist birds.",
      title: "The Forevers",
      type: "movie",
    },
  ]);
  async function show() {
    setProgress(progress + 20);
    const url = `https://ott-details.p.rapidapi.com/search?title=${mname}&page=1`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a24b43d1b0msh4f4c3b3a4bff806p170dd1jsn76ad1cdc7293",
        "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
      },
    };
    setProgress(progress + 60);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setResult(result.results);
      setProgress(100);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <div className="py-5 px-2 md:p-5 bg-purple-500 flex">
        <div className="w-full">
          <div className="justify-start text-xl float-left md:text-2xl font-serif text-blue-600 font-bold pt-1">
            Movies
          </div>
          <div className="bg-white float-right p-1 rounded-lg border-2 border-blue-700">
            <input
              className="rounded-lg w-40 outline-none px-3 font-serif"
              type="text"
              required
              placeholder="Movie name"
              onChange={(e) => {
                setMname(e.target.value);
              }}
            />
            <button
              value="Search"
              className="bg-blue-700 rounded-md px-2 font-serif text-white float-right font-bold"
              onClick={() => show()}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <LoadingBar
        className="w-3 mt-[76px]"
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Data result={result} />
      <Footer />
    </div>
  );
}

export default App;
