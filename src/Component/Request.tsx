import React, { useState } from "react";
import Head from "./Header";
import './Request.css'
import Foot from "./Footer";
import axios from "axios";
import { Store_API } from "./Store_API";
import { Mail } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import brand from "../assets/brand/title.png"

interface BOOKS {
    Book: string,
    Author: string,
    Mail: string,
    Title: string,
    Quantity: string,
    Mobile: string,

}
interface data {
    Book: string,
    Author: string,
    Mail: string,
    Title: string,
    Quantity: string,
    Mobile: string,
}

function Request_book() {

    const [StoreData, setStoreData] = useState<BOOKS>({
        Book: "",
        Author: "",
        Mail: "",
        Title: "",
        Quantity: "",
        Mobile: "",
    })
    const [error, setError] = useState<data>({
        Book: "",
        Author: "",
        Mail: "",
        Title: "",
        Quantity: "",
        Mobile: "",

    })
    const Navigate = useNavigate()
    const BookData = async () => {
        if (!StoreData.Book && !StoreData.Author && !StoreData.Mail && !StoreData.Title && !StoreData.Quantity && !StoreData.Mobile) {
            setError({
                ...error,
                Book: "Enter The Book Name",
                Author: "Enter The Author Name",
                Mail: "Enter The Mail Id",
                Title: "Enter The Title",
                Quantity: "Enter The Quantity",
                Mobile: "Enter The Mobile No"

            })
        }
        else {
            alert(" Your Request is Send Successfully")
            await axios.post(Store_API, StoreData)
            Navigate("/")
        }
    }

    const handlechange = (e: any) => {
        const { name, value } = e.target;
        setStoreData({
            ...StoreData,
            [name]: value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(StoreData)
        setStoreData({
            Book: "",
            Author: "",
            Mail: "",
            Title: "",
            Quantity: "",
            Mobile: "",
        })
    }

    return (
        <>
            <Head></Head>
            <div className="request">
                <div className="form">
                    <div className="dream_name">
                        <img src={brand}></img>
                    </div>
                    <h3 className="req01">Request A Book</h3>
                    <p>Please fill up the form below to Request a Book. We will inform you as soon as the book is available.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="available">

                            <div className="part1">
                                <h4>ISBN13:</h4>
                                <input
                                    type="text1"
                                    name="Book"
                                    autoComplete="off"
                                    value={StoreData.Book}
                                    onChange={handlechange}
                                >
                                </input>
                                <p className="errorPara">{error.Book}</p>
                                <div className="opt1">
                                    <h4>Author:</h4>
                                    <input
                                        type="text2"
                                        name="Author"
                                        autoComplete="off"
                                        value={StoreData.Author}
                                        onChange={handlechange}
                                    >
                                    </input>
                                    <p className="errorPara">{error.Author}</p>
                                </div>
                                <div className="opt2">
                                    <h4>Email Id:</h4>
                                    <input
                                        type="text3"
                                        name="Mail"
                                        autoComplete="off"
                                        value={StoreData.Mail}
                                        onChange={handlechange}
                                    >
                                    </input>
                                    <p className="errorPara">{error.Mail}</p>
                                </div>
                            </div>
                            <div className="part2">
                                <h4>Book Title:</h4>
                                <input
                                    type="text4"
                                    name="Title"
                                    autoComplete="off"
                                    value={StoreData.Title}
                                    onChange={handlechange}
                                >
                                </input>
                                <p className="errorPara">{error.Title}</p>
                                <div className="opt3">
                                    <h4>Quantity:</h4>
                                    <input
                                        type="number"
                                        name="Quantity"
                                        autoComplete="off"
                                        value={StoreData.Quantity}
                                        onChange={handlechange}
                                    >
                                    </input>
                                    <p className="errorPara">{error.Quantity}</p>
                                </div>
                                <div className="opt4">
                                    <h4>Phone/Mobile:</h4>
                                    <input
                                        type="text5"
                                        name="Mobile"
                                        autoComplete="off"
                                        value={StoreData.Mobile}
                                        onChange={handlechange}
                                    >
                                    </input>
                                    <p className="errorPara">{error.Mobile}</p>
                                </div>
                                <div className="submit">
                                    <button onClick={BookData} className="submit_btn">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div >
            <Foot></Foot>
        </>
    )
}
export default Request_book