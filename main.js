document.addEventListener('DOMContentLoaded', function () {
    var formSection = document.getElementById('resumeForm');
    var outputSection = document.getElementById('resume');
    var form = document.getElementById('form');
    var hideDynamicSections = document.querySelectorAll('.hideSection');
    hideDynamicSections.forEach(function (element) {
        element.style.display = 'none';
    });
    var imageInput = document.getElementById('imageInput');
    var profilePic = document.getElementById('profilePic');
    var nameInput = document.getElementById('name');
    var nameHere = document.getElementById('nameHere');
    var roleInput = document.getElementById('role');
    var addressInput = document.getElementById('address');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');
    var websiteInput = document.getElementById('website');
    var facebookInput = document.getElementById('facebook');
    var twitterInput = document.getElementById('twitter');
    var youtubeInput = document.getElementById('youtube');
    var linkinInput = document.getElementById('linkedin');
    var about = document.getElementById('about');
    // Output elements 
    var roleR = document.getElementById('roleR');
    var addressR = document.getElementById('addressR');
    var phoneR = document.getElementById('phoneR');
    var emailR = document.getElementById('emailR');
    var websiteR = document.getElementById('websiteR');
    var facebookR = document.getElementById('facebookR');
    var twitterR = document.getElementById('twitterR');
    var youtubeR = document.getElementById('youtubeR');
    var linkedinR = document.getElementById('linkedinR');
    var aboutR = document.getElementById('aboutR');
    var educationContainer = document.getElementById('education');
    var addEducationButton = document.getElementById('addEducation');
    // Add education input fields dynamically
    addEducationButton.addEventListener('click', function () {
        var specificSection = document.querySelector('.hideSection[data-section="education"]');
        if (specificSection) {
            specificSection.style.display = 'block';
        }
        var eduCount = educationContainer.querySelectorAll('div').length;
        var newEdu = "\n            <div>\n                <label for=\"eduTitle".concat(eduCount, "\">Education Title </label> \n                <input type=\"text\" id=\"eduTitle").concat(eduCount, "\" name=\"eduTitle").concat(eduCount, "\" required placeholder=\"Please Enter Eduction Certification\">\n                <label for=\"eduStartYear").concat(eduCount, "\">Start Year:</label> \n                <input type=\"number\" id=\"eduStartYear").concat(eduCount, "\" name=\"eduStartYear").concat(eduCount, "\" required min=\"1980\" max=\"2024\" placeholder=\"Which Year start \">\n                <label for=\"eduEndYear").concat(eduCount, "\">End Year:</label> \n                <input type=\"number\" id=\"eduEndYear").concat(eduCount, "\" name=\"eduEndYear").concat(eduCount, "\" required min=\"1980\" max=\"2040\" placeholder=\"Enter Year and \">\n                <label for=\"eduDescription").concat(eduCount, "\">Description:</label> \n                <textarea id=\"eduDescription").concat(eduCount, "\" name=\"eduDescription").concat(eduCount, "\" placeholder=\"Please Details releated \" required></textarea> \n            </div>\n        ");
        var div = document.createElement('div');
        div.innerHTML = newEdu;
        educationContainer.appendChild(div);
    });
    var workExperienceContainer = document.getElementById('workExperience');
    var addWorkExperienceButton = document.getElementById('addWorkExperience');
    var currentYear = new Date().getFullYear();
    // Add work experience input fields dynamically
    addWorkExperienceButton.addEventListener('click', function () {
        var workCount = workExperienceContainer.querySelectorAll('div').length;
        var specificSection = document.querySelector('.hideSection[data-section="work"]');
        if (specificSection) {
            specificSection.style.display = 'block';
        }
        var newWork = "\n            <div>\n                <label for=\"workTitle".concat(workCount, "\" >Work Title </label> \n                <input type=\"text\" id=\"workTitle").concat(workCount, "\" name=\"workTitle").concat(workCount, "\" placeholder=\"Enter Title of Job\" required>\n                <label for=\"workStartYear").concat(workCount, "\">Start Year:</label> \n                <input type=\"number\" id=\"workStartYear").concat(workCount, "\" name=\"workStartYear").concat(workCount, "\" placeholder=\"Enter year \" required min=\"1900\" max=\"2040\">\n                <label for=\"workEndYear").concat(workCount, "\">End Year:</label> \n                <input type=\"text\" id=\"workEndYear").concat(workCount, "\" name=\"workEndYear").concat(workCount, "\" required placeholder=\"Enter year \">\n                <label for=\"workDescription").concat(workCount, "\">Description:</label> \n                <textarea id=\"workDescription").concat(workCount, "\" name=\"workDescription").concat(workCount, "\" required placeholder=\"Enter Deatails\"></textarea> \n            </div>\n        ");
        var div = document.createElement('div');
        div.innerHTML = newWork;
        workExperienceContainer.appendChild(div);
    });
    var skillsContainer = document.getElementById('skills');
    var addSkillButton = document.getElementById('addSkill');
    // Add skill input fields dynamically
    addSkillButton.addEventListener('click', function () {
        var skillCount = skillsContainer.querySelectorAll('div').length;
        var specificSection = document.querySelector('.hideSection[data-section="skill"]');
        if (specificSection) {
            specificSection.style.display = 'block';
        }
        var newSkill = "\n            <div>\n                <label for=\"skill".concat(skillCount, "\">Skills</label>\n                <input type=\"text\" id=\"skill").concat(skillCount, "\" name=\"skill").concat(skillCount, "\" required placeholder=\"Ms Office\">\n                <label for=\"skill").concat(skillCount, "Level\">Skill  Level  (%):</label>\n                <input type=\"number\" id=\"skill").concat(skillCount, "Level\" name=\"skill").concat(skillCount, "Level\" required placeholder=\"80\" min=\"0\" max=\"100\">\n            </div>\n        ");
        var div = document.createElement('div');
        div.innerHTML = newSkill;
        skillsContainer.appendChild(div);
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var file = imageInput.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                profilePic.src = e.target.result;
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
        var skills = document.querySelectorAll('#skills > div');
        var resumeSkillsContainer = document.getElementById('resumeSkills');
        resumeSkillsContainer.innerHTML = ''; // Clear previous skills
        skills.forEach(function (skillDiv) {
            var skillNameInput = skillDiv.querySelector('input[type="text"]');
            var skillLevelInput = skillDiv.querySelector('input[type="number"]');
            var skillName = skillNameInput.value;
            var skillLevel = skillLevelInput.value;
            var skillItem = "\n           <li>\n               <div class=\"skill_name\">".concat(skillName, "</div>\n               <div class=\"skill_progress\"><span style=\"width: ").concat(skillLevel, "%;\"></span></div>\n               <div class=\"skill_per\">").concat(skillLevel, "%</div>\n           </li>\n       ");
            resumeSkillsContainer.innerHTML += skillItem;
        });
        // Get work values and display them in the resume
        var works = document.querySelectorAll('#workExperience > div');
        var resumeWorkContainer = document.getElementById('workExperienceR');
        resumeWorkContainer.innerHTML = ''; // Clear previous work experiences
        works.forEach(function (workDiv) {
            var workTitleInput = workDiv.querySelector('input[type="text"]');
            var workStartYearInput = workDiv.querySelector('input[name*="StartYear"]');
            var workEndYearInput = workDiv.querySelector('input[name*="EndYear"]');
            var workDescriptionInput = workDiv.querySelector('textarea');
            var workEndYear = workEndYearInput.value;
            if (workEndYear.toLowerCase() !== 'present') {
                var endYear = parseInt(workEndYear);
                if (endYear > currentYear) {
                    workEndYear = 'Present';
                }
                var startYear = parseInt(workStartYearInput.value);
                if (endYear < startYear) {
                    alert('End year cannot be less than start year.');
                    return;
                }
            }
            var workItem = "\n           <li>\n               <div class=\"date\">\n                   <span id=\"startYear\">".concat(workStartYearInput.value, "</span> - \n                   <span id=\"endYear\">").concat(workEndYear, "</span>\n               </div>\n               <div class=\"info\">\n                   <p class=\"semi-bold\" id=\"resumeWorkTitle\">").concat(workTitleInput.value, "</p>\n                   <p id=\"workDescription\">").concat(workDescriptionInput.value, "</p>\n               </div>\n           </li>\n       ");
            resumeWorkContainer.innerHTML += workItem;
        });
        // Get education values and display them in the resume
        var educations = document.querySelectorAll('#education > div');
        var resumeEducationContainer = document.getElementById('educationR');
        resumeEducationContainer.innerHTML = ''; // Clear previous education entries
        educations.forEach(function (eduDiv) {
            var eduTitleInput = eduDiv.querySelector('input[type="text"]');
            var eduStartYearInput = eduDiv.querySelector('input[type="number"][name*="StartYear"]');
            var eduEndYearInput = eduDiv.querySelector('input[type="number"][name*="EndYear"]');
            var eduDescriptionInput = eduDiv.querySelector('textarea');
            var eduEndYear = eduEndYearInput.value;
            if (eduEndYear.toLowerCase() !== 'present') {
                var endYear = parseInt(eduEndYear);
                if (endYear > currentYear) {
                    eduEndYear = 'Present';
                }
                var startYear = parseInt(eduStartYearInput.value);
                if (endYear < startYear) {
                    alert('End year cannot be less than start year.');
                    return;
                }
            }
            var eduItem = "\n           <li>\n               <div class=\"date\">\n                   <span>".concat(eduStartYearInput.value, "</span> - \n                   <span>").concat(eduEndYear, "</span>\n               </div>\n               <div class=\"info\">\n                   <p class=\"semi-bold\">").concat(eduTitleInput.value, "</p>\n                   <p>").concat(eduDescriptionInput.value, "</p>\n               </div>\n           </li>\n       ");
            resumeEducationContainer.innerHTML += eduItem;
        });
        // Show or hide dynamic sections based on entries
        // Disable form elements
        form.querySelectorAll('input').forEach(function (input) { return input.disabled = true; });
        form.querySelector('button').disabled = true;
        // Hide form section and show output section
        formSection.classList.add('hidden');
        outputSection.classList.remove('hidden');
    });
});
