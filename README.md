# Quick Start

Clone this repo:

```
git clone git@github.com:jerrashi/yardie.git
```

## Install the Server

```
cd server
npm install
cd ..
```

## Install the Client

```
cd client
npm install
```

### Build Assets

```
npm run build
```

## Run the Client

In the same tab, since we're already in the `client` directory, launch the client:

```
npm run dev
```

## Run the Server

Open a *new tab*. Assuming that your terminal manager opens new tab at the same location:

```
cd ..
cd server
```

Create an empty `.env` file:

```
touch .env
```

Fill in `.env` with your database credentials (as discussed in class).

Then:

```
npm start
```

Keep both of these tabs open while you're working on the app.

## Open the App in Browser

Navigate to `localhost:5173` to the the app running.

