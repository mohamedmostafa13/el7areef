# El 7areef

## Description

El 7areef is a web application serving as a dashboard for a mobile applications that allows users to book playgrounds online. The application is built using the MERN stack (MongoDB, Express, React, Node.js).

## Installation

### Development

1. Clone the repository
2. Install dependencies
```bash
npm install
```
3. Run the development server
```bash
npm run server
```
### Production

Not yet available

## Database Schema Design

### Playgrounds
- id: Int, Auto Increment, Primary Key, Unique, Required
- name: String, Required
- address: String, Required
- lang: Double
- lat: Double
- country: String
- city: String
- neighborhood: String
- description: String
- pricePerHour: Double
- ownerId: PlaygroundOwners, Required
- images: [String] # URLs of images
- utilities: [Utilities]
- rating: Double
- workingHours: String
- floorType: [FloorTypes]
- visa: Bool, default: false
- visaOnly: Bool, default: false
- isVerified: Bool, default: false
- isAvailable: Bool, default: true
- isDeleted: Bool, default: false

## PlaygroundOwners

- id: Int, Auto Increment, Primary Key, Unique, Required
- name: String, Required
- phone: String, Required
- username: String, Required
- password: String (hashed), Required
- email: String
- totalBalance: Double, default: 0

## Reservations

- id: Int, Auto Increment, Primary Key, Unique, Required
- userId: Users, Required
- playgroundId: Playgrounds, Required
- date: Date, Required
- price: Double, Required
- isPaid: Bool, default: false
- isCanceled: Bool, default: false
- isDeleted: Bool, default: false
- isReviewed: Bool, default: false
- profit: Double, default: 0
- timeSlot: String, Required

## Customers

- id: Int, Auto Increment, Primary Key, Unique, Required
- name: String, Required
- phone: String, Required
- username: String, Required
- password: String (hashed), Required
- email: String
- isVerified: Bool, default: false
- isDeleted: Bool, default: false

## Utilities

- id: Int, Auto Increment, Primary Key, Unique, Required
- name: String, Required
- description: String
- type: String, Required

## Profits

- id: Int, Auto Increment, Primary Key, Unique, Required
- playgroundId: Playgrounds, Required
- date: Date, Required
- profit: Double, default: 0

## FloorTypes

- id: Int, Auto Increment, Primary Key, Unique, Required
- type: String, Required
- description: String

## Reviews

- id: Int, Auto Increment, Primary Key, Unique, Required
- userId: Users, Required
- playgroundId: Playgrounds, Required
- rating: Double, Required
- comment: String

## Admins

- id: Int, Auto Increment, Primary Key, Unique, Required
- name: String, Required
- username: String, Required
- password: String (hashed), Required
- email: String

## API Endpoints

### Playgrounds

- GET /api/v1/admin/playgrounds - Get all playgrounds
- GET /api/v1/admin/playgrounds/:id - Get a playground by id
- POST /api/v1/admin/playgrounds - Create a new playground
- PATCH /api/v1/admin/playgrounds/:id - Update a playground by id
- DELETE /api/v1/admin/playgrounds/:id - Delete a playground by id
- DELETE /api/v1/admin/playgrounds - Delete all playgrounds


### PlaygroundOwners

- GET /api/v1/admin/playgroundOwners - Get all playground owners
- GET /api/v1/admin/playgroundOwners/:id - Get a playground owner by id
- POST /api/v1/admin/playgroundOwners - Create a new playground owner
- PATCH /api/v1/admin/playgroundOwners/:id - Update a playground owner by id
- DELETE /api/v1/admin/playgroundOwners/:id - Delete a playground owner by id
- DELETE /api/v1/admin/playgroundOwners - Delete all playground owners

### Reservations

- GET /api/v1/admin/reservations - Get all reservations
- GET /api/v1/admin/reservations/:id - Get a reservation by id
- POST /api/v1/admin/reservations - Create a new reservation
- PATCH /api/v1/admin/reservations/:id - Update a reservation by id
- DELETE /api/v1/admin/reservations/:id - Delete a reservation by id
- DELETE /api/v1/admin/reservations - Delete all reservations

### Customers

- GET /api/v1/admin/customers - Get all customers
- GET /api/v1/admin/customers/:id - Get a customer by id
- POST /api/v1/admin/customers - Create a new customer
- PATCH /api/v1/admin/customers/:id - Update a customer by id
- DELETE /api/v1/admin/customers/:id - Delete a customer by id
- DELETE /api/v1/admin/customers - Delete all customers

### Utilities

- GET /api/v1/admin/utilities - Get all utilities
- GET /api/v1/admin/utilities/:id - Get a utility by id
- POST /api/v1/admin/utilities - Create a new utility
- PATCH /api/v1/admin/utilities/:id - Update a utility by id
- DELETE /api/v1/admin/utilities/:id - Delete a utility by id
- DELETE /api/v1/admin/utilities - Delete all utilities

## FloorTypes

- GET /api/v1/admin/floortypes - Get all floor types
- GET /api/v1/admin/floortypes/:id - Get a floor type by id
- POST /api/v1/admin/floortypes - Create a new floor type
- PATCH /api/v1/admin/floortypes/:id - Update a floor type by id
- DELETE /api/v1/admin/floortypes/:id - Delete a floor type by id
- DELETE /api/v1/admin/floortypes - Delete all floor types

## Reviews

- GET /api/v1/admin/reviews - Get all reviews
- GET /api/v1/admin/reviews/:id - Get a review by id
- POST /api/v1/admin/reviews - Create a new review
- PATCH /api/v1/admin/reviews/:id - Update a review by id
- DELETE /api/v1/admin/reviews/:id - Delete a review by id
- DELETE /api/v1/admin/reviews - Delete all reviews
