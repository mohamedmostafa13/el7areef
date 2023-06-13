export const OwnerColumns = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "name",
    headerName: "Owner",
    width: 230,

  },
  {
    field: "username",
    headerName: "Username",
    width: 100,
  },

  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "balance",
    headerName: "Balance",
    width: 100,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  
];

//temporary data
export const OwnerRows = [
  {
    id: '6487611cda2740178a4238b3',
    name: 'Ahmed',
    username: 'ahmed',
    email: 'ahmed@gmail.com',
    balance: 0,
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: '01000000000'
  },
  {
    id: '6487611cda2740178a4238b4',
    name: 'Mohamed',
    username: 'moh',
    email: 'moh@gmail.com',
    balance: 0,
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: '01000000001'
  },
  {
    id: '6487611cda2740178a4238b5',
    name: 'Ali',
    username: 'ali',
    email: 'ali@gmail.com',
    balance: 0,
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: '01000000002'
  },
  {
    id: '6487611cda2740178a4238b6',
    name: 'Omar',
    username: 'omar',
    email: 'omar@gmail.com',
    balance: 0,
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: '01000000003'

  }
];


export const PlaygroundColumns = [
  { field: "id", headerName: "ID", width: 190 },
  {
    field: "name",
    headerName: "Playground",
    width: 230,
  },
  {
    field: "address",
    headerName: "Address",
    width: 230,
  },

  {
    field: "city",
    headerName: "City",
    width: 100,
  },

  {
    field: "pricePerHour",
    headerName: "Price",
    width: 60,
  },

  {
    field: "owner",
    headerName: "Owner",
    width: 100,
  },

  {
    field: "rating",
    headerName: "Rating",
    width: 60,
  },
  
];

//temporary data
export const PlaygroundRows = [
  {
    "id": "64876d34f14ce16cceb0c73f",
    "name": "Playground 1",
    "address": "address 1",
    
    "city": "Cairo",
    "pricePerHour": 100,
    "owner": "Ahmed",

    "rating": 4,
  },
  {
    "id": "64876d34f14ce16cceb0c740",
    "name": "Playground 2",
    "address": "address 2",
    "city": "Cairo",
    "pricePerHour": 300,
    "owner": "Mohamed",
    
    "rating": 4,
    
  },
  {
    "id": "64876d34f14ce16cceb0c741",
    "name": "Playground 3",
    "address": "address 3",
    "city": "Cairo",
    "pricePerHour": 200,
    "owner": "Omar",
    
    "rating": 3,
  }
];
