# Angular Weather App

This is a simple weather application built with Angular. It fetches weather data from the WeatherAPI using an Angular service. The user can search for the weather of any city.

## Project Structure

The project mainly consists of a Weather service (weather.service.ts) and an app component (app.component.ts).

The WeatherService uses Angular's HttpClient to make HTTP requests to the WeatherAPI. It has a single method getWeatherData(cityName: string) that takes in a city name and fetches the weather data for that city.
The AppComponent is the root component of the application. It uses the WeatherService to get the weather data and displays it in the view (app.component.html).

## Usage

To use the application, simply type in the name of the city in the search bar and press enter. The application will then display the current weather data for that city, including:

* Current temperature
* Daytime or nighttime visual representation
* UV index
* Current weather condition icon and description
* Current humidity
* Current wind speed


### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

