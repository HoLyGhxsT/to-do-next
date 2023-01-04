import Head from "next/head";
import { useRouter } from "next/router";

export default function Reg() {
  console.log("Loaded Registration Page");
  const router = useRouter();
  const redirect = () => {
    router.push("/login");
  };
  return (
    <>
      <Head>
        <title> To-do-next Registration </title>
      </Head>
      <div className="float-right">
        <button type="button" className="px-4 py-2 border-dotted rounded bg-blue-500" onClick={redirect}>
          Login
        </button>
      </div>
      <div className="grid place-items-center h-screen">
        <div>
          <h1 className="font-bold text-center text-3xl underline text-cyan-300">
            To-Do-APP
          </h1>
          <p className="text-center text-red-600">Made by GhxsT</p>
          <form action="/api/auth/reg" method="POST" className="text-center">
            <label htmlFor="">Username:</label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              className="rounded-full"
            />
            <br />
            <label htmlFor="">Password:</label>
            <br />
            <input
              type="text"
              name="password"
              id="password"
              minLength={7}
              title="Password atleast 7 character"
              className="rounded-full"
            />
            <br />
            <br />
            <button
              type="submit"
              className="px-4 py-2 font-bold bg-blue-500 rounded-full hover:bg-blue-700"
            >
              Click
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
