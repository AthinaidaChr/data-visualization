'use strict';

// Sidebar Menu Buttons Elements
const dashboardBtn = document.getElementById('dashboard-btn');
const differentiationBtn = document.getElementById('differentiation-btn');
const differentiationRateBtn = document.getElementById('differentiation-rate-btn');
const sumUpTo100Btn = document.getElementById('sum-up-to-100-btn');

// -------------------------------------------

// Element Variables for input and download excel files
// const fileImportContainer = document.querySelector('.file-import-container');
const fileUpload = document.getElementById('file-upload');
const fileChosenEl = document.getElementById('file-chosen');
const jsonData = document.getElementById('json-data');
const jsonDownload = document.getElementById('json-download');

// Variables for reading excel and converting it to json
let data;
let workbook;
let selectedFile;       // file pou anevase o xrhsths kai to epilegei to susthma na ton epeksergastei
let rowJsonObject;      // array of objects me antikeimena thn kathe grammh tou excel arxeiou

// -------------------------------------------

// Array filled with property names of rowJsonObject array of objects
let objectProperties = [];

// -------------------------------------------

const differentiationVersionsOkBtn = document.getElementById('differentiation-versions-ok-btn');
const differentiationRateVersionsOkBtn = document.getElementById('differentiation-rate-versions-ok-btn');
const sumUpTo100VersionsOkBtn = document.getElementById('sum-up-to-100-versions-ok-btn');

// -------------------------------------------

// Version variables for creating dynamicaly checkboxes
const checkboxesDifferentiationVersionEl = document.getElementsByName('differentiation-versions');
let checkedCheckboxesDifferentiationVersion = [];      // array filled with checked versions

const checkboxesDifferentiationRateVersionEl = document.getElementsByName('differentiation-rate-versions');
let checkedCheckboxesDifferentiationRateVersion = [];      // array filled with checked versions

const checkboxesSumUpTo100VersionEl = document.getElementsByName('sum-up-to-100-versions');
let checkedCheckboxesSumUpTo100Version = [];      // array filled with checked versions

// -----------------------------------------------------------------------------------

const differentiationPropertiesOkBtn = document.getElementById('differentiation-properties-ok-btn');
const differentiationRatePropertiesOkBtn = document.getElementById('differentiation-rate-properties-ok-btn');
const sumUpTo100PropertiesOkBtn = document.getElementById('sum-up-to-100-properties-ok-btn');
// -------------------------------------------

// Version variables for creating dynamicaly checkboxes
const checkboxesDifferentiationPropertiesEl = document.getElementsByName('differentiation-properties');
let checkedCheckboxesDifferentiationProperties = [];      // array filled with checked versions

const checkboxesDifferentiationRatePropertiesEl = document.getElementsByName('differentiation-rate-properties');
let checkedCheckboxesDifferentiationRateProperties = [];      // array filled with checked versions

const checkboxesSumUpTo100PropertiesEl = document.getElementsByName('sum-up-to-100-properties');
let checkedCheckboxesSumUpTo100Properties = [];      // array filled with checked versions

// -----------------------------------------------------------------------------------

const differentiationOkBtnsArray = [differentiationVersionsOkBtn, differentiationPropertiesOkBtn];

// const differentiationOkBtn = document.getElementById('differentiation-ok-btn');


let name = [], date = [];


// -----------------------------------------------------------------------------------

// Functions

const downloadObjectAsJson = function(exportObj, exportName) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    const downloadAnchorNode = document.createElement('a');

    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

// -------------------------------------------

// const displayDiv = function(btnPressed, elementID1, elementID2, elementID3, elementID4, status) {

//     btnPressed.addEventListener('click', function() {

//         document.getElementById(elementID1).style.display = status;
//         document.getElementById(elementID2).style.display = status;
//         document.getElementById(elementID3).style.display = status;
//         document.getElementById(elementID4).style.display = status;

//     });

// }

// displayDiv(dashboardBtn, 'dashboard', 'differentiation-no-file-yet', 'differentiation-rate-no-file-yet', 'sum-up-to-100-no-file-yet', 'block');

// -------------------------------------------

