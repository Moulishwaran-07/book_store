import { useState } from "react";
import './Home.css'

import banner2 from '../assets/banner/banner2.jpg'

import trend from './Trending_Book.json'
import template1 from '../assets/banner/template1.jpg'
import Good from './Book1.json'
import Kids from './Kids_story.json'
import template2 from '../assets/banner/template2.jpg'
import { useNavigate } from "react-router-dom";
import Head from "./Header";
import Foot from "./Footer";





function Home() {
    const [Trending] = useState(trend)
    // const filterItems = (item: any) => {

    //     const updateItem = trend.filter((e: any) => {
    //         return e.category === item
    //     })
    //  setTrending(updateItem)
    // }
    const [GoodStory] = useState(Good)
    // const filterItem1 = (item: any) => {

    //     const updateItem = Good.filter((e: any) => {
    //         return e.category === item
    //     })
    //     setGoodStory(updateItem)
    // }
    const [KidsStory] = useState(Kids)
    // const filterItem2 = (item: any) => {

    //     const updateItem = Kids.filter((e: any) => {
    //         return e.category === item
    //     })
    //     setKidsStory(updateItem)
    // }
    

   


    const navigate13 = useNavigate()
    const cart1 = () => { navigate13("/Book") }

   


    return (
        <div>
            <div className="front_page">
                <Head></Head>
                <div className="banners">
                    <img src={banner2}></img>
                </div>
                <div className="head1">
                    <h3>Trending Books</h3>
                </div>
                <div className="trend_book">
                    {Trending.map((element: any) => {
                        const { image, title, price, id } = element
                        return <div className="book1" key={id}>
                            <img src={image}></img>
                            <h2>{title}</h2>
                            <h4>{price}</h4>
                            <button className="book1_cart" onClick={cart1}>Collection</button>
                        </div>
                    })}
                </div>
                <hr className="line1"></hr>
                <div className="head2">
                    <h3>Best Story Books</h3>
                </div>
                <div className="trend_banner">
                    <img src={template1}></img>
                </div>
                <div className="good_story">
                    {GoodStory.map((element: any) => {
                        const { image, title, price, id } = element
                        return <div className="book2" key={id}>
                            <img src={image}></img>
                            <h2>{title}</h2>
                            <h4>{price}</h4>
                            <button className="book2_cart" onClick={cart1}>Collection</button>
                        </div>
                    })}
                </div>
                <hr className="line1"></hr>
                <div className="head3">
                    <h3>Kids Story Books</h3>
                </div>
                <div className="Kids_banner">
                    <img src={template2}></img>
                </div>
                <div className="kids_story">
                    {KidsStory.map((element: any) => {
                        const { image, title, price, id } = element
                        return <div className="book3" key={id}>
                            <img src={image}></img>
                            <h2>{title}</h2>
                            <h4>{price}</h4>
                            <button className="book3_cart" onClick={cart1}>Collection</button>
                        </div>
                    })}
                </div>
                <Foot></Foot>
            </div>
        </div>
        
    )
}

export default Home