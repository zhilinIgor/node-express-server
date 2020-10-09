export default function cors(app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow_Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'Put, Post, Patch, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });
}
