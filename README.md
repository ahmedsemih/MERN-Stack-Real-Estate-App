![estate-hub-home](https://github.com/ahmedsemih/MERN-Stack-Real-Estate-App/assets/102798814/a64cdbd4-7faa-4ae7-8f28-e60643387120)

# Estate Hub 

Estate Hub is a mern-stack real estate application. In this app users can create account, view the listings, filter or search the listings and add them to favorites if they like. Also they can create a listing and put their estate for sale or rent.

**Live demo: [https://estate-hub-ase.vercel.app/](https://estate-hub-ase.vercel.app/)**

## :bulb: Features

- Responsive UI
- Dark and Light Theme
- Infinite Scroll
- JWT Authentication
- Filter Listings
- Search for Location or Title
- Create and Edit Listing
- Notifications and Favorites

## :hammer_and_wrench: Built With

- [Typescript](https://www.typescriptlang.org/) - Main Language
- [React](https://reactjs.org/) - UI Library
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [Zustand](https://zustand-demo.pmnd.rs/) - State Management
- [GraphQL](https://graphql.org/) - Query Language
- [Nodejs](https://nodejs.org/en) - Backend
- [Expressjs](https://expressjs.com/) - Nodejs Framework
- [MongoDB](https://www.mongodb.com/) - NoSQL Database
- [Mongoose](https://mongoosejs.com/) - Database ODM
- [React Icons](https://react-icons.github.io/react-icons/) - Icon Library
- [Bcrypt](https://www.npmjs.com/package/bcryptjs) - Encryption
- [Cloudinary](https://www.cloudinary.com/) - Image Storage

## :camera_flash: Screenshots
![estate-hub-home](https://github.com/ahmedsemih/MERN-Stack-Real-Estate-App/assets/102798814/2f14a18e-489f-4064-a231-ddca59ce8b63)
![estate-hub-search](https://github.com/ahmedsemih/MERN-Stack-Real-Estate-App/assets/102798814/314ae60b-d111-4d27-b088-db5d60f3e83c)
![estate-hub-estate](https://github.com/ahmedsemih/MERN-Stack-Real-Estate-App/assets/102798814/0ca1cc43-9a72-48af-a77d-294a746e89b2)

## :triangular_flag_on_post: Getting Started

First of all you need to clone the repository and install the dependencies for server and client

```shell

git clone https://github.com/ahmedsemih/MERN-Stack-Real-Estate-App.git

cd client

npm install

cd ..

cd server

npm install

```

After doing this you must assign the following environment variables

for client:

```shell

VITE_CLOUD_NAME - Cloudinary cloud name
VITE_UPLOAD_PRESET - Cloudinary upload preset

```

for server:

```shell

MONGODB_URI
JWT_ACCESS_SECRET
JWT_REFRESH_SECRET

```

And run dev server for both

```shell

npm run dev

```



