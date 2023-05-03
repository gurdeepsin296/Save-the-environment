import React from "react";
import aboutimg from "../img/wedo.png";
import wedoimg from "../img/wedoimg.png";
import "./css/home.css";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

function home() {
  return (
    <>
      <section className="hero_section">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="sm:text-6xl">
                Save the environment today for a better tomorrow
              </h1>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/work"
                  className="text-white rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  WHAT WE DO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_us">
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-20">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width="200"
                  height="200"
                  x="50%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth="0"
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-indigo-600">
                    KNOW ABOUT US
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    We help nature smile and survive everywhere
                  </h2>
                  <p className="mt-6 text-base leading-8 text-gray-700">
                    We help nature by educating the public about the importance
                    of environmental conservation and sustainable living
                    practices. Conducting research and collecting data to better
                    understand environmental challenges and develop solutions.
                    Advocating for policies and regulations that protect the
                    environment and reduce pollution and waste.
                  </p>
                  <div className="mt-10 flexgap-x-6">
                    <a
                      href="/about"
                      className="rounded-md bg-green_secondary px-8 py-4 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden max-w-lg">
              <img src={aboutimg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="what_we_do">
        <div className="relative isolate overflow-hidden bg-white px-6  lg:overflow-visible lg:px-20">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className=" -mt-12 p-12  lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden max-w-lg ">
              <img src={wedoimg} alt="" />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-indigo-600">
                    WHAT WE DO
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    We care for earth, care for the coming birth
                  </h2>
                  <p className="mt-6 text-base leading-8 text-gray-700">
                    Our team is focused on taking care of the planet and
                    ensuring that future generations have a healthy and
                    sustainable environment to live in.
                  </p>

                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Build Healthy Cities
                      </dt>
                      <dd>
                        Building healthy cities is a critical goal for ensuring
                        the well-being of urban populations and the
                        sustainability of urban areas.
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Tree Plantation
                      </dt>
                      <dd>
                        Tree plantation is the act of planting trees in an area,
                        either to create a new forest or to replenish a depleted
                        forest. This activity is essential for restoring
                        ecological balance, reducing carbon emissions, and
                        combating climate change.
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                          <path
                            fill-rule="evenodd"
                            d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Protect Land and Water
                      </dt>
                      <dd>
                        Protecting land and water is essential for preserving
                        ecological systems, sustaining biodiversity, and
                        ensuring the long-term availability of vital resources
                        for human and non-human life.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="what_we_do">
        <div className="relative isolate overflow-hidden bg-white px-6 py-32  lg:overflow-visible lg:px-20">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    How we spend your donations and where it goes
                  </h2>
                  <p className="mt-6 text-base leading-8 text-gray-700">
                    We understand that when you make a  donation, you want to
                    know exactly where your money is going and we pledge to be
                    transparent.
                  </p>
                  <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                      <div className="relative pl-8">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                          <div className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-sm bg-green_secondary"></div>
                          40% planting trees
                        </dt>
                      </div>
                      <div className="relative pl-8">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                          <div className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-sm bg-blue_secondary"></div>
                          35% cleanliness program
                        </dt>
                      </div>
                      <div className="relative pl-8">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                          <div className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-sm bg-yellow_secondary"></div>
                          10% helping people
                        </dt>
                      </div>
                      <div className="relative pl-8">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                          <div className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-sm bg-yellow"></div>
                          10% animal safety
                        </dt>
                      </div>
                      <div className="relative pl-8">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                          <div className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-sm bg-burgundy_secondary"></div>
                          5% feeding the poor
                        </dt>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="px-8">
                <Doughnut
                  data={{
                    datasets: [
                      {
                        data: [40, 35, 10, 10, 5],
                        backgroundColor: [
                          "rgba(190, 243, 192, 1)",
                          "rgba(172, 148, 241, 1)",
                          "rgba(255, 240, 202, 1)",
                          "rgba(249, 207, 100, 1)",
                          "rgba(243, 143, 191, 1)",
                        ],
                      },
                    ],
                  }}
                  height={100}
                  width={100}
                />
              </div>
            </div>
            <div className="-mt-12 p-12  lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden max-w-lg "></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default home;
