import React, { useState } from "react";
import { ISBN_REGEX, openNotificationWithIcon } from './helpers'
import { getBookByISBN } from '../../services/bookService'
import Book from "./Book";
import { Input } from "antd";
import BooksImage from '../../assets/books.png'
import IsbnCollapse from "./IsbnCollapse";

const { Search } = Input;


const BooksView = () => {
    const [book, setBook] = useState(null);
    const [isbn, setIsbn] = useState("");
    const [loading, setLoading] = useState(false);


    const getBookData = () => {
        if (!isbn) return
        setLoading(true);
        if (ISBN_REGEX.test(isbn)) {
            getBookByISBN(isbn).then((response) => {
                setBook(response.data);
                setIsbn("");
            }).catch((response) => {
                openNotificationWithIcon("error", response.message);
            });
        } else {
            openNotificationWithIcon("error", "Wrong ISBN number provided.");
        }
        setLoading(false);
    }

    const onSearchChange = (event) => {
        setIsbn(event.target.value);
    }

    return (
        <>
            <div className="text-orange-900">
                <div className="w-full h-16 bg-orange-200 flex justify-end p-3 items-center">
                    <div className="w-50">
                        <Search
                            placeholder="ISBN"
                            name="ISBN"
                            value={isbn}
                            onSearch={() => getBookData()}
                            onChange={(e) => onSearchChange(e)}
                        />
                    </div>
                </div >
                <IsbnCollapse />
                {!book ?
                    <div className="flex text-center flex-col">
                        <div className="p-2 pl-5">
                            <p className="text-orange-900 text-xl mt-4">Search for your book easily using ISBN 10 or 13!</p>
                        </div>
                        <img alt="Books" src={BooksImage} className="w-[600px] mx-auto" />
                    </div>
                    :
                    <div>
                        <Book book={book} loading={loading} />
                    </div>
                }
            </div>
        </>);
}

export default BooksView;