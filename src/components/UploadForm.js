import React from "react";

import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import "../App.css";
import { projectFirestore, storageRef } from "../Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

const UploadForm = () => {
  const [images, setImages] = useState([]);
  const storage = getStorage();

  async function getImage(url) {
    try {
      const downloadURL = await getDownloadURL(ref(storage, url));
      return downloadURL;
    } catch (error) {
      console.log("Error while fetching images", error);
    }
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(projectFirestore, "images")
        );
        const fetchedData = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const data = doc?.data();
            const imageURL = await getImage(data?.url);
            return {
              id: doc.id,
              imageURL,
              ...data,
            };
          })
        );
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  // console.log("Called", images);

  return (
    <div className="max-w-screen-[1440px] mx-auto top-2 p-1">
      <div className="p-2 m-2 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="items-center rounded-lg border  text-gray-950 p-4"
          >
            <img
              className="ronded-lg"
              src={item.imageURL}
              alt={`Image-${item.id}`}
            />
            {/* Additional content or styles can be added */}
            <div className="items-center text-gray-950 p-4">
              <div className="flex flex-wrap items-center">
                {item.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex bg-slate-100  items-center rounded-sm  p-2 m-2"
                  >
                    <p className="item-center ml-3  text-gray-600 font-helvetica-neue text-sm font-normal capitalize">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadForm;
