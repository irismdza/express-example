app.get('/login', (req, res) => {

  res.json({ login: true });

});

app.get('/logout', (req, res) => {

  res.json({ login: false });
});