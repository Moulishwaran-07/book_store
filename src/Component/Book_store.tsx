import { useState, useMemo } from "react";
import Head from "./Header";
import books from './Book_store.json'
import './Book_store.css'
import carti from "../assets/icon/cart_icon.png"
import heart from '../assets/icon/heart.png'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton1 from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge1 from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button0 from '@mui/material/Button';
import Snackbar0 from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Home from "./Homepage";
import Foot from "./Footer";


function Best() {
    const [Books, setBooks] = useState(books)
    const filterItems = (item: any) => {

        const updateItem = books.filter((e: any) => {

            if (e.language === item) {
                return e.language === item
            }
            else {
                return e.category === item
            }

        })

        setBooks(updateItem)
    }


    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="warning" size="large" onClick={handleClose}>
                View
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}

            >
                <CloseIcon fontSize="medium" />
            </IconButton>
        </React.Fragment>
    );

    const [count, setCount] = useState<number>(0)
    const [arra, setArr] = useState<number[]>([1, 2, 3, 4, 5])

    const [cart, setCart] = useState<number>(0)
    const [arr, setArra] = useState<number[]>([1, 2, 3, 4, 5])


    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 1,
            border: `1px solid ${theme.palette.background.paper}`,
            padding: '0 5px',

        },
    }));

    const [open0, setOpen0] = React.useState(false);

    const handleClick0 = () => {
        setOpen0(true);
    };

    const handleClose0 = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen0(false);
    };



    return (
        <>
            <div className="sec_page">
                <Head></Head>
                <div className="book_store">
                    <h1>The Great Story Books</h1>
                </div>
                <div className="cart_icon">
                    <Badge1 badgeContent={count} color="secondary" className="heart" >
                        <FavoriteIcon color="warning" fontSize="large" />
                    </Badge1>
                    <IconButton1 aria-label="cart">
                        <StyledBadge badgeContent={cart} color="success">
                            <ShoppingCartIcon color="warning" fontSize="large" />
                        </StyledBadge>
                    </IconButton1>
                </div>
                <div className="sort">
                    <h6 className="sort1">Sort By : </h6>
                    <form className="by">
                        <select name="area">

                            <option value="relevance">Relevance</option>
                            <option value="low">Price - Low To High</option>
                            <option value="high">Price - High To Low</option>

                        </select>
                    </form>
                </div>
                <div className="parts">
                    <div className="option">
                        <div className="cat1">
                            <h3 className="tit">Dreamy Page Books</h3>
                            <div className="dot1">
                                <input
                                    type="radio"
                                    name="book"
                                    onClick={() => filterItems("best")}
                                >
                                </input>Best Book
                            </div>
                            <div className="dot2">
                                <input
                                    type="radio"
                                    name="book"
                                    onClick={() => filterItems("kid")}
                                >
                                </input>Kids Book
                            </div>
                            <div className="dot3">
                                <input
                                    type="radio"
                                    name="book"
                                    onClick={() => filterItems("upsc")}
                                >
                                </input>UPSC Book
                            </div>
                            <div className="dot4">
                                <input
                                    type="radio"
                                    name="book"
                                    onClick={() => filterItems("trending_book")}
                                >
                                </input>Trending Book
                            </div>
                            <div className="dot5">
                                <input
                                    type="radio"
                                    name="book"
                                    onClick={() => filterItems("motivation")}
                                >
                                </input>Motivation Book
                            </div>
                            <div className="dot6">
                                <input
                                    type="radio"
                                    name="book"
                                    onClick={() => filterItems("life")}
                                >
                                </input>Life Story Book
                            </div>
                            <div className="dot7">
                                <input
                                    type="radio"
                                    name="book"
                                    onClick={() => filterItems("love")}
                                >
                                </input>Love Story Book
                            </div>
                            <div className="dot8">
                                <input
                                    type="radio"
                                    name="book"
                                    onClick={() => filterItems("cook")}
                                >
                                </input>Cooking Recipe Book
                            </div>
                        </div>
                        <div className="cat2">
                            <h3 className="lan">Language</h3>
                            <div className="che1">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    onClick={() => filterItems("tamil")}
                                >
                                </input>Tamil
                            </div>
                            <div className="che2">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    onClick={() => filterItems("english")}
                                >
                                </input>English
                            </div>
                            <div className="che3">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    onClick={() => filterItems("hindi")}
                                >
                                </input>Hindi
                            </div>

                        </div>
                    </div>
                    <div className="cart">
                        <div className="Books">
                            {Books.map((element: any) => {
                                const { image, title, price, category, language, id } = element
                                return <div className="All_book" key={id}>
                                    <img src={image}></img>
                                    <h2>{title}</h2>
                                    <h4>{price}</h4>

                                    <Button onClick={handleClick} className="fav" color="warning" onClickCapture={() => setCount(count + 1)}>Wishlist</Button>
                                    <Snackbar
                                        open={open}
                                        autoHideDuration={6000}
                                        onClose={handleClose}
                                        message="Added To Wishlist"
                                        action={action}
                                    />
                                    <span>{category}</span>
                                    <span>{language}</span>




                                    <Button0 onClick={handleClick0} onClickCapture={() => setCart(cart + 1)} className="books_cart" color="warning">Add To Cart</Button0>
                                    <Snackbar0 open={open0} autoHideDuration={6000} onClose={handleClose0}>
                                        <Alert
                                            onClose={handleClose0}
                                            severity="success"
                                            variant="filled"
                                            sx={{ width: '100%' }}
                                        >
                                            Your Item Added To Cart <button className="pop">VIEW</button>
                                        </Alert>
                                    </Snackbar0>
                                    {/* <button className="books_cart" onClick={() => setCart(cart + 1)}>Add To Cart</button> */}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        </>
    )
}

export default Best