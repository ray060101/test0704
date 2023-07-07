const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/helloworld', (req, res) => {
    try {
        res.json({ status: 0, msg: 'hello world ' });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: -1, msg: 'Internal Server Error' });
      }
});


app.get('/EnergySwitchView', (req, res) => {
    try {
        const data = {
            solarInput: 30.5,
            gridInputOutput: -5.2,
            batteryInputOutput: 3.8,
            householdPowerConsumption: 12.3
        };
        res.json({ status: 0, data: data });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: -1, msg: 'Internal Server Error' });
    }
});

app.listen(80, () => {
  console.log('Server running on http://127.0.0.1');
});
