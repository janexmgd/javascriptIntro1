const biodata = {
  name: "Denny Wahyu Prasetyo", // string
  age: 21, // number
  hobbies: ["bermain game", "mendengarkan musik", "nonton anime"], // array
  IsMarried: false, // boolean
  schoolList: [
    // array of object
    {
      name: "SDN BOGOHARJO 1",
      yearIn: 2007,
      yearOut: 2013,
      major: null,
    },
    {
      name: "SMPN 1 NGADIROJO",
      yearIn: 2013,
      yearOut: 2016,
      major: null,
    },
    {
      name: "SMKN NGADIROJO",
      yearIn: 2016,
      yearOut: 2019,
      major: null,
    },
  ],
  skills: [
    //array of object
    {
      skillName: "Javascript",
      level: "beginner",
    },
    {
      skillName: "Mathematics",
      level: "beginner",
    },
    {
      skillName: "Swimming",
      level: "beginner",
    },
  ],
  interestInCoding: true, // boolean
};
console.log(biodata);
