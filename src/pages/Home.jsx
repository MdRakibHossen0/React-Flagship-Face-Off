import React, { useState } from "react";
import Hero from "../components/Hero";
import PhonesContainer from "../components/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const [phones, setPhones] = useState(data);
  const handleSearch = (e, text) => {
    e.preventDefault();
    // console.log(e,text.toLowerCase())
    if (text === "") return setPhones(data);
    const searchedPhones = data.filter((phone) => {
        // console.log(phone.name.toLowerCase().split(" "));
        // console.log(
        //   phone.name.toLowerCase().split(" ").includes(text.toLowerCase())
        // );
     return (
       text
         .toLowerCase()
         .split(" ")
         .every((word) => phone.name.toLowerCase().split(" ").includes(word)) ||
       text
         .toLowerCase()
         .split(" ")
         .every((word) => phone.brand.toLowerCase().split(" ").includes(word))
     );
    });
    // console.log(data);
    // console.log(searchedPhones);
    setPhones(searchedPhones); // update filtered list
  };

  return (
    <div>
      <Hero handleSearch={handleSearch} />
      <PhonesContainer phones={phones} />
    </div>
  );
};

export default Home;
