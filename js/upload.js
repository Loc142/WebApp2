
const fileInput = document.getElementById('jsonFile');
const convertBtn = document.getElementById('convert-btn');
const outputdiv = document.getElementById('output')
let Data;

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const content = event.target.result;
    Data = JSON.parse(content);
    const formattedData = JSON.stringify(jsonData, null, 2);

    outputdiv.innerText = formattedData;
  };
  reader.readAsText(file);
});

convertBtn.addEventListener('click', () => {
  
  const ListNote = [15, 16, 17, 18, 19, 20, 21, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7];
  const Listtembo = ['', ' l', ' j', ' h', ' g', ' g l', ' f', ' f l', ' d', ' d l', ' d j', ' d h', ' s', ' s l', ' s j', ' s h', ' a'];


  if (Array.isArray(Data)) {
    Data = Data[0];
  }

  if (Data['type'] !== 'composed') outputdiv.innerHTML= "Only Composed type is supported";
  else {
    const Name = Data['name'];
    const Bpm = Math.floor(Data['bpm'] / 4);
    const Columns = Data['columns'];
    let Script = "";

    let count = 1;
    for (const col of Columns) {
      if (col[1].length === 0) {
        count += 1;
      }
      else {
        while (count > 16) {
          Script += Listtembo[16];
          count -= 16;
        }
        Script += Listtembo[count];
        count = 1;
        for (const note of col[1]) {
          Script += ' ' + ListNote[note[0]];
        }
      }
    }

    Script = Name  + " BPM " + Bpm.toString() + " ||" + Script;
    outputdiv.innerHTML = Script;
  }
});



