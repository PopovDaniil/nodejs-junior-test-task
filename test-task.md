1. Написать в каком порядке будет вызвана консоль

console.log(1)
Promise
    .resolve()
    .then(() => console.log(2))
    .then(() => {
        setTimeout(() => {
            console.log(3)
        }, 0)
    })
    .then(() => console.log(4));

// 1,2,4,3


2. Пример из практики - надо написать парсер команд из консоли. На вход приходит такая строка:

"{cliName} <command> \
\
Create template\
\
Commands:\
  {cliName} {command1}  {description1}\
  {cliName} {command2}  {description2}\
\
Options:\
  -h, --help     Show help  [boolean]\
  -V, --version  Show version number  [boolean]\
  -v, --verbose  Verbose output information  [boolean] [default: false]\
"

На выходе надо получить это:

[
  '{cliName} {command1} --help',
  '{cliName} {command2} --help'
]

3. книги авторы, нужно по всем авторам получить инфо по этим авторам и в этой же функции получить их книги с рейтингом больше заданной величины
Вам дали merge request на код ревью, что вы измените?
В рамках этой программы можно менять все, даже сторонние функции. Лишь бы проект стал лучше.

Контекст следующий. Программист выполнял задачу по реализации функции, которая получает на вход айди пользователя и рейтинг книг. Ей необходимо вернуть информацию об этих авторах, а так же книги этих авторов с рейтингом выше присланного. Вам не нужно писать новые функции или писать новый функционал существующих, главное изменить именну эту, при этом у вас есть возможность исправить названия и входные данные существующих. Главное, чтобы другой программист мог легко понять что тут происходит.

function authors(uaerId, rating) {
    let result = [];
    // получаем пользователей по айди 
    await getusers({id: uaerId});
    // получаем книги с рейтингом выше заданного значения
    let books = await getBooks(rating);
    // выбираем все книги по присланному пользователю
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        if (book.userId === uaerId) {
            result[userId] = book.nazvanie;
        }
    }
    // фильтруем результаты, чтобы получить массив без пустых значений 
    result = result.filter((item) => item);

    return result;
}

4. Имеется нижепредставленная таблица. В ней 5 авторов и 5 книг. Что вернет каждый из запросов?

USERS                                             BOOKS
| userId | name    |                              | bookId | title  | userId |
______________________________________________________________________________
|    1   | Иван    |                              |    1   | Книга1 |   1    |
|    2   | Игнат   |                              |    2   | Книга2 |   1    |
|    3   | Игорь   |                              |    3   | Книга3 |   2    |
|    4   | Ибрагим |                              |    4   | Книга4 |   2    |
|    5   | Илья    |                              |    5   | Книга5 |   3    |

А. `SELECT u.name, b.title FROM 
users as u
LEFT JOIN books as b
ON u.userId = b.userId
`

Б .`SELECT u.name, b.title FROM 
users as u
INNER JOIN books as b
ON u.userId = b.userId
`

5. Что такое транзакция и зачем она нужна? Лучше отвечать своими словами и придумать простенький пример где это особенно нужно.
