let navItem = document.querySelectorAll('.nav-item');
let galleryImage = document.querySelectorAll('.gallery-image');

for(let i = 0; i<navItem.length; i++){
    navItem[i].addEventListener('click', function(){
           
        for(let n = 0; n<navItem.length; n++){  
            navItem[n].classList.remove('active');
        }
    
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');
        
        for(let g = 0; g<galleryImage.length; g++){
            galleryImage[g].classList.remove('active');      
            galleryImage[g].classList.add('hide');

            if(galleryImage[g].getAttribute('data-item') == dataFilter || dataFilter == "all"){       
                galleryImage[g].classList.remove('hide');  
                galleryImage[g].classList.add('active');
            }
        }
    })
}


























// // selects all the html elements with the class .nav-item
// let navItem = document.querySelectorAll('.nav-item');

// // selects all the html elements with the class .gallery-image
// let galleryImage = document.querySelectorAll('.gallery-image');

// //for loop if i < then .nav-item then n++
// for(let i = 0; i<navItem.length; i++){

//     //The addEventListener() method that execute a function when a user clicks on html element with a class.nav-item 
//     navItem[i].addEventListener('click', function(){
           
//         //loops trough the html elements with a class .nav-item until finds an element with the class.nav-item active"
//         for(let n = 0; n<navItem.length; n++){
//             // and then removes the class .active
//             navItem[n].classList.remove('active');
//         }
//         //then adds the class.active to a clicked html element with class.nav-item 
//         this.classList.add('active');

//         //selecting html elements with data-filter attribute
//         let dataFilter = this.getAttribute('data-filter');
        
//         // loops trought all the html elements with the class.gallery-image inside the section class.gallery
//         for(let g = 0; g<galleryImage.length; g++){
//             //removes class=.active 
//             galleryImage[g].classList.remove('active');
//             //and adds class.hide
//             galleryImage[g].classList.add('hide');
//             // if html element with a attribute data-item have the same value as the element with the attribute data-filter or has value "all"
//             if(galleryImage[g].getAttribute('data-item') == dataFilter || dataFilter == "all"){
//                 // remove class.hide 
//                 galleryImage[g].classList.remove('hide');
//                  // and add class.active 
//                 galleryImage[g].classList.add('active');
//             }
//         }
//     })
// }




