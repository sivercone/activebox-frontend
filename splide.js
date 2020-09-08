document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider', {
        type: 'loop',
        perPage: 2,
        autoplay: true,
    }).mount();
});

