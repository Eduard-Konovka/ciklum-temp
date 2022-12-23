import Book from "./Book";

export default function Shelf({ title, books }) {
  // ========== Початок зони редагування ==============
  return (
    <section className="bookshelf">
      <h2>{title}</h2>

      <div className="bookshelf__container">
        {books.map((book) => (
          <Book item={book} key={book.title} />
        ))}
      </div>
    </section>
  );
  // ========== Кінець зони редагування ===============
}
