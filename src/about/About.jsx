import React, { useState, useEffect } from "react";
import BG from "../img/BG.png";

function About() {
  const [ourteam, setOurTeam] = useState([]);

  const newsFeeds = () => {
    fetch("img.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => setOurTeam(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    newsFeeds();
    // eslint-disable-next-line
  }, []);
  console.log(ourteam);
  return (
    <>
      <section className="about_us">
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-indigo-600">
                    Know about us
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    We are a nonprofit team working worldwide
                  </h2>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden ">
              <p className="mt-6 text-xl leading-8 text-gray-700">
                As a nonprofit team working in this field, we likely have a
                specific mission or goal related to environmental conservation,
                such as protecting endangered species, preserving natural
                habitats, reducing pollution, or mitigating the effects of
                climate change.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg_img p-12">
        <img src={BG} alt="backgroun_img" />
      </section>
      <section className="our_mission">
        <div className="bg-white ">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-2xl font-bold leading-7 text-gray-900">
                  We make the world we save our own environments
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  It's true that the choices we make as individuals and as a
                  society have a significant impact on the environment and the
                  world around us. By taking steps to reduce our carbon
                  footprint, conserve natural resources, and protect
                  biodiversity, we can help create a more sustainable and
                  resilient planet for ourselves and future generations.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-2xl font-bold leading-7 text-gray-900">
                  Plant more trees to make world air pollution free
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Planting more trees is an effective way to help reduce air
                  pollution and improve air quality. Trees absorb carbon
                  dioxide, a greenhouse gas that contributes to climate change,
                  and release oxygen, which we need to breathe. Trees can also
                  help to filter pollutants from the air, such as nitrogen
                  oxides, sulfur dioxide, and particulate matter.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section className="our_team">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
              Meet our team
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {ourteam.map((team) => (
                <div className="group relative">
                  <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={team.img}
                      alt="Front of men&#039;s Basic Tee in black."
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex flex-col items-center">
                    <h2 className="text-xl font-bold text-gray-700">
                      {team.name}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {team.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
