/*eslint-env browser*/

var employeeList = [["Martin Berg", "Staff Engineer", 25134], ["Joe Dawson", "Regional VP", 81112], ["Coco Luther", "Marketing Head", 29197], ["Giovanni Lee", "IT Head", 78335], ["Shekhar Rao", "Systems Engineer", 45105]];
var count = 0;
var deleteFlag = false;
var addFlag = false;

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

var deleteEmployee = function (e) {
    "use strict";
    window.console.log(deleteFlag);
    if (deleteFlag) {
        window.console.log(e.target.parentElement.parentElement.rowIndex);
        $("employee_data").deleteRow(e.target.parentElement.parentElement.rowIndex);
    }
};

function display(tableData) {
    "use strict";
    var table, tableBody, row, cell, btn, buttontd, test;
    table = document.getElementById("employee_data");
    // add condition for tbody
    tableBody = document.createElement('tbody');
    
    tableData.forEach(function (rowData) {
        row = document.createElement('tr');
        count += 1;
        rowData.forEach(function (cellData) {
            cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });
        buttontd = document.createElement('td');
        btn = document.createElement('input');
        btn.type = "button";
        btn.value = "deleteEntry";
        btn.id = count;
        buttontd.appendChild(btn);
        row.appendChild(buttontd);
        tableBody.appendChild(row);
        
        
    });
    table.appendChild(tableBody);
    if (deleteFlag) {
        $(count).addEventListener("click", deleteEmployee);
    }
}

var addEmployees = function () {
    "use strict";
    var html, name, title, extension, required1, required2, required3, generic1, generic2, generic3, nameErr, titleErr, extErr, tempArray, i, res;
    tempArray = new Array(3);
    res = true;
    
    required1 = document.createTextNode("Name required here!");
    required2 = document.createTextNode("Title required here!");
    required3 = document.createTextNode("Extension required here!");
    generic1 = document.createTextNode(" ");
    generic2 = document.createTextNode(" ");
    generic3 = document.createTextNode(" ");
    
    name = $("name").value;
    title = $("title").value;
    extension = $("ext").value;
    nameErr = $("name").nextElementSibling;
    titleErr = $("title").nextElementSibling;
    extErr = $("ext").nextElementSibling;
    
    if (name === "") {
        nameErr.replaceChild(required1, nameErr.childNodes[0]);
    } else {
        tempArray[0] = name;
        nameErr.replaceChild(generic1, nameErr.childNodes[0]);
    }

    if (title === "") {
        titleErr.replaceChild(required2, titleErr.childNodes[0]);
    } else {
        tempArray[1] = title;
        titleErr.replaceChild(generic2, titleErr.childNodes[0]);
    }

    if (extension === "") {
        extErr.replaceChild(required3, extErr.childNodes[0]);
    } else {
        extension = Number(extension);
        tempArray[2] = extension;
        extErr.replaceChild(generic3, extErr.childNodes[0]);
    }
    
    for (i = 0; i < tempArray.length; i += 1) {
        if (tempArray[i] === undefined) {
            res = false;
            break;
        }
    }
    tempArray = [tempArray];
    if (res === true) {
        addFlag = true;
        display(tempArray);
    }
};


window.addEventListener("load", function () {
    "use strict";
    display(employeeList);
    $("addEntry").addEventListener("click", addEmployees);
    $(1).addEventListener("click", deleteEmployee);
    $(2).addEventListener("click", deleteEmployee);
    $(3).addEventListener("click", deleteEmployee);
    $(4).addEventListener("click", deleteEmployee);
    $(5).addEventListener("click", deleteEmployee);
    deleteFlag = true;
});

