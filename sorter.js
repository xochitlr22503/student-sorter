var students = [ "sofia", 
"devin", 
"najely", 
"kassandra", 
"fatburger ricki", 
"alejandra", 
"lashawnte", 
"xochitl", 
"jimmie",
"jonathan delgado",
"andres", 
"eric", 
"jonathan interiano", 
"scott", "javier", 
"lissette", 
"rodolfo", 
"twin", 
"rafa",
"brian", 
"john rodriguez", 
"dre", 
"brandon green"
    ]
    // console.log(students.length)
    
    function sortStudents(studentsArray, size) {
        var groups = [
            ]
        var currentGroup = [
            ]
        // loop over all students
        while (studentsArray.length > 0 ) {
            // pick a random student
            var randomNumber = Math.floor (Math.random() * studentArray.length)
            var randomStudent = studentsArray [randomNumber]
            // add random studentto current group 
            currentGroup.push(randomStudent) 
            // delete the random student 
            studentsArray.splice(randomNumber, 1)
        }
    }