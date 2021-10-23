const getForm = document.getElementById('branchForm');
getForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(getForm).entries()
    const response = await fetch('https://batchof2022api.herokuapp.com/add/user/me', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
});