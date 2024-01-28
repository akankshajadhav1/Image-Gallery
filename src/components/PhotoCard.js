import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import "../App.css";

const customStyles = {
  content: {
    height: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const PhotoCard = (props) => {
  const item = props.data || {};
  console.log("props.data:", props.data);
  return (
    <div>
      <Modal isOpen={props?.isOpen} close={props.close}>
        <div>
          <div className="rounded-lg bg-[#F5F5F5] backdrop-filter w-[1217.316px] md:w-[80%]  mx-auto backdrop-blur-md p-4 shadow-inner-md border border-white shadow-md m-10 flex items-center justify-between">
            <p className="items-center ml-3  text-[#3B4043] font-helvetica-neue text-sm font-normal capitalize">
              Preview ID:{item.userID}
            </p>

            <button
              className=" space-x-9 w-[19.63px]  h-[19.63px] ml-auto"
              onClick={props.close}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  d="M11.8451 20.3409L20.2303 11.9557M20.2303 20.3409L11.8451 11.9557M11.5933 30.9631H20.4822C27.8896 30.9631 30.8525 28.0002 30.8525 20.5928V11.7039C30.8525 4.29646 27.8896 1.3335 20.4822 1.3335H11.5933C4.18586 1.3335 1.2229 4.29646 1.2229 11.7039V20.5928C1.2229 28.0002 4.18586 30.9631 11.5933 30.9631Z"
                  stroke="#3B4043"
                  stroke-width="2.22138"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className=" rounded-lg border flex flex-wrap items-center  h-[579.26px] w-[217.316px] md:w-[100%]  md:h-[100%]  shadow-md  bg-white  text-gray-950 ">
            <div className="grid grid-cols-1">
              <img
                className="rounded-lg ml-3 w-[670.106px] h-[446.345px] md:w-[590px]  md:p-2 "
                src={item.imageURL}
                alt={`Image-${item.id}`}
              />
              <div className="ml-4 mt-5 flex flex-wrap items-center">
                Tags:
                {item.tags &&
                  item.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex bg-slate-100 items-center rounded-sm p-2 m-2"
                    >
                      <p className="item-center ml-3 text-gray-600 font-helvetica-neue text-sm font-normal capitalize">
                        {tag}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="grid grid-cols-1   gap-4 ml-24">
              <h3 className="ml-6 text-[#3B4043]  font-semibold text-[21.325px] top-0 font-euclid Circular B line-height-[51.447px]">
                Download
              </h3>
              <ul className="w-55 text-sm font-medium text-gray-900 bg-[#F5F5F5] border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center ps-3">
                    <label
                      for="vue-checkbox"
                      className="w-full py-3 ms-2 text-sm font-medium text-[#475467] dark:text-gray-300"
                    >
                      Small
                    </label>
                    <label
                      for="vue-checkbox"
                      className="w-full py-3 ms-2 text-sm font-medium dark:text-gray-300"
                    >
                      640x960
                    </label>
                    <input
                      id="vue-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4  mr-3 h-4 text-[#475467] bg-[#4BC34B] border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <label
                      for="react-checkbox"
                      className="w-full py-3 ms-2 text-sm font-medium text-[#475467] dark:text-gray-300"
                    >
                      Medium
                    </label>
                    <label
                      for="react-checkbox"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      1920x2660
                    </label>
                    <input
                      id="react-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4  mr-3 h-4 text-blue-600 bg-[#4BC34B] border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <label
                      for="angular-checkbox"
                      className="w-full py-3 ms-2 text-sm font-medium text-[#475467] dark:text-gray-300"
                    >
                      Original
                    </label>
                    <label
                      for="vue-checkbox"
                      className="w-full py-3 ms-2 text-sm font-medium   dark:text-gray-300"
                    >
                      2400x3600
                    </label>
                    <input
                      id="react-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4  mr-3 h-4 text-blue-600 bg-[#4BC34B] border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                </li>
              </ul>

              <button className="text-green-700 ml-4  font-bold bg-green-600 hover:bg-gray-300 text-center font-Euclid-Circular-B text-lg  tracking-tight leading-tight w-38 items-center h-7 flex-shrink-0">
                Download for free!
              </button>

              <h3 className="ml-6 text-[#3B4043] text-[21.325px] font-semibold  font-euclid Circular B line-height-[51.447px]">
                Information
              </h3>
              <div className=" capitalize items-center  grid grid-cols-3 w-[488.776px] gap-4 ml-24">
                <div className="font-euclid Circular B ">
                  <h3 className="text[#717579]">User</h3>
                  <p className="font-semibold">{item.user}</p>
                  <br></br>
                  <h3 className="text[#717579]">Views</h3>
                  <p className="font-semibold">{item.Views}</p>
                </div>

                <div>
                  <h3 className="text[#717579]">UserID</h3>
                  <p className="font-semibold">{item.userID}</p>
                  <br></br>
                  <h3 className="text[#717579]">Image Name</h3>
                  <p className="font-semibold">{item.imgName}</p>
                </div>
                <div>
                  <h3 className="text[#717579]">Type</h3>
                  <p className="font-semibold">{item.types}</p>
                  <br></br>
                  <h3 className="text[#717579]">Likes</h3>
                  <p className="font-semibold">{item.Likes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PhotoCard;
