{

  const form = document.getElementById('resume-form') as HTMLFormElement;
  const resumeDisplayElement= document.getElementById('resume-display') as HTMLDivElement;
  
  //handle form submit
  form.addEventListener('submit',(event:Event) =>{
    event.preventDefault();
    //collect input values
  
    const name =(document.getElementById('name') as HTMLInputElement).value
    const email =(document.getElementById('email') as HTMLInputElement).value
    const contact =(document.getElementById('contact') as HTMLInputElement).value
    const education =(document.getElementById('education') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value
    const skills =(document.getElementById('skills') as HTMLInputElement).value
  
  const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name :</b>${name}</p>
    <p><b>Email :</b>${email}</p>
    <p><b>Contact :</b>${contact}</p>
  
    <h3>education<h3>
    <p>${education}</p>
  
     <h3>experience</h3>
     <p>${experience}</p>
  
     <h3>skills</h3>
     <p>${skills}</p>
  
     `;
     if(resumeDisplayElement){
      resumeDisplayElement.innerHTML= resumeHTML
     }
     else{
      console.error(`missing input`)
     };
  
  });}