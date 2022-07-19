const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var index = 1

const changeImg = function(){
    var imgs = [
                  "./imge/anh_trong_setInterval/anh_1.jpg",
                  "./imge/anh_trong_setInterval/anh_2.jpg",
                  "./imge/anh_trong_setInterval/anh_3.jpg",
                  "./imge/anh_trong_setInterval/anh_4.jpg",
                  "./imge/anh_trong_setInterval/anh_5.jpg",
                  "./imge/anh_trong_setInterval/anh_6.jpg"
               ]
    document.getElementById('TT_img').src = imgs[index];
    index++;
    if(index === 5)
    {
        index = 0;
    }
}
setInterval(changeImg, 1700);



var index_1 = 1;
const changeImg_1 = function(){
    var imgs_1 = [
                  "./imge/quang_cao.jpg",
                  "./imge/slider_2.webp",
                  "./imge/slider_3.webp",
                  "./imge/slider_1.webp"
                ]
    document.getElementById('TT_img_1').src = imgs_1[index_1];
    index_1++;
    if(index_1 === 4)
    {
        index_1 = 0;
    }
}
setInterval(changeImg_1,2000);

// const Img_width = 800
// const slidercontainer = $('.TT_sliders')
// const sliderImg = $$('.TT_slider')
// const right = document.querySelector('.TT_right')


// console.log(slidercontainer);
// console.log(right);

// slidercontainer.style.width = `${sliderImg.length + Img_width }px`  
// let index_3 = 0;

// function next(){ 
//     if(index_3 = sliderImg.length - 1){
//         index_3++
//     }
//     else{
//         index_3 = 0
//     }
//     slidercontainer.style.transform = `translateX(-${Img_width + index_3}px)`
// }

// right.addEventListenner('click' , function(){
//     next()
// })