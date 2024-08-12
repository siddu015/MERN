const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and the sound of the waves.",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban living with a touch of luxury.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 1200,
        location: "New York City",
        country: "United States",
    },
    {
        title: "Mountain Retreat",
        description: "Relax in this beautiful mountain retreat, perfect for a quiet getaway surrounded by nature.",
        image: "https://images.unsplash.com/photo-1521232118733-7d1e7e569cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 2000,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Luxury Penthouse",
        description: "Experience the ultimate in luxury living in this stunning penthouse with breathtaking city views.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161f63606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 3500,
        location: "Maui",
        country: "United States",
    },
    {
        title: "Charming Cottage with Garden",
        description: "Relax in this charming cottage with a beautiful garden. Perfect for a peaceful getaway.",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 1100,
        location: "Nashville",
        country: "United States",
    },
    {
        title: "Elegant Apartment with Balcony",
        description: "This elegant apartment offers a spacious balcony with breathtaking city views.",
        image: "https://images.unsplash.com/photo-1574169208507-843761748374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 1600,
        location: "Austin",
        country: "United States",
    },
    {
        title: "Luxury Chalet in the Mountains",
        description: "Experience the ultimate mountain getaway in this luxury chalet with stunning views.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 3200,
        location: "Vail",
        country: "United States",
    },
    {
        title: "Cozy Cabin by the Lake",
        description: "This cozy cabin offers a tranquil lakeside retreat with all the comforts of home.",
        image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 1300,
        location: "Lake Placid",
        country: "United States",
    },
    {
        title: "Modern Home with Pool",
        description: "This modern home features a private pool and spacious outdoor living area.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 2400,
        location: "Orlando",
        country: "United States",
    },
    {
        title: "Spacious Farmhouse with Land",
        description: "This spacious farmhouse offers plenty of room and land for outdoor activities.",
        image: "https://images.unsplash.com/photo-1600585153752-7b1c9cf81db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 2800,
        location: "Texas Hill Country",
        country: "United States",
    },
    {
        title: "Beachfront Villa with Infinity Pool",
        description: "Indulge in luxury at this beachfront villa with an infinity pool and breathtaking ocean views.",
        image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 5000,
        location: "Maldives",
        country: "Maldives",
    },
    {
        title: "Penthouse with Rooftop Terrace",
        description: "Enjoy panoramic city views from the rooftop terrace of this luxury penthouse.",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 4500,
        location: "Los Angeles",
        country: "United States",
    },
    {
        title: "Rustic Lodge in the Forest",
        description: "This rustic lodge is nestled in the forest, offering a peaceful retreat with nature trails.",
        image: "https://images.unsplash.com/photo-1552674605-60a0d6f076f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 1900,
        location: "Redwood National Park",
        country: "United States",
    },
    {
        title: "Modern Studio in the City Center",
        description: "This modern studio offers the perfect blend of comfort and convenience in the city center.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 1100,
        location: "Portland",
        country: "United States",
    },
    {
        title: "Luxury Estate with Private Gardens",
        description: "This luxury estate features private gardens and stunning architecture, perfect for hosting events.",
        image: "https://images.unsplash.com/photo-1572292864047-1e36b081c5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 6000,
        location: "Hamptons",
        country: "United States",
    },
    {
        title: "Charming Bungalow with Ocean View",
        description: "Relax in this charming bungalow with a stunning ocean view, perfect for a peaceful getaway.",
        image: "https://images.unsplash.com/photo-1552905296-4b282b0a4b87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 1700,
        location: "Key West",
        country: "United States",
    },
    {
        title: "Urban Loft with High Ceilings",
        description: "Experience modern living in this urban loft with high ceilings and an open floor plan.",
        image: "https://images.unsplash.com/photo-1588195532785-27a3cf5e6c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 2200,
        location: "Denver",
        country: "United States",
    },
    {
        title: "Rustic Cottage with River View",
        description: "This rustic cottage offers a peaceful retreat with stunning river views.",
        image: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 900,
        location: "Asheville",
        country: "United States",
    },
    {
        title: "Modern Beach House with Pool",
        description: "Enjoy luxury living in this modern beach house with a private pool and ocean views.",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 3400,
        location: "Santa Barbara",
        country: "United States",
    },
    {
        title: "Elegant Townhouse with Rooftop Deck",
        description: "This elegant townhouse offers a spacious rooftop deck with panoramic city views.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 3800,
        location: "Washington D.C.",
        country: "United States",
    },
    {
        title: "Modern Condo with City Views",
        description: "This modern condo offers stunning city views and luxurious amenities.",
        image: "https://images.unsplash.com/photo-1554672408-41b66b2b44c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 2800,
        location: "Seattle",
        country: "United States",
    },
    {
        title: "Luxurious Villa with Private Beach",
        description: "This luxurious villa offers a private beach and stunning ocean views.",
        image: "https://images.unsplash.com/photo-1551978127-94c09f17a6a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 7000,
        location: "Bora Bora",
        country: "French Polynesia",
    },
    {
        title: "Spacious Loft with Rooftop Garden",
        description: "Enjoy city living in this spacious loft with a rooftop garden.",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 3100,
        location: "San Francisco",
        country: "United States",
    },
    {
        title: "Chic Apartment in the Heart of the City",
        description: "Stay in this chic apartment located in the heart of the city, perfect for urban living.",
        image: "https://images.unsplash.com/photo-1587502537156-6321100e7e4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 1800,
        location: "Chicago",
        country: "United States",
    },
    {
        title: "Secluded Cabin in the Woods",
        description: "This secluded cabin offers a peaceful retreat in the woods, perfect for nature lovers.",
        image: "https://images.unsplash.com/photo-1507090137263-7b3ce0a61542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 1600,
        location: "Smoky Mountains",
        country: "United States",
    },
    {
        title: "Beach House with Oceanfront Deck",
        description: "This beautiful beach house features an oceanfront deck with stunning views.",
        image: "https://images.unsplash.com/photo-1542315192-c5e2113d35b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 4500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Rustic Barn Conversion with Modern Amenities",
        description: "Stay in this rustic barn conversion with all the modern amenities for a comfortable stay.",
        image: "https://images.unsplash.com/photo-1585445393425-01d1f46ff930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 2000,
        location: "Vermont",
        country: "United States",
    },
    {
        title: "Luxury Villa with Private Pool",
        description: "Experience luxury in this villa with a private pool and breathtaking views.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 5500,
        location: "Santorini",
        country: "Greece",
    },
    {
        title: "Contemporary Apartment with Sea View",
        description: "Enjoy the sea view from this contemporary apartment, perfect for a coastal getaway.",
        image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        price: 2500,
        location: "Barcelona",
        country: "Spain",
    }
];

module.exports = { data: sampleListings }