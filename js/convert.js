const ListNote = [15, 16, 17, 18, 19, 20, 21, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7];
const Listtembo = ['', ' l', ' j', ' h', ' g', ' g l', ' f', ' f l', ' d', ' d l', ' d j', ' d h', ' s', ' s l', ' s j', ' s h', ' a'];

function convertjson(file) {
  const Data = JSON.parse(file);
 
  if (Array.isArray(Data)) {
    Data = Data[0];
  }

  if (!Data.type || !Data.Columns) return [null, null, 'Invalid file format'];

  if (Data['type'] !== 'composed') return [null, null, 'Only "Composed" type is supported'];
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

    Script = '${Name} || ${Script}';
    return [Name, Bpm, Script];
  }
}


