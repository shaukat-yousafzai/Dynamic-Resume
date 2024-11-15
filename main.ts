



document.addEventListener('DOMContentLoaded', () => {
    const formSection = document.getElementById('resumeForm') as HTMLElement;
    const outputSection = document.getElementById('resume') as HTMLElement;
    const form = document.getElementById('form') as HTMLFormElement;
   
    const hideDynamicSections = document.querySelectorAll('.hideSection');
    hideDynamicSections.forEach((element) => {
        (element as HTMLElement).style.display = 'none';
    });
    

      
    


    const imageInput = document.getElementById('imageInput') as HTMLInputElement; 
    const profilePic = document.getElementById('profilePic') as HTMLImageElement;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const nameHere = document.getElementById('nameHere') as HTMLElement;

    const roleInput = document.getElementById('role') as HTMLInputElement;
    const addressInput = document.getElementById('address') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const websiteInput = document.getElementById('website') as HTMLInputElement;
    const facebookInput = document.getElementById('facebook') as HTMLInputElement;
    const twitterInput = document.getElementById('twitter') as HTMLInputElement;
    const youtubeInput = document.getElementById('youtube') as HTMLInputElement;
    const linkinInput = document.getElementById('linkedin') as HTMLInputElement;
    const about = document.getElementById('about') as HTMLInputElement;
    
    // Output elements 
    const roleR = document.getElementById('roleR') as HTMLElement;
    const addressR = document.getElementById('addressR') as HTMLElement;
    const phoneR = document.getElementById('phoneR') as HTMLElement;
    const emailR = document.getElementById('emailR') as HTMLElement;
    const websiteR = document.getElementById('websiteR') as HTMLElement;
  
    const facebookR = document.getElementById('facebookR') as HTMLElement;
    const twitterR = document.getElementById('twitterR') as HTMLElement;
    const youtubeR = document.getElementById('youtubeR') as HTMLElement;
    const linkedinR = document.getElementById('linkedinR') as HTMLElement;
    const aboutR = document.getElementById('aboutR') as HTMLElement;

    const educationContainer = document.getElementById('education') as HTMLElement;
    const addEducationButton = document.getElementById('addEducation') as HTMLButtonElement;

    // Add education input fields dynamically
    addEducationButton.addEventListener('click', () => {
        const specificSection = document.querySelector('.hideSection[data-section="education"]') as HTMLElement;
        if (specificSection) {
            specificSection.style.display = 'block';
        }

        const eduCount = educationContainer.querySelectorAll('div').length;
        const newEdu = `
            <div>
                <label for="eduTitle${eduCount}">Education Title </label> 
                <input type="text" id="eduTitle${eduCount}" name="eduTitle${eduCount}" required placeholder="Please Enter Eduction Certification">
                <label for="eduStartYear${eduCount}">Start Year:</label> 
                <input type="number" id="eduStartYear${eduCount}" name="eduStartYear${eduCount}" required min="1980" max="2024" placeholder="Which Year start ">
                <label for="eduEndYear${eduCount}">End Year:</label> 
                <input type="number" id="eduEndYear${eduCount}" name="eduEndYear${eduCount}" required min="1980" max="2040" placeholder="Enter Year and ">
                <label for="eduDescription${eduCount}">Description:</label> 
                <textarea id="eduDescription${eduCount}" name="eduDescription${eduCount}" placeholder="Please Details releated " required></textarea> 
            </div>
        `;
        const div = document.createElement('div');
        div.innerHTML = newEdu;
        educationContainer.appendChild(div);
    });

    const workExperienceContainer = document.getElementById('workExperience') as HTMLElement;
    const addWorkExperienceButton = document.getElementById('addWorkExperience') as HTMLButtonElement;


    const currentYear = new Date().getFullYear();

    // Add work experience input fields dynamically
    addWorkExperienceButton.addEventListener('click', () => {
        const workCount = workExperienceContainer.querySelectorAll('div').length;
        const specificSection = document.querySelector('.hideSection[data-section="work"]') as HTMLElement;
        if (specificSection) {
            specificSection.style.display = 'block';
        }

        const newWork = `
            <div>
                <label for="workTitle${workCount}" >Work Title </label> 
                <input type="text" id="workTitle${workCount}" name="workTitle${workCount}" placeholder="Enter Title of Job" required>
                <label for="workStartYear${workCount}">Start Year:</label> 
                <input type="number" id="workStartYear${workCount}" name="workStartYear${workCount}" placeholder="Enter year " required min="1900" max="2040">
                <label for="workEndYear${workCount}">End Year:</label> 
                <input type="text" id="workEndYear${workCount}" name="workEndYear${workCount}" required placeholder="Enter year ">
                <label for="workDescription${workCount}">Description:</label> 
                <textarea id="workDescription${workCount}" name="workDescription${workCount}" required placeholder="Enter Deatails"></textarea> 
            </div>
        `;
        const div = document.createElement('div');
        div.innerHTML = newWork;
        workExperienceContainer.appendChild(div);
    });

    const skillsContainer = document.getElementById('skills') as HTMLElement;
    const addSkillButton = document.getElementById('addSkill') as HTMLButtonElement;

    // Add skill input fields dynamically
    addSkillButton.addEventListener('click', () => {
        const skillCount = skillsContainer.querySelectorAll('div').length;
        const specificSection = document.querySelector('.hideSection[data-section="skill"]') as HTMLElement;
        if (specificSection) {
            specificSection.style.display = 'block';
        }

        const newSkill = `
            <div>
                <label for="skill${skillCount}">Skills</label>
                <input type="text" id="skill${skillCount}" name="skill${skillCount}" required placeholder="Ms Office">
                <label for="skill${skillCount}Level">Skill  Level  (%):</label>
                <input type="number" id="skill${skillCount}Level" name="skill${skillCount}Level" required placeholder="80" min="0" max="100">
            </div>
        `;
        const div = document.createElement('div');
        div.innerHTML = newSkill;
        skillsContainer.appendChild(div);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

       
        const file = imageInput.files![0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePic.src = e.target!.result as string;
            };
            reader.readAsDataURL(file);
        }


        nameHere.innerHTML = nameInput.value;
        roleR.innerText = roleInput.value;
        addressR.innerText = addressInput.value;
        phoneR.innerText = phoneInput.value;
        emailR.innerText = emailInput.value;
        websiteR.innerText = websiteInput.value;
        facebookR.innerHTML = facebookInput.value;
        twitterR.innerHTML = twitterInput.value;
        youtubeR.innerHTML = youtubeInput.value;
        linkedinR.innerHTML = linkinInput.value;
        aboutR.innerHTML = about.value;

   // Get skill values and display them in the resume
   const skills = document.querySelectorAll('#skills > div');
   const resumeSkillsContainer = document.getElementById('resumeSkills') as HTMLElement;
   resumeSkillsContainer.innerHTML = '';  // Clear previous skills
   skills.forEach((skillDiv) => {
       const skillNameInput = skillDiv.querySelector('input[type="text"]') as HTMLInputElement;
       const skillLevelInput = skillDiv.querySelector('input[type="number"]') as HTMLInputElement;
       const skillName = skillNameInput.value;
       const skillLevel = skillLevelInput.value;
   
       const skillItem = `
           <li>
               <div class="skill_name">${skillName}</div>
               <div class="skill_progress"><span style="width: ${skillLevel}%;"></span></div>
               <div class="skill_per">${skillLevel}%</div>
           </li>
       `;
       resumeSkillsContainer.innerHTML += skillItem;
   });

   // Get work values and display them in the resume
   const works = document.querySelectorAll('#workExperience > div');
   const resumeWorkContainer = document.getElementById('workExperienceR') as HTMLElement;
   resumeWorkContainer.innerHTML = ''; // Clear previous work experiences

   works.forEach((workDiv) => {
       const workTitleInput = workDiv.querySelector('input[type="text"]') as HTMLInputElement;
       const workStartYearInput = workDiv.querySelector('input[name*="StartYear"]') as HTMLInputElement;
       const workEndYearInput = workDiv.querySelector('input[name*="EndYear"]') as HTMLInputElement;
       const workDescriptionInput = workDiv.querySelector('textarea') as HTMLTextAreaElement;
    
       let workEndYear = workEndYearInput.value;
       if (workEndYear.toLowerCase() !== 'present') {
           const endYear = parseInt(workEndYear);
           if (endYear > currentYear) {
               workEndYear = 'Present';
           }
           const startYear = parseInt(workStartYearInput.value);
           if (endYear < startYear) {
               alert('End year cannot be less than start year.');
               return;
           }
       }

       const workItem = `
           <li>
               <div class="date">
                   <span id="startYear">${workStartYearInput.value}</span> - 
                   <span id="endYear">${workEndYear}</span>
               </div>
               <div class="info">
                   <p class="semi-bold" id="resumeWorkTitle">${workTitleInput.value}</p>
                   <p id="workDescription">${workDescriptionInput.value}</p>
               </div>
           </li>
       `;
       resumeWorkContainer.innerHTML += workItem;
   });

   // Get education values and display them in the resume
   const educations = document.querySelectorAll('#education > div');
   const resumeEducationContainer = document.getElementById('educationR') as HTMLElement;
   resumeEducationContainer.innerHTML = '';  // Clear previous education entries

   educations.forEach((eduDiv) => {
       const eduTitleInput = eduDiv.querySelector('input[type="text"]') as HTMLInputElement;
       const eduStartYearInput = eduDiv.querySelector('input[type="number"][name*="StartYear"]') as HTMLInputElement;
       const eduEndYearInput = eduDiv.querySelector('input[type="number"][name*="EndYear"]') as HTMLInputElement;
       const eduDescriptionInput = eduDiv.querySelector('textarea') as HTMLTextAreaElement;

       let eduEndYear = eduEndYearInput.value;
       if (eduEndYear.toLowerCase() !== 'present') {
           const endYear = parseInt(eduEndYear);
           if (endYear > currentYear) {
               eduEndYear = 'Present';
           }
           const startYear = parseInt(eduStartYearInput.value);
           if (endYear < startYear) {
               alert('End year cannot be less than start year.');
               return;
           }
       }

      
       const eduItem = `
           <li>
               <div class="date">
                   <span>${eduStartYearInput.value}</span> - 
                   <span>${eduEndYear}</span>
               </div>
               <div class="info">
                   <p class="semi-bold">${eduTitleInput.value}</p>
                   <p>${eduDescriptionInput.value}</p>
               </div>
           </li>
       `;
       resumeEducationContainer.innerHTML += eduItem;
   });

   // Show or hide dynamic sections based on entries


   // Disable form elements
   form.querySelectorAll('input').forEach(input => input.disabled = true);
   form.querySelector('button')!.disabled = true;
  
        // Hide form section and show output section
        formSection.classList.add('hidden');
        outputSection.classList.remove('hidden'); 
    });
});
