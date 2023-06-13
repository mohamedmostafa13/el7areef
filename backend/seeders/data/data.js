// Dummy Data for testing purposes

/* 
PlaygroundOwners schema:
{
    name: { type: String, required: true, unique: false },
    phone: { type: String, required: true, unique: false },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: false },
    email: { type: String, required: false, unique: true },
    totalBalance: { type: Number, required: false, unique: false, default: 0, index: true },
}
*/
const PlaygroundOwners = [
    {
        name: 'Ahmed',
        phone: '01000000000',
        username: 'ahmed',
        password: '123456',
        email: 'ahmed@gmail.com',
        totalBalance: 0,
    },
    {
        name: 'Mohamed',
        phone: '01000000001',
        username: 'mohamed',
        password: '123456',
        email: 'moh@gmail.com',
        totalBalance: 0,
    },
    {
        name: 'Ali',
        phone: '01000000002',
        username: 'ali',
        password: '123456',
        email: 'ali@gmail.com',
    },
    {
        name: 'Omar',
        phone: '01000000003',
        username: 'omar',
        password: '123456',
        email: 'omar@gmail.com',
        totalBalance: 0,
    },
];

/* 
Playgrounds schema:
{
        name: { type: String, required: true, unique: false },
        address: { type: String, required: true, unique: false },
        lang: { type: Number, required: false, unique: false },
        lat: { type: Number, required: false, unique: false },
        country: { type: String, required: false, unique: false },
        city: { type: String, required: false, unique: false },
        neighborhood: { type: String, required: false, unique: false },
        description: { type: String, required: false, unique: false },
        pricePerHour: { type: Number, required: false, unique: false },
        ownerId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false, index: true },
        images: { type: [String], required: false, unique: false },
        utilities: { type: [String], required: false, unique: false },
        rating: { type: Number, required: false, unique: false },
        workingHours: { type: String, required: false, unique: false },
        floorType: { type: [String], required: false, unique: false },
        visa: { type: Boolean, required: false, unique: false, default: false },
        visaOnly: { type: Boolean, required: false, unique: false, default: false },
        isVerified: { type: Boolean, required: false, unique: false, default: false },
        isAvailable: { type: Boolean, required: false, unique: false, default: true },
        isDeleted: { type: Boolean, required: false, unique: false, default: false },

}
*/ 
// Generate array of playgrounds according to the Playground schema, and assign each playground to anyone of these ownerIds:
// 6487611cda2740178a4238b3
// 6487611cda2740178a4238b4
// 6487611cda2740178a4238b5
// 6487611cda2740178a4238b6

