import { useNavigate } from "react-router-dom";
import Head from "./Header";
import './Store_detail.css'
import Foot from "./Footer";
import png from '../assets/icon/png.png'
function Fiction() {

    const navigate14= useNavigate()
    const  show = () => { navigate14("/Book") }

    return (
        <>
            <Head></Head>
            <div className="All">
                <div className="about">
                    <div className="detail">
                        <div className="tag1">
                            <h2>ABOUT US</h2>
                        </div>
                        <h3>Welcome !!!</h3>
                        <div className="about_para1">
                            <p>Dream Page is India's Largest Book Store, Book Shopping Website. Dream Page is an exclusive Platform for New & Used Books.</p>
                        </div>
                        <div className="about_para2">
                            <p>Anyone can buy books at a reasonable price from Dream Page in any part of India. Dream Page customizes the book shopping experience of booklovers to a new level. We make online book shopping easier. One can buy Books of various eminent Authors<br></br>
                                and Publishers in Paperback or Hardback format.</p>
                        </div>
                        <div className="about_para3">
                            <p>Our bookstore has a special "No Extra Shipping Charge & Fast Shipment" service on Dream Page verified books. Shop books <br></br>from different categories like Fiction, Non-Fiction, Self-help, Autobiography, Mystery, Romance Classics, Kid Books from the Publishers like Penguin, Harper Collins, Bloomsbury Publication, Rupa Publication Om Books International, and many more. <br></br>Our Book app also has a large collection of international Bestselling books.</p>
                        </div>
                        <div className="about_para4">
                            <p onClick={show}>#Awesome:- Books are New & Exclusive.</p>
                            <p onClick={show}>#Average:- Books are a little bit old.</p>
                            <p onClick={show}>#Used:- Books are used but in good quality.</p>
                        </div>
                    </div>
                </div>
                <div className="terms">
                    <div className="detail1">
                        <div className="tag2">
                            <h2>Terms of service</h2>
                        </div>
                        <div className="term_para1">
                            <p>Welcome to Dream Page. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Dream Page.in's relationship with you in relation to this website.</p>
                        </div>
                        <div className="term_para2">
                            <p>The term ‘Dream Page’ or 'us' or 'we' refers to the owner of the website powered by Bookmart . The term 'you' refers to the user or viewer of our website.</p>
                        </div>
                        <div className="term_para3">
                            <p>The use of this website is subject to the following terms of use:</p>
                        </div>
                        <div className="term_para4">
                            <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
                        </div>
                        <div className="term_para5">
                            <p>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="detail2">
                        <div className="tag3">
                            <h2>Contact</h2>
                        </div>
                        <div className="area">
                            <div className="address">
                               
                                <h6 className="addr1">+91 8250301648</h6>
                                <h6 className="addr2">www.dreampagestore.com</h6>
                                <h6 className="addr3">763, ASP Complex<br></br>
                                    Vinobha Street,Thalavaipettai <br></br>
                                    Erode District -638001
                                </h6>
                            </div>
                            <div className="flower">
                                <img src={png}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Foot></Foot>
        </>
    )
}
export default Fiction