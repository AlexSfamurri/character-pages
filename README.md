# character-pages

## API
Rick and Morty API https://rickandmortyapi.com/api/
## How paging works
What does ?page= in the URL do?

It tells the api what page we are starting on

What does your page variable do when someone clicks Next?

it increments up by 1

How does your code know there are 42 pages, and how do your buttons stop at the ends?

Since we know how many characters are avaiable and we know that each page is 20 characters max we did totalPages = Math.ceil(data.info.count / 20) which gives us a rounded up number of pages since a page does not need a full 20 to be considered a page

## Live site

https://alexsfamurri.github.io/character-pages/