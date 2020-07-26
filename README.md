`HEY OH!`

### News article single page application

1. Single page application that loads articles from newsapi.org from washington post and ny times.
2. Utilizes redux for one true source
3. Uses `sass` for styling
4. Infinite scrolling is implemented
5. Search is implemented
6. Flexbox is used for the cards

### Requirements / Assumptions:

1. App assumes that you have a compiler for sass to compile. Best thing to use with visual studio code is `Live Sass Compiler` . Use whatever your IDE has.
2. For environment variables, you need to add a `.env` file where you have to put a `NEWS_API_KEY=your_api_key_from_newsapi` variable. This is used in the apiService when making requests. Added this just as a best practice in getting used to using env variables for keys

### How to run

1.  Yarn / npm install on the root
2.  `yarn dev` to execute the webpack dev server and follow the port you'll see on the terminal
