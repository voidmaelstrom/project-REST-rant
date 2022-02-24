const router = require('express').Router()

// router.get('/', (req, res) => {
//     res.send('GET /places')
// })

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://assets3.thrillist.com/v1/image/1805385/550x550/flatten;crop_down;webp=auto;jpeg_quality=70'
      },
      {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://www.thecoronadophx.com/img/home-pastry-case.jpg'
      }
    ]
    res.render('places/index', { places })
})

module.exports = router