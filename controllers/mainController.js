exports.home = async (req, res) => {
  res.render('index');
};

exports.about = async (req, res) => {
  res.render('about');
};

exports.services = async (req, res) => {
  res.render('services');
};

exports.contact = async (req, res) => {
    res.render('contact');
  };