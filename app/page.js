import Image from "next/image";
import Navbar from "@/components/publicNav";
import Link from "next/link";
import Footer from "@/components/footer";

// export const metadata = {
//   title: "Mible",
// };

export default function WelcomePage() {
  return (
    <div className="bg-transparent h-screen">
      <Navbar />
      <div className="flex items-center flex-col text-center py-24">
        <div className="px-4">
          <h1 className="text-violet-500 text-4xl">
            Connect ideas, unleash your creativity
          </h1>
          <h2 className="mt-5 text-xl text-gray-600">
            Effortlessly manage your ideas with Mible, your personal notetaking
            and journaling assistant
          </h2>
        </div>
        <div className="flex justify-center mt-8 w-[95%]">
          {/* First backdrop image */}
          <div className="mt-5 -mr-3 -z-10">
            <Image
              src="/backdrop1.svg"
              width={200}
              height={200}
              alt="thinking image backdrop"
            />
          </div>
          {/* Preview image */}
          <div className="z-10">
            <Image
              src="/preview.png"
              width={845}
              height={427}
              alt="journal preview"
            />
          </div>
          {/* Second backdrop image */}
          <div className="mt-[150px] -ml-5 -z-10">
            <Image
              src="/backdrop2.svg"
              width={200}
              height={200}
              alt="meditation image backdrop"
            />
          </div>
        </div>
        {/* features grid */}
        <div className="w-[80%] mt-20 text-left grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="border-2 border-gray-200 p-4 shadow-sm rounded-lg bg-gray-200 hover:bg-white relative">
            <svg
              title="connect"
              className="fill-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="M240-40q-50 0-85-35t-35-85q0-50 35-85t85-35q14 0 26 3t23 8l57-71q-28-31-39-70t-5-78l-81-27q-17 25-43 40t-58 15q-50 0-85-35T0-580q0-50 35-85t85-35q50 0 85 35t35 85v8l81 28q20-36 53.5-61t75.5-32v-87q-39-11-64.5-42.5T360-840q0-50 35-85t85-35q50 0 85 35t35 85q0 42-26 73.5T510-724v87q42 7 75.5 32t53.5 61l81-28v-8q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-32 0-58.5-15T739-515l-81 27q6 39-5 77.5T614-340l57 70q11-5 23-7.5t26-2.5q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-20 6.5-38.5T624-232l-57-71q-41 23-87.5 23T392-303l-56 71q11 15 17.5 33.5T360-160q0 50-35 85t-85 35ZM120-540q17 0 28.5-11.5T160-580q0-17-11.5-28.5T120-620q-17 0-28.5 11.5T80-580q0 17 11.5 28.5T120-540Zm120 420q17 0 28.5-11.5T280-160q0-17-11.5-28.5T240-200q-17 0-28.5 11.5T200-160q0 17 11.5 28.5T240-120Zm240-680q17 0 28.5-11.5T520-840q0-17-11.5-28.5T480-880q-17 0-28.5 11.5T440-840q0 17 11.5 28.5T480-800Zm0 440q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm240 240q17 0 28.5-11.5T760-160q0-17-11.5-28.5T720-200q-17 0-28.5 11.5T680-160q0 17 11.5 28.5T720-120Zm120-420q17 0 28.5-11.5T880-580q0-17-11.5-28.5T840-620q-17 0-28.5 11.5T800-580q0 17 11.5 28.5T840-540ZM480-840ZM120-580Zm360 120Zm360-120ZM240-160Zm480 0Z" />
            </svg>
            <h3 className="text-xl text-black my-3">Connections</h3>
            <p className="text-gray-700 mb-8">
              Magnify your ideas to explore connections across your journal
            </p>
            <Link href="#" className="absolute bottom-2">
              <p className="text-blue-600">Learn more &#x2192;</p>
            </Link>
          </div>
          <div className="border-2 border-gray-200 p-4 shadow-sm rounded-lg bg-gray-200 hover:bg-white relative">
            <svg
              title="sparkles"
              className="stroke-orange-600"
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
            <h3 className="text-xl text-black my-3">AI Integration</h3>
            <p className="text-gray-700 mb-8">
              Gain insights into your journal by asking questions to your AI
              assistant, along with personalized feedback and recommendations.
            </p>
            <Link href="#" className="absolute bottom-2">
              <p className="text-orange-600">Learn more &#x2192;</p>
            </Link>
          </div>
          <div className="border-2 border-gray-200 p-4 shadow-sm rounded-lg bg-gray-200 hover:bg-white relative">
            <svg
              title="customize"
              className="fill-green-600"
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
            </svg>
            <h3 className="text-xl text-black my-3">Journal Personalization</h3>
            <p className="text-gray-700 mb-8">
              Customize your layout, create personal journal templates
            </p>
            <Link href="#" className="absolute bottom-2">
              <p className="text-green-600">Learn more &#x2192;</p>
            </Link>
          </div>
          <div className="border-2 border-gray-200 p-4 shadow-sm rounded-lg bg-gray-200 hover:bg-white relative">
            <svg
              title="guides"
              className="fill-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Zm120-240h240v-480H360v480Zm-80 0v-480h-40q-17 0-28.5 11.5T200-760v447q10-3 19.5-5t20.5-2h40Zm-80-480v487-487Z" />
            </svg>
            <h3 className="text-xl text-black my-3">Guides</h3>
            <p className="text-gray-700 mb-8">
              Leverage our collection of expert-curated educational content to
              accelerate your personal growth
            </p>
            <Link href="#" className="absolute bottom-2">
              <p className="text-yellow-600">Learn more &#x2192;</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
