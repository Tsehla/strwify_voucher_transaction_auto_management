


                let XLSX = require('xlsx');
                
                let excel_file = XLSX.readFile('./test.xls');
                
                //user default sheet name [Sheet1/ Sheet2/ sheet3/etc]
                //use one sheet per excel work book
       
                let exlcel_contents_array = XLSX.utils.sheet_to_json(excel_file.Sheets.Sheet1);
     
              	 exlcel_contents_array.forEach(function(item, n) { });
                