// let data = {
//     photo: 'images/chocolate-4455840_1920.jpg',
//     title: 'My title',
//     description: 'What happened here, why is this a very nice image'
// };


// $('#photo').attr('src', data.photo);



$('#photo').css('visibility', 'hidden');
$('#subtitle').css('visibility', 'hidden');
// $('#photo').css('visibility', 'hidden');
let currentPhoto = 4;
let imagesData = [{
    photo: 'images/chocolate-4455840_1920.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
}, {
    photo: 'images/caterpillar-5113614_1920.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
}, {
    photo: 'images/city-5104205_1920.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
}, {
    photo: 'images/coffee-5037804_1920.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
}, {
    photo: 'images/creativity-4913182_1920.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
}, {
    photo: 'images/flower-5114574_1920.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
}, {
    photo: 'images/hamster-5115246_1920.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
}, {
    photo: 'images/lionfish-4482131_1920.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
}, {
    photo: 'images/mountains-and-hills-5112952_1920.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
}, {
    photo: 'images/music-sheet-5117328_1920.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
}];
// $('#photo').attr('src', imagesData[currentPhoto].photo);

setTimeout(function() {
    nextImage(1);
    $('#photo').css('visibility', '');
    $('#subtitle').css('visibility', '');

}, 900);




// console.log(currentPhoto);

// ...

$("#right").click(function(e) {
    e.preventDefault();
    nextImage(1);
    // if (currentPhoto == imagesData.length - 1) {
    //     currentPhoto = 0;
    // } else {
    //     currentPhoto++;

    // }
    // $('#photo').attr('src', imagesData[currentPhoto].photo);
});


$("#left").click(function(e) {
    e.preventDefault();
    nextImage(-1)
        // if (currentPhoto == 0) {
        //     currentPhoto = imagesData.length - 1;
        // } else {
        //     currentPhoto--;

    // }
    // $('#photo').attr('src', imagesData[currentPhoto].photo);
});

$(document).keydown(function(e) {
    if (e.key == 'j' || e.key == 'ArrowLeft') {
        nextImage(-1);
    }
});


$(document).keydown(function(e) {
    if (e.key == 'k' || e.key == 'ArrowRight') {
        nextImage(1);
    }
});


$(document).keydown(function(e) {
    var code = e.keyCode || e.which;
    console.log(code);
    console.log(e.key);
    console.log(e.keyCode);
    // console.log(e.keydown);
    console.log(e.which);
    // if (e.keyCode == 26 | e.keyCode == 107) {
    //     nextImage(1);
    // }
});

function moveIndex(currentPosition, array, moveItBy) {
    console.log(currentPosition, moveItBy);
    nextPosition = currentPosition + moveItBy;
    console.log(nextPosition);
    if (nextPosition < 0) {
        nextPosition = array.length + currentPosition + moveItBy;
    }
    console.log(nextPosition);

    if (nextPosition >= array.length) {
        nextPosition = currentPosition + moveItBy - array.length;
    }
    console.log(nextPosition);
    return nextPosition;
}

function preloadImage(currentPhoto) {
    preloadImageIndex = moveIndex(currentPhoto, imagesData, 1)
    $('.photos-1').attr('src', imagesData[preloadImageIndex].photo);
    preloadImageIndex = moveIndex(currentPhoto, imagesData, -1)
    $('.photos-2').attr('src', imagesData[preloadImageIndex].photo);
}

function nextImage(direction) {
    // $('#subtitle').css('display', 'none');
    currentPhoto = moveIndex(currentPhoto, imagesData, direction);

    // $('#photo').css('display', 'none');
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    // $('#photo').width();
    let currentWidth = 0;
    // $('#subtitle').removeAttr('margin-left');
    if (direction == 1) {
        currentWidth = $('.photos-1').width();
    } else {
        currentWidth = $('.photos-2').width();

    }

    // console.log(currentWidth);
    $('#subtitle').width(currentWidth);
    let currentLeftMargin = currentWidth / -2;
    // console.log(currentLeftMargin);
    $('#subtitle').css('margin-left', currentLeftMargin); //do something special
    // $('#subtitle').css('transition', 'visibility 0s, opacity §.5s linear');
    // $('#subtitle').css('display', '');
    // $('#photo').css('display', '');




    $('#title').text(imagesData[currentPhoto].title);
    $('#description').text(imagesData[currentPhoto].description);
    preloadImage(currentPhoto);

    // $('#subtitle').attr('margin-left', currentLeftMargin);
    // $(selector).attr(attributeName, value);

}

// $('#photo').append('<p>whatisit</p>');

// $('#left').click(function(e) {
//     e.preventDefault();

// });

// $('#right').click(function(e) {
//     e.preventDefault();

// });

// $('#thumbnails').click(function(e) {
//     e.preventDefault();

// });

// function image(title, text, filename) {
//     this.title = '',
//         this.text = '',
//         this.filename = '',
// }

// let images


// let loadimage = (image) => {

// }
setTimeout(function() {
    nextImage(1);
}, 500);