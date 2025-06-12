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

let uniqueClasses = [];
let uniqueNames = [];
let selectedStudentsClasses = [];
let notEnrolledClasses = [];

function main() {
    mostFriends();
    addUniqueClasses();
    addUniqueClassesToCombo();
    addUniqueNamesToCombo();
};
main();

function displayResult(name, result) {
    let results = document.getElementById('results');
    let newParagraph = document.createElement('p');

    // Result is a string
    if (typeof result === 'string') {
        newParagraph.textContent = `${name}: ${result}`;

    // Result is a HTML element
    } else if (result instanceof HTMLElement) {
        let temp = document.createElement('span');
        temp.textContent = name + ': ';
        newParagraph.appendChild(temp);
        newParagraph.appendChild(result);

    } else {
        console.error('Unknown result type');
    }
    
    results.appendChild(newParagraph);
}

function mostFriends() {
    let friendliest = students[0];
    for (let i = 1; i < students.length; i++) {
        if (students[i].friends.length > friendliest.friends.length) {
            friendliest = students[i];
        }
    }

    displayResult('Most friends', friendliest.name);
}

function addUniqueClasses() {
    for (let i = 0; i < students.length; i++) {
        let actStudent = students[i];

        for (let j = 0; j < actStudent.classes.length; j++) {
            let actClass = actStudent.classes[j];

            if (uniqueClasses.includes(actClass) === false) {
                uniqueClasses.push(actClass);
            }
        }
    }

    // Make a list of classes
    let unorderedList = document.createElement('ul');
    for (let i = 0; i < uniqueClasses.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerText = uniqueClasses[i];
        unorderedList.appendChild(listItem);
    }

    displayResult('Unique classes', unorderedList);
} 

function addUniqueClassesToCombo() {
    const select = document.getElementById('selectAClass');

    for(let i = 0; i < uniqueClasses.length; i++) {
        let option = document.createElement('option'),
            uniqueClass = uniqueClasses[i];

        option.value = uniqueClass;
        option.textContent = uniqueClass;
        select.appendChild(option);
    }
}

// function test() {
//     var myFunc = function(value, index, array) {
//         console.log(value, index);
//     }

//     // uniqueClasses.forEach(myFunc);
//     uniqueClasses.forEach( value => {
//         console.log(value);
//     });

//     // for(let i=0; i < uniqueClasses.length; i++) {
//     //     let uniqueClass = uniqueClasses[i];
        
//     //     myFunc(uniqueClass, i, uniqueClasses);
//     // }
// }

function enrolledStudents(selectedClass) {
    console.log('Enrolled students in this class:', selectedClass);

    // empty array for students who have the class
    let studentsEnrolled = [];
    // go through students
    for (let i = 0; i < students.length; i++) {
        // go through classes
        for (let j = 0; j < students[i].classes.length; j++) {
            // if selectedClass is in the student's classes
            if (students[i].classes[j] === selectedClass) {
                // push student name into array
                studentsEnrolled.push(students[i].name);
            }
        }    
    }
    // write out array
    console.log(studentsEnrolled);
}

function addUniqueNamesToCombo() {
    // for (let i = 0; i < students.length; i++) {
    //     const name = students[i].name;
    //     uniqueNames.push(name);
    // }

    // uniqueNames = students.map( student => {
    //     return student.name;
    // });

    uniqueNames = students.map( student => student.name );

    const select1 = document.getElementById('selectAName');
    const select2 = document.getElementById('selectAnotherName');

    for (let i = 0; i < uniqueNames.length; i++) {
        let option = document.createElement('option'),
            clone = option.cloneNode(true),
            uniqueName = uniqueNames[i];

        option.value = uniqueName;
        option.textContent = uniqueName;
        clone.value = uniqueName;
        clone.textContent = uniqueName;
        select1.appendChild(option);
        select2.appendChild(clone);
    }
}

function selectStudents() {
    const name1 = document.getElementById('selectAName'),
          name2 = document.getElementById('selectAnotherName');
    let selectedStudent1value = name1.value,
        selectedStudent2value = name2.value;

    if (selectedStudent1value == '' || selectedStudent2value == '' ) {
        return;
    }

    var student1,
        student2;

    // go through students, if student[i]'s name === selectedStudent1value, (s)he is student1, else if student[i]'s name === selectedStudent2value, (s)he is student2
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === selectedStudent1value) {
            student1 = students[i];
        } else if (students[i].name === selectedStudent2value) {
            student2 = students[i];
        }
    }

    return {
        student1,
        student2
    };
}

