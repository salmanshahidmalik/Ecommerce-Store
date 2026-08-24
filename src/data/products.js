const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"],
    price: 59.99,
    discount: 10,
    category: "Electronics",
    stock: 25,
    rating: 4.5,
    reviews: 128,
    seller: "TechStore",
    estimatedDelivery: "2-4 business days",
    description:
      "High-quality wireless headphones with clear sound, comfortable ear cushions, and long-lasting battery life."
  },
  {
    id: 2,
    name: "Smart Watch",
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"],
    price: 89.99,
    discount: 15,
    category: "Wearables",
    stock: 18,
    rating: 4.3,
    reviews: 96,
    seller: "GadgetHub",
    estimatedDelivery: "2-5 business days",
    description:
      "A modern smart watch with fitness tracking, notifications, health monitoring, and a stylish design."
  },
  {
    id: 3,
    name: "Laptop",
    images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80"],
    price: 799.99,
    discount: 8,
    category: "Computers",
    stock: 10,
    rating: 4.8,
    reviews: 245,
    seller: "TechStore",
    estimatedDelivery: "3-5 business days",
    description:
      "Powerful and reliable laptop suitable for work, study, entertainment, and everyday computing."
  },
  {
    id: 4,
    name: "Gaming Mouse",
    images: ["https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80"],
    price: 39.99,
    discount: 12,
    category: "Gaming",
    stock: 42,
    rating: 4.4,
    reviews: 173,
    seller: "GamingZone",
    estimatedDelivery: "1-3 business days",
    description:
      "Responsive gaming mouse with precision tracking, customizable buttons, and an ergonomic design."
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    images: ["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"],
    price: 74.99,
    discount: 10,
    category: "Gaming",
    stock: 30,
    rating: 4.6,
    reviews: 189,
    seller: "GamingZone",
    estimatedDelivery: "1-3 business days",
    description:
      "Durable mechanical keyboard with responsive switches, RGB lighting, and comfortable key spacing."
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    images:"https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80",
    price: 49.99,
    discount: 15,
    category: "Electronics",
    stock: 35,
    rating: 4.4,
    reviews: 142,
    seller: "AudioWorld",
    estimatedDelivery: "2-4 business days",
    description:
      "Portable Bluetooth speaker delivering rich audio, deep bass, and reliable wireless connectivity."
  },
  {
    id: 7,
    name: "Tablet",
    images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80"],
    price: 249.99,
    discount: 12,
    category: "Computers",
    stock: 14,
    rating: 4.5,
    reviews: 210,
    seller: "GadgetHub",
    estimatedDelivery: "3-5 business days",
    description:
      "Slim and lightweight tablet with a vibrant display, powerful processor, and long battery life."
  },
  {
    id: 8,
    name: "USB-C Hub",
    images: ["https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&q=80"],
    price: 29.99,
    discount: 8,
    category: "Accessories",
    stock: 55,
    rating: 4.3,
    reviews: 87,
    seller: "TechStore",
    estimatedDelivery: "1-3 business days",
    description:
      "Compact USB-C hub with multiple ports for connecting displays, storage devices, keyboards, and more."
  },
  {
    id: 9,
    name: "Wireless Keyboard",
    images: ["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"],
    price: 44.99,
    discount: 10,
    category: "Accessories",
    stock: 28,
    rating: 4.2,
    reviews: 105,
    seller: "TechStore",
    estimatedDelivery: "2-4 business days",
    description:
      "Comfortable wireless keyboard with quiet keys, reliable connectivity, and a slim modern design."
  },
  {
    id: 10,
    name: "Gaming Headset",
    images: ["https://images.unsplash.com/photo-1599669454699-248893623440?w=500&q=80"],
    price: 69.99,
    discount: 18,
    category: "Gaming",
    stock: 22,
    rating: 4.7,
    reviews: 231,
    seller: "GamingZone",
    estimatedDelivery: "1-3 business days",
    description:
      "Immersive gaming headset featuring surround sound, a clear microphone, and comfortable ear cushions."
  },
  {
    id: 11,
    name: "Smartphone",
    images: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80"],
    price: 499.99,
    discount: 10,
    category: "Mobile",
    stock: 16,
    rating: 4.6,
    reviews: 318,
    seller: "MobileWorld",
    estimatedDelivery: "2-4 business days",
    description:
      "Modern smartphone with a bright display, powerful performance, advanced camera, and all-day battery."
  },
  {
    id: 12,
    name: "Power Bank",
    images: ["https://images.unsplash.com/photo-1566554738544-d962991c3fee?w=640"],
    price: 34.99,
    discount: 12,
    category: "Accessories",
    stock: 60,
    rating: 4.4,
    reviews: 156,
    seller: "GadgetHub",
    estimatedDelivery: "1-3 business days",
    description:
      "High-capacity portable power bank with fast charging and multiple USB ports for everyday use."
  },
  {
    id: 13,
    name: "Wireless Earbuds",
    images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80"],
    price: 54.99,
    discount: 15,
    category: "Audio",
    stock: 40,
    rating: 4.5,
    reviews: 204,
    seller: "AudioWorld",
    estimatedDelivery: "2-4 business days",
    description:
      "Compact wireless earbuds with clear audio, noise reduction, touch controls, and a charging case."
  },
  {
    id: 14,
    name: "4K Monitor",
    images: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80"],
    price: 329.99,
    discount: 9,
    category: "Computers",
    stock: 12,
    rating: 4.7,
    reviews: 164,
    seller: "TechStore",
    estimatedDelivery: "3-5 business days",
    description:
      "High-resolution 4K monitor with vivid colors, sharp details, and a wide viewing angle."
  },
  {
    id: 15,
    name: "Webcam",
    images: ["https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&q=80"],
    price: 64.99,
    discount: 11,
    category: "Accessories",
    stock: 27,
    rating: 4.3,
    reviews: 119,
    seller: "TechStore",
    estimatedDelivery: "2-4 business days",
    description:
      "Full HD webcam designed for video calls, online classes, streaming, and professional meetings."
  },
  {
    id: 16,
    name: "Gaming Chair",
    images: ["https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&q=80"],
    price: 179.99,
    discount: 20,
    category: "Gaming",
    stock: 9,
    rating: 4.5,
    reviews: 98,
    seller: "GamingZone",
    estimatedDelivery: "4-7 business days",
    description:
      "Ergonomic gaming chair with adjustable height, reclining backrest, lumbar support, and padded armrests."
  },
  {
    id: 17,
    name: "External SSD",
    images: ["https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80"],
    price: 119.99,
    discount: 13,
    category: "Storage",
    stock: 20,
    rating: 4.8,
    reviews: 176,
    seller: "TechStore",
    estimatedDelivery: "2-4 business days",
    description:
      "Fast and portable external SSD offering reliable storage for files, photos, videos, and applications."
  },
  {
    id: 18,
    name: "Smart TV",
    images: ["https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80"],
    price: 599.99,
    discount: 15,
    category: "Entertainment",
    stock: 7,
    rating: 4.6,
    reviews: 287,
    seller: "HomeTech",
    estimatedDelivery: "4-7 business days",
    description:
      "Large smart TV with a vibrant display, built-in streaming apps, wireless connectivity, and smart features."
  },
  {
    id: 19,
    name: "Digital Camera",
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80"],
    price: 449.99,
    discount: 10,
    category: "Cameras",
    stock: 11,
    rating: 4.5,
    reviews: 134,
    seller: "PhotoWorld",
    estimatedDelivery: "3-5 business days",
    description:
      "Versatile digital camera with high-quality image capture, multiple shooting modes, and easy controls."
  },
  {
    id: 20,
    name: "Smart LED Bulb",
    images: ["https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80"],
    price: 19.99,
    discount: 5,
    category: "Smart Home",
    stock: 75,
    rating: 4.2,
    reviews: 92,
    seller: "HomeTech",
    estimatedDelivery: "1-3 business days",
    description:
      "Energy-efficient smart LED bulb with adjustable brightness, app control, and customizable lighting modes."
  }
];

export default products;