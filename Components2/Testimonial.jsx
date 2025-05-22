import React from "react";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <>
      {/* <section>
        <div className="bg-gradient-to-r from-stone-700 via-red-500 to-slate-600 h-full mb-5">
          <h1 className="text-center text-4xl font-bold text-white pt-10">
            Customer Testimonial{" "}
          </h1>
          <div className="pl-14 flex justify-center pt-14 gap-10">
            <div className="cardz">
              <span />
              <div className="content flex flex-col items-center">
                <h2 className="font-serif">Jennie Sapphire</h2>
                <p className="text-center font-light">
                  Everyone is different , which is why we offer new style to
                  everyone
                </p>
              </div>
            </div>
            <div className="cardz">
              <span />
              <div className="content flex flex-col items-center">
                <h2 className="font-serif">Dania Elly</h2>
                <p className="text-center font-light">
                  Everyone is different , which is why we offer new style to
                  everyone
                </p>
              </div>
            </div>
            <div className="cardz">
              <span />
              <div className="content flex flex-col items-center">
                <h2 className="font-serif">Alice Doe</h2>
                <p className="text-center font-light">
                  Everyone is different , which is why we offer new style to
                  everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>  */}
      <div>
        <h1 className="text-center text-4xl font-bold text-white bg-gradient-to-r from-stone-700 via-red-500 to-slate-600 pt-10">
          Customer Testimonial{" "}
        </h1>
        <div className="bg-gradient-to-r from-stone-700 via-red-500 to-slate-600 h-80 pt-14 flex justify-center gap-10  ">
          <div className="w-64 rounded-lg border-2 border-red-900 bg-gradient-to-r from-violet-500 to-stone-700 p-4 text-center shadow-lg dark:bg-gray-800">
            <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-stone-800 dark:bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                fill="currentColor"
                className="bi bi-person-fill text-white dark:text-red-900"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <figcaption className="sr-only text-black">
                John Doe, Web Developer
              </figcaption>
            </figure>
            <h2 className="mt-4 text-xl font-bold text-red-900 dark:text-indigo-400">
              John Doe
            </h2>
            <p className="mb-4 text-stone-800 dark:text-gray-300">
              Web Developer
            </p>
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="rounded-full bg-indigo-600 px-4 py-2 text-white bg-gradient-to-br from-stone-700 to-red-900"
              >
                Contact
              </a>
              <a
                href="#"
                className="ml-4 rounded-full bg-stone-800 text-white px-4 py-2 hover:bg-red-900 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Portfolio
              </a>
            </div>
          </div>
          <div className="w-64 rounded-lg border-2 border-red-900 bg-gradient-to-r from-violet-500 to-stone-700 p-4 text-center shadow-lg dark:bg-gray-800">
            <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-stone-800 dark:bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                fill="currentColor"
                className="bi bi-person-fill text-white dark:text-red-900"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <figcaption className="sr-only text-black">
                Jane Doe, Web Designer
              </figcaption>
            </figure>
            <h2 className="mt-4 text-xl font-bold text-red-900 dark:text-indigo-400">
              Danial Bell
            </h2>
            <p className="mb-4 text-stone-800 dark:text-gray-300">
              Project Manager
            </p>
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="rounded-full bg-indigo-600 px-4 py-2 text-white bg-gradient-to-br from-stone-700 to-red-900"
              >
                Contact
              </a>
              <a
                href="#"
                className="ml-4 rounded-full bg-stone-800 text-white px-4 py-2 hover:bg-red-900 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Portfolio
              </a>
            </div>
          </div>
          <div className="w-64 rounded-lg border-2 border-red-900 bg-gradient-to-r from-violet-500 to-stone-700 p-4 text-center shadow-lg dark:bg-gray-800">
            <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-stone-800 dark:bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                fill="currentColor"
                className="bi bi-person-fill text-white dark:text-red-900"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <figcaption className="sr-only text-black">
                Jane Doe, Web Designer
              </figcaption>
            </figure>
            <h2 className="mt-4 text-xl font-bold text-red-900 dark:text-indigo-400">
              Lily Atlas
            </h2>
            <p className="mb-4 text-stone-800 dark:text-gray-300">
              Personal Asistant
            </p>
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="rounded-full bg-indigo-600 px-4 py-2 text-white bg-gradient-to-br from-stone-700 to-red-900"
              >
                Contact
              </a>
              <a
                href="#"
                className="ml-4 rounded-full bg-stone-800 text-white px-4 py-2 hover:bg-red-900 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
