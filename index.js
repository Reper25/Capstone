const {express, routes} = require('./controller');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');
const cors = require('cors');
const port = +process.env.PORT || 3000;
const errorHandling = require('./middleware/ErrorHandling');

app.use(
   '/', express.static(path.join(__dirname , './static/html/')),
    express.urlencoded({
        extended: false
    }),
    cookieParser(),
    cors(),
    routes
)
// this next line will show my html page
// app.use('/',express.static(path.join(__dirname , './static/html/')));
app.get( '/', (req, res) => {
    res.sendFile('./static/html/index.html');
})
app.use((err, req, res, next) => {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
} )