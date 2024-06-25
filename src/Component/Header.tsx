
import "./Header.css"
import title from '../assets/brand/title.png'
import { useNavigate } from "react-router-dom";



function Head() {

    const Navigate1 = useNavigate()
    const Book = () => { Navigate1("/Book") }

    const Navigate2 = useNavigate()
    const Home = () => { Navigate2("/") }

    const Navigate3 = useNavigate()
    const Dream = () => { Navigate3("/") }

    const Navigate5 = useNavigate()
    const Store_detail = () => { Navigate5("/Store_detail") }

    const Navigate6 = useNavigate()
    const Request_book = () => { Navigate6("/Request_book") }

    return (
        <>
            <div className="navigation">

                <div className="top_bar">
                    <div className="move">
                        <span>#Best-Selling2024 "The Silent Patient"</span><span>"#New Collection Books"</span><span>"#Trending Book"</span><span>"#New Story Book"</span>
                    </div>
                    <div className="move">
                        <span>#Best-Selling2024 "The Silent Patient"</span><span>"#New Collection Books"</span><span>"#Trending Book"</span><span>"#New Story Book"</span>
                    </div>
                </div>
                <div className="top">
                    <img src={title} onClick={Dream}></img>
                    <input
                        type="text"
                        name="name"
                        placeholder="SEARCH BOOKS , AUTHOR OR ISBN"
                        autoComplete="off"
                    >
                    </input>
                    <button className="search"></button>
                    <h6 className="sign_btn">SIGN IN</h6>
                </div>
                <div className="nav">
                    <button onClick={Home} className="btn00">Home</button>
                    <button onClick={Book} className="btn01">Book Store</button>
                    <button onClick={Request_book} className="btn02">Request a Book</button>
                    <button onClick={Store_detail} className="btn03">Store Details</button>
                   
                </div>
                <hr></hr>
            </div>
        </>
    )
}
export default Head