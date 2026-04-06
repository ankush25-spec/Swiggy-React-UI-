import React, { createContext, useState } from 'react'

const repoContext = createContext()
const Repository = ({ children }) => {
  const [repoData, setrepoData] = useState({
    categorySlider: [
      { id: 1, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png' },
      { id: 2, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png' },
      { id: 3, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png' },
      { id: 4, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png' },
      { id: 5, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png' },
      { id: 6, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png' },
      { id: 7, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole%20bhature.png' },
      { id: 8, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png' },
      { id: 9, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png' },
      { id: 10, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png' },
      { id: 11, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Rasgulla.png' },
      { id: 12, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kebabs.png' },
      { id: 13, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab%20jamun.png' },
      { id: 14, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure%20Veg.png' },
      { id: 15, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png' },
      { id: 16, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Desserts.png' },
      { id: 17, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pakoda.png' },
      { id: 18, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png' },
      { id: 19, link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/2b999748-b33c-4560-a422-e90f3e60a5fb_Poori1.png' },
    ],
    topRestaurant: [
      {
        id: 1,
        image: "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
        offer: "Items at ₹179",
        title: "Pizza Hut",
        rating: 4.2,
        time: "30-40 min",
        name: "Pizzas",
        place: "T. Nagar, Chennai"
      },
      {
        id: 2,
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/a6/7b/bb/try-them-all.jpg?w=900&h=500&s=1",
        offer: "Flat ₹100 OFF",
        title: "Burger King",
        rating: 4.1,
        time: "25-35 min",
        name: "Burgers, Fast Food",
        place: "Velachery, Chennai"
      },
      {
        id: 3,
        image: "https://www.spiceandcolour.com/wp-content/uploads/2020/06/receta-presentacion-biryani-de-pollo-01.jpg",
        offer: "50% OFF up to ₹120",
        title: "Behrouz Biryani",
        rating: 4.5,
        time: "35-45 min",
        name: "Biryani, Mughlai",
        place: "Anna Nagar, Chennai"
      },
      {
        id: 4,
        image: "https://static.vecteezy.com/system/resources/thumbnails/068/778/756/small/traditional-south-indian-meal-served-on-banana-leaf-with-rice-and-delicacies-photo.jpeg",
        offer: "Items at ₹99",
        title: "A2B - Adyar Ananda Bhavan",
        rating: 4.3,
        time: "20-30 min",
        name: "South Indian",
        place: "Adyar, Chennai"
      },
      {
        id: 5,
        image: "https://thumbs.dreamstime.com/b/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.jpg",
        offer: "Free Delivery",
        title: "KFC",
        rating: 4.0,
        time: "25-35 min",
        name: "Chicken, Fast Food",
        place: "Porur, Chennai"
      },
      {
        id: 6,
        image: "https://i.ytimg.com/vi/B5HdAw_Y0TU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA2TAaTRk8XxoZ1uMT-ZqmnWQE0Ow",
        offer: "₹125 OFF above ₹299",
        title: "Faasos",
        rating: 4.2,
        time: "30-40 min",
        name: "Rolls, Wraps",
        place: "Tambaram, Chennai"
      },
      {
        id: 7,
        image: "https://articles-1mg.gumlet.io/articles/wp-content/uploads/2025/11/shutterstock_2599244857-2.jpg?compress=true&quality=80&w=1000&dpr=2.6",
        offer: "Buy 1 Get 1 Free",
        title: "Baskin Robbins",
        rating: 4.4,
        time: "20-25 min",
        name: "Ice Cream, Desserts",
        place: "Nungambakkam, Chennai"
      },
      {
        id: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5phBOfKzvw2Rr_GL-v4hPfipRJsYpiWn-A&s",
        offer: "20% OFF",
        title: "Punjabi Tadka",
        rating: 4.1,
        time: "35-45 min",
        name: "North Indian",
        place: "Chromepet, Chennai",
      },
      {
        id: 9,
        image: "https://images.indianexpress.com/2022/09/chinese-cover.jpg?w=1200",
        offer: "₹150 OFF above ₹399",
        title: "Mainland China",
        rating: 4.3,
        time: "40-50 min",
        name: "Chinese",
        place: "Guindy, Chennai"
      },
      {
        id: 10,
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/easy-lemon-layer-cake-hero-e54adca.jpg?resize=1200%2C630",
        offer: "Flat ₹75 OFF",
        title: "The Cake Shop",
        rating: 4.5,
        time: "20-30 min",
        name: "Bakery, Cakes",
        place: "Besant Nagar, Chennai"
      }
    ],
    Deliveryrestaurants: [
      {
        id: 1,
        image: "https://b.zmtcdn.com/data/pictures/1/19909501/22302bc1fa30b93944949beea55418d1.jpg?fit=around|960:500&crop=960:500;*,*",
        offer: "Flat ₹120 OFF",
        title: "Arabian Nights",
        rating: 4.3,
        time: "30-40 min",
        name: "Arabian, Shawarma",
        place: "Perambur, Chennai"
      },
      {
        id: 2,
        image: "https://www.spicebangla.com/wp-content/uploads/2024/07/vegetable-sandwich-recipe.webp",
        offer: "Buy 1 Get 1",
        title: "Subway",
        rating: 4.1,
        time: "20-30 min",
        name: "Healthy Food, Sandwich",
        place: "OMR, Chennai",
        veg: true
      },
      {
        id: 3,
        image: "https://paattiskitchen.com/wp-content/uploads/2022/12/kmc_20221227_185444.jpg",
        offer: "Items at ₹129",
        title: "Madurai Mess",
        rating: 4.4,
        time: "35-45 min",
        name: "South Indian, Parotta",
        place: "Vadapalani, Chennai",
        veg: true
      },
      {
        id: 4,
        image: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2020-02/Chilli-Garlic-Noodles-Veg.jpg",
        offer: "₹100 OFF",
        title: "Wok Express",
        rating: 3.9,
        time: "25-35 min",
        name: "Chinese, Asian",
        place: "Ashok Nagar, Chennai",
      },
      {
        id: 5,
        image: "https://shoppalace.in/wp-content/uploads/2020/07/penne-pasta-resize-1.jpg",
        offer: "",
        title: "La Pasta",
        rating: 4.2,
        time: "30-40 min",
        name: "Italian, Pasta",
        place: "Alwarpet, Chennai",
        veg: true
      },
      {
        id: 6,
        image: "https://www.natashamohan.com/wp-content/uploads/2024/08/Untitled-design-17-1024x576.webp",
        offer: "Flat ₹90 OFF",
        title: "Veg Delight",
        rating: 4.3,
        time: "25-35 min",
        name: "Pure Veg",
        place: "Mylapore, Chennai",
        veg: true
      },
      {
        id: 7,
        image: "https://urbantreatsusa.com/cdn/shop/files/Screenshot2025-06-06at12.55.30AM.png?v=1749189346",
        offer: "",
        title: "Tandoori Treat",
        rating: 4.1,
        time: "35-45 min",
        name: "North Indian, Tandoor",
        place: "Tambaram East, Chennai"
      },
      {
        id: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsgozbr87fCnXrTBrOSy025FuJlcgxcTCBA&s",
        offer: "Buy 2 Get 1",
        title: "Juice Junction",
        rating: 4.5,
        time: "15-25 min",
        name: "Juices, Beverages",
        place: "ECR, Chennai",
        veg: true
      },
      {
        id: 9,
        image: "https://dadikitchen.com/wp-content/uploads/2025/12/soft-homemade-idli-recipe.jpg",
        offer: "Items at ₹59",
        title: "Idli Corner",
        rating: 4.0,
        time: "20-25 min",
        name: "South Indian",
        place: "Kodambakkam, Chennai",
        veg: true
      },
      {
        id: 10,
        image: "https://thumbs.dreamstime.com/b/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.jpg",
        offer: "Flat ₹110 OFF",
        title: "Wrap It Up",
        rating: 4.2,
        time: "25-35 min",
        name: "Wraps, Fast Food",
        place: "Anna Salai, Chennai"
      },
      {
        id: 11,
        image: "https://esquirescoffee.co.uk/wp-content/uploads/2021/09/mike-kenneally-tNALoIZhqVM-unsplash.jpg",
        offer: "20% OFF",
        title: "Cafe Coffee Day",
        rating: 3.7,
        time: "20-30 min",
        name: "Cafe, Beverages",
        place: "Guindy, Chennai",
        veg: true
      },
      {
        id: 12,
        image: "https://b.zmtcdn.com/data/pictures/chains/9/3200069/ce0341e58cf96f163101b4dff77ed938.jpg?fit=around|960:500&crop=960:500;*,*",
        offer: "Flat ₹150 OFF",
        title: "Domino's Pizza",
        rating: 4.3,
        time: "30-40 min",
        name: "Pizza",
        place: "Velachery, Chennai"
      },
      {
        id: 13,
        image: "https://www.cafe938.ch/wp-content/uploads/2024/08/Cafe938-RecettesDessertsEte-TiramisuGrand-scaled.jpg",
        offer: "₹80 OFF",
        title: "Sri Krishna Sweets",
        rating: 4.5,
        time: "20-25 min",
        name: "Sweets, Desserts",
        place: "T. Nagar, Chennai"
      },
      {
        id: 14,
        image: "https://static.vecteezy.com/system/resources/thumbnails/035/493/036/small/ai-generated-meat-grilled-bbq-food-photo.jpg",
        offer: "",
        title: "Grill House",
        rating: 4.2,
        time: "35-45 min",
        name: "BBQ, Grill",
        place: "Porur, Chennai"
      },
      {
        id: 15,
        image: "https://c.ndtvimg.com/2021-02/9e8j71q_grilled-fish_625x300_10_February_21.jpg",
        offer: "Flat ₹130 OFF",
        title: "Seafood Bay",
        rating: 4.4,
        time: "40-50 min",
        name: "Seafood",
        place: "Besant Nagar, Chennai"
      },
      {
        id: 16,
        image: "https://i.ytimg.com/vi/-yqgxNuz9Fo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLByrMzi7iIAF65zE2D2fyuuzgSWMA",
        offer: "Unlimited Thali ₹199",
        title: "Rajdhani Thali",
        rating: 3.5,
        time: "30-40 min",
        name: "Gujarati, Rajasthani",
        place: "Express Avenue, Chennai",
        veg: true
      },
      {
        id: 17,
        image: "https://www.momodelights.com/wp-content/uploads/2024/09/Is-Momo-from-Nepal-or-India-1-1024x577.png",
        offer: "Buy 1 Get 1",
        title: "Momo Nation",
        rating: 3.8,
        time: "25-35 min",
        name: "Momos, Tibetan",
        place: "Sholinganallur, Chennai"
      },
      {
        id: 18,
        image: "https://www.suziethefoodie.com/wp-content/uploads/2025/09/Calories-in-a-Donut.png",
        offer: "",
        title: "Donut World",
        rating: 4.2,
        time: "20-30 min",
        name: "Donuts, Desserts",
        place: "Kilpauk, Chennai"
      },
      {
        id: 19,
        image: "https://www.spiceandcolour.com/wp-content/uploads/2020/06/receta-presentacion-biryani-de-pollo-01.jpg",
        offer: "₹120 OFF",
        title: "Biryani Blues",
        rating: 4.4,
        time: "35-45 min",
        name: "Biryani",
        place: "Medavakkam, Chennai"
      },
      {
        id: 20,
        image: "https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-vegan-chocolate-milkshake-in-jar-1641676525.jpg",
        offer: "Buy 2 Get 1",
        title: "Shake Factory",
        rating: 3.9,
        time: "20-30 min",
        name: "Milkshakes",
        place: "Perungudi, Chennai",
        veg: true
      },
      {
        id: 21,
        image: "https://dt4l9bx31tioh.cloudfront.net/eazymedia/eazytrendz/5109/trend20251210114034.jpg",
        offer: "",
        title: "Saravana Bhavan",
        rating: 4.4,
        time: "20-30 min",
        name: "South Indian",
        place: "Mylapore, Chennai"
      },
      {
        id: 22,
        image: "https://c.ndtvimg.com/2020-04/6vslovro_kebab_625x300_15_April_20.jpg",
        offer: "Flat ₹140 OFF",
        title: "Kebab King",
        rating: 4.2,
        time: "30-40 min",
        name: "Kebabs, Mughlai",
        place: "Royapettah, Chennai"
      },
      {
        id: 23,
        image: "https://img.thecdn.in/48979/1625677774225_SKU-0015_0.jpg?width=600&format=webp",
        offer: "Buy 1 Get 1 Free",
        title: "Cheese Burst Pizza",
        rating: 4.1,
        time: "25-35 min",
        name: "Pizza",
        place: "Velachery, Chennai"
      },
      {
        id: 24,
        image: "https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1-500x375.jpg",
        offer: "₹100 OFF",
        title: "Noodle House",
        rating: 4.0,
        time: "30-40 min",
        name: "Chinese, Noodles",
        place: "Taramani, Chennai"
      },
      {
        id: 25,
        image: "https://canadabeef.ca/wp-content/uploads/2022/03/RS11875_Air-Fryer-Quarter-pound-Beef-Burgers-Fries-scr.jpg",
        offer: "Flat ₹90 OFF",
        title: "Big Bite Burgers",
        rating: 3.9,
        time: "20-30 min",
        name: "Burgers, Fast Food",
        place: "Perungudi, Chennai"
      },
      {
        id: 26,
        image: "https://manjulaskitchen.com/wp-content/uploads/falooda_kulfi.jpg",
        offer: "",
        title: "Falooda Factory",
        rating: 4.5,
        time: "15-25 min",
        name: "Desserts, Beverages",
        place: "Triplicane, Chennai"
      },
      {
        id: 27,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtp2whufCe-fZKTiBhZix7nOVPOXiThnOdyw&s",
        offer: "Free Delivery",
        title: "Grill Nation",
        rating: 4.2,
        time: "35-45 min",
        name: "Grill, BBQ",
        place: "Tambaram West, Chennai"
      },
      {
        id: 28,
        image: "https://content3.jdmagicbox.com/comp/def_content/veg-mess/1-veg-mess-3-3812b.jpg",
        offer: "Unlimited Meals ₹149",
        title: "Amma Mess",
        rating: 3.8,
        time: "25-35 min",
        name: "South Indian Meals",
        place: "Chromepet, Chennai"
      },
      {
        id: 29,
        image: "https://assets-eu-01.kc-usercontent.com/7d86daa4-c668-01be-7af8-44c5dd436d14/05c6b89f-37f6-4f6e-9f5b-837862657b01/Chocolate%20Cupcakes%204.2%20landscape-2144.jpg?w=3840&q=85&auto=format&lossless=1",
        offer: "Flat ₹60 OFF",
        title: "Cupcake Bliss",
        rating: 4.4,
        time: "20-30 min",
        name: "Bakery, Desserts",
        place: "Nungambakkam, Chennai"
      },
      {
        id: 20,
        image: "https://blog.swiggy.com/wp-content/uploads/2024/10/Image1_Pani-Puri-1024x538.jpg",
        offer: "₹50 OFF",
        title: "Street Food Hub",
        rating: 4.1,
        time: "20-30 min",
        name: "Street Food",
        place: "Egmore, Chennai"
      }
    ]
    
  })
  return (
    <repoContext.Provider value={{ repoData }}>
      {children}
    </repoContext.Provider>
  )
}

export default Repository
export { repoContext }