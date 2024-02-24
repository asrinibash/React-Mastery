import React, { useState, useEffect } from "react";

import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https:api.github.com/users/asrinibash")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">
      <h1>Github Followers : {data.followers}</h1>
      <img src={data.avatar_url} alt="Github Picture" width={300} />
    </div>
  );
}

export default Github;

export const GithubInfoLoader = async () => {
  const response = await fetch("https:api.github.com/users/asrinibash");
  return response.json();
};
