const GeneralSettings = () => {
  return (
    <div className="flex flex-col items-center overflow-auto h-[83vh]  ">
      <div className="w-full flex flex-col justify-start items-center">
        <div className="rounded-full border-2 indicator  ">
          <img
            className="w-56 h-56 m-2 rounded-full "
            src="
          https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
        <div className=" hover:animate-pulse border-4 cursor-pointer relative mt-4 p-4 rounded-lg border-dashed border-primary">
          Click to choose profile pic
          <input
            type="file"
            accept="image/*"
            className="absolute w-full h-full opacity-0 left-0 top-0 cursor-pointer z-10"
          />
        </div>
        <button className="btn btn-primary mt-4 px-20 ">Update Pic</button>
        <div className="w-8/12 ">
          <form className="w-full mt-2 flex flex-col gap-3  items-center justify-start">
            <h1 className="card-title text-2xl ">Update Details</h1>
            <div className="flex flex-col w-full">
              <label>Username</label>
              <input
                className="input-bordered p-4 bg-base-300 rounded-xl outline-none"
                placeholder="jhondoe04"
                type="text"
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Name</label>
              <input
                className="input-bordered p-4 bg-base-300 rounded-xl outline-none"
                placeholder="Jhon doe"
                type="text"
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Bio</label>
              <input
                className="input-bordered p-4 bg-base-300 rounded-xl outline-none"
                placeholder="Hay i am using coChatter"
                type="text"
              />
            </div>
            <button
              className="btn my-5 w-full btn-primary"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
