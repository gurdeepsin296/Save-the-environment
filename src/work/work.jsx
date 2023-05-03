import React from "react";

import Work from "../img/work.png";
import News1 from "../img/news1.png";
import News2 from "../img/news2.png";
import News3 from "../img/news3.png";
import News4 from "../img/news4.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function work() {
  const news = [
    {
      id: 1,
      img: News1,
      heading: "Don’t destroy greenery and don’t spoil scenery",
      news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
    },
    {
      id: 2,
      img: News2,
      heading: " Is climate change happening faster than expected?",
      news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
    },
    {
      id: 3,
      img: News3,
      heading: "Top 10 facts about wind farms you didn't know",
      news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
    },
    {
      id: 4,
      img: News4,
      heading: "Our goal is to make water available for everyone",
      news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
    },
  ];

  return (
    <>
      <section className="work">
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
                    WHAT WE DO
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    We are working worldwide
                  </h2>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    As a team working worldwide to protect the environment,our
                    work involve a range of activities, such as advocacy,
                    education, research, and direct action. We collaborate with
                    local communities, governments, and other organizations to
                    achieve our goals and create sustainable solutions that
                    benefit both people and the environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden ">
              <img src={Work} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="bg-white  sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What we do for the environment
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.93945 12.5977H8.81836V15H7.93945V12.5977Z"
                          fill="#DDFFDF"
                        />
                        <path
                          d="M6.18164 12.5977H7.06055V15H6.18164V12.5977Z"
                          fill="#DDFFDF"
                        />
                        <path
                          d="M10.459 0H4.54102C4.29832 0 4.10156 0.196758 4.10156 0.439453V15H5.30273V12.1582C5.30273 11.9155 5.49949 11.7188 5.74219 11.7188H9.25781C9.50051 11.7188 9.69727 11.9155 9.69727 12.1582V15H10.8984V0.439453C10.8984 0.196758 10.7017 0 10.459 0ZM6.18164 10.4004C6.18164 10.6431 5.98488 10.8398 5.74219 10.8398C5.49949 10.8398 5.30273 10.6431 5.30273 10.4004V9.52148C5.30273 9.27879 5.49949 9.08203 5.74219 9.08203C5.98488 9.08203 6.18164 9.27879 6.18164 9.52148V10.4004ZM6.18164 7.76367C6.18164 8.00637 5.98488 8.20312 5.74219 8.20312C5.49949 8.20312 5.30273 8.00637 5.30273 7.76367V6.88477C5.30273 6.64207 5.49949 6.44531 5.74219 6.44531C5.98488 6.44531 6.18164 6.64207 6.18164 6.88477V7.76367ZM7.93945 10.4004C7.93945 10.6431 7.7427 10.8398 7.5 10.8398C7.2573 10.8398 7.06055 10.6431 7.06055 10.4004V9.52148C7.06055 9.27879 7.2573 9.08203 7.5 9.08203C7.7427 9.08203 7.93945 9.27879 7.93945 9.52148V10.4004ZM7.93945 7.76367C7.93945 8.00637 7.7427 8.20312 7.5 8.20312C7.2573 8.20312 7.06055 8.00637 7.06055 7.76367V6.88477C7.06055 6.64207 7.2573 6.44531 7.5 6.44531C7.7427 6.44531 7.93945 6.64207 7.93945 6.88477V7.76367ZM9.69727 10.4004C9.69727 10.6431 9.50051 10.8398 9.25781 10.8398C9.01512 10.8398 8.81836 10.6431 8.81836 10.4004V9.52148C8.81836 9.27879 9.01512 9.08203 9.25781 9.08203C9.50051 9.08203 9.69727 9.27879 9.69727 9.52148V10.4004ZM9.69727 7.76367C9.69727 8.00637 9.50051 8.20312 9.25781 8.20312C9.01512 8.20312 8.81836 8.00637 8.81836 7.76367V6.88477C8.81836 6.64207 9.01512 6.44531 9.25781 6.44531C9.50051 6.44531 9.69727 6.64207 9.69727 6.88477V7.76367ZM6.18164 5.12695C6.18164 5.36965 5.98488 5.56641 5.74219 5.56641C5.49949 5.56641 5.30273 5.36965 5.30273 5.12695V4.24805C5.30273 4.00535 5.49949 3.80859 5.74219 3.80859C5.98488 3.80859 6.18164 4.00535 6.18164 4.24805V5.12695ZM7.93945 5.12695C7.93945 5.36965 7.7427 5.56641 7.5 5.56641C7.2573 5.56641 7.06055 5.36965 7.06055 5.12695V4.24805C7.06055 4.00535 7.2573 3.80859 7.5 3.80859C7.7427 3.80859 7.93945 4.00535 7.93945 4.24805V5.12695ZM9.69727 5.12695C9.69727 5.36965 9.50051 5.56641 9.25781 5.56641C9.01512 5.56641 8.81836 5.36965 8.81836 5.12695V4.24805C8.81836 4.00535 9.01512 3.80859 9.25781 3.80859C9.50051 3.80859 9.69727 4.00535 9.69727 4.24805V5.12695ZM6.18164 2.49023C6.18164 2.73293 5.98488 2.92969 5.74219 2.92969C5.49949 2.92969 5.30273 2.73293 5.30273 2.49023V1.61133C5.30273 1.36863 5.49949 1.17188 5.74219 1.17188C5.98488 1.17188 6.18164 1.36863 6.18164 1.61133V2.49023ZM7.93945 2.49023C7.93945 2.73293 7.7427 2.92969 7.5 2.92969C7.2573 2.92969 7.06055 2.73293 7.06055 2.49023V1.61133C7.06055 1.36863 7.2573 1.17188 7.5 1.17188C7.7427 1.17188 7.93945 1.36863 7.93945 1.61133V2.49023ZM9.69727 2.49023C9.69727 2.73293 9.50051 2.92969 9.25781 2.92969C9.01512 2.92969 8.81836 2.73293 8.81836 2.49023V1.61133C8.81836 1.36863 9.01512 1.17188 9.25781 1.17188C9.50051 1.17188 9.69727 1.36863 9.69727 1.61133V2.49023Z"
                          fill="#DDFFDF"
                        />
                        <path
                          d="M14.5605 5.85938H11.7773V15H14.5605C14.8032 15 15 14.8032 15 14.5605V6.29883C15 6.05613 14.8032 5.85938 14.5605 5.85938ZM13.8281 11.5723C13.8281 11.815 13.6314 12.0117 13.3887 12.0117C13.146 12.0117 12.9492 11.815 12.9492 11.5723V10.6934C12.9492 10.4507 13.146 10.2539 13.3887 10.2539C13.6314 10.2539 13.8281 10.4507 13.8281 10.6934V11.5723ZM13.8281 8.93555C13.8281 9.17824 13.6314 9.375 13.3887 9.375C13.146 9.375 12.9492 9.17824 12.9492 8.93555V8.05664C12.9492 7.81395 13.146 7.61719 13.3887 7.61719C13.6314 7.61719 13.8281 7.81395 13.8281 8.05664V8.93555Z"
                          fill="#DDFFDF"
                        />
                        <path
                          d="M0.439453 5.85938C0.196758 5.85938 0 6.05613 0 6.29883V14.5605C0 14.8032 0.196758 15 0.439453 15H3.22266V5.85938H0.439453ZM2.05078 11.5723C2.05078 11.815 1.85402 12.0117 1.61133 12.0117C1.36863 12.0117 1.17188 11.815 1.17188 11.5723V10.6934C1.17188 10.4507 1.36863 10.2539 1.61133 10.2539C1.85402 10.2539 2.05078 10.4507 2.05078 10.6934V11.5723ZM2.05078 8.93555C2.05078 9.17824 1.85402 9.375 1.61133 9.375C1.36863 9.375 1.17188 9.17824 1.17188 8.93555V8.05664C1.17188 7.81395 1.36863 7.61719 1.61133 7.61719C1.85402 7.61719 2.05078 7.81395 2.05078 8.05664V8.93555Z"
                          fill="#DDFFDF"
                        />
                      </svg>
                    </div>
                    Build healthy cities
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Building healthy cities is a critical goal for ensuring the
                    well-being of urban populations and the sustainability of
                    urban areas.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.7969 12.4414C17.519 12.2482 17.2745 12.0111 17.0728 11.7393C16.5901 11.1908 15.9758 10.5106 14.8348 10.5106C13.6939 10.5106 13.1015 11.1688 12.5968 11.7612C12.0922 12.3536 11.7631 12.7047 11.0171 12.7047C10.2711 12.7047 9.8981 12.2878 9.43735 11.7612C8.97661 11.2346 8.36224 10.5106 7.19936 10.5106C6.03648 10.5106 5.46604 11.1688 4.96136 11.7612C4.45673 12.3536 4.12761 12.7047 3.38162 12.7047C2.63564 12.7047 2.26263 12.2878 1.80188 11.7612C1.48867 11.3476 1.0926 11.0038 0.638999 10.7519C0.420869 10.6429 0.155661 10.7313 0.0465957 10.9494C-0.0624693 11.1675 0.0259334 11.4327 0.244063 11.5418C0.588561 11.7494 0.893203 12.017 1.14363 12.3317C1.64826 12.9241 2.24066 13.5823 3.38162 13.5823C4.52258 13.5823 5.11495 12.9241 5.61962 12.3317C6.12425 11.7393 6.45337 11.3882 7.19936 11.3882C7.94534 11.3882 8.31836 11.8051 8.7791 12.3317C9.23984 12.8583 9.85421 13.5823 11.0171 13.5823C12.18 13.5823 12.7504 12.9241 13.2551 12.3317C13.7597 11.7393 14.0888 11.3882 14.8348 11.3882C15.5808 11.3882 15.9538 11.8051 16.4146 12.3317C16.6703 12.66 16.9735 12.9484 17.3141 13.1874C17.5201 13.3207 17.7952 13.2617 17.9285 13.0557C18.0618 12.8497 18.0029 12.5747 17.7969 12.4414Z"
                          fill="#DDFFDF"
                        />
                        <path
                          d="M17.7969 9.15024C17.519 8.9571 17.2745 8.71994 17.0728 8.44814C16.5901 7.89962 15.9758 7.21945 14.8348 7.21945C13.6939 7.21945 13.1015 7.87766 12.5968 8.4701C12.0922 9.06251 11.7631 9.41356 11.0171 9.41356C10.2711 9.41356 9.8981 8.99666 9.43735 8.4701C8.97661 7.94351 8.36224 7.21945 7.19936 7.21945C6.03648 7.21945 5.46604 7.87766 4.96136 8.4701C4.45673 9.06251 4.12761 9.41356 3.38162 9.41356C2.63564 9.41356 2.26263 8.99666 1.80188 8.4701C1.48867 8.05644 1.0926 7.7127 0.638999 7.4608C0.420869 7.35174 0.155661 7.44014 0.0465957 7.65827C-0.0624693 7.8764 0.0259334 8.14161 0.244063 8.25067C0.588561 8.4583 0.893203 8.72582 1.14363 9.04054C1.64826 9.63295 2.24066 10.2912 3.38162 10.2912C4.52258 10.2912 5.11495 9.63299 5.61962 9.04054C6.12425 8.44814 6.45337 8.09709 7.19936 8.09709C7.94534 8.09709 8.31836 8.51399 8.7791 9.04054C9.23984 9.56714 9.85421 10.2912 11.0171 10.2912C12.18 10.2912 12.7504 9.63299 13.2551 9.04054C13.7597 8.44814 14.0888 8.09709 14.8348 8.09709C15.5808 8.09709 15.9538 8.51399 16.4146 9.04054C16.6703 9.36887 16.9735 9.65726 17.3141 9.89622C17.5201 10.0295 17.7952 9.9706 17.9285 9.76456C18.0618 9.55861 18.0029 9.28354 17.7969 9.15024Z"
                          fill="#DDFFDF"
                        />
                        <path
                          d="M17.7969 5.63956C17.519 5.44642 17.2745 5.20927 17.0728 4.93747C16.5901 4.38895 15.9758 3.70877 14.8348 3.70877C13.6939 3.70877 13.1015 4.36699 12.5968 4.95943C12.0922 5.55188 11.7631 5.90288 11.0171 5.90288C10.2711 5.90288 9.8981 5.48598 9.43735 4.95943C8.97661 4.43288 8.36224 3.70877 7.19936 3.70877C6.03648 3.70877 5.46604 4.36699 4.96136 4.95943C4.45673 5.55183 4.12761 5.90288 3.38162 5.90288C2.63564 5.90288 2.26263 5.48598 1.80188 4.95943C1.48867 4.54577 1.0926 4.20202 0.638999 3.95013C0.420869 3.84106 0.155661 3.92947 0.0465957 4.1476C-0.0624693 4.36573 0.0259334 4.63093 0.244063 4.74C0.588561 4.94763 0.893203 5.21515 1.14363 5.52987C1.64826 6.12227 2.24066 6.78053 3.38162 6.78053C4.52258 6.78053 5.11495 6.12231 5.61962 5.52987C6.12425 4.93747 6.45337 4.58642 7.19936 4.58642C7.94534 4.58642 8.31836 5.00332 8.7791 5.52987C9.23984 6.05642 9.85421 6.78053 11.0171 6.78053C12.18 6.78053 12.7504 6.12231 13.2551 5.52987C13.7598 4.93742 14.0888 4.58642 14.8348 4.58642C15.5808 4.58642 15.9538 5.00332 16.4146 5.52987C16.6703 5.8582 16.9735 6.14659 17.3141 6.38555C17.5201 6.51885 17.7952 6.45993 17.9285 6.25389C18.0618 6.04794 18.0029 5.77286 17.7969 5.63956Z"
                          fill="#DDFFDF"
                        />
                        <path
                          d="M0.244236 1.44895C0.588733 1.65658 0.893376 1.9241 1.1438 2.23882C1.64843 2.83122 2.24083 3.48948 3.3818 3.48948C4.52276 3.48948 5.11512 2.83126 5.61979 2.23882C6.12442 1.64642 6.45355 1.29537 7.19953 1.29537C7.94552 1.29537 8.31853 1.71227 8.77927 2.23882C9.24002 2.76541 9.85438 3.48948 11.0173 3.48948C12.1802 3.48948 12.7506 2.83126 13.2553 2.23882C13.7599 1.64642 14.089 1.29537 14.835 1.29537C15.581 1.29537 15.954 1.71227 16.4147 2.23882C16.6705 2.56715 16.9736 2.85554 17.3143 3.09454C17.5203 3.22784 17.7954 3.16887 17.9287 2.96288C18.062 2.75689 18.0031 2.48181 17.797 2.34851C17.5191 2.15537 17.2746 1.91822 17.073 1.64642C16.5902 1.0979 15.9759 0.417725 14.835 0.417725C13.694 0.417725 13.1016 1.07594 12.597 1.66838C12.0923 2.26078 11.7632 2.61183 11.0172 2.61183C10.2712 2.61183 9.89823 2.19493 9.43748 1.66838C8.97674 1.14179 8.36237 0.417725 7.19949 0.417725C6.03661 0.417725 5.46617 1.07594 4.96149 1.66838C4.45686 2.26078 4.12774 2.61183 3.38175 2.61183C2.63577 2.61183 2.26284 2.19493 1.80205 1.66834C1.48884 1.25467 1.09278 0.910932 0.639171 0.659036C0.421041 0.549972 0.155833 0.638374 0.0467679 0.856504C-0.062297 1.07463 0.0261476 1.33988 0.244236 1.44895Z"
                          fill="#DDFFDF"
                        />
                      </svg>
                    </div>
                    Protect land and water
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Protecting land and water is essential for preserving
                    ecological systems, sustaining biodiversity, and ensuring
                    the long-term availability of vital resources for human and
                    non-human life.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg
                        width="14"
                        height="18"
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2904 6.73021L13.2633 6.69347L13.2579 6.68272L10.7931 3.02372L8.32825 6.68275L8.32312 6.69302L8.29573 6.73025C7.90023 7.26589 7.69119 7.90225 7.69119 8.57061C7.69119 10.281 9.08271 11.6725 10.7931 11.6725C12.5034 11.6725 13.8949 10.281 13.8949 8.57061C13.895 7.90222 13.6859 7.26578 13.2904 6.73021Z"
                          fill="#DDFFDF"
                        />
                        <path
                          d="M10.7931 12.7293C8.49996 12.7293 6.63439 10.8637 6.63439 8.57055C6.63439 7.67912 6.91209 6.82971 7.43757 6.1133L9.05789 3.70794L6.56 0L1.35563 7.72571C0.537368 8.83925 0.10498 10.1595 0.10498 11.5449C0.10498 15.1043 3.0007 18 6.56003 18C9.93254 18 12.7088 15.4002 12.991 12.0994C12.3529 12.4984 11.5996 12.7293 10.7931 12.7293Z"
                          fill="#DDFFDF"
                        />
                      </svg>
                    </div>
                    Water sustainability
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Water sustainability refers to the responsible management
                    and conservation of water resources to ensure their
                    availability for future generations. Water is a finite
                    resource, and with increasing demand due to population
                    growth and climate change, it is essential to manage it
                    sustainably.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.88224 6.24177C9.05157 6.3045 9.2177 6.15098 9.16156 5.98764C8.77631 4.86641 7.38145 4.44814 6.08476 5.4429C5.40268 5.96621 5.14637 6.07741 5.13991 6.08021C5.58957 6.50482 6.10327 7.92963 7.22436 8.0872C8.45933 8.29867 9.55235 7.15116 8.6581 6.62606C8.06998 6.28076 7.37755 6.08018 6.63532 6.08018C7.41345 5.91452 8.19025 5.98556 8.88224 6.24177Z"
                          fill="#DDFFDF"
                        />
                        <path
                          d="M14.4744 5.44281C12.2361 3.72568 10.8086 6.43362 11.6959 6.16519C12.3261 5.97455 13.0151 5.93302 13.7061 6.08013C12.5352 6.08013 11.4559 6.58691 10.7363 7.4118C10.7954 6.11547 10.8848 5.30404 10.9884 4.70044C11.5865 4.68103 12.3837 4.22487 12.8215 3.42668C13.5762 2.15106 13.2262 0.84313 13.1136 0.0178223C12.5238 0.560177 9.94777 -0.0753198 8.92655 1.57742C8.47545 2.3075 8.60655 3.19591 9.08111 3.84605C9.23133 4.05186 9.59052 3.95311 9.60075 3.70334C9.64533 2.61681 10.2179 1.7959 11.2853 1.34123C10.8063 1.92735 10.4918 2.58355 10.3294 3.26179C10.0768 4.31832 9.81306 5.01138 9.7162 8.37887C9.70636 8.72037 9.99929 9.00306 10.361 8.99878C10.6229 8.99567 10.8472 8.83874 10.9479 8.61043C11.101 8.2632 11.3503 7.90383 11.756 7.57457C12.1414 7.97698 12.728 8.1911 13.335 8.08715C14.4513 7.93026 14.9723 6.50234 15.4194 6.08009C15.4128 6.07736 15.1565 5.96616 14.4744 5.44281Z"
                          fill="#DDFFDF"
                        />
                        <path
                          d="M17.7649 9.63866C17.0651 9.19028 16.3035 9.50979 15.9538 9.70052L11.5647 12.7345L8.99474 12.735L8.35226 12.1282H10.7124C11.4222 12.1282 12.2172 11.6915 12.2172 10.9144C12.2172 10.0892 11.4222 9.70052 10.7124 9.70052H9.82796C9.17094 9.70052 8.40314 9.75585 7.86176 9.48215C7.34742 9.23496 6.75513 9.0943 6.12289 9.0943C5.06123 9.0943 4.11104 9.49402 3.45992 10.1244L0 13.3412L3.85489 16.982L5.13985 15.1616H11.2119C11.8595 15.1616 12.4846 14.9372 12.9687 14.5311L17.8088 10.4703C18.0779 10.2446 18.0627 9.82953 17.7649 9.63866Z"
                          fill="#DDFFDF"
                        />
                      </svg>
                    </div>
                    Tree plantation
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Tree plantation is the act of planting trees in an area,
                    either to create a new forest or to replenish a depleted
                    forest. This activity is essential for restoring ecological
                    balance, reducing carbon emissions, and combating climate
                    change.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section className="news_section">
        <div className="mt-6 mx-6  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {news.map((newsFeed) => (
              <div
                className="group relative slider flex flex-col"
                key={newsFeed.id}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                  <img
                    src={newsFeed.img}
                    alt={newsFeed.heading}
                    className=" carouselImages h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h2 className="text-lg text-gray-700 font-bold">
                      {newsFeed.heading}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <button id="prevBtn">Prev</button>
        <button id="nextBtn">Next</button>
      </section>
    </>
  );
}

export default work;
