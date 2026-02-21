document.addEventListener('DOMContentLoaded', () => {
    
    // Handle Form Submission (index.html)
    const tipForm = document.getElementById('tipForm');
    if (tipForm) {
        tipForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = tipForm.querySelector('button');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Submitting...";
            submitBtn.disabled = true;

            const formData = {
                activityType: document.getElementById('activityType').value,
                location: document.getElementById('location').value,
                date: document.getElementById('date').value,
                description: document.getElementById('description').value
            };

            try {
                const response = await fetch('/api/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                
                const msgBox = document.getElementById('responseMessage');
                if (response.ok) {
                    msgBox.style.color = "green";
                    msgBox.innerText = result.message;
                    tipForm.reset();
                } else {
                    msgBox.style.color = "red";
                    msgBox.innerText = "Error submitting report.";
                }
            } catch (error) {
                console.error(error);
                document.getElementById('responseMessage').innerText = "Server Error. Please try again.";
            } finally {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Handle Admin Dashboard Loading (admin.html)
    const tableBody = document.getElementById('tipsTableBody');
    if (tableBody) {
        fetchTips();
    }

    async function fetchTips() {
        try {
            const response = await fetch('/api/tips');
            const tips = await response.json();

            tableBody.innerHTML = '';
            tips.forEach(tip => {
                const row = `
                    <tr>
                        <td>${tip.activityType}</td>
                        <td>${tip.location}</td>
                        <td>${tip.date}</td>
                        <td>${tip.description}</td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        } catch (error) {
            console.error("Error loading tips", error);
        }
    }
});