const Playgrounds = [
    { name: 'Playground 1', address: 'address 1', lang: 1, lat: 1, country: 'Egypt', city: 'Cairo', neighborhood: 'Maadi', description: 'description 1', pricePerHour: 100, ownerId: '6487611cda2740178a4238b3', images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fmodern-football-stadium-with-fans-in-the-stands%2F90971772&psig=AOvVaw3Z9YJBgypuCyU4YL-cmKSG&ust=1686681977026000&source=images&cd=vfe&ved=https://as2.ftcdn.net/v2/jpg/00/90/97/17/1000_F_90971772_IjJp9VHSkat5Dzkyj9fTugVAtexHSxYa.jpg', 'https://as1.ftcdn.net/v2/jpg/00/64/18/24/1000_F_64182490_EMPSAQTCot1CyDM7veslgZeBO0I2wJ40.jpg'], utilities: ['utility1', 'utility2'], rating: 4, workingHours: 'workingHours 1', floorType: ['floorType1', 'floorType2'], visa: true, visaOnly: true, isVerified: true, isAvailable: true, isDeleted: false },
    { name: 'Playground 2', address: 'address 2', lang: 2, lat: 2, country: 'Egypt', city: 'Cairo', neighborhood: 'Maadi', description: 'description 2', pricePerHour: 200, ownerId: '6487611cda2740178a4238b4', images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fmodern-football-stadium-with-fans-in-the-stands%2F90971772&psig=AOvVaw3Z9YJBgypuCyU4YL-cmKSG&ust=1686681977026000&source=images&cd=vfe&ved=https://as2.ftcdn.net/v2/jpg/00/90/97/17/1000_F_90971772_IjJp9VHSkat5Dzkyj9fTugVAtexHSxYa.jpg', 'https://as1.ftcdn.net/v2/jpg/00/64/18/24/1000_F_64182490_EMPSAQTCot1CyDM7veslgZeBO0I2wJ40.jpg'], utilities: ['utility1', 'utility2'], rating: 4, workingHours: 'workingHours 2', floorType: ['floorType1', 'floorType2'], visa: true, visaOnly: true, isVerified: true, isAvailable: true, isDeleted: false },
    { name: 'Playground 3', address: 'address 3', lang: 3, lat: 3, country: 'Egypt', city: 'Cairo', neighborhood: 'Maadi', description: 'description 3', pricePerHour: 300, ownerId: '6487611cda2740178a4238b5', images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fmodern-football-stadium-with-fans-in-the-stands%2F90971772&psig=AOvVaw3Z9YJBgypuCyU4YL-cmKSG&ust=1686681977026000&source=images&cd=vfe&ved=https://as2.ftcdn.net/v2/jpg/00/90/97/17/1000_F_90971772_IjJp9VHSkat5Dzkyj9fTugVAtexHSxYa.jpg', 'https://as1.ftcdn.net/v2/jpg/00/64/18/24/1000_F_64182490_EMPSAQTCot1CyDM7veslgZeBO0I2wJ40.jpg'], utilities: ['utility1', 'utility2'], rating: 4, workingHours: 'workingHours 3', floorType: ['floorType1', 'floorType2'], visa: true, visaOnly: true, isVerified: true, isAvailable: true, isDeleted: false },
    { name: 'Playground 4', address: 'address 4', lang: 4, lat: 4, country: 'Egypt', city: 'Cairo', neighborhood: 'Maadi', description: 'description 4', pricePerHour: 400, ownerId: '6487611cda2740178a4238b6', images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fmodern-football-stadium-with-fans-in-the-stands%2F90971772&psig=AOvVaw3Z9YJBgypuCyU4YL-cmKSG&ust=1686681977026000&source=images&cd=vfe&ved=https://as2.ftcdn.net/v2/jpg/00/90/97/17/1000_F_90971772_IjJp9VHSkat5Dzkyj9fTugVAtexHSxYa.jpg', 'https://as1.ftcdn.net/v2/jpg/00/64/18/24/1000_F_64182490_EMPSAQTCot1CyDM7veslgZeBO0I2wJ40.jpg'], utilities: ['utility1', 'utility2'], rating: 4, workingHours: 'workingHours 4', floorType: ['floorType1', 'floorType2'], visa: true, visaOnly: true, isVerified: true, isAvailable: true, isDeleted: false },
    { name: 'Playground 5', address: 'address 5', lang: 5, lat: 5, country: 'Egypt', city: 'Cairo', neighborhood: 'Maadi', description: 'description 5', pricePerHour: 500, ownerId: '6487611cda2740178a4238b3', images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fmodern-football-stadium-with-fans-in-the-stands%2F90971772&psig=AOvVaw3Z9YJBgypuCyU4YL-cmKSG&ust=1686681977026000&source=images&cd=vfe&ved=https://as2.ftcdn.net/v2/jpg/00/90/97/17/1000_F_90971772_IjJp9VHSkat5Dzkyj9fTugVAtexHSxYa.jpg', 'https://as1.ftcdn.net/v2/jpg/00/64/18/24/1000_F_64182490_EMPSAQTCot1CyDM7veslgZeBO0I2wJ40.jpg'], utilities: ['utility1', 'utility2'], rating: 4, workingHours: 'workingHours 5', floorType: ['floorType1', 'floorType2'], visa: true, visaOnly: true, isVerified: true, isAvailable: true, isDeleted: false },
    { name: 'Playground 6', address: 'address 6', lang: 6, lat: 6, country: 'Egypt', city: 'Cairo', neighborhood: 'Maadi', description: 'description 6', pricePerHour: 600, ownerId: '6487611cda2740178a4238b4', images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fmodern-football-stadium-with-fans-in-the-stands%2F90971772&psig=AOvVaw3Z9YJBgypuCyU4YL-cmKSG&ust=1686681977026000&source=images&cd=vfe&ved=https://as2.ftcdn.net/v2/jpg/00/90/97/17/1000_F_90971772_IjJp9VHSkat5Dzkyj9fTugVAtexHSxYa.jpg', 'https://as1.ftcdn.net/v2/jpg/00/64/18/24/1000_F_64182490_EMPSAQTCot1CyDM7veslgZeBO0I2wJ40.jpg'], utilities: ['utility1', 'utility2'], rating: 4, workingHours: 'workingHours 6', floorType: ['floorType1', 'floorType2'], visa: true, visaOnly: true, isVerified: true, isAvailable: true, isDeleted: false },
    { name: 'Playground 7', address: 'address 7', lang: 7, lat: 7, country: 'Egypt', city: 'Cairo', neighborhood: 'Maadi', description: 'description 7', pricePerHour: 700, ownerId: '6487611cda2740178a4238b5', images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fmodern-football-stadium-with-fans-in-the-stands%2F90971772&psig=AOvVaw3Z9YJBgypuCyU4YL-cmKSG&ust=1686681977026000&source=images&cd=vfe&ved=https://as2.ftcdn.net/v2/jpg/00/90/97/17/1000_F_90971772_IjJp9VHSkat5Dzkyj9fTugVAtexHSxYa.jpg', 'https://as1.ftcdn.net/v2/jpg/00/64/18/24/1000_F_64182490_EMPSAQTCot1CyDM7veslgZeBO0I2wJ40.jpg'], utilities: ['utility1', 'utility2'], rating: 4, workingHours: 'workingHours 7', floorType: ['floorType1', 'floorType2'], visa: true, visaOnly: true, isVerified: true, isAvailable: true, isDeleted: false },
    { name: 'Playground 8', address: 'address 8', lang: 8, lat: 8, country: 'Egypt', city: 'Cairo', neighborhood: 'Maadi', description: 'description 8', pricePerHour: 800, ownerId: '6487611cda2740178a4238b6', images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fmodern-football-stadium-with-fans-in-the-stands%2F90971772&psig=AOvVaw3Z9YJBgypuCyU4YL-cmKSG&ust=1686681977026000&source=images&cd=vfe&ved=https://as2.ftcdn.net/v2/jpg/00/90/97/17/1000_F_90971772_IjJp9VHSkat5Dzkyj9fTugVAtexHSxYa.jpg', 'https://as1.ftcdn.net/v2/jpg/00/64/18/24/1000_F_64182490_EMPSAQTCot1CyDM7veslgZeBO0I2wJ40.jpg'], utilities: ['utility1', 'utility2'], rating: 4, workingHours: 'workingHours 8', floorType: ['floorType1', 'floorType2'], visa: true, visaOnly: true, isVerified: true, isAvailable: true, isDeleted: false },
    { name: 'Playground 9', address: 'address 9', lang: 9, lat: 9, country: 'Egypt', city: 'Cairo', neighborhood: 'Maadi', description: 'description 9', pricePerHour: 900, ownerId: '6487611cda2740178a4238b3', images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fmodern-football-stadium-with-fans-in-the-stands%2F90971772&psig=AOvVaw3Z9YJBgypuCyU4YL-cmKSG&ust=1686681977026000&source=images&cd=vfe&ved=https://as2.ftcdn.net/v2/jpg/00/90/97/17/1000_F_90971772_IjJp9VHSkat5Dzkyj9fTugVAtexHSxYa.jpg', 'https://as1.ftcdn.net/v2/jpg/00/64/18/24/1000_F_64182490_EMPSAQTCot1CyDM7veslgZeBO0I2wJ40.jpg'], utilities: ['utility1', 'utility2'], rating: 4, workingHours: 'workingHours 9', floorType: ['floorType1', 'floorType2'], visa: true, visaOnly: true, isVerified: true, isAvailable: true, isDeleted: false }
];

/*
Customers Schema:
{
        name: { type: String, required: true, unique: false },
        phone: { type: String, required: true, unique: false },
        username: { type: String, required: true, unique: true, index: true },
        password: { type: String, required: true, unique: false },
        email: { type: String, required: false, unique: true },
        isVerified: { type: Boolean, required: true, unique: false, default: false },
        isDeleted: { type: Boolean, required: true, unique: false, default: false },
}
*/

// Generate array of Customers according to the Customers schema :
const Customers = [
    { name: 'Customer 1', phone: '01000000001', username: 'customer1', password: '12345678', email: 'customer1@gmail.com', isVerified: false, isDeleted: false },
    { name: 'Customer 2', phone: '01000000002', username: 'customer2', password: '12345678', email: 'customer2@gmail.com', isVerified: false, isDeleted: false },
    { name: 'Customer 3', phone: '01000000003', username: 'customer3', password: '12345678', email: 'customer3@gmail.com', isVerified: false, isDeleted: false },
    { name: 'Customer 4', phone: '01000000004', username: 'customer4', password: '12345678', email: 'customer4@gmail.com', isVerified: false, isDeleted: false },
    { name: 'Customer 5', phone: '01000000005', username: 'customer5', password: '12345678', email: 'customer5@gmail.com', isVerified: false, isDeleted: false },
    { name: 'Customer 6', phone: '01000000006', username: 'customer6', password: '12345678', email: 'customer6@gmail.com', isVerified: false, isDeleted: false },
    { name: 'Customer 7', phone: '01000000007', username: 'customer7', password: '12345678', email: 'customer7@gmail.com', isVerified: false, isDeleted: false },
    { name: 'Customer 8', phone: '01000000008', username: 'customer8', password: '12345678', email: 'customer8@gmail.com', isVerified: false, isDeleted: false },
    { name: 'Customer 9', phone: '01000000009', username: 'customer9', password: '12345678', email: 'customer9@gmail.com', isVerified: false, isDeleted: false },
    { name: 'Customer 10', phone: '01000000010', username: 'customer10', password: '12345678', email: 'customer10@gmail.com', isVerified: false, isDeleted: false },
    { name: 'Customer 11', phone: '01000000011', username: 'customer11', password: '12345678', email: 'customer11@gmail.com', isVerified: false, isDeleted: false },
];

/*
Utilities Schema:
{
        name: { type: String, required: true, unique: false },
        description: { type: String, required: false, unique: false },
        type: { type: String, required: true, unique: false },
}
*/

// Generate array of Utilities according to the Utilities schema :
const Utilities = [
    { name: 'Utility 1', description: 'description 1', type: 'type 1' },
    { name: 'Utility 2', description: 'description 2', type: 'type 2' },
    { name: 'Utility 3', description: 'description 3', type: 'type 3' },
    { name: 'Utility 4', description: 'description 4', type: 'type 4' },
    { name: 'Utility 5', description: 'description 5', type: 'type 5' },
];

/*
FloorTypes Schema:
{
        type: { type: String, required: true, unique: true },
        description: { type: String, required: false, unique: false },
}
*/

// Generate array of FloorTypes according to the FloorTypes schema :
const FloorTypes = [
    { type: 'FloorType 1', description: 'description 1' },
    { type: 'FloorType 2', description: 'description 2' },
    { type: 'FloorType 3', description: 'description 3' },
    { type: 'FloorType 4', description: 'description 4' },
    { type: 'FloorType 5', description: 'description 5' },
];


/*
Reservations Schema:
{
        userId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false, index: true },
        playgroundId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false, index: true },
        date: { type: Date, required: true, unique: false, default: Date.now },
        price: { type: Number, required: true, unique: false },
        isPaid: { type: Boolean, required: true, unique: false, default: false },
        isCanceled: { type: Boolean, required: true, unique: false, default: false },
        isDeleted: { type: Boolean, required: true, unique: false, default: false },
        isReviewed: { type: Boolean, required: true, unique: false, default: false },
        profit: { type: Number, required: true, unique: false, default: 0 },
        timeSlot: { type: String, required: true, unique: false },
}
*/

// Generate array of Reservations according to the Reservations schema, 
// and assign anyone of these userId: [64876d34f14ce16cceb0c752, 64876d34f14ce16cceb0c753, 64876d34f14ce16cceb0c754, 64876d34f14ce16cceb0c755, 64876d34f14ce16cceb0c756, 64876d34f14ce16cceb0c757] 
// and any one of these playgroundIds: [64876d34f14ce16cceb0c73f, 64876d34f14ce16cceb0c740, 64876d34f14ce16cceb0c741, 64876d34f14ce16cceb0c742, 64876d34f14ce16cceb0c743]
// with random prices and timeSlots :
const Reservations = [
    { userId: '64876d34f14ce16cceb0c752', playgroundId: '64876d34f14ce16cceb0c73f', date: Date.now(), price: 100, isPaid: false, isCanceled: false, isDeleted: false, isReviewed: false, profit: 0, timeSlot: '10:00 - 11:00' },
    { userId: '64876d34f14ce16cceb0c753', playgroundId: '64876d34f14ce16cceb0c740', date: Date.now(), price: 100, isPaid: false, isCanceled: false, isDeleted: false, isReviewed: false, profit: 0, timeSlot: '11:00 - 12:00' },
    { userId: '64876d34f14ce16cceb0c754', playgroundId: '64876d34f14ce16cceb0c741', date: Date.now(), price: 100, isPaid: false, isCanceled: false, isDeleted: false, isReviewed: false, profit: 0, timeSlot: '12:00 - 13:00' },
    { userId: '64876d34f14ce16cceb0c755', playgroundId: '64876d34f14ce16cceb0c742', date: Date.now(), price: 100, isPaid: false, isCanceled: false, isDeleted: false, isReviewed: false, profit: 0, timeSlot: '13:00 - 14:00' },
    { userId: '64876d34f14ce16cceb0c756', playgroundId: '64876d34f14ce16cceb0c743', date: Date.now(), price: 100, isPaid: false, isCanceled: false, isDeleted: false, isReviewed: false, profit: 0, timeSlot: '14:00 - 15:00' },
    { userId: '64876d34f14ce16cceb0c757', playgroundId: '64876d34f14ce16cceb0c73f', date: Date.now(), price: 100, isPaid: false, isCanceled: false, isDeleted: false, isReviewed: false, profit: 0, timeSlot: '15:00 - 16:00' },
    { userId: '64876d34f14ce16cceb0c752', playgroundId: '64876d34f14ce16cceb0c740', date: Date.now(), price: 100, isPaid: false, isCanceled: false, isDeleted: false, isReviewed: false, profit: 0, timeSlot: '16:00 - 17:00' },
    { userId: '64876d34f14ce16cceb0c753', playgroundId: '64876d34f14ce16cceb0c741', date: Date.now(), price: 100, isPaid: false, isCanceled: false, isDeleted: false, isReviewed: false, profit: 0, timeSlot: '17:00 - 18:00' },
    { userId: '64876d34f14ce16cceb0c754', playgroundId: '64876d34f14ce16cceb0c742', date: Date.now(), price: 100, isPaid: false, isCanceled: false, isDeleted: false, isReviewed: false, profit: 0, timeSlot: '18:00 - 19:00' },
    { userId: '64876d34f14ce16cceb0c755', playgroundId: '64876d34f14ce16cceb0c743', date: Date.now(), price: 100, isPaid: false, isCanceled: false, isDeleted: false, isReviewed: false, profit: 0, timeSlot: '19:00 - 20:00' },
    { userId: '64876d34f14ce16cceb0c756', playgroundId: '64876d34f14ce16cceb0c73f', date: Date.now(), price: 100, isPaid: false, isCanceled: false, isDeleted: false, isReviewed: false, profit: 0, timeSlot: '20:00 - 21:00' },
    { userId: '64876d34f14ce16cceb0c757', playgroundId: '64876d34f14ce16cceb0c740', date: Date.now(), price: 100, isPaid: false, isCanceled: false, isDeleted: false, isReviewed: false, profit: 0, timeSlot: '21:00 - 22:00' },
    
];


/*
Reviews Schema:
{
        userId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false, index: true },
        playgroundId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false, index: true },
        rating: { type: Number, required: true, unique: false, min: 0, max: 5 },
        comment: { type: String, required: false, unique: false },
}
*/

// Generate array of Reviews according to the Reviews schema, with any of these userIds:
//  [64876d34f14ce16cceb0c752, 64876d34f14ce16cceb0c753, 64876d34f14ce16cceb0c754, 64876d34f14ce16cceb0c755, 64876d34f14ce16cceb0c756, 64876d34f14ce16cceb0c757]
// and any of these playgroundIds: [64876d34f14ce16cceb0c73f, 64876d34f14ce16cceb0c740, 64876d34f14ce16cceb0c741, 64876d34f14ce16cceb0c742, 64876d34f14ce16cceb0c743]:
const Reviews = [
    { userId: '64876d34f14ce16cceb0c752', playgroundId: '64876d34f14ce16cceb0c73f', rating: 5, comment: 'Great playground' },
    { userId: '64876d34f14ce16cceb0c753', playgroundId: '64876d34f14ce16cceb0c740', rating: 4, comment: 'Good playground' },
    { userId: '64876d34f14ce16cceb0c754', playgroundId: '64876d34f14ce16cceb0c741', rating: 3, comment: 'Nice playground' },
    { userId: '64876d34f14ce16cceb0c755', playgroundId: '64876d34f14ce16cceb0c742', rating: 2, comment: 'Bad playground' },
    { userId: '64876d34f14ce16cceb0c756', playgroundId: '64876d34f14ce16cceb0c743', rating: 1, comment: 'Terrible playground' },
    { userId: '64876d34f14ce16cceb0c757', playgroundId: '64876d34f14ce16cceb0c73f', rating: 5, comment: 'Great playground' },
    { userId: '64876d34f14ce16cceb0c752', playgroundId: '64876d34f14ce16cceb0c740', rating: 4, comment: 'Good playground' },
];


module.exports = { PlaygroundOwners, Playgrounds, Customers, Utilities, FloorTypes, Reservations, Reviews };