function commonFriends() {
    var selectedStudents = selectStudents();
    let commonFriendsIDs = [];

    // if selectedStudents undefined, return
    if (selectedStudents == undefined) {
        return;
    } 

    // go through each student1's friends, check if these elements are included in student2's friends, if yes console them in commonFriends array
    selectedStudents.student1.friends.forEach(friend => {
        if (selectedStudents.student2.friends.includes(friend)) {
            commonFriendsIDs.push(friend);
        }
    });

    console.log(commonFriendsIDs);

    let commonFriendsNames = []; 

    // check in students.socialID which commonFriends ID goes to which name
    students.forEach(student => {
        if (commonFriendsIDs.includes(student.socialId)) {
            commonFriendsNames.push(student.name);
        }
    });

    const commonFriendsNamesResult = commonFriendsNames.join(', ');
    displayResult('Common friends', commonFriendsNamesResult);
}

function commonClasses() {
    var selectedStudents = selectStudents();
    let commonClasses = [];

    // if selectedStudents undefined, return
    if (selectedStudents == undefined) {
        return;
    } 

    // go through each student1's classes, check if these are included in student2's classes, if yes display them
    selectedStudents.student1.classes.forEach(currentClass => {
        if (selectedStudents.student2.classes.includes(currentClass)) {
            commonClasses.push(currentClass);
        }
    });

    console.log(commonClasses);

    const commonClassesResult = commonClasses.join(', ');
    displayResult('Common classes', commonClassesResult);
}

function allClasses() {
    var selectedStudents = selectStudents();

    // if selectedStudents undefined, return
    if (selectedStudents == undefined) {
        return;
    } 

    selectedStudents.student1.classes.forEach(currentClass => {
        if (!selectedStudentsClasses.includes(currentClass)) {
            selectedStudentsClasses.push(currentClass);
        }
    })

    selectedStudents.student2.classes.forEach(currentClass => {
        if (!selectedStudentsClasses.includes(currentClass)) {
            selectedStudentsClasses.push(currentClass);
        }
    })

    console.log(selectedStudentsClasses);

    displayResult('All classes', selectedStudentsClasses.join(', '));
}

function displayNotEnrolledClasses() {
    var selectedStudents = selectStudents();

    // if selectedStudents undefined, return
    if (selectedStudents == undefined) {
        return;
    } 

    // find classes that are part of uniqueClasses but not selectedStudentsClasses, push to notEnrolledClasses, then display
    uniqueClasses.forEach(currentClass => {
        if (!selectedStudentsClasses.includes(currentClass)) {
            notEnrolledClasses.push(currentClass);
        }
   })

   console.log(notEnrolledClasses);

   displayResult('Not enrolled classes', notEnrolledClasses.join(', '));
}

function classesOfTheirFriends() {
    // array of objects
    var selectedStudents = selectStudents();

    if (selectedStudents == undefined) {
        return;
    } 

    //socialID array
    let allTheirFriendsIDs = [];
    selectedStudents.student1.friends.forEach(friend => {
        if (!allTheirFriendsIDs.includes(friend)) {
            allTheirFriendsIDs.push(friend);
        }
    })

    selectedStudents.student2.friends.forEach(friend => {
        if (!allTheirFriendsIDs.includes(friend)) {
            allTheirFriendsIDs.push(friend);
        }
    })

    console.log(allTheirFriendsIDs);

    let allTheirFriends = [];

    // go through students, match allTheirFriendsIDs to students
    students.forEach(student => {
        if (allTheirFriendsIDs.includes(student.socialId)) {
            allTheirFriends.push(student);
        }
    })

    console.log(allTheirFriends);

    let classesOfTheirFriends = [];
    
    // go through their classes, push them to classesOfTheirFriends (without duplication)
    allTheirFriends.forEach(friend => {
        friend.classes.forEach(currentClass => {
            if (!classesOfTheirFriends.includes(currentClass)) {
                classesOfTheirFriends.push(currentClass);
            }
        });
    });

    console.log(classesOfTheirFriends);

    let onlyTheClassesOfTheirFriends = [];

    //display classes that are in classesOfTheirFriends & notEnrolledClasses (without duplication)
    notEnrolledClasses.forEach(currentClass => {
        if (classesOfTheirFriends.includes(currentClass)) {
            onlyTheClassesOfTheirFriends.push(currentClass);
        }
    })

    console.log(onlyTheClassesOfTheirFriends);

    displayResult('Classes of their friends', onlyTheClassesOfTheirFriends.join(', '));
}

function selectedStudents() {
    commonFriends();
    commonClasses();
    allClasses();
    displayNotEnrolledClasses();
    classesOfTheirFriends();
}