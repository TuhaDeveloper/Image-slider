
const photos = ["Images/tab-content-2-1.jpg", "Images/tab-content-2-2.jpg", "Images/tab-content-2-3.jpg"];
const image = document.querySelector('img');

count = 0;


function next() {
    count++;
    if (count >= photos.length) {
        count = 0;
        image.src = photos[count]
    } else {
        image.src = photos[count]
    }
};

function prev() {
    count--;

    if (count < 0) {
        count = photos.length - 1;
        image.src = photos[count];
    } else {
        image.src = photos[count]
    }


}