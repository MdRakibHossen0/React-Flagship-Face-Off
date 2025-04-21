import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";
import { IoMdCart } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import { addFavorite } from "../utilitis";


const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};
  const handleFavorite=()=>{
   addFavorite(singlePhone)
  }

  return (
    <div className="w-full py-12">
      <img
        src={image}
        alt="banner Image"
        className="w-full mx-auto md:w-auto mb-8"
      />
      {/* title and buttons */}
      <div className="flex justify-between ">
        <h1 className="text-6xl font-thin mb-8">{name}</h1>
        <div className="space-x-3">
          <Button label={<IoMdCart size={25} />}></Button>
          <Button
            onClick={handleFavorite}
            label={<MdBookmarkAdd size={25} />}
          ></Button>
        </div>
      </div>
      {/* Details */}
      <div></div>
    </div>
  );
};

export default PhoneDetails;
