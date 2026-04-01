import './Menu.css';
import { useMemo, useState } from 'react';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/Footer';

const categoryDescriptions = {
    'Snacks': 'Crispy and flavorful bites perfect for any time of the day.',
    'Uthappam': 'Thick, savory South Indian pancakes topped with fresh vegetables.',
    'Pesarattu': 'Traditional Andhra-style green gram crepes, healthy and delicious.',
    'Dosa': 'Crispy South Indian rice and lentil crepes with a variety of fillings.',
    'Breakfast': 'Start your morning with our authentic Indian breakfast favorites.',
    'Veg Appetizers': 'Vegetarian specialties made with authentic taste and fresh ingredients.',
    'Non-Veg': 'Hearty non-veg favorites full of rich flavor.',
    'Omelette': 'Desi and classic omelette options for every craving.',
    'Veg Entrees': 'Rich and satisfying vegetarian entrees crafted with bold spices.',
    'Soups': 'Warm and flavorful soups made fresh to start your meal right.',
    'Tandoori': 'Char-grilled tandoori selections cooked to perfection.',
    'Maggie': 'Masala maggie twists with chef-style add-ons.',
    'Sea Food': 'Fresh seafood dishes with aromatic spices.',
    'Bread': 'Freshly baked Indian breads straight from the tandoor.',
    'Pulavs': 'Aromatic rice pulav variants with house seasoning.',
    'Non-Veg Entrees': 'Hearty non-veg entrees with rich gravies and bold flavors.',
    'Biryanis': 'Fragrant dum-style biryanis layered with spice and flavor.',
    'Drinks': 'Refreshing beverages, mocktails, and signature drinks.',
    'Indo Chinese': 'Spicy Indo-Chinese street favorites.',
    'Sweets': 'Traditional Indian sweets to end your meal on a sweet note.',
    'Haleem': 'Slow-cooked, rich and hearty Hyderabadi haleem.',
    'Breakfast Combo': 'Value combo meals to kickstart your morning.'
};

