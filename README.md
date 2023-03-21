This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Firstly, install the dependencies:

```bash
npm i
```

First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

After, successfully fire the website:
1. A homepage, that displays the trending news articles from various categories, such as business, entertainment, sports, etc.
2. Clicking on a news article should take the user to a page that displays the full article.
3. More Category Dropdown menu is for to filter the news articles by particular category.
4. A search bar that allows users to search for news articles by keyword or topics( Debouncing, Typeahead is used ).
5. Also have features like client-side pagination and auto sorting for the news articles.
