import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "./Button";

const validationSchema = Yup.object({
  name: Yup.string().required("Empty names not allowed!"),
  email: Yup.string()
    .email("Invalid Email format!")
    .required("Email is Required!"),
  message: Yup.string().min(10, "Message less than 10 characters"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const sendMessage = (values) => {
  console.log(values);
};

const Section4 = () => {
  return (
    <section className="w-full h-screen md:scroll-snap-align-start flex items-center justify-center mt-12 relative">
      <img
        src="/assets/mat1.svg"
        alt="mat"
        className="w-40 h-40 absolute left-24 top-5"
      />
      <div className="w-3/4 h-4/5 z-30 relative bg-white flex items-center justify-center shadow-2xl">
      <div className="w-2/3 h-9/10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-pallet1-navyBlue">
            Follow me on my Socials
          </h1>

          <div className="flex justify-evenly w-max mx-auto mt-28">
            <a href="https://github.com/arp99" target="_blank">
              <img
                src="/assets/github.svg"
                width={35}
                height={35}
                className="mx-4"
              />
            </a>
            <a href="https://www.linkedin.com/in/arpanmondal25" target="_blank">
              <img
                src="/assets/linkedin.svg"
                width={35}
                height={35}
                className="mx-4"
              />
            </a>
            <a href="https://twitter.com/arpanmondal25" target="_blank">
              <img
                src="/assets/twitter.svg"
                width={35}
                height={35}
                className="mx-4"
              />
            </a>
          </div>
        </div>
      </div>
      <img
        src="/assets/mat1.svg"
        alt="mat"
        className="w-40 h-40 absolute right-24 bottom-5"
      />
    </section>
  );
};

export default Section4;
