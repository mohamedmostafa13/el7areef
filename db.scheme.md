# El-7areef Database Scheema Design

## Playgrounds
- id: Int, Auto Increment, Primary Key, Unique
- name: String
- address: String
- lang: Double
- lat: Double
- country: String
- city: String
- neighborhood: String
- description: String
- pricePerHour: Double
- ownerId: PlaygroundOwners
- images: [String]
- utilities: [Utilities]
- rating: Double
- workingHours: String
- floorType: [FloorTypes]
- visa: Bool
- visaOnly: Bool
- isVerified: Bool
- isAvailable: Bool
- isDeleted: Bool

## PlaygroundOwners
- id: Int, Auto Increment, Primary Key, Unique
- name: String
- phone: String
- username: String
- password: String (hashed)
- email: String
- totalBalance: Double

## Reservations
- id: Int, Auto Increment, Primary Key, Unique
- userId: Users
- playgroundId: Playgrounds
- date: Date
- price: Double
- isPaid: Bool
- isCanceled: Bool
- isDeleted: Bool
- isReviewed: Bool
- profit: Double
- timeSlot: String

## Customers
- id: Int, Auto Increment, Primary Key, Unique
- name: String
- phone: String
- username: String
- password: String (hashed)
- email: String
- isVerified: Bool
- isDeleted: Bool

## Utilities
- id: Int, Auto Increment, Primary Key, Unique
- name: String
- description: String
- type: String

## FloorTypes
- id: Int, Auto Increment, Primary Key, Unique
- type: String
- description: String

## Reviews
- id: Int, Auto Increment, Primary Key, Unique
- userId: Users
- playgroundId: Playgrounds
- rating: Double
- comment: String
- date: Date
- isDeleted: Bool

## Profits
- id: Int, Auto Increment, Primary Key, Unique
- playgroundId: Playgrounds
- date: Date
- profit: Double

## Admins
- id: Int, Auto Increment, Primary Key, Unique, required
- name: String, required
- username: String, required
- password: String (hashed), required
- email: String, 
