import { useState } from "react";
import CardSection from "../home/cardSection/CardSection";
import SearchSortBar from "./searchSortBar/SearchSortBar";
import Data from "../../data/Data.js";
export default function Home() {
  const [bookList, setBookList] = useState(Data);
  const [viewBookList, setViewBookList] = useState(bookList);

  function onsearch(formData) {
    let searchLength = formData.searchText.length;
    if (searchLength != 0) {
      let updatedViewBookList = bookList.filter((book) =>
        book.bookName.toLowerCase().includes(formData.searchText.toLowerCase())
      );

      setViewBookList(() => updatedViewBookList);
    } else {
      setViewBookList(bookList);
    }
  }

  function onSort(sortBy) {
    let sortedName_asc_View;
    let sortedName_desc_View;
    let sortedPublication_asc_View;
    let sortedPublication_desc_View;
    if (sortBy) {
      switch (sortBy) {
        case "name_asc":
          sortedName_asc_View = [...viewBookList].sort((a, b) =>
            a.bookName.localeCompare(b.bookName)
          );
          setViewBookList(() => sortedName_asc_View);

          break;
        case "name_desc":
          sortedName_desc_View = [...viewBookList].sort((a, b) =>
            b.bookName.localeCompare(a.bookName)
          );
          setViewBookList(() => sortedName_desc_View);

          break;
        case "year_asc":
          sortedPublication_asc_View = [...viewBookList].sort(
            (a, b) => a.publishDate - b.publishDate
          );
          setViewBookList(() => sortedPublication_asc_View);

          break;
        case "year_desc":
          sortedPublication_desc_View = [...viewBookList].sort(
            (a, b) => b.publishDate - a.publishDate
          );
          setViewBookList(() => sortedPublication_desc_View);

          break;
        default: {
          let updatedViewBookList = [...viewBookList];

          setViewBookList(() => updatedViewBookList);
        }
      }
    }
  }

  function toggleFavorite(id) {
    const bookIndex = bookList.findIndex((book) => book.id === id);
    const favUpdated = [...bookList];
    favUpdated[bookIndex].isFavourite = !favUpdated[bookIndex].isFavourite;

    setBookList(favUpdated);
  }
  return (
    <>
      <main className="my-10 lg:my-14">
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
          <SearchSortBar onsearch={onsearch} onSort={onSort} />
        </header>
        <CardSection
          viewBookList={viewBookList}
          toggleFavorite={toggleFavorite}
        />
      </main>
    </>
  );
}
