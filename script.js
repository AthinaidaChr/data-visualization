'use strict';

// Sidebar Menu Buttons Elements
const dashboardBtn = document.getElementById('dashboard-btn');
const summaryStatisticsBtn = document.getElementById('summary-statistics-btn');
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

const summaryStatisticsVersionsOkBtn = document.getElementById('summary-statistics-versions-ok-btn');
const differentiationVersionsOkBtn = document.getElementById('differentiation-versions-ok-btn');
const differentiationRateVersionsOkBtn = document.getElementById('differentiation-rate-versions-ok-btn');
const sumUpTo100VersionsOkBtn = document.getElementById('sum-up-to-100-versions-ok-btn');

// -------------------------------------------

// Version variables for creating dynamicaly checkboxes
const checkboxesSummaryStatisticsVersionEl = document.getElementsByName('summary-statistics-versions');
let checkedCheckboxesSummaryStatisticsVersion = [];      // array filled with checked versions


const checkboxesDifferentiationVersionEl = document.getElementsByName('differentiation-versions');
let checkedCheckboxesDifferentiationVersion = [];      // array filled with checked versions

const checkboxesDifferentiationRateVersionEl = document.getElementsByName('differentiation-rate-versions');
let checkedCheckboxesDifferentiationRateVersion = [];      // array filled with checked versions

const checkboxesSumUpTo100VersionEl = document.getElementsByName('sum-up-to-100-versions');
let checkedCheckboxesSumUpTo100Version = [];      // array filled with checked versions

// -----------------------------------------------------------------------------------

const summaryStatisticsPropertiesOkBtn = document.getElementById('summary-statistics-properties-ok-btn');
const differentiationPropertiesOkBtn = document.getElementById('differentiation-properties-ok-btn');
const differentiationRatePropertiesOkBtn = document.getElementById('differentiation-rate-properties-ok-btn');
const sumUpTo100PropertiesOkBtn = document.getElementById('sum-up-to-100-properties-ok-btn');
// -------------------------------------------

// Version variables for creating dynamicaly checkboxes
const checkboxesSummaryStatisticsPropertiesEl = document.getElementsByName('summary-statistics-properties');
let checkedCheckboxesSummaryStatisticsProperties = [];      // array filled with checked versions

const checkboxesDifferentiationPropertiesEl = document.getElementsByName('differentiation-properties');
let checkedCheckboxesDifferentiationProperties = [];      // array filled with checked versions

const checkboxesDifferentiationRatePropertiesEl = document.getElementsByName('differentiation-rate-properties');
let checkedCheckboxesDifferentiationRateProperties = [];      // array filled with checked versions

const checkboxesSumUpTo100PropertiesEl = document.getElementsByName('sum-up-to-100-properties');
let checkedCheckboxesSumUpTo100Properties = [];      // array filled with checked versions

// -----------------------------------------------------------------------------------

const summaryStatisticsOkBtnsArray = [summaryStatisticsVersionsOkBtn, summaryStatisticsPropertiesOkBtn];
const differentiationOkBtnsArray = [differentiationVersionsOkBtn, differentiationPropertiesOkBtn];
const differentiationRateOkBtnsArray = [differentiationRateVersionsOkBtn, differentiationRatePropertiesOkBtn];
const sumUpTo100OkBtnsArray = [sumUpTo100VersionsOkBtn, sumUpTo100PropertiesOkBtn];

// -----------------------------------------------------------------------------------

let nameSummaryStatistics = [], propertySummaryStatistics = [], dateSummaryStatistics = [];
let nameDifferentiation = [], propertyDifferentiation = [], dateDifferentiation = [];
let nameDifferentiationRate = [], propertyDifferentiationRate = [], dateDifferentiationRate = [];
let nameSumUpTo100 = [], propertySumUpTo100 = [], dateSumUpTo100 = [];

// -----------------------------------------------------------------------------------

