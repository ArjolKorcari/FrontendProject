new Glide('.glide', {
    perView: 1, 
    focusAt: 'center', 
    breakpoints: {
        800: {
            perView: 5 
        }
    }
}).mount();