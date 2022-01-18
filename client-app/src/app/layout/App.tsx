import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Book } from '../models/book';
import NavBar from './NavBar';
import BookDashboard from '../../features/books/dashboard/BookDashboard';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);

  useEffect(() => {
    axios.get<Book[]>('http://localhost:5000/api/books').then(response => {
      setBooks(response.data);
    })
  }, [])

  function handleSelectBook(id: string) {
    setSelectedBook(books.find(x => x.id === id))
  }

  function handleCancelSelectBook() {
    setSelectedBook(undefined);
  }

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <BookDashboard 
        books={books}
        selectedBook={selectedBook}
        selectBook={handleSelectBook}
        cancelSelectBook={handleCancelSelectBook}
        />
      </Container>

    </>
  );
}

export default App;
