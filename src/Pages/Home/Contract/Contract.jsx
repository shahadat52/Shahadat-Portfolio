import React from "react";

const Contract = () => {
    const handleSubmit = (event)=> {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const comment = form.comment.value

        console.log(name, email, comment);


    }
  return (
    <div id="contract" className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 md:cols-1 text-white mx-5 mt-3">
      <div className="m-[15%]">
        <h1 className="text-[35px] font-bold mb-3">Contract me?</h1>
        <p>
          Feel free to send me any message about me or wanna hire me or need any
          help in your project. I will reply you as soon as possible. Please
          enter a valid email so that I can contact you.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div  className="flex">
          <div>
            <p className="mb-2">Name</p>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered text-black  w-full max-w-xs"
              required
            />
          </div>
          <div className="ml-5">
            <p className="mb-2">Email</p>
            <input
              type="text"
              name="email"
              placeholder="Type here"
              className="input  text-black w-full max-w-xs"
              required
            />
            <br />
          </div>
        </div>
        <p className="my-2">Your massage</p>
        <textarea
          className="rounded-md text-black p-3"
          name="comment"
          id=""
          cols="59"
          rows="08"
          required
        ></textarea>{" "}
        <br />
        <input
          type="submit"
          value="Send"
          className="px-10 rounded-lg font-bold py-2 btn-outline bg-[#846b86]"

        />
      </form>
    </div>
  );
};

export default Contract;
