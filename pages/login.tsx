import Head from "next/head";
import { useRouter } from "next/router";

export default function Login() {
  console.log("Loaded Index Page");
  const router = useRouter();
  const redirect = () => {
    router.push("/");
  };
  return (
    <>
      <Head>
        <title> To-do-next Login </title>
      </Head>
      <div className="flex flexbox flex-col">
        <div className="grid place-items-end">
          <button
            type="button"
            className="px-4 py-2 border-dotted rounded bg-blue-500"
            onClick={redirect}
          >
            Registration
          </button>
        </div>
        <div className="grid place-items-center h-screen ">
          <div>
            <h1 className="font-bold text-center text-3xl underline text-cyan-300">
              To-Do-APP
            </h1>
            <p className="text-center text-red-600">Made by GhxsT</p>
            <form
              action="/api/auth/login"
              method="POST"
              className="text-center"
            >
              <label htmlFor="">Username:</label>
              <br />
              <input
                type="text"
                name="email"
                id=""
                className="rounded-full"
                placeholder="Enter your Email"
              />
              <br />
              <label htmlFor="">Password:</label>
              <br />
              <input
                type="text"
                name="password"
                id=""
                className="rounded-full"
                placeholder="Enter your password"
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
      </div>
    </>
  );
}