// Create checkbox element dynamically with label and span
const createCheckBox = function(elementID, name, value, innerText) {
    
    // const check = function(content, element, nameClass, nameID) {

    //     // if (content.includes('0,0')) {
    //         element.className = nameClass + 'Main';
    //         element.id = nameID + '-main'
    //     // }
    //     // else {
    //         element.className = nameClass;
    //         element.id = nameID;
    //     // }
        
    // }

    // Get the container which will contain the checkboxes
    const checkboxEl = document.getElementById(elementID);

    // creating label element
    const label = document.createElement('label');

    // check(label, 'dynamicLabel', 'dynamic-label');

    if (value.includes('0,0')) {
        label.className = 'dynamicLabelMain';
        label.id = 'dynamic-label-main'
    }
    else {
        label.className = 'dynamicLabel';
        label.id = 'dynamic-label'
    }

    // creating checkbox element
    const checkbox = document.createElement('input');

    // Assigning the attributes to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = name;
    checkbox.value = value;

    // check(checkbox, 'dynamicCheckbox', 'dynamic-checkbox');

    if (value.includes('0,0')) {
        checkbox.className = 'dynamicCheckboxMain';
        checkbox.id = 'dynamic-checkbox-main';
    }
    else {
        checkbox.className = 'dynamicCheckbox';
        checkbox.id = 'dynamic-checkbox';
    }

    // creating span element
    const span = document.createElement('span');

    span.innerHTML = innerText;

    // check(span, 'dynamicSpan', 'dynamic-span');

    if (value.includes('0,0')) {
        span.className = 'dynamicSpanMain';
        span.id = 'dynamic-span-main';
    }
    else {
        span.className = 'dynamicSpan';
        span.id = 'dynamic-span';
    }
    
    // appending the checkbox and span to label and then the label to div element checkboxEl
    label.appendChild(checkbox);
    label.appendChild(span);
    checkboxEl.appendChild(label);
    
    // console.log(label);
};





const selectAll = function(elementID, allCheckboxesArray) {

    const btn = document.getElementById(elementID);

    btn.addEventListener('click', function() {

        for(let i = 0; i < allCheckboxesArray.length; i++) {

            if (allCheckboxesArray[i].type === 'checkbox' && allCheckboxesArray[i].checked === true) {
                allCheckboxesArray[i].checked = false;

                btn.innerHTML = 'Select all<span class="material-icons-sharp">done_all</span>';
            }
            else if (allCheckboxesArray[i].type == 'checkbox') {
                allCheckboxesArray[i].checked = true;

                btn.innerHTML = 'Deselect all<span class="material-icons-sharp">remove_done</span>';
            }

        }

    });

};

// -----------------------------------------------------------------------------------

dashboardBtn.addEventListener('click', function() {

    document.getElementById('dashboard').style.display = "block";
    document.getElementById('differentiation-no-file-yet').style.display = "none";
    document.getElementById('differentiation-rate-no-file-yet').style.display = "none";
    document.getElementById('sum-up-to-100-no-file-yet').style.display = "none";

});

differentiationBtn.addEventListener('click', function() {

    document.getElementById('dashboard').style.display = "none";
    document.getElementById('differentiation-no-file-yet').style.display = "block";
    document.getElementById('differentiation-rate-no-file-yet').style.display = "none";
    document.getElementById('sum-up-to-100-no-file-yet').style.display = "none";

});

differentiationRateBtn.addEventListener('click', function() {

    document.getElementById('dashboard').style.display = "none";
    document.getElementById('differentiation-no-file-yet').style.display = "none";
    document.getElementById('differentiation-rate-no-file-yet').style.display = "block";
    document.getElementById('sum-up-to-100-no-file-yet').style.display = "none";

});

sumUpTo100Btn.addEventListener('click', function() {

    document.getElementById('dashboard').style.display = "none";
    document.getElementById('differentiation-no-file-yet').style.display = "none";
    document.getElementById('differentiation-rate-no-file-yet').style.display = "none";
    document.getElementById('sum-up-to-100-no-file-yet').style.display = "block";

});

// -----------------------------------------------------------------------------------

