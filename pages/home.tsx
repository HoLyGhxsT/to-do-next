import Head from "next/head";

export default function Home() {
  console.log("Home Page Loaded");
  return (
    <>
      <Head>
        <title> Home Page </title>
      </Head>
      <div className="center">
        <h1>Success</h1>
      </div>
    </>
  );
}
