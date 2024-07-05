let data = [
  "1,2,4-1H-TRIAZOLE (95, 99%)",
  "1,4-BUTANEDIOL(BDO)",
  "1-PENTANOL",
  "2,2-DIMETHOXY PROPANE",
  "2,3-/2,4-/2,6-DI CHLORO TOLUENE",
  "2,4-/2,6-DI CHLORO PHENOL",
  "2,6-DICHLOROPHENOL",
  "2,6-DICHLOROPYRIDINE",
  "2-CYANO-4-METHYLBIPHENYL (OTBN)",
  "2-METHOXY ETHANOL",
  "2/4-CHLORO BENZALDEHYDE",
  "3,5-DICHLOROBENZOYL CHLORIDE",
  "4-CHLOROBENZYL CHLORIDE",
  "4-METHYLACETOPHENONE",
  "5-NITRO-2-AMINOPHENOL (5-NAP)",
  "6-AMINO PENICILLANIC ACID (6-APA)",
  "8-HYDROXY QUINOLINE",
  "ACETONITRILE(CAN)",
  "ACETOPHENONE",
  "ACRYLAMIDE",
  "ADIPIC ACID",
  "ALOE EMODIN 95%",
  "ALPHA/BETA NAPHTHOL",
  "ANTHRAQUINONE",
  "BENZOIC ACID TECH",
  "BENZOPHENONE",
  "BENZOYL CHLORIDE",
  "CARBAZOLE 98.0%MIN",
  "CITRIC ACID MONOHYDRATE",
  "CYCLOHEXANONE (CYC)",
  "CYCLOHEXYLAMINE(CHA/DICHA)",
  "CYTOSINE",
  "D-PROLINE; R-PROLINE",
  "DI-TERT BUTYL DICARBONATE",
  "DICYCLOHEXYLAMINE",
  "DIISOPROPYL ETHER",
  "DIMETHYL ACETAMIDE",
  "DIMETHYL CARBONATE",
  "DIMETHYL FORMAMIDE",
  "ETHYL HEPTENONE",
  "ETHYLENE GLYCOL DIACETATE",
  "FORMAMIDE",
  "FORMIC ACID 85% (FA)",
  "GLACIAL ACETIC ACID (GAA)",
  "GLUTARIC ACID",
  "GLYOXALIC ACID",
  "HEXAMETHYL DISILAZANE",
  "HYDANTOIN",
  "HYDROXYLAMINE HCL (HAHCL)/(HAS)",
  "IMIDAZOLE",
  "ISO AMYL BROMIDE",
  "ISOBUTYRIC ACID",
  "L+/DL/D-TARTARIC ACID",
  "M-CHLORONITROBENZENE",
  "M-CHLORONITROBENZENE",
  "MESITYLENE",
  "METHANESULFONYL CHLORIDE(MSC/MSA)",
  "METHYL ACETOACETATE(MAA/EAA)",
  "METHYL CHLOROFORMATE",
  "METHYL DICHLOROACETATE",
  "METHYL SALICYLATE",
  "METHYLENE CHLORIDE (MC)",
  "MONO/DIISOPROPANOLAMINE",
  "N-BUTYRIC ACID",
  "N-HEPTANE/N-HEXANE",
  "N-METHYL PYRROLIDONE (NMP)",
  "N-PENTANOL",
  "N-PROPANOL",
  "NEO PENTYL GLYCOL(NPG)",
  "O-CHLORO BENZOIC ACID(OCBA)",
  "ORTHO PHENYLENE DIAMINE(OPDA)",
  "ORTHO/PARA CHLORO BENZALDEHYDE",
  "ORTHO/PARA CHLORO PHENOL(OCP)(PCP)",
  "P-ANISIDINE (PA/OA)",
  "P-HYDROXY BENZALDEHYDE(PHBA)",
  "PERCHLOROETHYLENE",
  "POTASSIUM CARBONATE",
  "POTASSIUM HYDROXIDE",
  "PROPIONALDEHYDE",
  "PROPIONIC ACID",
  "PROPYLENE CARBONATE",
  "PROPYLENE GLYCOL (PG)",
  "REFINED NAPHTHALENE",
  "SALICYLIC ACID TECH GRADE",
  "SODIUM METHYL MERCAPTIDE",
  "SUCCINIC ACID",
  "SULFANILIC ACID",
  "TERTIARY BUTYL ALCOHOL [TERT-BUTANOL]",
  "TETRAHYDROFURAN(THF)",
  "THIOUREA",
  "TOBIAS ACID/ J ACID 90%",
  "TRICHLOROETHYLENE(TCE)",
  "TRIETHYL ORTHOFORMATE(TEOF)/TMOF/TMOA",
  "TRIETHYL PHOSPHATE",
  "TRIFLUOROACETIC ACID",
  "TRIISOPROPANOLAMINE",
  "TRIPHENYL PHOSPHINE(TPP)",
  "TRIPHOSGENE",
];

function populateTable() {
  var table = "";
  for (var i in data) {
    table += "<tr>";
    table += "<td>" + data[i] + "</td>";
    table += "</tr>";
  }
  document.getElementById("products_body").innerHTML = table;
}

function filterProducts() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("products_table");
  tr = table.getElementsByTagName("tr");

  if (filter != "") {
    document.getElementById("clear_div").innerHTML =
      "<button class='btn btn-outline-danger' onclick='clearInput()' type='button'>Clear</button>";
  } else {
    document.getElementById("clear_div").innerHTML = "";
    document.getElementById("myInput").focus();
  }

  // Loop through all table rows, and hide those who don't match the search query
  var count = tr.length;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
        count -= 1;
      }
    }
  }
  if (count === 0) {
    document.getElementById("result_div").innerHTML =
      "<p>No products found...</p>";
  } else {
    document.getElementById("result_div").innerHTML = "";
  }
}

function clearInput() {
  document.getElementById("myInput").value = "";
  filterProducts();
}
