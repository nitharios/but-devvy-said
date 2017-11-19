
const debug = require('debug')('botkit:oauth');

module.exports = (req,res) => {
  const handler = {
    login: (req, res) =>{
      res.redirect(controller.getAuthorizeURL());
    },
    oauth: (req, res) => {
      let code = req.query.code;
      let staste= req.query.state;
    }
  };
//bot with no token
  const slackapi = controller.spawn({});

  const opts = {
    client_id: controller.config.clientId,
    client_secret: controller.config.clientSecret,
    code: code
  };

  slackapi.api.oauth.accsess(opts, (err, auth) =>{
    if(err){
      debug('OH MY! Login has had some troubles :(', err);
      // return res.redirect('/login_error.html'); // < ---- does not exist yet
    }
  })
}// end of handler