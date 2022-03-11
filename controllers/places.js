const router = require('express').Router()
const db = require('../models')
const places = require('../models/places')

// router.get('/', (req, res) => {
//     res.send('GET /places')
// })
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

// GET /places
router.get('/', (req, res) => {
    // res.render('places/index', { places })
    res.send('GET /places stub')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// router.post('/', (req, res) => {
//   console.log(req.body)
//   res.send('POST /places')
// })

router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        // TODO: Generate error message(s)
        let message = 'Validation Error: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
        res.render('places/new', { message })
      } else {
        res.render('error404')
      }
    })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.get('/:id/comment', (req, res) => {
  res.render('places/comment', {'id':req.params.id})
})

// Add Comment
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      if(req.body.rant === 'on'){
        req.body.rant = 'true'
      }
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

router.post('/:id/rant', (req, res) => {
  res.send('POST /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('DELETE /places/:id/rant/:rantId stub')
})

module.exports = router