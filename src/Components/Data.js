import React from "react";
import "../App.css";
import noresult from "../noresult.png";
export default function Data(props) {
  return (
    <div className="flex justify-center flex-wrap gap-4 lg:gap-x-8 p-3 h-full">
      {props.result === undefined ? (
        " "
      ) : props.result.length === 0 ? (
        <img src={noresult} alt="" />
      ) : (
        props.result.map((e) => {
          return !e.imageurl ? (
            ""
          ) : (
            <div
              key={e.imdbid}
              className="aryan w-full sm:w-56 md:w-72 lg:w-80 border border-slate-300 h-[60vh] lg:h-[60vh] overflow-hidden rounded-md shadow-md cursor-pointer relative"
            >
              <div>
                <img className="w-full absolute" src={e.imageurl} alt="" />
                <h1
                  className="absolute text-stone-300 font-bold bottom-0  text-xl w-full p-2
                  items-center transform rounded-md transition-transform bg-purple-500"
                >
                  {e.title}
                </h1>
              </div>
              <div className="w-full h-full relative sachin">
                <div className="absolute bottom-0 bg-purple-400 rounded-t-2xl p-3 w-full">
                  <h1 className="font-bold font-serif text-slate-200 text-lg">
                    Description:
                  </h1>
                  <p>
                    {!e.synopsis
                      ? "Description Not Avaialable of this content"
                      : e.synopsis}
                  </p>
                  <h1 className="font-bold font-serif text-slate-200 text-lg">
                    Release Year:
                  </h1>
                  <p>{e.released}</p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
