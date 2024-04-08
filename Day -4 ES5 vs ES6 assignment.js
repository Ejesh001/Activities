const resume = {
    "name": "Ejesh",
    "email": "ejesh916@gmail.com",
    "phone": "890xxxx90",
    "address": "pollachi",
    "summary": "Highly motivated and skilled professional",
    "education": [
      {
        "degree": "B.E",
        "institution": "ACET",
        "location": "CBE",
        "graduation_year": "2019"
      }
    ],
    "experience": [
      {
        "title": "Engineer",
        "company": "XXX Solutions",
        "location": "CBE",
        "start_date": "2020",
        "end_date": "Present",
        "responsibilities": [
          "Data collection",
          "Collaborated with cross-functional teams to deliver projects on time",
          "Implemented automated testing "
        ]
      },
      {
         "title": "Engineer",
        "company": "YYY Solutions",
        "location": "CHE",
        "start_date": "2020",
        "end_date": "Present",
        "responsibilities": [
          "Data collection",
          "Collaborated with cross-functional teams to deliver projects on time",
          "Implemented automated testing "
  
        ]
      }
    ],
    "skills": [
      "Programming Languages: JavaScript, Python",
      "Web Development: HTML, CSS"
    ]
  }
  
  // Using for loop
  for (let key in resume) {
      console.log(key + ": " + resume[key]);
  }
  // Using for...in loop (for objects)
  for (let key in resume) {
      if (resume.hasOwnProperty(key)) {
          console.log(key + ": " + resume[key]);
      }
  }
  
  // Using for...of loop (for arrays)
  for (let section of Object.entries(resume)) {
      console.log(section[0] + ": " + section[1]);
  }
  
  // Using forEach loop (for arrays)
  Object.entries(resume).forEach(section => {
      console.log(section[0] + ": " + section[1]);
  });