import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);

    const allBooks = useLoaderData();
    // locally we will directly get the read book list from the database

    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id)); // data id ta holo string tai jonno setake number e convert kora holo.

        //worst way
        console.log(storedReadList,storedReadListInt ,allBooks)

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
    } ,[])



    return (
        <div>
            <h2 className='text-4xl my-8'>Listed Books</h2>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-3xl font-bold'>Books I Read: {readList.length}
                       <div className=' gap-y-12 sm:gap-x-12 grid grid-cols-1 sm:grid-cols-2'>
                       {
                           readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                       </div>
                    </h2>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl font-bold'>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;