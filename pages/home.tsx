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
            My_Note
          </h1>
          <br />
          <div className="flex justify-center">
            {/* <div className="grid place-content-center"> */}
            {/* <button className="rounded px-4 py-2 bg-green-700">Add</button>
            &nbsp;
            <button className="rounded px-4 py-2 bg-green-700">Remove</button> */}
            {/* </div> */}
          </div>
          <div className="flex">
            <div className="px-10 py-10 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              provident quo, eaque fuga iure explicabo officiis eveniet iusto
              fugit debitis animi neque corporis modi et ducimus nisi minima
              voluptates necessitatibus.
            </div>
          </div>
          <div className="flex flex-col">
            <form action="/api/db/save" method="POST">
              <div className="flex flex-col px-10">
                <textarea name="note" id="note" rows={4}></textarea>
                <br />
                <button className="self-center rounded px-2 py-2 bg-sky-700 w-12 h-12">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
