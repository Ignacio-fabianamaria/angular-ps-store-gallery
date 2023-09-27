export const slideConfig = {
  "slidesToShow":4,
  "slideToScroll":4,
  "autoplay":true,
  "autoplaySpeed":500,
  "pauseOnHover":true,
  "infinite":true,
  "responsive": [
    {
      "breakpoint":992,
      "settings": {
        "arrows": true,
        "infinite":true,
        "slideToShow":3,
        "slideToScroll":3,
      }
    },
    {
      "breakpoint": 768,
      "settings": {
        "arrows": true,
        "infinite":true,
        "slideToShow":1,
        "slideToScroll":1,
      }
    }
  ]
}
