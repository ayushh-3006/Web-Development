let fd = [
  ["ayush", "30-06-2008", 7974248187, "Bhopal", "Student"],
  ["ayush", "30-06-2008", 7974248187, "Bhopal", "Student"],
  ["ayush", "30-06-2008", 7974248187, "Bhopal", "Student"],
  ["ayush", "30-06-2008", 7974248187, "Bhopal", "Student"],
];

fd.forEach((element) => {
  console.log(element);
});

let FD = [
  {
    name: "Amit Sharma",
    dob: "1995-03-12",
    profession: "Software Engineer",
    city: "Bhopal",
    phone: "9876543210",
  },
  {
    name: "Neha Verma",
    dob: "1998-07-25",
    profession: "Doctor",
    city: "Indore",
    phone: "9123456780",
  },
  {
    name: "Rahul Singh",
    dob: "1993-11-05",
    profession: "Teacher",
    city: "Jabalpur",
    phone: "9988776655",
  },
  {
    name: "Priya Gupta",
    dob: "1997-01-18",
    profession: "Designer",
    city: "Delhi",
    phone: "9012345678",
  },
  {
    name: "Karan Patel",
    dob: "1994-09-30",
    profession: "Business Analyst",
    city: "Ahmedabad",
    phone: "9090909090",
  },
];

FD.forEach((element) => {
  console.log(element);
});

FD.map((element,idx) => {
  console.log(element);
});

console.log(FD);
console.log(FD[1]["name"]);
console.log(FD[2]["name"]);
console.log(FD[1].phone);

let data = [
  {
    name: "Amit Sharma",
    city: "Bhopal",
    marks: {
      eng: 78,
      hin: 82,
      math: 90,
      science: 85
    }
  },
  {
    name: "Neha Verma",
    city: "Indore",
    marks: {
      eng: 88,
      hin: 76,
      math: 92,
      science: 89
    }
  },
  {
    name: "Rahul Singh",
    city: "Jabalpur",
    marks: {
      eng: 70,
      hin: 80,
      math: 75,
      science: 78
    }
  }
];

console.log(data[0].marks.eng);
console.log(data[1].city);

let ayush = {
  name: "Amit Sharma",
  dob: "1995-03-12",
  profession: "Software Engineer",
  city: "Bhopal",
  phone: "9876543210",
};

console.log(Object.keys(ayush));
console.log(Object.values(ayush));
console.log(Object.entries(ayush));

let arr = [2, 3, 6, 5, 14, 28, 6, 120, 71, 92];

console.log("correct sorting method ");

arr.sort((a, b) => a - b);
console.log(arr);

// console.log("incorrect sorting");
// console.log(arr.sort());

console.log(arr.find((val) => val > 20));
console.log(arr.find((val) => val === 6));
console.log(arr.findIndex((val) => val === 6));
console.log(arr.findLastIndex((val) => val === 6));

let arr1 = [2, 3, 6, 5, 14, 28, 6, 120, 71, 92];

console.log(arr1.filter((val) => val > 20));
console.log(arr1.find((val) => val > 20));
console.log(arr1.slice(0, 5));

let ab = "This is web-development class";

console.log(ab);

console.log(ab.split(" "));
console.log(ab.split("-"));


