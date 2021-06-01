# 1. Что будет выведено на консоль при выполнении следующего скрипта:

```js
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
console.log(5)
```

По возможности объясните почему не `12345`, уточните как работает асинхронность в JS при условии, что он однопоточный (можно очень кратко, главное суть :))

# 2. Функция-парсер.

Пример из практики. Есть CLI (command line interface, програмка, которая используется в консоли (терминале)). Необходимо написать парсер, который на вход получает help message CLI'ки, а на выход отдает массив команд этой CLI'ки.

На вход функции парсера будет приходить следующая строчка:

```bash
{cliName} <command>

Create template

Commands:
  {cliName} {command1}  {description1}
  {cliName} {command2}  {description2}

Options:
  -h, --help     Show help  [boolean]
  -V, --version  Show version number  [boolean]
  -v, --verbose  Verbose output information  [boolean] [default: false]
```

На выходе нужно получить вот такой массив:

```js
[
  '{cliName} {command1} --help',
  '{cliName} {command2} --help'
]
```

PS: вместо `{cliName}`, `{command1}`, `{command2}`, `{description1}` и `{description2}` будут реальные названия + команд м.б. больше чем две. Считайте, что название CLI'ки и названия команд не содержат пробелов. Ниже конкретный пример:

```bash
template-creator <command>

Create template

Commands:
  template-creator microservice  Create microservice template
  template-creator dictionary  Create dictionary template
  template-creator model  Create model template

Options:
  -h, --help     Show help  [boolean]
  -V, --version  Show version number  [boolean]
  -v, --verbose  Verbose output information  [boolean] [default: false]
```

# 3. Code review

## Задача:

Нужно по переданным в параметрах идентификаторам авторов получить информацию по этим авторам + книги этих авторов с рейтингом выше заданной величины (рейтинг - это также параметр функции).

## Контекст:

Программист выполнял задачу согласно описанным выше требованиям. Закончил и прислал Вам merge request, который нужно проверить.

## Что нужно сделать:

Нужно проверить merge request. Опишите, что Вы измените. Можете предоставить свой вариант функции. В рамках этой программы можно менять все, лишь бы проект стал лучше. Не нужно писать новые функции или писать новый функционал существующих, главное изменить именну эту, при этом у Вас есть возможность исправить названия и входные данные существующих, а также code style программы в целом.

```js
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
```

# 4. В чем отличие LEFT JOIN от INNER JOIN

В базе данных имеются две таблички (книги и авторы). В каждой табличке по 5 записей.

Таблица `users`:

| userId | name    |
| ------ | ------- |
| 1      | Иван    |
| 2      | Игнат   |
| 3      | Игорь   |
| 4      | Ибрагим |
| 5      | Илья    |

Таблица `books`:

| bookId | title  | userId |
| ------ | ------ | ------ |
| 1      | Книга1 | 1      |
| 2      | Книга2 | 1      |
| 3      | Книга3 | 2      |
| 4      | Книга4 | 2      |
| 5      | Книга5 | 3      |

Что вернет каждый из запросов?

-
  ```sql
  SELECT u.name, b.title
  FROM  users as u
  LEFT JOIN books as b
  ON u.userId = b.userId
  ```

  Результат запроса:

  | name  | title |
  | :---: | :---: |
  |   ?   |   ?   |
  |   ?   |   ?   |
  |   ?   |   ?   |
-
  ```sql
  SELECT u.name, b.title
  FROM  users as u
  INNER JOIN books as b
  ON u.userId = b.userId
  ```

  Результат запроса:

  | name  | title |
  | :---: | :---: |
  |   ?   |   ?   |
  |   ?   |   ?   |
  |   ?   |   ?   |

# 5. Что такое транзакция

Что такое транзакция, зачем она нужна? Лучше отвечать своими словами и придумать простенький пример где это особенно нужно.
