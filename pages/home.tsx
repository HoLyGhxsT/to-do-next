import Head from "next/head";

export default function Home() {
  console.log("Home Page Loaded");
  return (
    <>
      <Head>
        <title> Home Page </title>
      </Head>
      <div className="center">
        <h1 className="font-bold underline text-3xl text-cyan-700 italic grid h-screen place-content-center ">
          Success
        </h1>
      </div>
    </>
  );
}
