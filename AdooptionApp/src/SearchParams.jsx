import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import Pet from "./Pet"; here we dont need this anymore because we have imported the pets from the Results
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  // const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  // const [breed, setBreed] = useState("");
  // const breeds = [];
  // const [pets, setPets] = useState([]); // its an empty array to retrieve set of data from the api
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  // ***OLD CODE***
  //useEffect is to load data initially
  // useEffect(
  //   () => {
  //     requestPets();
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [
  //     /*animal, location*/
  //   ]
  // );

  // // here we are telling the API that everytime we change the animal and location the list of API should be updated
  // // after doing it like that we should move the requestPets() inside the use effect that what the Hooks wants us to do

  // async function requestPets() {
  //   // eslint-disable-next-line no-undef
  //   const res = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //   );
  //   const json = await res.json();

  //   setPets(json.pets);
  // }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // requestPets();

          // eslint-disable-next-line no-undef
          const formData = new FormData(e.target);// its a browser API
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            name="location"
            // value={location}
            placeholder="Location"
            // onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              // setBreed("");
            }}
            // onBlur={(e) => {
            //   setAnimal(e.target.value);
            //   setBreed("");
            // }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={breeds.length === 0}
            id="breed"
            name="breed"
            // value={breed}
            // onChange={(e) => setBreed(e.target.value)}
            // onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
