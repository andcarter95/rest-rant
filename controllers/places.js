const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})


// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Wiseguys',
        city: 'Columbia',
        state: 'MO',
        cuisines: 'Italian',
        pic: '/images/pizza.jpg'
      }, {
        name: 'Park',
        city: 'Columbia',
        state: 'MO',
        cuisines: 'Korean',
        pic: '/images/korean.jpg'
      }, {
        name: 'Signet',
        city: 'Pittsburg',
        state: 'KS',
        cuisines: 'Coffee',
        pic: 'coffee.jpg'
      }]

      res.render('places/index', { places })
  })
  
module.exports = router
