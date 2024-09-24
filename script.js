document.getElementById('profileForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Capture form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const bio = document.getElementById('bio').value;
    const dob = document.getElementById('dob').value;
    const skills = Array.from(document.getElementById('skills').selectedOptions).map(option => option.text);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const theme = document.getElementById('theme').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const twitter = document.getElementById('twitter').value;
    
    const profilePic = document.getElementById('profilePic').files[0];
    
    if (!profilePic || !fullName || !email || !phone) {
        alert("Please fill all required fields");
        return;
    }

    // Generate Profile
    const reader = new FileReader();
    reader.onload = function (e) {
        const profileHtml = `
            <div class="${theme}-theme">
                <img src="${e.target.result}" alt="Profile Picture" width="150px">
                <h2>${fullName}</h2>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Bio: ${bio}</p>
                <p>Date of Birth: ${dob}</p>
                <p>Skills: ${skills.join(', ')}</p>
                <p>Gender: ${gender}</p>
                <p><a href="${linkedin}" target="_blank">LinkedIn</a></p>
                <p><a href="${github}" target="_blank">GitHub</a></p>
                <p><a href="${twitter}" target="_blank">Twitter</a></p>
            </div>
        `;
        document.getElementById('generatedProfile').innerHTML = profileHtml;
    };
    
    reader.readAsDataURL(profilePic);
});

// Download Profile functionality
document.getElementById('downloadProfile').addEventListener('click', function() {
    const profileContent = document.getElementById('generatedProfile').innerHTML;
    const blob = new Blob([profileContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'profile.html';
    a.click();
});
