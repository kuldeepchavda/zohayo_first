const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json({ limit: '500mb' }));
app.use(express.json());
app.use(cors());

const mongoose = require('mongoose');

const deleteRoutes = require('./routes/delete.routes');
const personalDetails = require("./routes/personalDetails.routes")
const familyDetails = require("./routes/familyDetails.routes")
const incomeDetailsRoutes =require("./routes/incomeDetails.routes")
const employmentDetailsRoutes = require("./routes/employmentDetails.routes")
const permanentAddressRoutes = require("./routes/permanentAddress.routes")
mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to Tester DB');
}).catch((error) => {
  console.error('Error connecting to the database:', error);
  process.exit(1); // Exit the process with a failure code
});

//For local only, needs to be removed at the time of generating build.
app.get('/', (req, res) => {
  res.status(200).json({status:
    'Tester backend is live', server:"Tester", url:"https://tester.neosaturn.in"});
  });
app.use("/user",personalDetails)
app.use("/familydetails", familyDetails);
app.use('/delete', deleteRoutes);
app.use("/incomedetails", incomeDetailsRoutes);
app.use("/employment-details", employmentDetailsRoutes);
app.use("/permanent-address", permanentAddressRoutes);
app.use('*', (req, res) => {
  res.status(404).json({
    status: "404",
    error: "Route not found"
  });
});
const PORT = process.env.PORT;

const server = app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});