const menuItems = [
    // Snacks
    { name: 'Samosa', category: 'Snacks', price: '6.99', description: 'Crispy pastry stuffed with spiced potatoes and peas' },
    { name: 'Mirchi Bajji', category: 'Snacks', price: '5.49', description: 'Spicy green chillies dipped in gram flour batter and deep fried' },
    { name: 'Onion Pakoda', category: 'Snacks', price: '5.49', description: 'Crunchy onion fritters seasoned with spices' },
    { name: 'Punugulu', category: 'Snacks', price: '5.49', description: 'Golden fried rice and lentil batter balls' },
    { name: 'Aloo Bonda', category: 'Snacks', price: '6.99', description: 'Mashed potato balls coated in chickpea batter and fried' },
    { name: 'Egg Bonda (2)', category: 'Snacks', price: '5.49', description: 'Boiled egg wrapped in spiced potato and deep fried' },
    { name: 'Karam Punugulu', category: 'Snacks', price: '6.49', description: 'Spicy version of punugulu tossed with hot chilli seasoning' },
    { name: 'Onion Samosa', category: 'Snacks', price: '5.49', description: 'Flaky pastry filled with spiced onion stuffing' },
    { name: 'Stuffed Mirchi', category: 'Snacks', price: '6.49', description: 'Green chillies stuffed with tangy masala and fried crisp' },
    { name: 'Cut Mirchi', category: 'Snacks', price: '5.49', description: 'Sliced chillies battered and fried to a perfect crunch' },
    { name: 'Potato Samosa', category: 'Snacks', price: '5.49', description: 'Classic samosa with spiced potato filling' },
    { name: 'Veg Pakora', category: 'Snacks', price: '5.49', description: 'Assorted vegetables dipped in spiced batter and fried' },

    // Uthappam
    { name: 'Onion Uthappam', category: 'Uthappam', price: '8.99', description: 'Thick rice pancake topped with fresh onions' },
    { name: 'Tomato Uthappam', category: 'Uthappam', price: '8.99', description: 'Savory pancake topped with diced tomatoes' },
    { name: 'Mixed Veg Uthappam', category: 'Uthappam', price: '11.99', description: 'Loaded with onions, tomatoes, peppers and fresh veggies' },
    { name: 'Plain Uthappam', category: 'Uthappam', price: '7.99', description: 'Classic thick rice and lentil pancake with chutney' },
    { name: 'Chilli Uthappam', category: 'Uthappam', price: '8.99', description: 'Spicy pancake topped with green chillies' },
    { name: 'Vegetable Uthappam', category: 'Uthappam', price: '10.49', description: 'Thick pancake with a medley of garden vegetables' },
    { name: 'Onion Chilli Uthappam', category: 'Uthappam', price: '9.49', description: 'Topped with onions and green chillies for extra heat' },

    // Pesarattu
    { name: 'Plain Pesarattu', category: 'Pesarattu', price: '8.99', description: 'Traditional green gram crepe served with ginger chutney' },
    { name: 'Upma Pesarattu', category: 'Pesarattu', price: '11.99', description: 'Green gram crepe stuffed with savory semolina upma' },
    { name: 'Onion Pesarattu', category: 'Pesarattu', price: '9.99', description: 'Moong dal crepe topped with fresh onions' },
    { name: 'Onion Chilli Pesarattu', category: 'Pesarattu', price: '10.49', description: 'Spicy green gram crepe with onions and green chillies' },
    { name: 'Ginger Pesarattu', category: 'Pesarattu', price: '9.99', description: 'Pesarattu infused with fresh ginger for a zesty flavor' },

    // Dosa
    { name: 'Plain Dosa', category: 'Dosa', price: '7.99', description: 'Crispy golden rice and lentil crepe' },
    { name: 'Masala Dosa', category: 'Dosa', price: '8.99', description: 'Crispy dosa filled with spiced potato masala' },
    { name: 'Mysore Masala Dosa', category: 'Dosa', price: '12.99', description: 'Dosa spread with spicy red chutney and potato filling' },
    { name: 'Ghee Dosa', category: 'Dosa', price: '11.99', description: 'Dosa roasted in pure ghee for rich flavor' },
    { name: 'Onion Dosa', category: 'Dosa', price: '8.99', description: 'Crispy dosa topped with caramelized onions' },
    { name: 'Butter Masala Dosa', category: 'Dosa', price: '9.99', description: 'Butter-roasted dosa with spiced potato stuffing' },
    { name: 'Onion Masala Dosa', category: 'Dosa', price: '9.99', description: 'Onion-topped dosa stuffed with potato masala' },
    { name: 'Butter Dosa', category: 'Dosa', price: '8.99', description: 'Golden dosa generously spread with butter' },
    { name: 'Onion Butter Masala Dosa', category: 'Dosa', price: '10.99', description: 'Butter dosa with onions and potato masala filling' },
    { name: 'Cheese Dosa', category: 'Dosa', price: '9.99', description: 'Crispy dosa loaded with melted cheese' },
    { name: 'Ghee Karam Masala Dosa', category: 'Dosa', price: '10.99', description: 'Ghee-roasted dosa with spicy chilli powder and potato' },
    { name: 'Ghee Karam Dosa', category: 'Dosa', price: '9.99', description: 'Ghee dosa dusted with fiery karam podi' },
    { name: 'Chicken Tikka Dosa', category: 'Dosa', price: '11.99', description: 'Dosa filled with smoky chicken tikka pieces' },
    { name: 'Paneer Dosa', category: 'Dosa', price: '9.99', description: 'Dosa stuffed with seasoned paneer crumble' },
    { name: 'Egg Dosa', category: 'Dosa', price: '10.99', description: 'Dosa topped with a seasoned egg layer' },
    { name: 'Upma Dosa', category: 'Dosa', price: '9.99', description: 'Crispy dosa filled with savory semolina upma' },
    { name: 'Paneer Tikka Dosa', category: 'Dosa', price: '11.99', description: 'Dosa stuffed with grilled paneer tikka' },


    // Breakfast
    { name: 'Plain Idli', category: 'Breakfast', price: '6.49', description: 'Soft steamed rice cakes served with sambar and chutney' },
    { name: 'Vijayawada Idly', category: 'Breakfast', price: '7.49', description: 'Idli tossed in spicy Vijayawada-style masala' },
    { name: 'Ghee Karam Idly', category: 'Breakfast', price: '7.49', description: 'Idli tempered with ghee and fiery red chilli powder' },
    { name: 'Tawa Idly', category: 'Breakfast', price: '8.49', description: 'Pan-fried idli tossed with onions and spices' },
    { name: 'Sambar Idly', category: 'Breakfast', price: '8.49', description: 'Soft idli dipped and simmered in flavorful sambar' },
    { name: 'Tawa Bonda', category: 'Breakfast', price: '8.49', description: 'Crispy bonda pan-fried on tawa with spicy seasoning' },
    { name: 'Sambar Vada', category: 'Breakfast', price: '8.99', description: 'Crispy lentil vada soaked in warm sambar' },
    { name: 'Medhu Vada', category: 'Breakfast', price: '7.49', description: 'Crispy golden lentil donuts with coconut chutney' },
    { name: 'Mysore Bonda', category: 'Breakfast', price: '7.49', description: 'Fluffy deep-fried bonda with a crispy outer shell' },
    { name: 'Idly Vada (2+1)', category: 'Breakfast', price: '7.49', description: 'Combo of two soft idlis and one crispy vada' },
    { name: 'Poori With Mutton Curry', category: 'Breakfast', price: '11.99', description: 'Puffed pooris served with rich mutton curry' },
    { name: 'Idly Bonda (2+1)', category: 'Breakfast', price: '7.49', description: 'Combo of two soft idlis and one crispy bonda' },
    { name: 'Upma', category: 'Breakfast', price: '7.99', description: 'Savory semolina porridge with mustard and curry leaves' },
    { name: 'Poori With Potato Curry', category: 'Breakfast', price: '8.99', description: 'Puffed pooris with classic spiced potato curry' },
    { name: 'Pongal', category: 'Breakfast', price: '8.99', description: 'Creamy rice and lentil dish tempered with pepper and cumin' },
    { name: 'Poori With Chicken Curry', category: 'Breakfast', price: '10.99', description: 'Puffed pooris served with flavorful chicken curry' },
    { name: 'Plain Dosa', category: 'Breakfast', price: '7.99', description: 'Crispy golden rice and lentil crepe' },
    { name: 'Masala Dosa', category: 'Breakfast', price: '8.99', description: 'Crispy dosa filled with spiced potato masala' },
    { name: 'Butter Masala Dosa', category: 'Breakfast', price: '9.99', description: 'Butter-roasted dosa with potato stuffing' },
    { name: 'Onion Dosa', category: 'Breakfast', price: '8.99', description: 'Crispy dosa topped with caramelized onions' },
    { name: 'Onion Masala Dosa', category: 'Breakfast', price: '9.99', description: 'Onion-topped dosa with potato masala' },
    { name: 'Butter Dosa', category: 'Breakfast', price: '8.99', description: 'Golden dosa generously spread with butter' },
    { name: 'Onion Butter Masala Dosa', category: 'Breakfast', price: '10.99', description: 'Butter dosa with onions and potato filling' },
    { name: 'Cheese Dosa', category: 'Breakfast', price: '9.99', description: 'Crispy dosa loaded with melted cheese' },
    { name: 'Mysore Masala Dosa', category: 'Breakfast', price: '10.99', description: 'Dosa with spicy red chutney and potato filling' },
    { name: 'Ghee Karam Masala Dosa', category: 'Breakfast', price: '10.99', description: 'Ghee dosa with chilli powder and potato masala' },
    { name: 'Ghee Karam Dosa', category: 'Breakfast', price: '9.99', description: 'Ghee-roasted dosa dusted with karam podi' },
    { name: 'Chicken Tikka Dosa', category: 'Breakfast', price: '11.99', description: 'Dosa filled with smoky chicken tikka pieces' },
    { name: 'Paneer Dosa', category: 'Breakfast', price: '9.99', description: 'Dosa stuffed with seasoned paneer crumble' },
    { name: 'Egg Dosa', category: 'Breakfast', price: '10.99', description: 'Dosa topped with a seasoned egg layer' },
    { name: 'Upma Dosa', category: 'Breakfast', price: '9.99', description: 'Crispy dosa filled with savory semolina upma' },
    { name: 'Paneer Tikka Dosa', category: 'Breakfast', price: '11.99', description: 'Dosa stuffed with grilled paneer tikka' },


    // Veg Appetizers
    { name: 'Veg Manchuria', category: 'Veg Appetizers', price: '10.99', description: 'Mixed veggie balls tossed in tangy Indo-Chinese sauce' },
    { name: 'Chilli Gobi', category: 'Veg Appetizers', price: '11.99', description: 'Crispy cauliflower florets tossed in spicy chilli sauce' },
    { name: 'Chilli Baby Corn', category: 'Veg Appetizers', price: '11.49', description: 'Baby corn stir-fried with peppers in chilli sauce' },
    { name: 'Gobi Manchuria', category: 'Veg Appetizers', price: '11.99', description: 'Crispy cauliflower in sweet and spicy Manchurian sauce' },
    { name: 'Paneer 65', category: 'Veg Appetizers', price: '10.99', description: 'Crispy spiced paneer bites with curry leaves' },
    { name: 'Chilli Paneer', category: 'Veg Appetizers', price: '11.99', description: 'Paneer cubes tossed with peppers in spicy chilli sauce' },
    { name: 'Baby Corn Manchuria', category: 'Veg Appetizers', price: '10.99', description: 'Crispy baby corn in tangy Manchurian glaze' },
    { name: 'Mushroom Manchuria', category: 'Veg Appetizers', price: '10.99', description: 'Mushrooms coated and tossed in Manchurian sauce' },
    { name: 'Gobi 65', category: 'Veg Appetizers', price: '10.99', description: 'Crispy spiced cauliflower bites with curry leaves' },
    { name: 'Crispy Corn', category: 'Veg Appetizers', price: '9.99', description: 'Golden fried corn kernels seasoned with spices' },
    { name: 'Mushroom Pepper Fry', category: 'Veg Appetizers', price: '11.49', description: 'Mushrooms sauteed with cracked pepper and spices' },


    // Non-Veg
    { name: 'Chicken 65', category: 'Non-Veg', price: '10.99', description: 'Spicy deep-fried chicken bites with curry leaves' },
    { name: 'Chicken Majestic', category: 'Non-Veg', price: '12.99', description: 'Crispy chicken tossed with yogurt and aromatic spices' },
    { name: 'Chicken Manchuria', category: 'Non-Veg', price: '12.99', description: 'Crispy chicken balls in tangy Manchurian sauce' },
    { name: 'Chicken Pakora', category: 'Non-Veg', price: '9.99', description: 'Tender chicken pieces battered and deep fried' },
    { name: 'Karvepaku Chicken', category: 'Non-Veg', price: '12.99', description: 'Chicken sauteed with fresh curry leaves and spices' },
    { name: 'Chilli Chicken', category: 'Non-Veg', price: '12.99', description: 'Crispy chicken tossed with peppers in chilli sauce' },
    { name: 'Chicken Lollipop', category: 'Non-Veg', price: '12.99', description: 'Frenched chicken wings fried crispy with spicy glaze' },
    { name: 'Chicken 555', category: 'Non-Veg', price: '12.99', description: 'Double-fried chicken coated in a fiery masala' },
    { name: 'Parchimirchi Chicken', category: 'Non-Veg', price: '12.99', description: 'Chicken tossed with green chillies and bold spices' },
    { name: 'Mutton Pepper Fry', category: 'Non-Veg', price: '13.99', description: 'Tender mutton sauteed with cracked black pepper' },
    { name: 'Mutton Ghee Roast', category: 'Non-Veg', price: '13.99', description: 'Mutton slow-roasted in ghee with Mangalorean spices' },
    { name: 'Mutton  Sukka ', category: 'Non-Veg', price: '15.99', description: 'Dry-roasted mutton with coconut and aromatic spices' },
    { name: 'Mutton Ghee Roast (Boneless)', category: 'Non-Veg', price: '15.99', description: 'Boneless mutton ghee-roasted with rich masala' },
    { name: 'Mutton Chops', category: 'Non-Veg', price: '16.99', description: 'Juicy mutton chops marinated and fried to perfection' },
    { name: 'Pepper Chicken', category: 'Non-Veg', price: '12.99', description: 'Chicken tossed with crushed pepper and curry leaves' },

    // Omelette
    { name: 'Omelette', category: 'Omelette', price: '4.99', description: 'Classic fluffy egg omelette with herbs' },
    { name: 'Half Boiled Omelette', category: 'Omelette', price: '4.99', description: 'Soft half-boiled egg with a runny center' },


    // Veg Entrees
    { name: 'Chana Palak', category: 'Veg Entrees', price: '13.99', description: 'Chickpeas simmered in creamy spinach gravy' },
    { name: 'Paneer Tikka Masala', category: 'Veg Entrees', price: '14.99', description: 'Charred paneer cubes in rich tikka masala sauce' },
    { name: 'Shahi Paneer', category: 'Veg Entrees', price: '14.99', description: 'Paneer in a royal creamy cashew and tomato gravy' },
    { name: 'Paneer Butter Masala', category: 'Veg Entrees', price: '14.99', description: 'Paneer cubes in velvety butter tomato sauce' },
    { name: 'Chana Masala', category: 'Veg Entrees', price: '12.99', description: 'Chickpeas cooked in tangy tomato-based masala' },
    { name: 'Gutthu Vankaya Curry', category: 'Veg Entrees', price: '13.99', description: 'Stuffed baby eggplant in spicy peanut-sesame gravy' },
    { name: 'Dal Tadka', category: 'Veg Entrees', price: '12.99', description: 'Yellow lentils tempered with cumin and garlic' },
    { name: 'Dal Makhani', category: 'Veg Entrees', price: '13.99', description: 'Slow-cooked black lentils in creamy buttery gravy' },
    { name: 'Kadai Paneer', category: 'Veg Entrees', price: '14.99', description: 'Paneer tossed with peppers and kadai spices' },
    { name: 'Methi Malai Paneer', category: 'Veg Entrees', price: '14.99', description: 'Paneer in a creamy fenugreek-infused sauce' },
    { name: 'Aloo Gobi', category: 'Veg Entrees', price: '12.99', description: 'Potato and cauliflower sauteed with turmeric and spices' },
    { name: 'Paneer Bhurji', category: 'Veg Entrees', price: '14.99', description: 'Scrambled paneer with onions, tomatoes and spices' },
    { name: 'Saag Paneer', category: 'Veg Entrees', price: '14.99', description: 'Paneer cubes in smooth pureed spinach gravy' },
    { name: 'Kaju Malai Kofta', category: 'Veg Entrees', price: '15.99', description: 'Cashew-stuffed kofta balls in rich malai gravy' },
    { name: 'Malai Kofta', category: 'Veg Entrees', price: '14.99', description: 'Deep-fried veggie dumplings in creamy tomato sauce' },
    { name: 'Chana Palak', category: 'Veg Entrees', price: '13.99', description: 'Chickpeas simmered in creamy spinach gravy' },
    { name: 'Shahi Paneer', category: 'Veg Entrees', price: '14.99', description: 'Paneer in a royal creamy cashew and tomato gravy' },

    // Soups
    { name: 'Miriyala Rasam', category: 'Soups', price: '4.99', description: 'Warm peppery South Indian lentil broth' },


    // Tandoori
    { name: 'Chicken Tikka Kabab', category: 'Tandoori', price: '14.99', description: 'Juicy chicken pieces marinated and grilled in tandoor' },
    { name: 'Tandoori Chicken', category: 'Tandoori', price: '14.99', description: 'Classic char-grilled chicken with smoky marinade' },
    { name: 'Paneer Tikka Kabab', category: 'Tandoori', price: '13.99', description: 'Tandoor-grilled paneer cubes with bell peppers' },


    // Maggie
    { name: 'Egg Maggie', category: 'Maggie', price: '9.99', description: 'Masala maggie topped with a fried egg' },
    { name: 'Chicken Maggie', category: 'Maggie', price: '10.99', description: 'Spicy maggie tossed with seasoned chicken' },
    { name: 'Veg Maggie', category: 'Maggie', price: '8.99', description: 'Classic maggie noodles with mixed vegetables' },

    // Sea Food
    { name: 'Fish Pomfret', category: 'Sea Food', price: '15.99', description: 'Whole pomfret fish marinated and pan-fried' },
    { name: 'Shrimp Pepper Fry', category: 'Sea Food', price: '15.99', description: 'Shrimp sauteed with cracked pepper and curry leaves' },
    { name: 'Shrimp 65', category: 'Sea Food', price: '14.99', description: 'Crispy deep-fried shrimp with spicy seasoning' },
    { name: 'Masala Fish Fry ', category: 'Sea Food', price: '14.99', description: 'Fish fillet coated in aromatic masala and fried crisp' },
    { name: 'Nellore Fish Curry', category: 'Sea Food', price: '17.99', description: 'Fish fillet coated in aromatic chettinad masala and fried crisp' },
    { name: 'Chettinad Shrimp', category: 'Sea Food', price: '17.99', description: 'Fish fillet coated in aromatic chettinad masala and fried crisp' },


    // Bread
    { name: 'Bullet Naan', category: 'Bread', price: '3.49', description: 'Spicy stuffed naan with a fiery kick' },
    { name: 'Butter Naan', category: 'Bread', price: '2.99', description: 'Soft naan brushed with melted butter' },
    { name: 'Plain Naan', category: 'Bread', price: '2.49', description: 'Soft and fluffy tandoor-baked flatbread' },
    { name: 'Chapathi', category: 'Bread', price: '1.99', description: 'Thin whole wheat flatbread cooked on tawa' },
    { name: 'Tandoori Roti', category: 'Bread', price: '2.99', description: 'Whole wheat bread baked in clay tandoor' },
    { name: 'Garlic Naan', category: 'Bread', price: '3.49', description: 'Naan topped with garlic butter and herbs' },
    { name: 'Rumali Roti', category: 'Bread', price: '3.49', description: 'Thin, soft flatbread made from flour' },


    // Pulavs
    { name: 'Gongura Chicken Pulav', category: 'Pulavs', price: '16.99' },
    { name: 'Raju Gari Kodi Pulav', category: 'Pulavs', price: '15.99' },
    { name: 'Guttivankai Pulav', category: 'Pulavs', price: '14.99' },
    { name: 'Goat Kheema Pulav', category: 'Pulavs', price: '17.99' },
    { name: 'Gongura Goat Pulav', category: 'Pulavs', price: '17.99' },
    { name: 'Goat Boneless Pulav', category: 'Pulavs', price: '17.99' },
    { name: 'Goat Pulav', category: 'Pulavs', price: '16.99' },
    { name: 'Vijayawada Chicken Pulav', category: 'Pulavs', price: '16.99' },
    { name: 'Pachimirchi Kodi Pulav', category: 'Pulavs', price: '16.99' },
    { name: 'Paneer Tikka Pulav', category: 'Pulavs', price: '14.99' },
    { name: 'Mutton ghee roast pulav', category: 'Pulavs', price: '17.99' },
    { name: 'Chicken ghee roast pulav ', category: 'Pulavs', price: '16.99' },
    { name: 'Paneer ghee roast pulav  ', category: 'Pulavs', price: '14.99' },
    { name: 'Nizam Chicken 65 Pulav ', category: 'Pulavs', price: '16.99' },
    { name: 'Nizam Mutton Pulav ', category: 'Pulavs', price: '17.99' },
    { name: 'Nizam Paneer Pulav ', category: 'Pulavs', price: '14.99' },
    { name: 'Nizam Shrimp 65 Pulav ', category: 'Pulavs', price: '17.99' },

    // Non-Veg Entrees
    { name: 'Chettinad Egg', category: 'Non-Veg Entrees', price: '14.99' },
    { name: 'Chicken Tikka Masala', category: 'Non-Veg Entrees', price: '15.99' },
    { name: 'Ulavacharu Chicken', category: 'Non-Veg Entrees', price: '15.99' },
    { name: 'Chettinad Goat', category: 'Non-Veg Entrees', price: '17.99' },
    { name: 'Butter Chicken Masala', category: 'Non-Veg Entrees', price: '15.99' },
    { name: 'Egg Chettinad', category: 'Non-Veg Entrees', price: '14.99' },
    { name: 'Telangana Goat Curry', category: 'Non-Veg Entrees', price: '16.99' },
    { name: 'Gongura Chicken', category: 'Non-Veg Entrees', price: '15.99' },
    { name: 'Kadai Chicken', category: 'Non-Veg Entrees', price: '15.99' },
    { name: 'Goat Mughalai (Kids)', category: 'Non-Veg Entrees', price: '17.99' },
    { name: 'Ulavacharu Goat Curry', category: 'Non-Veg Entrees', price: '17.99' },
    { name: 'Muglai Chicken (Kids)', category: 'Non-Veg Entrees', price: '15.99' },
    { name: 'Egg Kurma', category: 'Non-Veg Entrees', price: '13.49' },
    { name: 'Gongura Goat', category: 'Non-Veg Entrees', price: '17.99' },
    { name: 'Egg Bhurji', category: 'Non-Veg Entrees', price: '12.99' },
    { name: 'Ulavacharu Egg', category: 'Non-Veg Entrees', price: '14.99' },
    { name: 'Chettinad Chicken Masala', category: 'Non-Veg Entrees', price: '15.99' },
    { name: 'Goat Kheema', category: 'Non-Veg Entrees', price: '17.99' },
   

    // Biryanis
    { name: 'Chicken Dum Biryani', category: 'Biryanis', price: '13.99' },
    { name: 'MLA Potlam Biryani (Chicken)', category: 'Biryanis', price: '17.99' },
    { name: 'Chicken Dum Biryani', category: 'Biryanis', price: '15.99' },
    { name: 'Eatstreet Spl Chicken Biryani', category: 'Biryanis', price: '16.99' },
    { name: 'Chicken Mughalai Biryani', category: 'Biryanis', price: '16.99' },
    { name: 'Gutti Vankai Biryani', category: 'Biryanis', price: '14.99' },
    { name: 'Ulavacharu Chicken Biryani', category: 'Biryanis', price: '16.99' },
    { name: 'Egg Biryani', category: 'Biryanis', price: '14.99' },
    { name: 'Ulavacharu Egg Biryani', category: 'Biryanis', price: '15.99' },
    { name: 'Gongura Chicken Biryani', category: 'Biryanis', price: '16.99' },
    { name: 'Goat Dum Biryani', category: 'Biryanis', price: '16.99' },
    { name: 'Ulavacharu Mutton Biryani', category: 'Biryanis', price: '17.99' },
    { name: 'Goat Keema Biryani', category: 'Biryanis', price: '17.99' },
    { name: 'Eat Street Spl Goat Biryani', category: 'Biryanis', price: '17.99' },
    { name: 'Goat Mughalai Biryani', category: 'Biryanis', price: '17.99' },
    { name: 'Vijayawada Boneless Goat Biryani', category: 'Biryanis', price: '17.99' },
    { name: 'Nalli Gosht Biryani', category: 'Biryanis', price: '19.99' },
    { name: 'Gongura Goat Biryani', category: 'Biryanis', price: '17.99' },
    { name: 'Vijayawada Boneless Chicken Biryani', category: 'Biryanis', price: '16.99' },
    { name: 'Nizam Chicken 65 Biryani', category: 'Biryanis', price: '16.99' },
    { name: 'Nizam Mutton Biryani', category: 'Biryanis', price: '17.99' },
    { name: 'Nizam Paneer Biryani', category: 'Biryanis', price: '14.99' },
    { name: 'Mutton ghee roast biryani', category: 'Biryanis', price: '17.99' },
    { name: 'Chicken ghee roast biryani', category: 'Biryanis', price: '16.99' },
    { name: 'Paneer ghee roast biryani', category: 'Biryanis', price: '14.99' },
    { name: 'Nizam Shrimp 65 Biryani', category: 'Biryanis', price: '17.99' },

    // Drinks
    { name: 'Thums Up', category: 'Drinks', price: '2.49' },
    { name: 'Coke', category: 'Drinks', price: '2.49' },
    { name: 'Limca', category: 'Drinks', price: '2.49' },
    { name: 'Sprite', category: 'Drinks', price: '1.99' },
    { name: 'Tea Large', category: 'Drinks', price: '2.49' },
    { name: 'Water Bottle', category: 'Drinks', price: '1.00' },
    { name: 'Mango Lassi', category: 'Drinks', price: '4.99' },
    { name: 'Rose Milk', category: 'Drinks', price: '4.99' },
    { name: 'Coffee', category: 'Drinks', price: '3.49' },



    // Indo Chinese
    { name: 'Veg Fried Rice', category: 'Indo Chinese', price: '12.99' },
    { name: 'Chicken Fried Rice', category: 'Indo Chinese', price: '14.99' },
    { name: 'Egg Fried Rice', category: 'Indo Chinese', price: '13.99' },
    { name: 'Veg Noodles', category: 'Indo Chinese', price: '12.99' },
    { name: 'Chicken Noodles', category: 'Indo Chinese', price: '14.99' },
    { name: 'Egg Noodles', category: 'Indo Chinese', price: '13.99' },


    // Sweets
    { name: 'Gulab Jamun', category: 'Sweets', price: '4.49' },
    { name: 'Rasmalai', category: 'Sweets', price: '4.49' },
    { name: 'Badam Milk', category: 'Sweets', price: '4.99' },

    // Haleem
    { name: 'Haleem', category: 'Haleem', price: '15.99' },


    // Breakfast Combo
    { name: 'Idli Vada Combo', category: 'Breakfast Combo', price: '9.99' },
    { name: 'Dosa Vada Combo', category: 'Breakfast Combo', price: '10.99' },
    { name: 'Puri Upma Combo', category: 'Breakfast Combo', price: '10.99' },
    { name: 'Mini Tiffin Combo', category: 'Breakfast Combo', price: '11.99' },
    { name: 'South Indian Thali', category: 'Breakfast Combo', price: '13.99' },
    { name: 'Pesarattu Upma Combo', category: 'Breakfast Combo', price: '11.99' },
];

