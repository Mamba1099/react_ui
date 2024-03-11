import {useState} from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phale",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image:
        "https://imgs.search.brave.com/gbc2ofJ-b2DbZBvCLUSHDMav4kxuD24vW_HQiBTOg48/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNXNqWUQy/djJXY2lTS3FlbUh5/RTRyMC9jMGJhNWEx/ODkxMTYzZGM4YmJj/NzM1NjExMWNhODM4/Yy9FYXN0ZXJfVGh1/bWJuYWlsLmpwZw",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }
  function handleTitleChange(e) {
    setPerson({
      ...person,
      title: e.target.value,
    });
  }
  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }
  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <br />
      <label>
        image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <br />
      <p>
        <i>{person.artwork.title}</i>
        {"by"}
        {person.name} <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title}  />
    </>
  );
}
