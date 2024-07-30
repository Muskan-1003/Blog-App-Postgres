import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { getBlogs } from "../api/Api";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();
  let category=searchParams.get('category')


    useEffect(() => {
      async function fetchData(){

        const allBlogs =await getBlogs(searchParams.get('category'));
        setBlogs(allBlogs.data);
      }
      fetchData();
    }, [searchParams]);

    useEffect(() => {
      async function fetchData(){

        const allBlogs =await getBlogs();
        setBlogs(allBlogs.data);
      }
      fetchData();
    }, []);

  const data = [
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/200/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/208/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/209/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/206/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/208/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/200/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/203/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/202/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/201/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
  ];

  return (
    <div>
 
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {blogs && blogs.map((x) => {
          return <Card blogData={x} />;
        })}
      </div>
    </div>
  );
};

export default Home;