const getCategoryName = (item) => (Object.prototype.hasOwnProperty.call(item, 'item_name') ? item.name : item.category);
const getItemName = (item) => (Object.prototype.hasOwnProperty.call(item, 'item_name') ? item.item_name : item.name);

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const menuCategories = useMemo(
        () => [...new Set(menuItems.map((item) => getCategoryName(item)).filter(Boolean))],
        []
    );

    const groupedMenu = useMemo(() => {
        if (activeCategory === 'All') {
            return menuCategories
                .map((category) => ({
                    category,
                    items: menuItems.filter((item) => getCategoryName(item) === category)
                }))
                .filter((group) => group.items.length > 0);
        }

        return [
            {
                category: activeCategory,
                items: menuItems.filter((item) => getCategoryName(item) === activeCategory)
            }
        ];
    }, [activeCategory, menuCategories]);

    return (
        <div className="menu-page">
            <Header />

            <main className="menu-page-content">
                <div className="container">
                    <h1 className="menu-page-title">Menu Categories</h1>

                    <div className="menu-mobile-dropdown">
                        <button
                            type="button"
                            className={`menu-mobile-dropdown-trigger ${isMobileDropdownOpen ? 'open' : ''}`}
                            onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
                            aria-expanded={isMobileDropdownOpen}
                            aria-label="Toggle menu categories"
                        >
                            <span>{activeCategory}</span>
                            <span className="menu-mobile-dropdown-icon" />
                        </button>

                        {isMobileDropdownOpen && (
                            <div className="menu-mobile-dropdown-list">
                                <button
                                    type="button"
                                    className={`menu-mobile-dropdown-item ${activeCategory === 'All' ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveCategory('All');
                                        setIsMobileDropdownOpen(false);
                                    }}
                                >
                                    All
                                </button>
                                {menuCategories.map((category) => (
                                    <button
                                        key={`mobile-${category}`}
                                        type="button"
                                        className={`menu-mobile-dropdown-item ${activeCategory === category ? 'active' : ''}`}
                                        onClick={() => {
                                            setActiveCategory(category);
                                            setIsMobileDropdownOpen(false);
                                        }}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="menu-categories-shell">
                        <button
                            type="button"
                            className={`menu-category-pill ${activeCategory === 'All' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('All')}
                        >
                            All
                        </button>
                        {menuCategories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={`menu-category-pill ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="menu-list-shell">
                        {groupedMenu.map((group) => (
                            <section key={group.category} className="menu-category-block">
                                <h2 className="menu-category-title">{group.category}</h2>
                                <p className="menu-category-description">
                                    {categoryDescriptions[group.category] || 'Carefully curated menu options for this category.'}
                                </p>

                                <div className="menu-items-grid">
                                    {group.items.map((item, index) => (
                                        <article key={`${group.category}-${getItemName(item)}-${index}`} className="menu-item-row">
                                            <div className="menu-item-row-top">
                                                <h3>{getItemName(item)}</h3>
                                                <p>${item.price}</p>
                                            </div>
                                            <p className="menu-item-row-description">{item.description}</p>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Menu;
