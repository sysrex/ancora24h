exports.home = async (req, res) => {
  res.render('index');
  pageData.page_link = 'home';
};

exports.about = async (req, res) => {
  res.render('about');
  pageData.page_link = 'about';
};

exports.services = async (req, res) => {
  res.render('services');
  pageData.page_link = 'services';
};

exports.betreuer = async (req, res) => {
  res.render('betreuer');
  pageData.page_link = 'betreuer';
};

exports.contactBetreuer = async (req, res) => {
  console.log(req.body);
  res.redirect('/betreuer');
};
