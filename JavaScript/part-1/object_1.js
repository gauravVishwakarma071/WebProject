var student = {
    name: "Gaurav",
    age: 22,
    course: "MCA",
    displayInfo: function() {
        console.log(this.name + " is enrolled in " + this.course);
    }
};
student.displayInfo();

student.grade = "A";   // Add property
delete student.age;    // Remove property
