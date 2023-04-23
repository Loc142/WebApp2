const fileInput = document.getElementById('jsonFile');
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const content = event.target.result;
    const jsonData = JSON.parse(content);
    const formattedData = JSON.stringify(jsonData, null, 2);
    document.getElementById('output').innerText = formattedData;
  };
  reader.readAsText(file);
});



  