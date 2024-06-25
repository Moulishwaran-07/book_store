
import './Footer.css'

import brand from '../assets/brand/icon.png'
import { useNavigate } from "react-router-dom";



function Foot() {
    const Navigate7 = useNavigate()
    const Book = () => { Navigate7("/Book") }

    const Navigate8 = useNavigate()
    const HOME = () => { Navigate8("/") }

    const Navigate9 = useNavigate()
    const Dream1 = () => { Navigate9("/") }

    const Navigate11 = useNavigate()
    const Store_detail = () => { Navigate11("/Store_detail") }

    const Navigate12 = useNavigate()
    const Request_book = () => { Navigate12("/Request_book") }

    return (
        <>
            <div className="Footer">
                <div className="top_bar">
                    <div className="move">
                        <span>#Best-Selling2024 "The Silent Patient"</span><span>"#New Collection Books"</span><span>"#Trending Book"</span><span>"#New Story Book"</span>
                    </div>
                    <div className="move">
                        <span>#Best-Selling2024 "The Silent Patient"</span><span>"#New Collection Books"</span><span>"#Trending Book"</span><span>"#New Story Book"</span>
                    </div>
                </div>
              
                <div className="Foot_design">
                    <div className="links">
                        <h1>QUICK LINKS</h1>

                        <h3 onClick={HOME}>Home</h3>
                        <h3 onClick={Book}>Book Store</h3> 
                        <h3 onClick={Request_book}>Request a Book</h3>
                        <h3 onClick={Store_detail}>Store Details</h3>
                        

                    </div>
                    <div className="about">
                        <h1>ABOUT</h1>
                        <p>Dreamy Page Book Store is India's Largest Book Store,
                            Book Shopping Website.
                            Dreamy Page is an exclusive Platform for
                            Brand New Books.</p>
                    </div>
                    <div className="brand">
                        <h1>DREAMY PAGE</h1>
                        <img src={brand} onClick={Dream1}></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Foot