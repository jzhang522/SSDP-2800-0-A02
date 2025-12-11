# Weather Comparison App

A React application that allows users to compare real-time weather conditions between two cities using the OpenWeatherMap API. Features multi-page routing with React Router.

## Features

- **Side-by-side weather comparison** between an origin city and current city
- **Real-time weather data** including temperature, description, humidity, and wind speed
- **Global state management** using React Context API
- **Multi-page routing** with React Router (Home and About pages)
- **Loading and error states** for better user experience
- **Responsive design** with provided CSS styling

## Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **React Router 6** - Client-side routing
- **OpenWeatherMap API** - Weather data source
- **Context API** - Global state management
- **ESLint** - Code linting and quality

## AI Tools Used

This project was developed with assistance from **GitHub Copilot** (using Claude Sonnet 4.5) in **Plan Mode** for:

- **Learning-focused development** - Plan mode provides step-by-step guidance without auto-implementing code, allowing students to write code manually and build understanding
- **Architecture planning** - Understanding React best practices for Context API, useEffect hooks, and component separation
- **Debugging assistance** - Troubleshooting API integration, state management, and routing issues
- **Documentation** - Generating comprehensive README, License, Comments, Table of Contents, and setup instructions
- **Code review** - Ensuring proper error handling, loading states, and React patterns

**Why Plan Mode?**  
Plan mode explains *what* to build and *why*, rather than building it automatically. This approach prioritizes understanding React concepts over rapid implementation, making it ideal for educational assignments.

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SSDP-2800-0-A02
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
   - Add your API key to `.env`:
     ```
     VITE_WEATHER_API_KEY=your_actual_api_key_here
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**
   - Navigate to `http://localhost:5173` in your browser

## Project Structure

```
src/
├── components/
│   ├── WeatherContext.jsx    # Context definition
│   ├── WeatherProvider.jsx   # Context provider component
│   ├── CityInputs.jsx         # City input form
│   └── WeatherCard.jsx        # Weather display component
├── pages/
│   ├── Home.jsx               # Home page (weather comparison)
│   └── About.jsx              # About page (group information)
├── App.jsx                    # Main app with routing
├── App.css                    # Application styling
└── main.jsx                   # App entry point with BrowserRouter
```

## Usage

### Home Page (Weather Comparison)
1. Enter your **origin city** (where you're from) in the first input field
2. Enter your **current city** (where you are now) in the second input field
3. View real-time weather data for both cities displayed side-by-side

### About Page
- View information about the project group members
- Navigate using the navigation links

## Routing

- `/` - Home page with weather comparison functionality
- `/about` - About page with group member information

Navigation between pages uses React Router's `<Link>` component.

## API Reference

This app uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current):
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Units: Metric (Celsius)
- Free tier: 60 calls/minute, 1,000,000 calls/month

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Learning Objectives

This project demonstrates:
- ✅ React Context API for global state management
- ✅ useEffect hook for side effects and API calls
- ✅ Async/await with error handling
- ✅ Controlled components and form handling
- ✅ Component composition and reusability
- ✅ Environment variable management
- ✅ Loading and error states
- ✅ React Router for multi-page navigation
- ✅ BrowserRouter setup and configuration
- ✅ Routes, Route, and Link components

## Assignment Details

**Course**: SSDP 2800  
**Assignments**: 02 & 03 - Weather Comparison App with Routing  
**Assignment 02 Due**: December 13, 2025 (30%)  
**Assignment 03 Due**: December 20, 2025 (40%)  
**Total Value**: 70%

### Assignment 02 (30%)
- Context API global state management
- Weather API integration with useEffect
- Loading, error, and success states
- Controlled input components
- Side-by-side weather comparison

### Assignment 03 (40%)
- React Router integration
- Multi-page navigation (Home and About)
- BrowserRouter setup in main.jsx
- Routes and Link components
- Successful production build

## License

MIT License - See [License.md](License.md) file for details.

This project is created for educational purposes as part of SSDP 2800 coursework.


