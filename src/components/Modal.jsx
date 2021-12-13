import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../reducers/uiReducer";
import ContactUs from "./ContactUs/ContactUs";

export default function Modal() {
  const showModal = useSelector((state) => state.uiState.showModal);
  const dispatch = useDispatch();
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 flex justify-center items-center transition-all ${
        showModal ? "z-30 opacity-100" : "z-0 opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={() => {
          dispatch(setShowModal(false));
        }}
        className="backdrop absolute w-full h-full top-0 left-0 bg-black/70"
      ></div>
      <div className="relative z-30 w-3/4 max-w-lg bg-orange rounded-[20px] p-10">
        <div className="flex items-center justify-between">
          <p className="text-border text-white text-5xl font-extrabold uppercase">
            Contact <span className="text-lime ml-1.5"> Us</span>
          </p>
          <div className="w-10 h-10 rounded-full overflow-hidden bg-lime relative ">
            <img
              onClick={() => {
                dispatch(setShowModal(false));
              }}
              className="block w-5 abs-centering"
              src="assets/close-icon.svg"
              alt="close"
            />
          </div>
        </div>
        <ContactUs />
      </div>
    </div>
  );
}
