
    const restaurants = ['Cozy Favorites', 'True Originals', 'Monaco Restaurant', 'Thirsty Lion Gastropub & Grill', 'Venetian Terrace'];

    const randomRestaurantBtn = document.getElementById('randomRestaurantBtn');

    randomRestaurantBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * restaurants.length);
        
        alert('You should try: ' + restaurants[randomIndex]);
    });

