import User from './Model';

export default function userRegister(req, res) {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    location: req.body.location,
  });

  newUser
    .save()
    .then(() => {
      res.status(200).json('User created');
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('User not created');
    })
    .finally(() => {
      console.log('End');
    });
}
