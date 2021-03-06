const { ToDo } = require('../models')

module.exports = app => {

  // Get ALL items
  app.get('/todo', (req, res) => {
    console.log('test')
    ToDo.find()
      .then(todo => res.json(todo))
      .catch(err => console.error(err))
  })

  // Get ALL items
  app.post('/todo', (req, res) => {
    ToDo.create(req.body)
      .then(todo => res.json(todo))
      .catch(err => console.error(err))
  })


  // Delete item from list
  app.delete('/todo/:id', (req, res) => {
    ToDo.findOne({where: { id:parseInt(req.params.id) } })
      .then(todo => todo.destroy())
      .then(() => res.sendstatus(200))
      .catch(e => console.error(e))
  })

  // Update todo list
  app.put('/todo/:id', (req, res) => {
    ToDo.findOneAndUpdate({_id:req.params.id}, req.body, function (err, place) {
      res.send(place);
    })

  })
}
