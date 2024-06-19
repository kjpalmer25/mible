import NavMenu from "@/components/publicNav";
import Image from "next/image";

export default function JournalPreview() {
  return (
    <div>
      <NavMenu />
      <div className="flex justify-center w-full h-screen">
        <div className="flex flex-col w-[80%] h-full">
          <h2 className="mt-10 mb-2 text-violet-500 text-xl">
            Welcome to an interactive preview of Mible
          </h2>
          <h3 className="mb-5">
            Please feel free to try out the preview below and reach out with any
            suggestions or feedback. Thank you!
          </h3>
          <div className="bg-gray-200 h-[60%] text-xl flex shadow-sm">
            <div className="w-1/3 p-3 h-full bg-gray-300 border-r-2 border-gray-500 rounded-l-md">
              <div className="flex flex-col items-center">
                <button className="btn text-lg inline-block">New Entry</button>
              </div>
              <h3 className="mt-3 text-gray-700 text-base">
                Customize your journal
              </h3>
              <ul className="my-2 ml-2">
                <li className="flex my-2 hover:cursor-pointer">
                  <Image
                    className="mr-1"
                    width={20}
                    height={20}
                    src="/book.svg"
                  />
                  Daily journal
                </li>
                <li className="flex my-2 hover:cursor-pointer">
                  <Image
                    className="mr-1"
                    width={20}
                    height={20}
                    src="/target.svg"
                  />
                  Goals
                </li>
                <li className="flex my-2 hover:cursor-pointer">
                  <Image
                    className="mr-1"
                    width={20}
                    height={20}
                    src="/checkbox.svg"
                  />
                  To-do
                </li>
                <li className="hover:cursor-pointer">
                  <button className="text-base p-1 rounded-md text-gray-700">
                    + Create template
                  </button>
                </li>
              </ul>
            </div>
            <div className="w-2/3 flex-2 px-2 relative">
              <svg
                title="sparkles"
                className="absolute top-1 right-5 stroke-gray-600 hover:stroke-gray-400 hover:cursor-pointer"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3V7M17 5H21M19 17V21M17 19H21M10 5L8.53001 8.72721C8.3421 9.20367 8.24814 9.4419 8.10427 9.64278C7.97675 9.82084 7.82084 9.97675 7.64278 10.1043C7.4419 10.2481 7.20367 10.3421 6.72721 10.53L3 12L6.72721 13.47C7.20367 13.6579 7.4419 13.7519 7.64278 13.8957C7.82084 14.0233 7.97675 14.1792 8.10427 14.3572C8.24814 14.5581 8.3421 14.7963 8.53001 15.2728L10 19L11.47 15.2728C11.6579 14.7963 11.7519 14.5581 11.8957 14.3572C12.0233 14.1792 12.1792 14.0233 12.3572 13.8957C12.5581 13.7519 12.7963 13.6579 13.2728 13.47L17 12L13.2728 10.53C12.7963 10.3421 12.5581 10.2481 12.3572 10.1043C12.1792 9.97675 12.0233 9.82084 11.8957 9.64278C11.7519 9.4419 11.6579 9.20367 11.47 8.72721L10 5Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                placeholder="Title"
                className="w-[80%] h-10 bg-transparent border-0 border-b-2 border-gray-600 focus:border-gray-600 focus:ring-transparent"
              ></input>
              <textarea className="w-full h-full my-2 focus:ring-transparent border-none bg-transparent"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
