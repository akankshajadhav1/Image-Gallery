import { listAll, list, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import "../App.css";
import { storageRef } from "../Firebase/Firebase";
import Header from "./Header";
import Search from "./Search";

const Home = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      try {
        const itemRefs = await listAll(storageRef);
        const promises = itemRefs.items.map((item) => getDownloadURL(item));

        // Wait for all promises to be resolved
        const data = await Promise.all(promises);
        setImages(data);
      } catch (error) {
        console.log("Error while fetching images", error);
      }
    };

    getImages();
  }, []);

  console.log("Called", images);

  return (
    <div
      className="h-screen w-full bg-cover bg-top  bg-no-repeat relative"
      style={{ backgroundColor: "lightgray" }}
    >
      <div
        className="bgpage absolute inset-0"
        style={{ backgroundSize: "cover" }}
      >
        <div>
          <Header />
        </div>
        <div className="text-white text-center text-shadow font-euclid-circular-b text-4xl md:text-5xl lg:text-7xl font-bold leading-9 md:leading-10 top-22 m-4 md:m-10 p-4 md:p-20">
          <p>
            Discover over 2,000,000
            <p className="md:m-6"> free Stock Images</p>
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Search />
        </div>
        <div className="flex items-center justify-center mt-4 md:mt-8">
          <div className="rounded-md text-[13.359px] text-white shadow-inner-md border font-euclid-circular w-80 text-center border-white shadow-lg">
            <p className="w-400">
              <span className="w-[900] font-semibold">Trending:</span> flowers,
              love, forest, river
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
