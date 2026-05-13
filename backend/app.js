const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let students = [];

app.get('/', (req, res) => {
  res.json({
    message: 'Student Result Management Backend Running'
  });
});

app.post('/addStudent', (req, res) => {

  const {
    name,
    regno,
    department,
    mark1,
    mark2,
    mark3
  } = req.body;

  const total =
    Number(mark1) +
    Number(mark2) +
    Number(mark3);

  const average = (total / 3).toFixed(2);

  let result = 'FAIL';

  if (mark1 >= 35 && mark2 >= 35 && mark3 >= 35) {
    result = 'PASS';
  }

  const student = {
    name,
    regno,
    department,
    mark1,
    mark2,
    mark3,
    total,
    average,
    result
  };

  students.push(student);

  res.json({
    message: 'Student Added Successfully',
    student
  });
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
