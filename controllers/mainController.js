exports.home = async (req, res) => {
  res.render('index');
};

exports.about = async (req, res) => {
  res.render('about');
};

exports.services = async (req, res) => {
  res.render('services');
};

exports.betreuer = async (req, res) => {
  res.render('betreuer');
};

exports.contactBetreuer = async (req, res) => {
  console.log(req.body);
};

exports.contact = async (req, res) => {
    res.render('contact');
};