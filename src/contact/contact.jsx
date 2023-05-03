import React from "react";
import * as XLSX from "xlsx/xlsx.mjs";

function exportToExcel() {
  var firstname = document.getElementById("first-name").value;
  var lastname = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Create a table element to store the data
  var table = document.createElement("table");
  table.innerHTML =
    "<tr><td>First Name</td><td>Last Name</td><td>Email</td><td>Message</td></tr><tr><td>" +
    firstname +
    "</td><td>" +
    lastname +
    "</td><td>" +
    email +
    "</td><td>" +
    message +
    "</td></tr>";

  // Create a new Blob object with the table HTML and set the type to application/vnd.ms-excel
  var blob = new Blob([table.outerHTML], {
    type: "application/vnd.ms-excel;charset=utf-8",
  });

  // Create a URL object from the blob and set the href attribute of a new anchor element to the URL
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "form_data.xls";

  // Append the anchor element to the document body and click it
  document.body.appendChild(a);
  a.click();

  // Remove the anchor element and revoke the URL object to free up memory
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function contact() {
  return (
    <>
      <main>
        <section>
          <div className="bg-white">
            <div className="mx-auto max-w-7xl sm:px-6  lg:px-8">
              <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    We'd love to hear from you
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Have any question in mind or want to enquire? Please feel
                    free to contact us through the form or the following
                    details.
                  </p>
                </div>
                <div className="relative lg:py-32">
                  <ul role="list" className="divide-y divide-gray-100">
                    <li className="flex justify-between gap-x-6 py-2">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-white">
                          Let's talk!
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          +44-7721701021, gurdeep.sin296@gmail.com
                        </p>
                      </div>
                    </li>
                    <li className="flex justify-between gap-x-6 py-2">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-white">
                          Address
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          6 Clifton Road,LL30 2YH, Llandudno
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-12 py-14">
          <form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Type your message"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-x-6">
              <button
                type="submit"
                className="rounded-md  bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={exportToExcel}
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default contact;
