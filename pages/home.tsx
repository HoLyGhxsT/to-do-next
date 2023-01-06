import Head from "next/head";

export default function Home() {
  console.log("Home Page Loaded");
  const redirect = () => {
    console.log("redirect");
  };
  return (
    <>
      <Head>
        <title> Home Page </title>
      </Head>
      <div className="flex flex-col">
        <div className="grid place-content-end">
          <button className="rounded px-4 py-2 bg-red-700" onClick={redirect}>
            Logout
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="">
          <h1 className="font-bold underline text-3xl text-cyan-700 italic text-center">
            Success
          </h1>
          <br />
          <div className="flex flex-col">
            <div className="grid place-content-center">
              <button className="rounded px-4 py-2 bg-green-700">Add</button>
              <br />
              <button className="rounded px-4 py-2 bg-green-700">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
