import React, { useState, useRef } from "react";
import Layout from "../Components/Layout";
import DotsIcon from "../Components/Utils/Icons/DotsIcon";

function Index() {
  const formRef = useRef<HTMLFormElement>(null);

  const [postHistory, setPostHistory] = useState<string[]>([]);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const content = formData.get("postContent") as string;

    if (content.trim() !== "") {
      setPostHistory((prevHistory) => [...prevHistory, content]);
      console.log(content);
      formRef.current?.reset();
    }
  };

  return (
    <Layout title="Home">
      <form ref={formRef} onSubmit={handleForm} action="" method="POST">
        <textarea
          className="border-2 border-gray-200 rounded-md p-4 w-full outline-none resize-none focus:shadow-inner"
          name="postContent"
          placeholder="En que estas pensando?"
          id="submission"
        />
        <button
          type="submit"
          className="rounded-md py-4 px-8 bg-orange-500 text-white w-full"
        >
          Publicar
        </button>
      </form>
      <div className="mt-4">
        {postHistory.length === 0 ? (
          <div className="text-center text-gray-500 ">No hay nada aquí</div>
        ) : (
          postHistory
            .slice()
            .reverse()
            .map((post, index) => (
              <div
                className="p-4 w-full bg-gray-50 rounded-md mt-4 shadow"
                key={index}
              >
                <div className="inline-flex items-center w-full">
                  <div className="inline-flex gap-3 w-full">
                    <img
                      src="https://placehold.co/100"
                      className="rounded-full object-cover object-center aspect-square max-w-12"
                      alt=""
                    />
                    <div>
                      <p className="font-bold">John Doe</p>
                      <span className="text-gray-500 text-xs hover:underline">
                        hace 1 hora
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <DotsIcon />
                  </div>
                </div>
                <div className="postContent">{post}</div>
              </div>
            ))
        )}
      </div>
    </Layout>
  );
}

export default Index;