fileUpload.addEventListener('click', function() {

    // -----------------------------------------------------------------------------------

    // allazei to label me to neo onoma tou arxeiou
    fileUpload.addEventListener('change', function(){

        fileChosenEl.textContent = this.files[0].name;
        
    });

    // -----------------------------------------------------------------------------------

    fileUpload.addEventListener('change', function(event) {
        console.log(event);

        // Get selected file
        selectedFile = event.target.files[0];
        // console.log(selectedFile);

    // -----------------------------------------------------------------------------------

        if (selectedFile) {

            let fileReader = new FileReader();

            // Read the data from the excel file, using a file reader as a binary string
            fileReader.readAsBinaryString(selectedFile);
            // console.log(fileReader);

            // Setting an event handler property for load event
            fileReader.onload = function(event) {
                // logs the file's text
                //console.log(event.target.result);
                
                // Data variable contains the file's text
                data = event.target.result;

                // With read method you can read whatever data you want to, and after comma you have
                // to write the type of data that you put before.
                workbook = XLSX.read(data,{type:"binary"});
                // console.log(workbook);

                // Iterate through sheets
                workbook.SheetNames.forEach(sheet => {

                    // The sheet_to_row_object_array() method creates json objects in a single row.
                    rowJsonObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                    // console.log(rowJsonObject);

                    // Displaing inide HTML page the json objects as a total string
                    // jsonData.innerHTML = JSON.stringify(rowJsonObject, undefined, 4);
                    
                    jsonDownload.onclick = function() {
                        const json_str = rowJsonObject;
                        console.log(json_str);
                    
                        downloadObjectAsJson(json_str, 'excel_to_json');
                    };
                    
                });
    
                // Logs the array of objects
                console.log(rowJsonObject);

                // Disabling the fileUpload button after it is pressed one time.
                fileUpload.disabled = true;

                // -----------------------------------------------------------------------------------

                dashboardBtn.addEventListener('click', function() {

                    document.getElementById('dashboard').style.display = "block";
                    document.getElementById('differentiation').style.display = "none";
                    document.getElementById('differentiation').style.display = "none";
                    document.getElementById('sum-up-to-100').style.display = "none";
                
                });

                differentiationBtn.addEventListener('click', function() {

                    document.getElementById('differentiation-no-file-yet').style.display = "none";
                    document.getElementById('differentiation').style.display = "block";

                    document.getElementById('differentiation-rate').style.display = "none";

                    document.getElementById('sum-up-to-100').style.display = "none";

                });

                differentiationRateBtn.addEventListener('click', function() {

                    document.getElementById('differentiation').style.display = "none";

                    document.getElementById('differentiation-rate-no-file-yet').style.display = "none";
                    document.getElementById('differentiation-rate').style.display = "block";

                    document.getElementById('sum-up-to-100').style.display = "none";

                });

                sumUpTo100Btn.addEventListener('click', function() {

                    document.getElementById('differentiation').style.display = "none";

                    document.getElementById('differentiation-rate').style.display = "none";

                    document.getElementById('sum-up-to-100-no-file-yet').style.display = "none";
                    document.getElementById('sum-up-to-100').style.display = "block";

                });

                // -----------------------------------------------------------------------------------

                // Create array filled with the properties of the array of objects
                rowJsonObject.forEach(function(o) {

                    Object.keys(o).forEach(function(property) {

                        if (objectProperties.indexOf(property) < 0) {
                            objectProperties.push(property);
                        }

                    });

                });
                console.log(objectProperties);

                // -----------------------------------------------------------------------------------

                // Creating checkboxes for versions
                for (let i = 0; i < rowJsonObject.length; i++) {

                    createCheckBox('differentiation-versions', 'differentiation-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                    createCheckBox('differentiation-rate-versions', 'differentiation-rate-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                    createCheckBox('sum-up-to-100-versions', 'sum-up-to-100-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                
                }

                // -----------------------------------------------------------------------------------

                selectAll('differentiation-versions-select-deselect-all-btn', checkboxesDifferentiationVersionEl);

                differentiationVersionsOkBtn.addEventListener('click', function() {
                    
                    checkedCheckboxesDifferentiationVersion.length = 0;

                    for (let i = 0; i < checkboxesDifferentiationVersionEl.length; i++) {

                        if (checkboxesDifferentiationVersionEl[i].checked) {
                            checkedCheckboxesDifferentiationVersion.push(checkboxesDifferentiationVersionEl[i].value);
                        }
                        
                    }

                    // DEBUGGING
                    // console.log(checkboxesDifferentiationVersionEl);
                    console.log(checkboxesDifferentiationVersionEl.length);
                    console.log(checkedCheckboxesDifferentiationVersion);
                    console.log(typeof checkedCheckboxesDifferentiationVersion);

                });

                // -----------------------------------------------------------------------------------

                selectAll('differentiation-rate-versions-select-deselect-all-btn', checkboxesDifferentiationRateVersionEl);

                differentiationRateVersionsOkBtn.addEventListener('click', function() {
                    
                    checkedCheckboxesDifferentiationRateVersion.length = 0;

                    for (let i = 0; i < checkboxesDifferentiationRateVersionEl.length; i++) {

                        if (checkboxesDifferentiationRateVersionEl[i].checked) {
                            checkedCheckboxesDifferentiationRateVersion.push(checkboxesDifferentiationRateVersionEl[i].value);
                        }
                        
                    }

                    // DEBUGGING
                    // console.log(checkboxesDifferentiationRateVersionEl);
                    console.log(checkboxesDifferentiationRateVersionEl.length);
                    console.log(checkedCheckboxesDifferentiationRateVersion);
                    console.log(typeof checkedCheckboxesDifferentiationRateVersion);

                });

                // -----------------------------------------------------------------------------------

                selectAll('sum-up-to-100-versions-select-deselect-all-btn', checkboxesSumUpTo100VersionEl);

                sumUpTo100VersionsOkBtn.addEventListener('click', function() {
                    
                    checkedCheckboxesSumUpTo100Version.length = 0;

                    for (let i = 0; i < checkboxesSumUpTo100VersionEl.length; i++) {

                        if (checkboxesSumUpTo100VersionEl[i].checked) {
                            checkedCheckboxesSumUpTo100Version.push(checkboxesSumUpTo100VersionEl[i].value);
                        }
                        
                    }

                    // DEBUGGING
                    // console.log(checkboxesSumUpTo100VersionEl);
                    console.log(checkboxesSumUpTo100VersionEl.length);
                    console.log(checkedCheckboxesSumUpTo100Version);
                    console.log(typeof checkedCheckboxesSumUpTo100Version);

                });




                
                // -----------------------------------------------------------------------------------


                

                // Creating checkboxes for properties
                for (let i = 4; i < objectProperties.length; i++) {

                    createCheckBox('differentiation-properties', 'differentiation-properties', objectProperties[i], objectProperties[i]);
                    createCheckBox('differentiation-rate-properties', 'differentiation-rate-properties', objectProperties[i], objectProperties[i]);
                    createCheckBox('sum-up-to-100-properties', 'sum-up-to-100-properties', objectProperties[i], objectProperties[i]);

                }

                // -----------------------------------------------------------------------------------

                selectAll('differentiation-properties-select-deselect-all-btn', checkboxesDifferentiationPropertiesEl);

                differentiationPropertiesOkBtn.addEventListener('click', function() {
                    
                    checkedCheckboxesDifferentiationProperties.length = 0;

                    for (let i = 0; i < checkboxesDifferentiationPropertiesEl.length; i++) {

                        if (checkboxesDifferentiationPropertiesEl[i].checked) {
                            checkedCheckboxesDifferentiationProperties.push(checkboxesDifferentiationPropertiesEl[i].value);
                        }
                        
                    }

                    // DEBUGGING
                    // console.log(checkboxesDifferentiationPropertiesEl);
                    console.log(checkboxesDifferentiationPropertiesEl.length);
                    console.log(checkedCheckboxesDifferentiationProperties);
                    console.log(typeof checkedCheckboxesDifferentiationProperties);

                });

                // -----------------------------------------------------------------------------------

                selectAll('differentiation-rate-properties-select-deselect-all-btn', checkboxesDifferentiationRatePropertiesEl);

                differentiationRatePropertiesOkBtn.addEventListener('click', function() {
                    
                    checkedCheckboxesDifferentiationRateProperties.length = 0;

                    for (let i = 0; i < checkboxesDifferentiationRatePropertiesEl.length; i++) {

                        if (checkboxesDifferentiationRatePropertiesEl[i].checked) {
                            checkedCheckboxesDifferentiationRateProperties.push(checkboxesDifferentiationRatePropertiesEl[i].value);
                        }
                        
                    }

                    // DEBUGGING
                    // console.log(checkboxesDifferentiationRatePropertiesEl);
                    console.log(checkboxesDifferentiationRatePropertiesEl.length);
                    console.log(checkedCheckboxesDifferentiationRateProperties);
                    console.log(typeof checkedCheckboxesDifferentiationRateProperties);

                });

                // -----------------------------------------------------------------------------------

                selectAll('sum-up-to-100-properties-select-deselect-all-btn', checkboxesSumUpTo100PropertiesEl);

                sumUpTo100PropertiesOkBtn.addEventListener('click', function() {
                    
                    checkedCheckboxesSumUpTo100Properties.length = 0;

                    for (let i = 0; i < checkboxesSumUpTo100PropertiesEl.length; i++) {

                        if (checkboxesSumUpTo100PropertiesEl[i].checked) {
                            checkedCheckboxesSumUpTo100Properties.push(checkboxesSumUpTo100PropertiesEl[i].value);
                        }
                        
                    }

                    // DEBUGGING
                    // console.log(checkboxesSumUpTo100PropertiesEl);
                    console.log(checkboxesSumUpTo100PropertiesEl.length);
                    console.log(checkedCheckboxesSumUpTo100Properties);
                    console.log(typeof checkedCheckboxesSumUpTo100Properties);

                });


                // if (!(checkedCheckboxesDifferentiationVersion.length === 0) && !(checkedCheckboxesDifferentiationProperties.length === 0)) {

                    differentiationOkBtnsArray.forEach(btn => {

                        btn.addEventListener('click', function() {

                            name.length = 0;
                         
                            // Array filled with selected versions
                            // Gets the values of each row and push it into arrays
                            for (let i = 0; i < rowJsonObject.length; i++) {
            
                                console.log(checkboxesDifferentiationVersionEl[i].checked);
            
                                if (checkboxesDifferentiationVersionEl[i].checked && checkboxesDifferentiationVersionEl[i].value === rowJsonObject[i].name) {
                                        name.push(rowJsonObject[i].name);
                                        // console.log(name); 
                                }
                                
                            };

                            console.log(name);
    
                            // // Array filled with selected variables
                            // for (let i = 0; i < splitProperty.length; i++) {
            
                            //     propertyArray.push(new Array());
                                
                            //     for (let j = 0; j < rowJsonObject.length; j++) {
                                    
                            //         if (name.includes(rowJsonObject[j].name)) {
            
                            //             // console.log(name.includes(rowJsonObject[j].name));    
                                        
                            //             console.log(rowJsonObject.indexOf(rowJsonObject[j]));
                            //             console.log(rowJsonObject[j]);
                            //             console.log(splitProperty);
                            //             console.log(objectProperties);
            
                            //             for (let k = 0; k < objectProperties.length; k++) {
            
                            //                 switch(splitProperty[i]) {
            
                            //                     case objectProperties[k] :
                            //                         console.log('OKKKKKK');
                            //                         propertyArray[i].push(rowJsonObject[j][objectProperties[k]]);
                            //                         break;
                            //                     // default:
                            //                     // dayName = 'Invalid day';
                                                        
                            //                 }
            
                            //             }
            
                            //         }
            
                            //     }
            
                            // }
                            
                            
                            // for (let i = 0; i < splitPropertySum100.length; i++) {
            
                            //     propertyArraySum100.push(new Array());
                                
                            //     for (let j = 0; j < rowJsonObject.length; j++) {
                                    
                            //         if (name.includes(rowJsonObject[j].name)) {
            
                            //             // console.log(name.includes(sum100Array[j].name));    
                                        
                            //             console.log(sum100Array.indexOf(sum100Array[j]));
                            //             console.log(sum100Array[j]);
                            //             console.log(splitPropertySum100);
                            //             // console.log(objectProperties);
            
                            //             for (let k = 0; k < objectProperties.length; k++) {
            
                            //                 switch(splitPropertySum100[i]) {
            
                            //                     case objectProperties[k] :
                            //                         console.log('OKKKKKK');
                            //                         propertyArraySum100[i].push(rowJsonObject[j][objectProperties[k]]);
                            //                         break;
                            //                     // default:
                            //                     // dayName = 'Invalid day';
                                                        
                            //                 }
                                            
            
                            //             }
            
                            //         }
            
                            //     }
            
                            // }
    
    
                            // // Array filled with formated dates
                            // for (let i = 0; i < rowJsonObject.length; i++) {
                            //     // console.log(rowJsonObject[i].rel_date);
                            //     const num_date = new Date(Math.round((rowJsonObject[i].rel_date - 25569) * 86400 * 1000));
                                
                            //     const year = num_date.toLocaleString("default", { year: "numeric" });
                            //     const month = num_date.toLocaleString("default", { month: "2-digit" });
                            //     const day = num_date.toLocaleString("default", { day: "2-digit" });
            
                            //     const dateFormat = month + "/" + day + "/" + year;
            
                            //     date.push(dateFormat);
                            // };
            
                            // console.log(propertyArray);
                            // console.log(propertyArraySum100);
                            // console.log(name);
                            // console.log(date);
    
    
    
    
    
    
                            
                        });
                     
                     });






                // }

                





















            }

        }
    
    });
    
});















