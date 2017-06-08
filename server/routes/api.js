app.get('/fish/saltwater', (req, res) => {

  res.json([
    { name: 'tuna' },
    { name: 'cod'}
  ]);

})


app.get('/fish/freshwater', (req, res) => {

  res.json([
    { name: 'not tuna' },
    { name: 'not cod'}
  ]);

})