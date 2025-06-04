const students = [
  { name: "Alice Johnson", socialId: "SID001", birthDate: "2005-04-12", friends: ["SID002", "SID003"], classes: ["Math", "History", "Biology"] },
  { name: "Bob Smith", socialId: "SID002", birthDate: "2004-08-23", friends: ["SID001", "SID004"], classes: ["Physics", "Math", "Chemistry"] },
  { name: "Charlie Kim", socialId: "SID003", birthDate: "2005-02-10", friends: ["SID001", "SID005", "SID006"], classes: ["English", "Math", "Computer Science"] },
  { name: "Diana Lopez", socialId: "SID004", birthDate: "2006-06-17", friends: ["SID002"], classes: ["Art", "History", "English"] },
  { name: "Ethan Wright", socialId: "SID005", birthDate: "2005-11-30", friends: ["SID003"], classes: ["Math", "Physics"] },
  { name: "Fiona Green", socialId: "SID006", birthDate: "2004-12-05", friends: ["SID003", "SID007"], classes: ["Biology", "Chemistry", "PE"] },
  { name: "George Patel", socialId: "SID007", birthDate: "2005-07-21", friends: ["SID006", "SID008"], classes: ["History", "English", "PE"] },
  { name: "Hannah Brooks", socialId: "SID008", birthDate: "2006-01-09", friends: ["SID007", "SID009"], classes: ["Math", "Art"] },
  { name: "Isaac Lee", socialId: "SID009", birthDate: "2005-03-03", friends: ["SID008"], classes: ["Chemistry", "Biology", "Math"] },
  { name: "Jasmine Torres", socialId: "SID010", birthDate: "2004-09-15", friends: ["SID011", "SID001"], classes: ["History", "Computer Science"] },
  { name: "Kevin Diaz", socialId: "SID011", birthDate: "2006-02-19", friends: ["SID010", "SID012"], classes: ["PE", "Art", "Physics"] },
  { name: "Lily Chen", socialId: "SID012", birthDate: "2005-06-08", friends: ["SID011", "SID013"], classes: ["Math", "Biology"] },
  { name: "Michael Scott", socialId: "SID013", birthDate: "2004-05-25", friends: ["SID012"], classes: ["English", "History", "Physics"] },
  { name: "Nina Alvarez", socialId: "SID014", birthDate: "2005-10-14", friends: ["SID015"], classes: ["Chemistry", "Biology"] },
  { name: "Oscar Reed", socialId: "SID015", birthDate: "2006-07-30", friends: ["SID014", "SID016"], classes: ["Math", "Computer Science"] },
  { name: "Paula Singh", socialId: "SID016", birthDate: "2005-01-11", friends: ["SID015", "SID017"], classes: ["Art", "History"] },
  { name: "Quinn Morgan", socialId: "SID017", birthDate: "2004-03-18", friends: ["SID016"], classes: ["PE", "Biology", "English"] },
  { name: "Rachel Adams", socialId: "SID018", birthDate: "2006-08-27", friends: ["SID019", "SID001"], classes: ["Math", "Chemistry"] },
  { name: "Samuel Bennett", socialId: "SID019", birthDate: "2005-12-01", friends: ["SID018", "SID020"], classes: ["Computer Science", "Physics"] },
  { name: "Tina Zhang", socialId: "SID020", birthDate: "2004-11-05", friends: ["SID019"], classes: ["English", "Art", "History"] }
];

function displayResult(name, resultString) {
    let results = document.getElementById('results');
    let newParagraph = document.createElement('p');
    newParagraph.textContent = `${name}: ${resultString}`;
    results.appendChild(newParagraph);
}

function mostFriends(student) {
    for (let key of Object.keys(student)) {
        if (key === 'friends') {
            // check every friends key's value length, return the longest
            friends.value.length
        }
    }
}

students.find(mostFriends);

function createList(classname) {
    let listItem = document.createElement('li');
    listItem.textContent = `${classname}`;
    
} 