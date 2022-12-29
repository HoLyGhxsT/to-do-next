export default function Home(this: any) {
  console.log("Loaded Index Page");
  return (
    <>
      <div className="grid place-items-center h-screen">
        <div>
        <h1 className="font-bold text-center text-3xl underline text-cyan-300">
          To-Do-APP
        </h1>
        <p className="text-center text-red-600">Made by GhxsT</p>
        <form action="/api/auth" method="POST" className="text-center">
          <label htmlFor="">Username:</label>
          <br />
          <input type="text" name="name" id="" className="rounded-full" />
          <br />
          <label htmlFor="">Password:</label>
          <br />
          <input type="text" name="pass" id="" className="rounded-full" />
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
