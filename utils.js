function abbreviate(party) {
  switch(party) {
      case "Pakistan Tehreek-e-Insaf":
          return 'PTI';
          break;
      case "Jamiat Ulama-e-Islam (F)":
          return 'JUI-F';
          break;
      case "Qaumi Watan Party (Sherpao)":
          return 'QWP-S';
          break;
      case "Awami National Party":
          return 'ANP';
          break;
      case "Awami Jamhuri Ittehad Pakistan":
          return 'AJIP';
          break;
      case "Pakistan Muslim League (N)":
          return 'PML-N';
          break;
      case "Independent":
          return 'Ind.';
          break;
      case "Jamaat-e-Islami Pakistan":
          return 'JI';
          break;
      case "All Pakistan Muslim League":
          return 'APML';
          break;
      case "Awami Muslim League Pakistan":
          return 'AMLP';
          break;
      case "Pakistan Muslim League":
          return 'PML';
          break;
      case "Pakistan Muslim League(Z)":
          return 'PML-Z';
          break;
      case "Pakistan Peoples Party Parliamentarians":
          return 'PPPP';
          break;
      case "National Peoples Party":
          return 'NPP';
          break;
      case "Pakistan Muslim League (F)":
          return 'PML-F';
          break;
      case "Muttahida Qaumi Movement Pakistan":
          return 'MQM';
          break;
      case "Pashtoonkhwa Milli Awami Party":
          return 'PMAP';
          break;
      case "National Party":
          return 'NP';
          break;
      case "Balochistan National Party":
          return 'BNP';
          break;
      case "Sindh United Party":
          return 'SUP';
          break;
      case "MUTAHIDA DEENI MAHAZ":
          return 'MDM';
          break;
      case "Pakistan Peoples Party (Shaheed Bhutto)":
          return 'PPP-SB';
          break;
      case "Jamiat Ulama-e-Pakistan (Noorani)":
          return 'JUP-N';
          break;
      case "Tehreek-e-Suba Hazara":
          return 'TSH';
          break;
      case "Pakistan Sunni Tehreek":
          return 'PST';
          break;
      case "Bahawalpur National Awami Party":
          return 'BNA';
          break;
      case "Jumiat Ulma-e-Islam(Nazryati)":
          return 'JUI-N';
          break;
      case "Qomi Awami Tehreek":
          return 'QAT';
          break;
      case "Majlis-e-Wahdat-e-Muslimeen Pakistan":
          return 'MWM';
          break;
      case "Pakistan National Muslim League":
          return 'PNML';
          break;
      case "Pakistan Muslim League (J)":
          return 'PNML';
          break;
      case "Sunni Ittehad Council":
          return 'SIC';
          break;
      case "Sindh Taraqi Passand Party (STP)":
          return 'STP';
          break;
      case "Balochistan National Party (Awami)":
          return 'BNP-A';
          break;
      default:
          return party;
  }
}

function titleCase(str) {
  //This function will change all words in the name to first letter uppercase
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {

       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   return splitStr.join(' ');
}

function join(lookupTable, mainTable, lookupKey, mainKey, select) {
    var l = lookupTable.length,
        m = mainTable.length,
        lookupIndex = [],
        output = [];
    for (var i = 0; i < l; i++) { // loop through l items
        var row = lookupTable[i];
        lookupIndex[row[lookupKey]] = row; // create an index for lookup table
    }

    for (var j = 0; j < m; j++) { // loop through m items
        var y = mainTable[j];
        var x = lookupIndex[y[mainKey]]; // get corresponding row from lookupTable
        output.push(select(y, x)); // select only the columns you need
        //output.push(y[mainKey]);
    }
    return output;
};

function image(party){
  return function(d){
    switch(party) {
        case "Pakistan Tehreek-e-Insaf":
            return '<img src="./resources/partylogos/bat.svg"></img>';
            break;
        case "Pakistan Muslim League (N)":
            return '<img src="./resources/partylogos/tiger.svg"></img>';
            break;
        case "Muttahida Qaumi Movement Pakistan":
            return '<img src="./resources/partylogos/kite.svg"></img>';
            break;
        case "Pakistan Peoples Party Parliamentarians":
            return '<img  style="transform: rotate(45deg); -ms-transform: rotate(45deg); -webkit-transform: rotate(45deg);" src="./resources/partylogos/arrow.svg"></img>';
            break;
        case "All Pakistan Muslim League":
            return '<img src="./resources/partylogos/eagle.svg"></img>';
            break;
        case "Pakistan Muslim League":
            return '<img src="./resources/partylogos/bicycle.svg"></img>';
            break;
        case "Pakistan Muslim League (F)":
            return '<img src="./resources/partylogos/rose.svg"></img>';
            break;
        case "Jamiat Ulama-e-Islam (F)":
            return '<img style="width: 100%;" src="./resources/partylogos/book.svg"></img>';
            break;
        case "Jamaat-e-Islami Pakistan":
            return '<img style="width: 100%;" src="./resources/partylogos/balance.svg"></img>';
            break;
        case "Pakistan Muslim League(Z)":
            return '<img style="width: 100%;" src="./resources/partylogos/helicopter.svg"></img>';
            break;
        default:
            return '<img style="width: 90%;" src="./resources/ballot2.svg"></img>';
            break;
  }}
}

// function for generating random number within a range
function randRange(min, max){
  return (Math.random() * (max - min) + min)
}
