// Q1 function to generate course information

function generateCourseInfo(options) {
    const { courseName, courseDuration, courseOwner } = options;

    const courseInfo = `
        Course Name: ${courseName}
        Course Duration: ${courseDuration}
        Course Owner: ${courseOwner}
    `;

    // displaying in the HTML
    document.body.innerHTML += `<pre>${courseInfo}</pre>`;
}

generateCourseInfo({
    courseName: "JavaScript Basics",
    courseDuration: "4 weeks",
    courseOwner: "John Doe"
});

