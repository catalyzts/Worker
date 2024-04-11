import fs from "fs"


const run = () => {
  const data = fs.readFileSync(
    'raw/rpgf2.json',
    'utf-8'
  )


  const json = JSON.parse(data)
  const uniqueImpactCategories = new Set();
  let max = -1
  //@ts-ignore
  json.forEach(obj => {
    if (typeof obj["OP Allocation"] === 'string' && !isNaN(parseFloat(obj["OP Allocation"]))) {
        obj["OP Allocation"] = parseFloat(obj["OP Allocation"].replace(/,/g, '')); // Assuming OP Allocation is a number with commas as thousand separators
      }
      if (typeof obj.Vote_Recieved === 'string' && !isNaN(parseFloat(obj.Vote_Recieved))) {
        obj.Vote_Recieved = parseFloat(obj.Vote_Recieved);
      }
      if (typeof obj["OP Received"] === 'string' && !isNaN(parseFloat(obj["OP Received"]))) {
        obj["OP Received"] = parseFloat(obj["OP Received"].replace(/,/g, '')); // Assuming OP Received is a number with commas as thousand separators
      }
      uniqueImpactCategories.add(obj["Category"]);
      if(obj["OP Received"] > max) {
        max = obj["OP Received"]
      }
  });
  console.log("Max ->")
  console.log(max)
  // console.log("Category ->")
  // console.log(uniqueImpactCategories)
  return json
}

// run()
export { run }
