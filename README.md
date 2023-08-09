# My Movie List - App

My Movie List is a web application developed using **Next.JS** that allows users to easily manage their movie preferences. This project integrates various features such as movie referencing, searching, user authentication (Basic and OAuth2), and a watchlist system.

It harnesses [The Movie Database API](https://developer.themoviedb.org/reference) for movie information and leverages the private [My Movie List REST API](https://github.com/antoine2116/My-Movie-List_RestAPI), developed in Golang, for authentication and watchlist management.

The UI is styled using [Tailwind CSS](https://tailwindcss.com/) to ensure an intuitive and responsive user experience.

## Preview
![Preview](https://github.com/antoine2116/My-Movie-List_App/blob/main/preview/preview-dark.png?raw=true#gh-dark-mode-only)
![Preview](https://github.com/antoine2116/My-Movie-List_App/blob/main/preview/preview-light.png?raw=true#gh-light-mode-only)

## Getting Started

1. Clone the Repository:

```bash
git clone https://github.com/antoine2116/My-Movie-List_App.git
cd My-Movie-List_App
```

2. Install Dependencies:

```bash
npm install
```

3. Set Environment Variables:

Create a `.env.local` file in the project root and add the following variables:

```dosini
TMDB_URL=https://api.themoviedb.org/3
TMDB_TOKEN=<your_tmdb_token>

NEXT_PUBLIC_REST_API_URL=http://localhost:8081

NEXT_PUBLIC_GOOGLE_CLIENT_ID=<your_google_client_id>
NEXT_PUBLIC_GOOGLE_REDIRECT_URI=$NEXT_PUBLIC_REST_API_URL/auth/google/callback
```

4. Start the development server:

```bash
npm run dev
```

5. Access the app :

Open your web browser and navigate to http://localhost:3000.

## Todo:

- Film page : share button on the detail panel, check other website to display more infos, invert percentage
- Home page : netflix like (categories with carousel)
