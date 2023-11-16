import React, { useEffect, useState } from "react";
// import Logo from '../../../assets/images/anh1.png';
// import { Link } from "react-router-dom";
import Slider from "./Slider"
import categoryservice from "../../../services/CategoryService";

import ProductHome from "./ProductHome";
import New_Products from "./ProductNew";

import Post from "../../frontend/Post"




function Home() {
    const [categorys, setCategorys] = useState([]);
    // const [topics, setTopics] = useState([]);

    useEffect(function () {
        (async function () {
            const result = await categoryservice.getCategoryByParentId(0)
            setCategorys(result.data.categorys);
            // const result1 = await topicservice.getTopicByParentId(0)
            // setTopics(result1.data.topics);
        })();

    }, []);
    return (<section className="maincontent">

        <Slider />
        <New_Products/>
        {categorys.map(function (category, index) {
            return <ProductHome key={index} category={category} />
        })}
         {/* {topics.map(function (topic, index) {
            return <PostHome key={index} topic={topic} />
        })} */}
       
        <Post/>

    </section >
    )
};
export default Home;


