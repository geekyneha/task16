const students = [
  {
    name: 'John Doe',
    class: '10th Grade',
    marks: { math: 85, science: 90, english: 78 },
    address: {
      street: '123 Elm St',
      city: 'Springfield',
      state: 'IL',
      zip: '62704',
    },
  },
  {
    name: 'Jane Smith',
    class: '9th Grade',
    marks: { math: 92, science: 88, english: 81 },
    address: {
      street: '456 Oak St',
      city: 'Metropolis',
      state: 'NY',
      zip: '10001',
    },
  },
  {
    name: 'Sam Wilson',
    class: '11th Grade',
    marks: { math: 75, science: 85, english: 80 },
    address: {
      street: '789 Pine St',
      city: 'Gotham',
      state: 'NJ',
      zip: '07001',
    },
  },
  {
    name: 'Emily Davis',
    class: '10th Grade',
    marks: { math: 89, science: 92, english: 85 },
    address: {
      street: '101 Maple St',
      city: 'Star City',
      state: 'CA',
      zip: '94016',
    },
  },
  {
    name: 'Michael Brown',
    class: '12th Grade',
    marks: { math: 78, science: 81, english: 74 },
    address: {
      street: '202 Birch St',
      city: 'Central City',
      state: 'FL',
      zip: '33101',
    },
  },
  {
    name: 'Sophia Miller',
    class: '9th Grade',
    marks: { math: 91, science: 86, english: 88 },
    address: {
      street: '303 Cedar St',
      city: 'Smallville',
      state: 'KS',
      zip: '66502',
    },
  },
  {
    name: 'Liam Anderson',
    class: '11th Grade',
    marks: { math: 84, science: 79, english: 82 },
    address: {
      street: '404 Walnut St',
      city: 'Coast City',
      state: 'OR',
      zip: '97035',
    },
  },
  {
    name: 'Olivia Martinez',
    class: '10th Grade',
    marks: { math: 88, science: 84, english: 90 },
    address: {
      street: '505 Willow St',
      city: 'National City',
      state: 'AZ',
      zip: '85001',
    },
  },
  {
    name: 'Noah Garcia',
    class: '12th Grade',
    marks: { math: 79, science: 76, english: 83 },
    address: {
      street: '606 Fir St',
      city: 'Freeland',
      state: 'WA',
      zip: '98249',
    },
  },
  {
    name: 'Ava Wilson',
    class: '9th Grade',
    marks: { math: 92, science: 91, english: 89 },
    address: {
      street: '707 Poplar St',
      city: 'Midway City',
      state: 'TX',
      zip: '75001',
    },
  },
  {
    name: 'James White',
    class: '10th Grade',
    marks: { math: 85, science: 87, english: 82 },
    address: {
      street: '808 Sycamore St',
      city: 'Blüdhaven',
      state: 'NC',
      zip: '27520',
    },
  },
  {
    name: 'Isabella Harris',
    class: '11th Grade',
    marks: { math: 89, science: 90, english: 92 },
    address: {
      street: '909 Aspen St',
      city: 'Gateway City',
      state: 'NV',
      zip: '89001',
    },
  },
  {
    name: 'Alexander Clark',
    class: '12th Grade',
    marks: { math: 78, science: 80, english: 85 },
    address: {
      street: '1010 Spruce St',
      city: 'Opal City',
      state: 'CO',
      zip: '80010',
    },
  },
  {
    name: 'Mia Lewis',
    class: '10th Grade',
    marks: { math: 94, science: 89, english: 91 },
    address: {
      street: '1111 Hickory St',
      city: 'Ivytown',
      state: 'IN',
      zip: '46032',
    },
  },
  {
    name: 'Elijah Hall',
    class: '9th Grade',
    marks: { math: 86, science: 83, english: 87 },
    address: {
      street: '1212 Cherry St',
      city: 'Hub City',
      state: 'MO',
      zip: '63101',
    },
  },
  {
    name: 'Charlotte Adams',
    class: '12th Grade',
    marks: { math: 88, science: 91, english: 86 },
    address: {
      street: '1313 Beech St',
      city: 'Keystone City',
      state: 'PA',
      zip: '19001',
    },
  },
  {
    name: 'Benjamin Scott',
    class: '10th Grade',
    marks: { math: 80, science: 84, english: 79 },
    address: {
      street: '1414 Chestnut St',
      city: 'Fawcett City',
      state: 'OH',
      zip: '43001',
    },
  },
  {
    name: 'Amelia Turner',
    class: '11th Grade',
    marks: { math: 87, science: 89, english: 90 },
    address: {
      street: '1515 Magnolia St',
      city: 'Happy Harbor',
      state: 'MA',
      zip: '02043',
    },
  },
  {
    name: 'Logan Walker',
    class: '9th Grade',
    marks: { math: 81, science: 78, english: 82 },
    address: {
      street: '1616 Elm St',
      city: 'Riverdale',
      state: 'VT',
      zip: '05001',
    },
  },
  {
    name: 'Harper Young',
    class: '12th Grade',
    marks: { math: 90, science: 88, english: 92 },
    address: {
      street: '1717 Maple St',
      city: 'Emerald City',
      state: 'WI',
      zip: '53202',
    },
  },
];

console.log(students);


const main = document.getElementById('main');
const inputField = document.getElementById('search');


const renderCards = (studentsArray) => {
  main.innerHTML = ''; 
  studentsArray.forEach((student) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="name">Student Name: ${student.name}</div>
      <div class="marks">Math Marks: ${student.marks.math}</div>
      <div class="class">Class: ${student.class}</div>
      <div class="address">City: ${student.address.city}</div>
    `;
    main.appendChild(card);
  });
};


renderCards(students);


inputField.addEventListener('keyup', () => {
  const userInput = inputField.value.toLowerCase(); 

 
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(userInput)
  );


  renderCards(filteredStudents);


  if (filteredStudents.length === 0) {
    main.innerHTML = '<div>No students found.</div>';
  }
});
