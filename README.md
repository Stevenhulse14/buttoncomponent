To Set up tailwind in a vite application

go to => https://tailwindcss.com/docs/guides/vite

run these two commands

    1: `npm install -D tailwindcss postcss autoprefixer` ( installs dependancies )
    2: `npx tailwindcss init -p`  ( creates tailwind.config.js )

Inside your newly created Vite application intergrated with tailwind
Now we need to configure it to work in your vite application

inside the tailwind.config.js
inside of `content` add these two lines of paths  
the first one is directed to all files inside your src and the other is to target your `index.html` file
"./index.html"
"./src/\*_/_.{js,ts,jsx,tsx}"

# using the

classnames lib to help buildout css tailwind strings