// Arrays filled with final data for each calculation
let summaryStatistics = [];
let differentiation = [];
let differentiationRate = [];
let sum100 = [];

// -----------------------------------------------------------------------------------

// Functions

// Function to flip a card using a button
const flipCard = function(arrowBtnId, cardFlipId) {

    const btnEl = document.getElementById(arrowBtnId);
    const cardFlipEl = document.getElementById(cardFlipId);

    if (btnEl !== null) {

        btnEl.addEventListener( 'click', function() {

            cardFlipEl.classList.toggle('flipped');
        
        }, false);

    }

};

// -------------------------------------------

// Function for creating checkbox element dynamically with label and span
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

// -------------------------------------------

// Function to select and deselect all checkboxes at once
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

// -------------------------------------------

// Function to delete a canvas element
const deleteCanvas = function(elementID) {
    const canvas = document.getElementById(elementID);

    canvas.remove();
};

// -------------------------------------------

// Function to create a canvas element
const createCanvas = function(elementID, canvasID) {
    
    // Get the container which will contain the checkboxes
    const divCanvasEl = document.getElementById(elementID);

    const canvas = document.createElement('canvas');

    canvas.id = canvasID;

    divCanvasEl.appendChild(canvas);

};

// -------------------------------------------

// Function for downloading a JSON object
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

// -----------------------------------------------------------------------------------

flipCard('arrow-btn-radar', 'flip-card-radar');
flipCard('arrow-btn-bubble', 'flip-card-bubble');
flipCard('arrow-btn-doughnut', 'flip-card-doughnut');
flipCard('arrow-btn-polar-area', 'flip-card-polar-area');
flipCard('arrow-btn-bar', 'flip-card-bar');
flipCard('arrow-btn-line', 'flip-card-line');

dashboardBtn.addEventListener('click', function() {

    document.getElementById('dashboard').style.display = "block";
    document.getElementById('summary-statistics-no-file-yet').style.display = "none";
    document.getElementById('differentiation-no-file-yet').style.display = "none";
    document.getElementById('differentiation-rate-no-file-yet').style.display = "none";
    document.getElementById('sum-up-to-100-no-file-yet').style.display = "none";

});

summaryStatisticsBtn.addEventListener('click', function() {

    document.getElementById('dashboard').style.display = "none";
    document.getElementById('summary-statistics-no-file-yet').style.display = "block";
    document.getElementById('differentiation-no-file-yet').style.display = "none";
    document.getElementById('differentiation-rate-no-file-yet').style.display = "none";
    document.getElementById('sum-up-to-100-no-file-yet').style.display = "none";

});

differentiationBtn.addEventListener('click', function() {

    document.getElementById('dashboard').style.display = "none";
    document.getElementById('summary-statistics-no-file-yet').style.display = "none";
    document.getElementById('differentiation-no-file-yet').style.display = "block";
    document.getElementById('differentiation-rate-no-file-yet').style.display = "none";
    document.getElementById('sum-up-to-100-no-file-yet').style.display = "none";

});

differentiationRateBtn.addEventListener('click', function() {

    document.getElementById('dashboard').style.display = "none";
    document.getElementById('summary-statistics-no-file-yet').style.display = "none";
    document.getElementById('differentiation-no-file-yet').style.display = "none";
    document.getElementById('differentiation-rate-no-file-yet').style.display = "block";
    document.getElementById('sum-up-to-100-no-file-yet').style.display = "none";

});

