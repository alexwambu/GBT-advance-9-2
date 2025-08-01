const form = document.getElementById('deployForm');
const output = document.getElementById('output');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const res = await fetch("https://gbt-advance-9-1.onrender.com/deploy/", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
});
