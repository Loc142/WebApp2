const fileInput  = document.getElementById('jsonFile');
const convertBtn = document.getElementById('convert-btn');
const outputdiv     = document.getElementById('output')


fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const content = event.target.result;
    const jsonData = JSON.parse(content);
    const formattedData = JSON.stringify(jsonData, null, 2);
    
    outputdiv.innerText = formattedData;
  };
  reader.readAsText(file);
});


convertBtn.addEventListener('click', () => {
  const jsonData = JSON.parse(document.getElementById('output').innerText);
  outputdiv.innerHTML= "<h2>Chay Nut Covert </h2> "
});

  