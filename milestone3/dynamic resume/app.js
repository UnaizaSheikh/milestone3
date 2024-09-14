{
    var form = document.getElementById('resume-form');
    var resumeDisplayElement_1 = document.getElementById('resume-display');
    //handle form submit
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        //collect input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var contact = document.getElementById('contact').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name :</b>".concat(name, "</p>\n    <p><b>Email :</b>").concat(email, "</p>\n    <p><b>Contact :</b>").concat(contact, "</p>\n  \n    <h3>education<h3>\n    <p>").concat(education, "</p>\n  \n     <h3>experience</h3>\n     <p>").concat(experience, "</p>\n  \n     <h3>skills</h3>\n     <p>").concat(skills, "</p>\n  \n     ");
        if (resumeDisplayElement_1) {
            resumeDisplayElement_1.innerHTML = resumeHTML;
        }
        else {
            console.error("missing input");
        }
        ;
    });
}
