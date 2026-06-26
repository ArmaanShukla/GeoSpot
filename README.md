# GeoSpot

GeoSpot is a location-based web application that helps users discover nearby places such as restaurants, cafes, hospitals, ATMs, and parks using an interactive Google Map.

## Features

- Detects user's current location
- Displays location on Google Map
- Provides nearby place category buttons
- Shows nearby place markers
- Displays place information in a side panel
- Responsive user interface
- CI/CD deployment using Jenkins and GitHub Webhooks
- Deployment on Amazon EC2 Ubuntu with Nginx

## Technologies Used

- HTML
- CSS
- JavaScript
- Google Maps JavaScript API
- Google Places API structure
- Git and GitHub
- Jenkins Pipeline
- Amazon EC2 Ubuntu
- Nginx

## Development Phases

### Phase 1 - Basic Map
Implemented Google Map integration and current location detection.

### Phase 2 - Nearby Places
Added category-based nearby places feature with markers and info windows.

### Phase 3 - UI Improvements
Improved layout, added place list panel, footer, and responsive design.

### Phase 4 - CI/CD
Added Jenkins Pipeline configuration for automatic deployment to EC2.

## Jenkins Pipeline

The Jenkins pipeline checks out the main branch from GitHub and deploys the project files to the Nginx web root directory.

## Deployment

The application is deployed on an Amazon EC2 Ubuntu instance using Nginx.

## Note

The project is designed to use Google Places API for live nearby search. During development, demo nearby location data was used because Google Cloud billing was not active.
Project updated using Jenkins CI/CD Pipeline.