sumUpTo100Btn.addEventListener('click', function() {

    document.getElementById('dashboard').style.display = "none";
    document.getElementById('summary-statistics-no-file-yet').style.display = "none";
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
                    document.getElementById('summary-statistics').style.display = "none";
                    document.getElementById('differentiation').style.display = "none";
                    document.getElementById('differentiation-rate').style.display = "none";
                    document.getElementById('sum-up-to-100').style.display = "none";
                
                });

                summaryStatisticsBtn.addEventListener('click', function() {

                    // document.getElementById('dashboard').style.display = "none";
                    
                    document.getElementById('summary-statistics-no-file-yet').style.display = "none";
                    document.getElementById('summary-statistics').style.display = "block";

                    document.getElementById('differentiation').style.display = "none";

                    document.getElementById('differentiation-rate').style.display = "none";

                    document.getElementById('sum-up-to-100').style.display = "none";
                
                });

                differentiationBtn.addEventListener('click', function() {

                    document.getElementById('summary-statistics').style.display = "none";

                    document.getElementById('differentiation-no-file-yet').style.display = "none";
                    document.getElementById('differentiation').style.display = "block";

                    document.getElementById('differentiation-rate').style.display = "none";

                    document.getElementById('sum-up-to-100').style.display = "none";

                });

                differentiationRateBtn.addEventListener('click', function() {

                    document.getElementById('summary-statistics').style.display = "none";

                    document.getElementById('differentiation').style.display = "none";

                    document.getElementById('differentiation-rate-no-file-yet').style.display = "none";
                    document.getElementById('differentiation-rate').style.display = "block";

                    document.getElementById('sum-up-to-100').style.display = "none";

                });

                sumUpTo100Btn.addEventListener('click', function() {

                    document.getElementById('summary-statistics').style.display = "none";

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

                    createCheckBox('summary-statistics-versions', 'summary-statistics-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                    createCheckBox('differentiation-versions', 'differentiation-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                    createCheckBox('differentiation-rate-versions', 'differentiation-rate-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                    createCheckBox('sum-up-to-100-versions', 'sum-up-to-100-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                
                }

                // -----------------------------------------------------------------------------------

                selectAll('summary-statistics-versions-select-deselect-all-btn', checkboxesSummaryStatisticsVersionEl);

                summaryStatisticsVersionsOkBtn.addEventListener('click', function() {
                    
                    checkedCheckboxesSummaryStatisticsVersion.length = 0;

                    for (let i = 0; i < checkboxesSummaryStatisticsVersionEl.length; i++) {

                        if (checkboxesSummaryStatisticsVersionEl[i].checked) {
                            checkedCheckboxesSummaryStatisticsVersion.push(checkboxesSummaryStatisticsVersionEl[i].value);
                        }
                        
                    }

                    // DEBUGGING
                    // console.log(checkboxesSummaryStatisticsVersionEl);
                    // console.log(checkboxesSummaryStatisticsVersionEl.length);
                    console.log(checkedCheckboxesSummaryStatisticsVersion);
                    // console.log(typeof checkedCheckboxesSummaryStatisticsVersion);

                });
                
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
                    // console.log(checkboxesDifferentiationVersionEl.length);
                    console.log(checkedCheckboxesDifferentiationVersion);
                    // console.log(typeof checkedCheckboxesDifferentiationVersion);

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

                    createCheckBox('summary-statistics-properties', 'summary-statistics-properties', objectProperties[i], objectProperties[i]);
                    createCheckBox('differentiation-properties', 'differentiation-properties', objectProperties[i], objectProperties[i]);
                    createCheckBox('differentiation-rate-properties', 'differentiation-rate-properties', objectProperties[i], objectProperties[i]);
                    createCheckBox('sum-up-to-100-properties', 'sum-up-to-100-properties', objectProperties[i], objectProperties[i]);

                }

                // -----------------------------------------------------------------------------------

                selectAll('summary-statistics-properties-select-deselect-all-btn', checkboxesSummaryStatisticsPropertiesEl);

                summaryStatisticsPropertiesOkBtn.addEventListener('click', function() {
                    
                    checkedCheckboxesSummaryStatisticsProperties.length = 0;

                    for (let i = 0; i < checkboxesSummaryStatisticsPropertiesEl.length; i++) {

                        if (checkboxesSummaryStatisticsPropertiesEl[i].checked) {
                            checkedCheckboxesSummaryStatisticsProperties.push(checkboxesSummaryStatisticsPropertiesEl[i].value);
                        }
                        
                    }

                    // DEBUGGING
                    // console.log(checkboxesSummaryStatisticsPropertiesEl);
                    // console.log(checkboxesSummaryStatisticsPropertiesEl.length);
                    console.log(checkedCheckboxesSummaryStatisticsProperties);
                    // console.log(typeof checkedCheckboxesSummaryStatisticsProperties);

                });

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
                    // console.log(checkboxesDifferentiationPropertiesEl.length);
                    console.log(checkedCheckboxesDifferentiationProperties);
                    // console.log(typeof checkedCheckboxesDifferentiationProperties);

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

                // -----------------------------------------------------------------------------------




                // if (!(checkedCheckboxesSummaryStatisticsVersion.length === 0) && !(checkedCheckboxesSummaryStatisticsProperties.length === 0)) {

                summaryStatisticsOkBtnsArray.forEach(btn => {

                    btn.addEventListener('click', function() {

                        nameSummaryStatistics.length = 0;
                        propertySummaryStatistics.length = 0;
                        dateSummaryStatistics.length = 0;
                        summaryStatistics.length = 0;
                        
                        deleteCanvas('myChart_summaryStatistics');
                        createCanvas('summary-statistics-chart-display', 'myChart_summaryStatistics');
                     

                        // Array filled with selected versions
                        // Gets the values of each row and push it into arrays
                        for (let i = 0; i < rowJsonObject.length; i++) {
        
                            // console.log(checkboxesSummaryStatisticsVersionEl[i].checked);
        
                            if (checkboxesSummaryStatisticsVersionEl[i].checked && checkboxesSummaryStatisticsVersionEl[i].value === rowJsonObject[i].name) {
                                nameSummaryStatistics.push(rowJsonObject[i].name);
                                    // console.log(nameSummaryStatistics); 
                            }
                            
                        };

                        console.log(nameSummaryStatistics);


                        // Array filled with selected variables
                        for (let i = 0; i < checkedCheckboxesSummaryStatisticsProperties.length; i++) {

                            propertySummaryStatistics.push(new Array());

                            for (let j = 0; j < rowJsonObject.length; j++) {
                                
                                if (nameSummaryStatistics.includes(rowJsonObject[j].name)) {

                                    // console.log(checkedCheckboxesSummaryStatisticsProperties);
        
                                    for (let k = 0; k < objectProperties.length; k++) {
        
                                        switch(checkedCheckboxesSummaryStatisticsProperties[i]) {
        
                                            case objectProperties[k] :
                                                // console.log('OKKKKKK');
                                                propertySummaryStatistics[i].push(rowJsonObject[j][objectProperties[k]]);
                                                break;
                                            // default:
                                                    
                                        }
        
                                    }
        
                                }
        
                            }
        
                        }

                        console.log(propertySummaryStatistics);
                        

                        // Array filled with formated dates
                        for (let i = 0; i < rowJsonObject.length; i++) {
                            // console.log(rowJsonObject[i].rel_date);
                            const num_date = new Date(Math.round((rowJsonObject[i].rel_date - 25569) * 86400 * 1000));
                            
                            const year = num_date.toLocaleString("default", { year: "numeric" });
                            const month = num_date.toLocaleString("default", { month: "2-digit" });
                            const day = num_date.toLocaleString("default", { day: "2-digit" });
        
                            const dateFormat = month + "/" + day + "/" + year;
        
                            dateSummaryStatistics.push(dateFormat);
                        };

                        console.log(dateSummaryStatistics);




                        // // Calculation of the Differentiation
                        // for (let i = 0; i < propertyDifferentiation.length; i++) {
                                        
                        //     differentiation[i] = [ ];
                            
                        //     for (let j = 0; j < propertyDifferentiation[i].length; j++) {

                        //         if (propertyDifferentiation[i][j] >= propertyDifferentiation[i][j + 1]) {
                        //             differentiation[i][j] = (propertyDifferentiation[i][j] - propertyDifferentiation[i][j + 1]);
                        //         } else {
                        //             differentiation[i][j] = (propertyDifferentiation[i][j + 1] - propertyDifferentiation[i][j]);
                        //         }
                                
                        //     }
                            
                        // }





                        // // Calculation of the Differentiation Rate
                        // for (let i = 0; i < propertyDifferentiationRate.length; i++) {
                            
                        //     differentiationRate[i] = [ ];
                            
                        //     for (let j = 0; j < propertyDifferentiationRate[i].length; j++) {
        
                        //         if (propertyDifferentiationRate[i][j] >= propertyDifferentiationRate[i][j + 1]) {
                        //             differentiationRate[i][j] = (propertyDifferentiationRate[i][j] - propertyDifferentiationRate[i][j + 1]) / propertyDifferentiationRate[i][j + 1];
                                    
                        //             differentiationRate[i][j] = isFinite(differentiationRate[i][j]) ? differentiationRate[i][j] : 0.0;
                        //         } else {
                        //             differentiationRate[i][j] = (propertyDifferentiationRate[i][j + 1] - propertyDifferentiationRate[i][j]) / propertyDifferentiationRate[i][j];
                                    
                        //             differentiationRate[i][j] = isFinite(differentiationRate[i][j]) ? differentiationRate[i][j] : 0.0;
                        //         }
                                
                        //     }
                            
                        // }

                        // console.log(differentiationRate);


                        // Displays the chart for the variables
                        const ctx1= document.getElementById('myChart_summaryStatistics').getContext('2d');

                        // if (!(checkedCheckboxesSumUpTo100Version.length === 0) && !(checkedCheckboxesSumUpTo100Properties.length === 0)) {

                            const myChart_summaryStatistics = new Chart(ctx1, {
                                type: 'bar',
                                data: {
                                labels: nameSummaryStatistics,
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data: propertySummaryStatistics[i],
                                        backgroundColor: ['#ea5545', '#ea5545', '#ea5545', '#ea5545', '#ea5545'],
                                        borderColor: '#e61802',
                                        borderWidth: 2
                                    })),
                                },
                                options: {
                                    plugins: {
                                        tooltip: {
                                            enabled: false // <-- this option disables tooltips
                                        }
                                    },
                                    // maintainAspectRatio: false,
                                    responsive: true,
                                    maintainAspectRatio: false,
                                        
                                }
                            });

                            console.log(myChart_summaryStatistics);
                        // }
                        
                    });
                 
                });

                // }




                // if (!(checkedCheckboxesDifferentiationVersion.length === 0) && !(checkedCheckboxesDifferentiationProperties.length === 0)) {

                    differentiationOkBtnsArray.forEach(btn => {

                        btn.addEventListener('click', function() {

                            nameDifferentiation.length = 0;
                            propertyDifferentiation.length = 0;
                            dateDifferentiation.length = 0;
                            differentiation.length = 0;                            

                            deleteCanvas('myChart_differentiation');
                            createCanvas('differentiation-chart-display', 'myChart_differentiation');


                            // Array filled with selected versions
                            // Gets the values of each row and push it into arrays
                            for (let i = 0; i < rowJsonObject.length; i++) {
            
                                // console.log(checkboxesDifferentiationVersionEl[i].checked);
            
                                if (checkboxesDifferentiationVersionEl[i].checked && checkboxesDifferentiationVersionEl[i].value === rowJsonObject[i].name) {
                                    nameDifferentiation.push(rowJsonObject[i].name);
                                        // console.log(nameDifferentiation); 
                                }
                                
                            };

                            console.log(nameDifferentiation);


                            // Array filled with selected variables
                            for (let i = 0; i < checkedCheckboxesDifferentiationProperties.length; i++) {

                                propertyDifferentiation.push(new Array());

                                for (let j = 0; j < rowJsonObject.length; j++) {
                                    
                                    if (nameDifferentiation.includes(rowJsonObject[j].name)) {

                                        // console.log(checkedCheckboxesDifferentiationProperties);
            
                                        for (let k = 0; k < objectProperties.length; k++) {
            
                                            switch(checkedCheckboxesDifferentiationProperties[i]) {
            
                                                case objectProperties[k] :
                                                    // console.log('OKKKKKK');
                                                    propertyDifferentiation[i].push(rowJsonObject[j][objectProperties[k]]);
                                                    break;
                                                // default:
                                                        
                                            }
            
                                        }
            
                                    }
            
                                }
            
                            }

                            console.log(propertyDifferentiation);
                            

                            // Array filled with formated dates
                            for (let i = 0; i < rowJsonObject.length; i++) {
                                // console.log(rowJsonObject[i].rel_date);
                                const num_date = new Date(Math.round((rowJsonObject[i].rel_date - 25569) * 86400 * 1000));
                                
                                const year = num_date.toLocaleString("default", { year: "numeric" });
                                const month = num_date.toLocaleString("default", { month: "2-digit" });
                                const day = num_date.toLocaleString("default", { day: "2-digit" });
            
                                const dateFormat = month + "/" + day + "/" + year;
            
                                dateDifferentiation.push(dateFormat);
                            };

                            console.log(dateDifferentiation);


                            // Calculation of the Differentiation
                            for (let i = 0; i < propertyDifferentiation.length; i++) {
                                        
                                differentiation[i] = [ ];
                                
                                for (let j = 0; j < propertyDifferentiation[i].length; j++) {

                                    if (propertyDifferentiation[i][j] >= propertyDifferentiation[i][j + 1]) {
                                        differentiation[i][j] = (propertyDifferentiation[i][j] - propertyDifferentiation[i][j + 1]);
                                    } else {
                                        differentiation[i][j] = (propertyDifferentiation[i][j + 1] - propertyDifferentiation[i][j]);
                                    }
                                    
                                }
                                
                            }

                            console.log(differentiation);


                            // Displays the chart for the variables
                            const ctx2 = document.getElementById('myChart_differentiation').getContext('2d');

                            // if (!(checkedCheckboxesSumUpTo100Version.length === 0) && !(checkedCheckboxesSumUpTo100Properties.length === 0)) {

                                const myChart_differentiation = new Chart(ctx2, {
                                    type: 'bar',
                                    data: {
                                    labels: nameDifferentiation,
                                    datasets:
                                        checkedCheckboxesDifferentiationProperties.map((key, i) => ({
                                            label: checkedCheckboxesDifferentiationProperties[i],
                                            data: differentiation[i],
                                            backgroundColor: ['#ea5545', '#ea5545', '#ea5545', '#ea5545', '#ea5545'],
                                            borderColor: '#e61802',
                                            borderWidth: 2
                                        })),
                                    },
                                    options: {
                                        states: {
                                            hover: {
                                                filter: {
                                                    type: 'none',
                                                }
                                            },
                                        },
                                        plugins: {
                                            tooltip: {
                                              enabled: false // <-- this option disables tooltips
                                            }
                                        },
                                        // maintainAspectRatio: false,
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        
                                    }
                                });

                                console.log(myChart_differentiation);

                            // }

                        });

                    });

                // }

                // -----------------------------------------------------------------------------------

                // if (!(checkedCheckboxesDifferentiationRateVersion.length === 0) && !(checkedCheckboxesDifferentiationRateProperties.length === 0)) {

                differentiationRateOkBtnsArray.forEach(btn => {

                    btn.addEventListener('click', function() {

                        nameDifferentiationRate.length = 0;
                        propertyDifferentiationRate.length = 0;
                        dateDifferentiationRate.length = 0;
                        differentiationRate.length = 0;
                        
                        deleteCanvas('myChart_differentiationRate');
                        createCanvas('differentiation-rate-chart-display', 'myChart_differentiationRate');
                     

                        // Array filled with selected versions
                        // Gets the values of each row and push it into arrays
                        for (let i = 0; i < rowJsonObject.length; i++) {
        
                            // console.log(checkboxesDifferentiationRateVersionEl[i].checked);
        
                            if (checkboxesDifferentiationRateVersionEl[i].checked && checkboxesDifferentiationRateVersionEl[i].value === rowJsonObject[i].name) {
                                nameDifferentiationRate.push(rowJsonObject[i].name);
                                    // console.log(nameDifferentiationRate); 
                            }
                            
                        };

                        console.log(nameDifferentiationRate);


                        // Array filled with selected variables
                        for (let i = 0; i < checkedCheckboxesDifferentiationRateProperties.length; i++) {

                            propertyDifferentiationRate.push(new Array());

                            for (let j = 0; j < rowJsonObject.length; j++) {
                                
                                if (nameDifferentiationRate.includes(rowJsonObject[j].name)) {

                                    // console.log(checkedCheckboxesDifferentiationRateProperties);
        
                                    for (let k = 0; k < objectProperties.length; k++) {
        
                                        switch(checkedCheckboxesDifferentiationRateProperties[i]) {
        
                                            case objectProperties[k] :
                                                // console.log('OKKKKKK');
                                                propertyDifferentiationRate[i].push(rowJsonObject[j][objectProperties[k]]);
                                                break;
                                            // default:
                                                    
                                        }
        
                                    }
        
                                }
        
                            }
        
                        }

                        console.log(propertyDifferentiationRate);
                        

                        // Array filled with formated dates
                        for (let i = 0; i < rowJsonObject.length; i++) {
                            // console.log(rowJsonObject[i].rel_date);
                            const num_date = new Date(Math.round((rowJsonObject[i].rel_date - 25569) * 86400 * 1000));
                            
                            const year = num_date.toLocaleString("default", { year: "numeric" });
                            const month = num_date.toLocaleString("default", { month: "2-digit" });
                            const day = num_date.toLocaleString("default", { day: "2-digit" });
        
                            const dateFormat = month + "/" + day + "/" + year;
        
                            dateDifferentiationRate.push(dateFormat);
                        };

                        console.log(dateDifferentiationRate);




                        // Calculation of the Differentiation
                        for (let i = 0; i < propertyDifferentiation.length; i++) {
                                        
                            differentiation[i] = [ ];
                            
                            for (let j = 0; j < propertyDifferentiation[i].length; j++) {

                                if (propertyDifferentiation[i][j] >= propertyDifferentiation[i][j + 1]) {
                                    differentiation[i][j] = (propertyDifferentiation[i][j] - propertyDifferentiation[i][j + 1]);
                                } else {
                                    differentiation[i][j] = (propertyDifferentiation[i][j + 1] - propertyDifferentiation[i][j]);
                                }
                                
                            }
                            
                        }





                        // Calculation of the Differentiation Rate
                        for (let i = 0; i < propertyDifferentiationRate.length; i++) {
                            
                            differentiationRate[i] = [ ];
                            
                            for (let j = 0; j < propertyDifferentiationRate[i].length; j++) {
        
                                if (propertyDifferentiationRate[i][j] >= propertyDifferentiationRate[i][j + 1]) {
                                    differentiationRate[i][j] = (propertyDifferentiationRate[i][j] - propertyDifferentiationRate[i][j + 1]) / propertyDifferentiationRate[i][j + 1];
                                    
                                    differentiationRate[i][j] = isFinite(differentiationRate[i][j]) ? differentiationRate[i][j] : 0.0;
                                } else {
                                    differentiationRate[i][j] = (propertyDifferentiationRate[i][j + 1] - propertyDifferentiationRate[i][j]) / propertyDifferentiationRate[i][j];
                                    
                                    differentiationRate[i][j] = isFinite(differentiationRate[i][j]) ? differentiationRate[i][j] : 0.0;
                                }
                                
                            }
                            
                        }

                        console.log(differentiationRate);


                        // Displays the chart for the variables
                        const ctx3= document.getElementById('myChart_differentiationRate').getContext('2d');
                        // const ctx4= document.getElementById('myChart_sum_100').getContext('2d');

                        // if (!(checkedCheckboxesSumUpTo100Version.length === 0) && !(checkedCheckboxesSumUpTo100Properties.length === 0)) {

                            const myChart_differentiationRate = new Chart(ctx3, {
                                type: 'bar',
                                data: {
                                labels: nameDifferentiationRate,
                                datasets:
                                checkedCheckboxesDifferentiationRateProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationRateProperties[i],
                                        data: differentiationRate[i],
                                        backgroundColor: ['#ea5545', '#ea5545', '#ea5545', '#ea5545', '#ea5545'],
                                        borderColor: '#e61802',
                                        borderWidth: 2
                                    })),
                                },
                                options: {
                                    plugins: {
                                        tooltip: {
                                            enabled: false // <-- this option disables tooltips
                                        }
                                    },
                                    // maintainAspectRatio: false,
                                    responsive: true,
                                    maintainAspectRatio: false,
                                        
                                }
                            });

                            console.log(myChart_differentiationRate);

                        // }
                        
                    });
                 
                });

                // }

                // -----------------------------------------------------------------------------------

                // if (!(checkedCheckboxesSumUpTo100Version.length === 0) && !(checkedCheckboxesSumUpTo100Properties.length === 0)) {

                sumUpTo100OkBtnsArray.forEach(btn => {

                    btn.addEventListener('click', function() {

                        nameSumUpTo100.length = 0;
                        propertySumUpTo100.length = 0;
                        dateSumUpTo100.length = 0;
                     
                        // Array filled with selected versions
                        // Gets the values of each row and push it into arrays
                        for (let i = 0; i < rowJsonObject.length; i++) {
        
                            // console.log(checkboxesSumUpTo100VersionEl[i].checked);
        
                            if (checkboxesSumUpTo100VersionEl[i].checked && checkboxesSumUpTo100VersionEl[i].value === rowJsonObject[i].name) {
                                nameSumUpTo100.push(rowJsonObject[i].name);
                                    // console.log(nameSumUpTo100); 
                            }
                            
                        };

                        console.log(nameSumUpTo100);

                        // Array filled with selected variables
                        for (let i = 0; i < checkedCheckboxesSumUpTo100Properties.length; i++) {

                            propertySumUpTo100.push(new Array());

                            for (let j = 0; j < rowJsonObject.length; j++) {
                                
                                if (nameSumUpTo100.includes(rowJsonObject[j].name)) {

                                    // console.log(checkedCheckboxesSumUpTo100Properties);
        
                                    for (let k = 0; k < objectProperties.length; k++) {
        
                                        switch(checkedCheckboxesSumUpTo100Properties[i]) {
        
                                            case objectProperties[k] :
                                                // console.log('OKKKKKK');
                                                propertySumUpTo100[i].push(rowJsonObject[j][objectProperties[k]]);
                                                break;
                                            // default:
                                                    
                                        }
        
                                    }
        
                                }
        
                            }
        
                        }

                        console.log(propertySumUpTo100);
                        
                        // Array filled with formated dates
                        for (let i = 0; i < rowJsonObject.length; i++) {
                            // console.log(rowJsonObject[i].rel_date);
                            const num_date = new Date(Math.round((rowJsonObject[i].rel_date - 25569) * 86400 * 1000));
                            
                            const year = num_date.toLocaleString("default", { year: "numeric" });
                            const month = num_date.toLocaleString("default", { month: "2-digit" });
                            const day = num_date.toLocaleString("default", { day: "2-digit" });
        
                            const dateFormat = month + "/" + day + "/" + year;
        
                            dateSumUpTo100.push(dateFormat);
                        };

                        console.log(dateSumUpTo100);
                        
                    });
                 
                });

                // }






                
                




















            }

        }
    
    });
    
});















