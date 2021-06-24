const getUsers = ({ id }) => ([
    {
        id: 22,
        name: 'Alex',
        age: 30
    }, 
    {
        id: 23,
        name: "Brandon",
        age: 21
    },
    {
        id: 25,
        name: 'Collins',
        age: 19
    }
].find(user => user.id == id)
)

const getBooks = () => ([
    {
        title: 'Book 1',
        userId: 22
    },
    {
        title: 'Book 2',
        userId: 23
    },
    {
        title: 'Book 3',
        userId: 23
    },
    {
        title: 'Book 4',
        userId: 25
    },
])


async function getAuthorsBooks(userIds, rating) {
      const authors = await Promise.all(
          userIds.map(
              async userId => await getUsers({id: userId})
        )
      );
      const books = await getBooks({ rating });
      const authorsBooks = authors.map(author => ({
        ...author,
        books: books.filter(book => book.userId === author.id)
      }))
      return authorsBooks;
  }

getAuthorsBooks([22,23]).then(val => console.log(val))