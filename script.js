'use strict';

// Sidebar Menu Buttons Elements
const dashboardBtn = document.getElementById('dashboard-btn');
const summaryStatisticsBtn = document.getElementById('summary-statistics-btn');
const differentiationBtn = document.getElementById('differentiation-btn');
const differentiationRateBtn = document.getElementById('differentiation-rate-btn');
const sumUpTo100Btn = document.getElementById('sum-up-to-100-btn');


// -----------------------------------------------------------------------------------


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


// -----------------------------------------------------------------------------------


const resetBtn = document.getElementById("reset");


// -----------------------------------------------------------------------------------


// Array filled with property names of rowJsonObject array of objects
let objectProperties = [];


// -----------------------------------------------------------------------------------


// Array filled with the formated dates from the rowJsonObject array of objects
let formatedDatesArray = [];
// let formatedDatesArraySummaryStatistics = [];
// let formatedDatesArrayDifferentiation = [];
// let formatedDatesArrayDifferentiationRate = [];


// -----------------------------------------------------------------------------------


// Element Variables for radio buttons
const summaryStatisticsVersionsRadioEl = document.getElementById('summary-statistics-versions-radio');
const summaryStatisticsDatesRadioEl = document.getElementById('summary-statistics-dates-radio');

const differentiationVersionsRadioEl = document.getElementById('differentiation-versions-radio');
const differentiationDatesRadioEl = document.getElementById('differentiation-dates-radio');

const differentiationRateVersionsRadioEl = document.getElementById('differentiation-rate-versions-radio');
const differentiationRateDatesRadioEl = document.getElementById('differentiation-rate-dates-radio');

// const summaryStatisticsVersionsRadioEl = document.getElementById('summary-statistics-versions-radio');
// const summaryStatisticsDatesRadioEl = document.getElementById('summary-statistics-dates-radio');


// -----------------------------------------------------------------------------------


// Ok Buttons for Version Cards
const summaryStatisticsVersionsOkBtn = document.getElementById('summary-statistics-versions-ok-btn');
const differentiationVersionsOkBtn = document.getElementById('differentiation-versions-ok-btn');
const differentiationRateVersionsOkBtn = document.getElementById('differentiation-rate-versions-ok-btn');
const sumUpTo100VersionsOkBtn = document.getElementById('sum-up-to-100-versions-ok-btn');

// -------------------------------------------

// Version variables for creating dynamicaly checkboxes
const checkboxesSummaryStatisticsVersionEl = document.getElementsByName('summary-statistics-versions');
// let checkedCheckboxesSummaryStatisticsVersion = [];      // array filled with checked versions

const checkboxesDifferentiationVersionEl = document.getElementsByName('differentiation-versions');
// let checkedCheckboxesDifferentiationVersion = [];      // array filled with checked versions

const checkboxesDifferentiationRateVersionEl = document.getElementsByName('differentiation-rate-versions');
// let checkedCheckboxesDifferentiationRateVersion = [];      // array filled with checked versions

const checkboxesSumUpTo100VersionEl = document.getElementsByName('sum-up-to-100-versions');
let checkedCheckboxesSumUpTo100Version = [];      // array filled with checked versions

// -------------------------------------------

// Date variables for creating dynamicaly checkboxes
const checkboxesSummaryStatisticsDateEl = document.getElementsByName('summary-statistics-dates');
// let checkedCheckboxesSummaryStatisticsDate = [];      // array filled with checked dates

const checkboxesDifferentiationDateEl = document.getElementsByName('differentiation-dates');
// let checkedCheckboxesDifferentiationDate = [];      // array filled with checked dates

const checkboxesDifferentiationRateDateEl = document.getElementsByName('differentiation-rate-dates');
// let checkedCheckboxesDifferentiationRateDate = [];      // array filled with checked dates

// const checkboxesSumUpTo100DateEl = document.getElementsByName('summary-statistics-dates');
// let checkedCheckboxesSumUpTo100Date = [];      // array filled with checked dates


// -----------------------------------------------------------------------------------


// Ok Buttons for Property Cards
const summaryStatisticsPropertiesOkBtn = document.getElementById('summary-statistics-properties-ok-btn');
const differentiationPropertiesOkBtn = document.getElementById('differentiation-properties-ok-btn');
const differentiationRatePropertiesOkBtn = document.getElementById('differentiation-rate-properties-ok-btn');
const sumUpTo100PropertiesOkBtn = document.getElementById('sum-up-to-100-properties-ok-btn');

// -------------------------------------------

// Property variables for creating dynamicaly checkboxes
const checkboxesSummaryStatisticsPropertiesEl = document.getElementsByName('summary-statistics-properties');
let checkedCheckboxesSummaryStatisticsProperties = [];      // array filled with checked versions

const checkboxesDifferentiationPropertiesEl = document.getElementsByName('differentiation-properties');
let checkedCheckboxesDifferentiationProperties = [];      // array filled with checked versions

const checkboxesDifferentiationRatePropertiesEl = document.getElementsByName('differentiation-rate-properties');
let checkedCheckboxesDifferentiationRateProperties = [];      // array filled with checked versions

const checkboxesSumUpTo100PropertiesEl = document.getElementsByName('sum-up-to-100-properties');
let checkedCheckboxesSumUpTo100Properties = [];      // array filled with checked versions


// -----------------------------------------------------------------------------------


// Ok Buttons for Chart Type Cards
const summaryStatisticsChartsOkBtn = document.getElementById('summary-statistics-charts-ok-btn');
const differentiationChartsOkBtn = document.getElementById('differentiation-charts-ok-btn');
const differentiationRateChartsOkBtn = document.getElementById('differentiation-rate-charts-ok-btn');
const sumUpTo100ChartsOkBtn = document.getElementById('sum-up-to-100-charts-ok-btn');

// -------------------------------------------

// Chart type variables for creating dynamicaly checkboxes
const checkboxesSummaryStatisticsChartsEl = document.getElementsByName('summary-statistics-charts');
let checkedCheckboxesSummaryStatisticsCharts = [];      // array filled with checked versions

const checkboxesDifferentiationChartsEl = document.getElementsByName('differentiation-charts');
let checkedCheckboxesDifferentiationCharts = [];      // array filled with checked versions

const checkboxesDifferentiationRateChartsEl = document.getElementsByName('differentiation-rate-charts');
let checkedCheckboxesDifferentiationRateCharts = [];      // array filled with checked versions

const checkboxesSumUpTo100ChartsEl = document.getElementsByName('sum-up-to-100-charts');
let checkedCheckboxesSumUpTo100Charts = [];      // array filled with checked versions


// -----------------------------------------------------------------------------------


// Ok Buttons for Modal Cards - z axis
let summaryStatisticsModalOkBtn;
let differentiationModalOkBtn;
let differentiationRateModalOkBtn;

// -------------------------------------------

// Element Variables for Modals and Overlays
const summaryStatisticsModal = document.getElementById('summary-statistics-z-axis-modal');
const summaryStatisticsOverlay = document.querySelector('.summary-statistics-overlay');

const differentiationModal = document.getElementById('differentiation-z-axis-modal');
const differentiationOverlay = document.querySelector('.differentiation-overlay');

const differentiationRateModal = document.getElementById('differentiation-rate-z-axis-modal');
const differentiationRateOverlay = document.querySelector('.differentiation-rate-overlay');

// -------------------------------------------

// Property variables for creating dynamicaly checkboxes inside modal cards
const checkboxesSummaryStatisticsModalEl = document.getElementsByName('summary-statistics-z-axis-modal');
let checkedCheckboxesSummaryStatisticsModal = [];      // array filled with checked versions

const checkboxesDifferentiationModalEl = document.getElementsByName('differentiation-z-axis-modal');
let checkedCheckboxesDifferentiationModal = [];      // array filled with checked versions

const checkboxesDifferentiationRateModalEl = document.getElementsByName('differentiation-rate-z-axis-modal');
let checkedCheckboxesDifferentiationRateModal = [];      // array filled with checked versions


// -----------------------------------------------------------------------------------


// Arrays that contain Ok Buttons for each selection
const summaryStatisticsOkBtnsArray = [summaryStatisticsVersionsOkBtn, summaryStatisticsPropertiesOkBtn, summaryStatisticsChartsOkBtn];
const differentiationOkBtnsArray = [differentiationVersionsOkBtn, differentiationPropertiesOkBtn, differentiationChartsOkBtn];
const differentiationRateOkBtnsArray = [differentiationRateVersionsOkBtn, differentiationRatePropertiesOkBtn, differentiationRateChartsOkBtn];
const sumUpTo100OkBtnsArray = [sumUpTo100VersionsOkBtn, sumUpTo100PropertiesOkBtn];


// -----------------------------------------------------------------------------------


// New arrays to fill with variables for the chart display
let nameSummaryStatistics = [], propertySummaryStatistics = [], dateSummaryStatistics = [], dateSummaryStatisticsOriginal = [], xAxisSummaryStatistics = [];
let nameDifferentiation = [], propertyDifferentiation = [], dateDifferentiation = [], xAxisDifferentiation = [];
let nameDifferentiationRate = [], propertyDifferentiationRate = [], dateDifferentiationRate = [], xAxisDifferentiationRate = [];
let nameSumUpTo100 = [], propertySumUpTo100 = [], dateSumUpTo100 = [];


// -----------------------------------------------------------------------------------


// Variables that set the type of each chart
let summaryStatisticsChartType;
let differentiationChartType;
let differentiationRateChartType;

let chartNamesArray = ['Floating Bar', 'Horizontal Bar', 'Stacked Bar', 'Vertical Bar', 'Line', 'Bubble', 'Combo Bar/Line', 'Doughnut', 'Multi Series Pie', 'Pie', 'Polar Area', 'Radar', 'Scatter'];


// -----------------------------------------------------------------------------------


// Arrays filled with final data for each calculation
let summaryStatistics = [];
let differentiation = [];
let differentiationRate = [];
let sum100 = [];

// -----------------------------------------------------------------------------------


let dataSummaryStatistics, optionsSummaryStatistics;
let dataDifferentiation, optionsDifferentiation;
let dataDifferentiationRate, optionsDifferentiationRate;


// -----------------------------------------------------------------------------------


// Functions

// // Array filled with formated dates
// const dateFormation = function(arrayOfObjects, formatedArray) {
//     for (let i = 0; i < arrayOfObjects.length; i++) {
//         // console.log(arrayOfObjects[i].property);
//         const num_date = new Date(Math.round((arrayOfObjects[i].rel_date - 25569) * 86400 * 1000));
        
//         const year = num_date.toLocaleString("default", { year: "numeric" });
//         const month = num_date.toLocaleString("default", { month: "2-digit" });
//         const day = num_date.toLocaleString("default", { day: "2-digit" });

//         const dateFormat = month + "/" + day + "/" + year;

//         formatedArray.push(dateFormat);
//     };
// };

// -------------------------------------------

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
    
};


// Function for creating checkbox element dynamically with label and span
const createCheckBoxDates = function(elementID, name, value, innerText) {

    // Get the container which will contain the checkboxes
    const checkboxEl = document.getElementById(elementID);

    // creating label element
    const label = document.createElement('label');

    label.className = 'dynamicLabel';
    label.id = 'dynamic-label'


    // creating checkbox element
    const checkbox = document.createElement('input');

    // Assigning the attributes to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = name;
    checkbox.value = value;

    // dateFormation(value);

    checkbox.className = 'dynamicCheckbox';
    checkbox.id = 'dynamic-checkbox';

    // creating span element
    const span = document.createElement('span');

    span.innerHTML = innerText;

    span.className = 'dynamicSpan';
    span.id = 'dynamic-span';
    
    // appending the checkbox and span to label and then the label to div element checkboxEl
    label.appendChild(checkbox);
    label.appendChild(span);
    checkboxEl.appendChild(label);

    
    
};








// Function for creating checkbox element dynamically with label and span
const createRadio = function(elementID, name, value, innerText) {
    
    // Get the container which will contain the checkboxes
    const checkboxEl = document.getElementById(elementID);

    // creating label element
    const label = document.createElement('label');


        label.className = 'dynamicLabel';
        label.id = 'dynamic-label'


    // creating checkbox element
    const checkbox = document.createElement('input');

    // Assigning the attributes to created checkbox
    checkbox.type = "radio";
    checkbox.name = name;
    checkbox.value = value;


        checkbox.className = 'dynamicCheckbox';
        checkbox.id = 'dynamic-checkbox';
    

    // creating span element
    const span = document.createElement('span');

    span.innerHTML = innerText;


        span.className = 'dynamicSpan';
        span.id = 'dynamic-span';

    
    // appending the checkbox and span to label and then the label to div element checkboxEl
    label.appendChild(checkbox);
    label.appendChild(span);
    checkboxEl.appendChild(label);
    
};




// -------------------------------------------


// const createText = function(elementID, innerText) {

//     const divText = document.getElementById(elementID);
//     // Create element:
//     const paragraph = document.createElement("p");
//     paragraph.innerText = innerText;

//     // Append to body:
//     divText.appendChild(paragraph);
// }




// -------------------------------------------

const deleteDivInside = function(elementID) {

    const divSum = document.getElementById(elementID);

    while (divSum.lastElementChild) {
        divSum.removeChild(divSum.lastElementChild);
    }

};

// -------------------------------------------

// Function to delete a checkbox elements
const deleteCheckBox = function(elementID) {

    const checkboxs = document.querySelectorAll(elementID);

    for (let i = 0; i < checkboxs.length; i++) {
        checkboxs[i].remove();
    }

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
                console.log('false');
            
            }
            else  {
                allCheckboxesArray[i].checked = true;

                btn.innerHTML = 'Deselect all<span class="material-icons-sharp">remove_done</span>';
                console.log('true');
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





// Create button element for versions dynamically
const createButton = function(elementID, buttonClass, buttonID, innerText) {
    const button = document.createElement("button");
    const element = document.getElementById(elementID);

    button.className = buttonClass;
    button.id = buttonID;
    button.innerHTML = innerText;

    element.appendChild(button);
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


resetBtn.addEventListener('click', function() {

    window.location.reload();
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

                // Array filled with formated dates
                // const dateFormation = function(arrayOfObjects, formatedArray) {
                    for (let i = 0; i < rowJsonObject.length; i++) {
                        // console.log(arrayOfObjects[i].property);
                        const num_date = new Date(Math.round((rowJsonObject[i].rel_date - 25569) * 86400 * 1000));
                        
                        const year = num_date.toLocaleString("default", { year: "numeric" });
                        const month = num_date.toLocaleString("default", { month: "2-digit" });
                        const day = num_date.toLocaleString("default", { day: "2-digit" });

                        const dateFormat = month + "/" + day + "/" + year;
                        // const dateFormat2 = month + "/" + day + "/" + year;

                        formatedDatesArray.push(dateFormat);
                        // formatedDatesArrayDifferentiation.push(dateFormat);
                        // formatedDatesArrayDifferentiationRate.push(dateFormat);

                    };
                // };
                
                // console.log(formatedDatesArraySummaryStatistics);
                // console.log(formatedDatesArrayDifferentiation);
                // console.log(formatedDatesArrayDifferentiationRate);

                // -----------------------------------------------------------------------------------

                // Create Versions / Dates checkboxes for Summary Statistics

                // if (summaryStatisticsVersionsRadioEl.checked) {

                    // Creating checkboxes for versions
                    for (let i = 0; i < rowJsonObject.length; i++) {

                        createCheckBox('summary-statistics-versions', 'summary-statistics-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                        
                    }

                    // selectAll('summary-statistics-versions-select-deselect-all-btn', checkboxesSummaryStatisticsVersionEl);

                    // summaryStatisticsVersionsOkBtn.addEventListener('click', function() {
                        
                    //     checkedCheckboxesSummaryStatisticsVersion.length = 0;

                    //     for (let i = 0; i < checkboxesSummaryStatisticsVersionEl.length; i++) {

                    //         if (checkboxesSummaryStatisticsVersionEl[i].checked) {
                    //             checkedCheckboxesSummaryStatisticsVersion.push(checkboxesSummaryStatisticsVersionEl[i].value);
                    //         }
                            
                    //     }

                    //     // DEBUGGING
                    //     // console.log(checkboxesSummaryStatisticsVersionEl);
                    //     // console.log(checkboxesSummaryStatisticsVersionEl.length);
                    //     console.log(checkedCheckboxesSummaryStatisticsVersion);
                    //     // console.log(typeof checkedCheckboxesSummaryStatisticsVersion);

                    // });

                // }
                // else if (summaryStatisticsDatesRadioEl.checked) {

                //     for (let i = 0; i < rowJsonObject.length; i++) {

                //         createCheckBoxDates('summary-statistics-versions', 'summary-statistics-dates', formatedDatesArraySummaryStatistics[i], formatedDatesArraySummaryStatistics[i]);
                        
                //     }

                //     // selectAll('summary-statistics-versions-select-deselect-all-btn', checkboxesSummaryStatisticsDateEl);

                //     // summaryStatisticsVersionsOkBtn.addEventListener('click', function() {
                        
                //     //     checkedCheckboxesSummaryStatisticsVersion.length = 0;

                //     //     for (let i = 0; i < checkboxesSummaryStatisticsVersionEl.length; i++) {

                //     //         if (checkboxesSummaryStatisticsVersionEl[i].checked) {
                //     //             checkedCheckboxesSummaryStatisticsVersion.push(checkboxesSummaryStatisticsVersionEl[i].value);
                //     //         }
                            
                //     //     }

                //     //     // DEBUGGING
                //     //     // console.log(checkboxesSummaryStatisticsVersionEl);
                //     //     // console.log(checkboxesSummaryStatisticsVersionEl.length);
                //     //     console.log(checkedCheckboxesSummaryStatisticsVersion);
                //     //     // console.log(typeof checkedCheckboxesSummaryStatisticsVersion);

                //     // });

                // }

                summaryStatisticsDatesRadioEl.addEventListener("change", function() {

                    deleteDivInside('summary-statistics-versions');
                   
                    for (let i = 0; i < rowJsonObject.length; i++) {

                        createCheckBoxDates('summary-statistics-versions', 'summary-statistics-dates', formatedDatesArray[i], formatedDatesArray[i]);
                        
                    }

                });

                selectAll('summary-statistics-versions-select-deselect-all-btn', checkboxesSummaryStatisticsDateEl);

                summaryStatisticsVersionsRadioEl.addEventListener("change", function() {

                    deleteDivInside('summary-statistics-versions');

                    for (let i = 0; i < rowJsonObject.length; i++) {

                        createCheckBox('summary-statistics-versions', 'summary-statistics-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                        
                    }

                });

                selectAll('summary-statistics-versions-select-deselect-all-btn', checkboxesSummaryStatisticsVersionEl);

                // -----------------------------------------------------------------------------------

                // Create Versions / Dates checkboxes for Differentiation
                
                // if (differentiationVersionsRadioEl.checked) {

                    // Creating checkboxes for versions
                    for (let i = 0; i < rowJsonObject.length; i++) {

                        createCheckBox('differentiation-versions', 'differentiation-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                        
                    }

                    // selectAll('summary-statistics-versions-select-deselect-all-btn', checkboxesSummaryStatisticsVersionEl);

                    // summaryStatisticsVersionsOkBtn.addEventListener('click', function() {
                        
                    //     checkedCheckboxesSummaryStatisticsVersion.length = 0;

                    //     for (let i = 0; i < checkboxesSummaryStatisticsVersionEl.length; i++) {

                    //         if (checkboxesSummaryStatisticsVersionEl[i].checked) {
                    //             checkedCheckboxesSummaryStatisticsVersion.push(checkboxesSummaryStatisticsVersionEl[i].value);
                    //         }
                            
                    //     }

                    //     // DEBUGGING
                    //     // console.log(checkboxesSummaryStatisticsVersionEl);
                    //     // console.log(checkboxesSummaryStatisticsVersionEl.length);
                    //     console.log(checkedCheckboxesSummaryStatisticsVersion);
                    //     // console.log(typeof checkedCheckboxesSummaryStatisticsVersion);

                    // });

                // }

                differentiationDatesRadioEl.addEventListener("change", function() {

                    deleteDivInside('differentiation-versions');
                   
                    for (let i = 0; i < rowJsonObject.length; i++) {

                        createCheckBoxDates('differentiation-versions', 'differentiation-dates', formatedDatesArray[i], formatedDatesArray[i]);
                        
                    }

                });

                selectAll('differentiation-versions-select-deselect-all-btn', checkboxesDifferentiationDateEl);

                differentiationVersionsRadioEl.addEventListener("change", function() {

                    deleteDivInside('differentiation-versions');

                    for (let i = 0; i < rowJsonObject.length; i++) {

                        createCheckBox('differentiation-versions', 'differentiation-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                        
                    }

                });

                selectAll('differentiation-versions-select-deselect-all-btn', checkboxesDifferentiationVersionEl);

                // -----------------------------------------------------------------------------------

                // Create Versions / Dates checkboxes for Differentiation Rate
                
                // if (differentiationVersionsRadioEl.checked) {

                    // Creating checkboxes for versions
                    for (let i = 0; i < rowJsonObject.length; i++) {

                        createCheckBox('differentiation-rate-versions', 'differentiation-rate-versions', rowJsonObject[i].name, rowJsonObject[i].name);                        
                    }

                    // selectAll('summary-statistics-versions-select-deselect-all-btn', checkboxesSummaryStatisticsVersionEl);

                    // summaryStatisticsVersionsOkBtn.addEventListener('click', function() {
                        
                    //     checkedCheckboxesSummaryStatisticsVersion.length = 0;

                    //     for (let i = 0; i < checkboxesSummaryStatisticsVersionEl.length; i++) {

                    //         if (checkboxesSummaryStatisticsVersionEl[i].checked) {
                    //             checkedCheckboxesSummaryStatisticsVersion.push(checkboxesSummaryStatisticsVersionEl[i].value);
                    //         }
                            
                    //     }

                    //     // DEBUGGING
                    //     // console.log(checkboxesSummaryStatisticsVersionEl);
                    //     // console.log(checkboxesSummaryStatisticsVersionEl.length);
                    //     console.log(checkedCheckboxesSummaryStatisticsVersion);
                    //     // console.log(typeof checkedCheckboxesSummaryStatisticsVersion);

                    // });

                // }

                differentiationRateDatesRadioEl.addEventListener("change", function() {

                    deleteDivInside('differentiation-rate-versions');
                   
                    for (let i = 0; i < rowJsonObject.length; i++) {

                        createCheckBoxDates('differentiation-rate-versions', 'differentiation-rate-dates', formatedDatesArray[i], formatedDatesArray[i]);
                        
                    }

                });

                selectAll('differentiation-rate-versions-select-deselect-all-btn', checkboxesDifferentiationRateDateEl);

                differentiationRateVersionsRadioEl.addEventListener("change", function() {

                    deleteDivInside('differentiation-rate-versions');

                    for (let i = 0; i < rowJsonObject.length; i++) {

                        createCheckBox('differentiation-rate-versions', 'differentiation-rate-versions', rowJsonObject[i].name, rowJsonObject[i].name);                        
                    
                    }

                });

                selectAll('differentiation-rate-versions-select-deselect-all-btn', checkboxesDifferentiationRateVersionEl);


                // -----------------------------------------------------------------------------------

                // Creating checkboxes for versions
                for (let i = 0; i < rowJsonObject.length; i++) {

                    // createCheckBox('summary-statistics-versions', 'summary-statistics-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                    // createCheckBox('differentiation-versions', 'differentiation-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                    // createCheckBox('differentiation-rate-versions', 'differentiation-rate-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                    createCheckBox('sum-up-to-100-versions', 'sum-up-to-100-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                
                }

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


                

                // Creating checkboxes for properties
                for (let i = 0; i < chartNamesArray.length; i++) {

                    createRadio('summary-statistics-charts', 'summary-statistics-charts', chartNamesArray[i], chartNamesArray[i]);
                    createRadio('differentiation-charts', 'differentiation-charts', chartNamesArray[i], chartNamesArray[i]);
                    createRadio('differentiation-rate-charts', 'differentiation-rate-charts', chartNamesArray[i], chartNamesArray[i]);
                    // createCheckBox('sum-up-to-100-charts', 'sum-up-to-100-charts', chartNamesArray[i], chartNamesArray[i]);

                }



                // -----------------------------------------------------------------------------------


                // if (!(checkedCheckboxesSummaryStatisticsVersion.length === 0) && !(checkedCheckboxesSummaryStatisticsProperties.length === 0)) {

                summaryStatisticsOkBtnsArray.forEach(btn => {

                    btn.addEventListener('click', function() {

                        nameSummaryStatistics.length = 0;
                        propertySummaryStatistics.length = 0;
                        // dateSummaryStatisticsOriginal.length = 0;
                        dateSummaryStatistics.length = 0;
                        xAxisSummaryStatistics.length = 0;
                        summaryStatistics.length = 0;

                        summaryStatisticsChartType = 'bar';
                        
                        deleteCanvas('myChart_summaryStatistics');
                        createCanvas('summary-statistics-chart-display', 'myChart_summaryStatistics');


                        // Array filled with selected versions
                        // Gets the values of each row and push it into arrays
                        for (let i = 0; i < rowJsonObject.length; i++) {

                            if (summaryStatisticsVersionsRadioEl.checked) {
                                
                                if (checkboxesSummaryStatisticsVersionEl[i].checked && checkboxesSummaryStatisticsVersionEl[i].value === rowJsonObject[i].name) {
                                    nameSummaryStatistics.push(rowJsonObject[i].name);
                                        // console.log(nameSummaryStatistics); 
                                }

                            }
                            else if (summaryStatisticsDatesRadioEl.checked) {

                                if (checkboxesSummaryStatisticsDateEl[i].checked && checkboxesSummaryStatisticsDateEl[i].value === formatedDatesArray[i]) {
                                    
                                    dateSummaryStatistics.push(formatedDatesArray[i]);
                                
                                }

                            }

                        };

                        console.log(dateSummaryStatistics);
                        console.log(nameSummaryStatistics);


                        if (summaryStatisticsVersionsRadioEl.checked) {
                                
                            xAxisSummaryStatistics = [...nameSummaryStatistics];

                        }
                        else if (summaryStatisticsDatesRadioEl.checked) {

                            xAxisSummaryStatistics = [...dateSummaryStatistics];

                        }
                        
                        console.log(xAxisSummaryStatistics);
                        console.log(nameSummaryStatistics);
                        console.log(dateSummaryStatistics);
                        

                        // Array filled with selected variables
                        for (let i = 0; i < checkedCheckboxesSummaryStatisticsProperties.length; i++) {

                            propertySummaryStatistics.push(new Array());

                            for (let j = 0; j < rowJsonObject.length; j++) {
                                
                                if (nameSummaryStatistics.includes(rowJsonObject[j].name) || dateSummaryStatistics.includes(formatedDatesArray[j])) {

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


                        checkedCheckboxesSummaryStatisticsCharts.length = 0;

                        for (let i = 0; i < checkboxesSummaryStatisticsChartsEl.length; i++) {
    
                            if (checkboxesSummaryStatisticsChartsEl[i].checked) {
                                checkedCheckboxesSummaryStatisticsCharts.push(checkboxesSummaryStatisticsChartsEl[i].value);
                            }
                            
                        }
    
                        // DEBUGGING
                        // console.log(checkboxesSummaryStatisticsChartsEl);
                        // console.log(checkboxesSummaryStatisticsChartsEl.length);
                        console.log(checkedCheckboxesSummaryStatisticsCharts);
                        // console.log(typeof checkedCheckboxesSummaryStatisticsCharts);
                        

                        if ((checkedCheckboxesSummaryStatisticsCharts[0] === 'Floating Bar') || (checkedCheckboxesSummaryStatisticsCharts[0] === 'Stacked Bar') || (checkedCheckboxesSummaryStatisticsCharts[0] === 'Vertical Bar')) {
                            summaryStatisticsChartType = 'bar';

                            dataSummaryStatistics = {
                                labels: xAxisSummaryStatistics,
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data: propertySummaryStatistics[i],
                                        backgroundColor: ['#ea5545', '#ea5545', '#ea5545', '#ea5545', '#ea5545'],
                                        borderColor: '#e61802',
                                        borderWidth: 2
                                    })),
                                };



                                optionsSummaryStatistics = {
                                    indexAxis: 'y',
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                      legend: {
                                        position: 'right',
                                      }
                                    }
                                };





                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Horizontal Bar') {
                            summaryStatisticsChartType = 'horizontalBar';

                            dataSummaryStatistics = {
                                labels: xAxisSummaryStatistics,
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data: propertySummaryStatistics[i],
                                        backgroundColor: ['#ea5545', '#ea5545', '#ea5545', '#ea5545', '#ea5545'],
                                        borderColor: '#e61802',
                                        borderWidth: 2
                                    })),
                                };



                                optionsSummaryStatistics = {
                                    indexAxis: 'y',
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                      legend: {
                                        position: 'right',
                                      }
                                    }
                                };

                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Line') {
                            summaryStatisticsChartType = 'line';

                            dataSummaryStatistics = {
                                labels: xAxisSummaryStatistics,
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data: propertySummaryStatistics[i],
                                        backgroundColor: '#ea5545',
                                        borderColor: '#e61802',
                                        borderWidth: 2
                                    })),
                                };



                                optionsSummaryStatistics = {
                                    indexAxis: 'y',
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                      legend: {
                                        position: 'right',
                                      }
                                    }
                                };
                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Bubble') {
                            
                            summaryStatisticsChartType = 'bubble';

                            summaryStatisticsModal.style.display = "block";
                            summaryStatisticsOverlay.style.display = "block";

                            deleteDivInside('summary-statistics-z-axis-modal');

                            for (let i = 0; i < checkedCheckboxesSummaryStatisticsProperties.length; i++) {
                                
                                createRadio('summary-statistics-z-axis-modal', 'summary-statistics-z-axis-modal', checkedCheckboxesSummaryStatisticsProperties[i], checkedCheckboxesSummaryStatisticsProperties[i]);
        
                            }
                      
                            createButton('summary-statistics-z-axis-modal', 'ok', 'summary-statistics-modal-ok-btn', 'Ok');


                            summaryStatisticsModalOkBtn = document.getElementById('summary-statistics-modal-ok-btn');


                            summaryStatisticsModalOkBtn.addEventListener("click", function() {
            

                                summaryStatisticsModal.style.display = "none";
                                summaryStatisticsOverlay.style.display = "none";
                            
                                checkedCheckboxesSummaryStatisticsModal.length = 0;

                                    for (let i = 0; i < checkboxesSummaryStatisticsModalEl.length; i++) {

                                        if (checkboxesSummaryStatisticsModalEl[i].checked) {
                                            checkedCheckboxesSummaryStatisticsModal.push(checkboxesSummaryStatisticsModalEl[i].value);
                                        }
                                        
                                    }

                                    // DEBUGGING
                                    // console.log(checkboxesSummaryStatisticsModalEl);
                                    // console.log(checkboxesSummaryStatisticsModalEl.length);
                                    console.log(checkedCheckboxesSummaryStatisticsModal);
                                    // console.log(typeof checkedCheckboxesSummaryStatisticsModal);

                                // });

                            });


                            dataSummaryStatistics = {
                                labels: xAxisSummaryStatistics,
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data: [{
                                            x: xAxisSummaryStatistics,
                                            y: propertySummaryStatistics[i],
                                            r: checkedCheckboxesSummaryStatisticsModal
                                        }],
                                        backgroundColor: '#ea5545',
                                        borderColor: '#e61802',
                                        borderWidth: 2
                                    })),
                                };



                                optionsSummaryStatistics = {
                                    indexAxis: 'y',
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    scales: {
                                        xAxes: [{
                                          ticks: {
                                            callback: function(value, index, values) {
                                                // checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                                    return 'value is ' + xAxisSummaryStatistics[i];
                                                // }))
                                              
                                            }
                                          }
                                        }]
                                      },
                                    plugins: {
                                      legend: {
                                        position: 'right',
                                      }
                                    }
                                };

                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Combo Bar / Line') {
                            summaryStatisticsChartType = 'bar';
                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Doughnut') {
                            summaryStatisticsChartType = 'doughnut';
                        }
                        else if ((checkedCheckboxesSummaryStatisticsCharts[0] === 'Pie') || (checkedCheckboxesSummaryStatisticsCharts[0] === 'Multi Series Pie')) {
                            summaryStatisticsChartType = 'pie';
                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Polar Area') {
                            summaryStatisticsChartType = 'polarArea';
                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Radar') {
                            summaryStatisticsChartType = 'radar';
                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Scatter') {
                            summaryStatisticsChartType = 'scatter';
                        }

                        console.log(checkedCheckboxesSummaryStatisticsCharts[0]);
                        console.log(summaryStatisticsChartType);



                        // Displays the chart for the variables
                        const ctx1= document.getElementById('myChart_summaryStatistics').getContext('2d');

                        // if (!(checkedCheckboxesSumUpTo100Version.length === 0) && !(checkedCheckboxesSumUpTo100Properties.length === 0)) {

                            const myChart_summaryStatistics = new Chart(ctx1, {
                                type: summaryStatisticsChartType,
                                data: dataSummaryStatistics,
                                options: optionsSummaryStatistics
                                // options: {
                                //     plugins: {
                                //         tooltip: {
                                //             enabled: false // <-- this option disables tooltips
                                //         }
                                //     },
                                //     // maintainAspectRatio: false,
                                //     responsive: true,
                                //     maintainAspectRatio: false,
                                        
                                // }
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
                            xAxisDifferentiation.length = 0;
                            differentiation.length = 0;

                            differentiationChartType = 'bar';
                            
                            deleteCanvas('myChart_differentiation');
                            createCanvas('differentiation-chart-display', 'myChart_differentiation');


                            // Array filled with selected versions
                            // Gets the values of each row and push it into arrays
                            for (let i = 0; i < rowJsonObject.length; i++) {

                                if (differentiationVersionsRadioEl.checked) {
                                    
                                    if (checkboxesDifferentiationVersionEl[i].checked && checkboxesDifferentiationVersionEl[i].value === rowJsonObject[i].name) {
                                        nameDifferentiation.push(rowJsonObject[i].name);
                                            // console.log(nameDifferentiation); 
                                    }

                                }
                                else if (differentiationDatesRadioEl.checked) {

                                    if (checkboxesDifferentiationDateEl[i].checked && checkboxesDifferentiationDateEl[i].value === formatedDatesArray[i]) {
                                        // console.log(checkboxesDifferentiationDateEl[i]);
                                        // console.log(checkboxesDifferentiationDateEl[i].value);
                                        // console.log(formatedDatesArrayDifferentiation[i]);
                                        dateDifferentiation.push(formatedDatesArray[i]);
                                    }

                                }

                            };
                    
                            console.log(dateDifferentiation);
                            console.log(nameDifferentiation);


                            if (differentiationVersionsRadioEl.checked) {
                                
                                xAxisDifferentiation = [...nameDifferentiation];
    
                            }
                            else if (differentiationDatesRadioEl.checked) {
    
                                xAxisDifferentiation = [...dateDifferentiation];
    
                            }
                            
                            console.log(xAxisDifferentiation);
                            console.log(nameDifferentiation);
                            console.log(dateDifferentiation);
                            
    



                            // Array filled with selected variables
                            for (let i = 0; i < checkedCheckboxesDifferentiationProperties.length; i++) {

                                propertyDifferentiation.push(new Array());

                                for (let j = 0; j < rowJsonObject.length; j++) {
                                    
                                    if (nameDifferentiation.includes(rowJsonObject[j].name) || dateDifferentiation.includes(formatedDatesArray[j])) {

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
                            // for (let i = 0; i < rowJsonObject.length; i++) {
                            //     // console.log(rowJsonObject[i].rel_date);
                            //     const num_date = new Date(Math.round((rowJsonObject[i].rel_date - 25569) * 86400 * 1000));
                                
                            //     const year = num_date.toLocaleString("default", { year: "numeric" });
                            //     const month = num_date.toLocaleString("default", { month: "2-digit" });
                            //     const day = num_date.toLocaleString("default", { day: "2-digit" });
            
                            //     const dateFormat = month + "/" + day + "/" + year;
            
                            //     dateDifferentiation.push(dateFormat);
                            // };

                            // console.log(dateDifferentiation);


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


                            checkedCheckboxesDifferentiationCharts.length = 0;

                            for (let i = 0; i < checkboxesDifferentiationChartsEl.length; i++) {
        
                                if (checkboxesDifferentiationChartsEl[i].checked) {
                                    checkedCheckboxesDifferentiationCharts.push(checkboxesDifferentiationChartsEl[i].value);
                                }
                                
                            }
        
                            // DEBUGGING
                            // console.log(checkboxesDifferentiationChartsEl);
                            // console.log(checkboxesDifferentiationChartsEl.length);
                            console.log(checkedCheckboxesDifferentiationCharts);
                            // console.log(typeof checkedCheckboxesDifferentiationCharts);





                            if ((checkedCheckboxesDifferentiationCharts[0] === 'Floating Bar') || (checkedCheckboxesDifferentiationCharts[0] === 'Horizontal Bar') || (checkedCheckboxesDifferentiationCharts[0] === 'Stacked Bar') || (checkedCheckboxesDifferentiationCharts[0] === 'Vertical Bar')) {
                                differentiationChartType = 'bar';
                            }
                            else if (checkedCheckboxesDifferentiationCharts[0] === 'Line') {
                                differentiationChartType = 'line';
                            }
                            else if (checkedCheckboxesDifferentiationCharts[0] === 'Bubble') {

                                differentiationChartType = 'bubble';

                                differentiationModal.style.display = "block";
                                differentiationOverlay.style.display = "block";
    
                                deleteDivInside('differentiation-z-axis-modal');
    
                                for (let i = 0; i < checkedCheckboxesDifferentiationProperties.length; i++) {
                                    
                                    createRadio('differentiation-z-axis-modal', 'differentiation-z-axis-modal', checkedCheckboxesDifferentiationProperties[i], checkedCheckboxesDifferentiationProperties[i]);
            
                                }
                          
                                createButton('differentiation-z-axis-modal', 'ok', 'differentiation-modal-ok-btn', 'Ok');
    
    
                                differentiationModalOkBtn = document.getElementById('differentiation-modal-ok-btn');
    
    
                                differentiationModalOkBtn.addEventListener("click", function() {
                
    
                                    differentiationModal.style.display = "none";
                                    differentiationOverlay.style.display = "none";
                                
                                    checkedCheckboxesDifferentiationModal.length = 0;
    
                                        for (let i = 0; i < checkboxesDifferentiationModalEl.length; i++) {
    
                                            if (checkboxesDifferentiationModalEl[i].checked) {
                                                checkedCheckboxesDifferentiationModal.push(checkboxesDifferentiationModalEl[i].value);
                                            }
                                            
                                        }
    
                                        // DEBUGGING
                                        // console.log(checkboxesDifferentiationModalEl);
                                        // console.log(checkboxesDifferentiationModalEl.length);
                                        console.log(checkedCheckboxesDifferentiationModal);
                                        // console.log(typeof checkedCheckboxesDifferentiationModal);
    
                                    // });
    
                                });

                            }
                            else if (checkedCheckboxesDifferentiationCharts[0] === 'Combo Bar / Line') {
                                differentiationChartType = 'bar';
                            }
                            else if (checkedCheckboxesDifferentiationCharts[0] === 'Doughnut') {
                                differentiationChartType = 'doughnut';
                            }
                            else if ((checkedCheckboxesDifferentiationCharts[0] === 'Pie') || (checkedCheckboxesDifferentiationCharts[0] === 'Multi Series Pie')) {
                                differentiationChartType = 'pie';
                            }
                            else if (checkedCheckboxesDifferentiationCharts[0] === 'Polar Area') {
                                differentiationChartType = 'polarArea';
                            }
                            else if (checkedCheckboxesDifferentiationCharts[0] === 'Radar') {
                                differentiationChartType = 'radar';
                            }
                            else if (checkedCheckboxesDifferentiationCharts[0] === 'Scatter') {
                                differentiationChartType = 'scatter';
                            }
    
                            console.log(checkedCheckboxesDifferentiationCharts[0]);
                            console.log(differentiationChartType);





                            // Displays the chart for the variables
                            const ctx2 = document.getElementById('myChart_differentiation').getContext('2d');

                            // if (!(checkedCheckboxesSumUpTo100Version.length === 0) && !(checkedCheckboxesSumUpTo100Properties.length === 0)) {

                                const myChart_differentiation = new Chart(ctx2, {
                                    type: differentiationChartType,
                                    data: {
                                    labels: xAxisDifferentiation,
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
                        xAxisDifferentiationRate.length = 0;
                        differentiationRate.length = 0;

                        differentiationRateChartType = 'bar';
                            
                        deleteCanvas('myChart_differentiationRate');
                        createCanvas('differentiation-rate-chart-display', 'myChart_differentiationRate');


                        // Array filled with selected versions
                        // Gets the values of each row and push it into arrays
                        for (let i = 0; i < rowJsonObject.length; i++) {

                            if (differentiationRateVersionsRadioEl.checked) {
                                    
                                if (checkboxesDifferentiationRateVersionEl[i].checked && checkboxesDifferentiationRateVersionEl[i].value === rowJsonObject[i].name) {
                                    nameDifferentiationRate.push(rowJsonObject[i].name);
                                        // console.log(nameDifferentiationRate); 
                                }

                            }
                            else if (differentiationRateDatesRadioEl.checked) {

                                if (checkboxesDifferentiationRateDateEl[i].checked && checkboxesDifferentiationRateDateEl[i].value === formatedDatesArray[i]) {
                                    // console.log(checkboxesDifferentiationRateDateEl[i]);
                                    // console.log(checkboxesDifferentiationRateDateEl[i].value);
                                    // console.log(formatedDatesArrayDifferentiationRate[i]);
                                    dateDifferentiationRate.push(formatedDatesArray[i]);
                                }

                            }

                        };
                    
                        console.log(dateDifferentiationRate);
                        console.log(nameDifferentiationRate);


                        if (differentiationRateVersionsRadioEl.checked) {
                                
                            xAxisDifferentiationRate = [...nameDifferentiationRate];

                        }
                        else if (differentiationRateDatesRadioEl.checked) {

                            xAxisDifferentiationRate = [...dateDifferentiationRate];

                        }
                        
                        console.log(xAxisDifferentiationRate);
                        console.log(nameDifferentiationRate);
                        console.log(dateDifferentiationRate);


                        // Array filled with selected variables
                        for (let i = 0; i < checkedCheckboxesDifferentiationRateProperties.length; i++) {

                            propertyDifferentiationRate.push(new Array());

                            for (let j = 0; j < rowJsonObject.length; j++) {
                                
                                if (nameDifferentiationRate.includes(rowJsonObject[j].name) || dateDifferentiationRate.includes(formatedDatesArray[j])) {

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


                        checkedCheckboxesDifferentiationRateCharts.length = 0;

                            for (let i = 0; i < checkboxesDifferentiationRateChartsEl.length; i++) {
        
                                if (checkboxesDifferentiationRateChartsEl[i].checked) {
                                    checkedCheckboxesDifferentiationRateCharts.push(checkboxesDifferentiationRateChartsEl[i].value);
                                }
                                
                            }
        
                            // DEBUGGING
                            // console.log(checkboxesDifferentiationRateChartsEl);
                            // console.log(checkboxesDifferentiationRateChartsEl.length);
                            console.log(checkedCheckboxesDifferentiationRateCharts);
                            // console.log(typeof checkedCheckboxesDifferentiationRateCharts);





                            if ((checkedCheckboxesDifferentiationRateCharts[0] === 'Floating Bar') || (checkedCheckboxesDifferentiationRateCharts[0] === 'Horizontal Bar') || (checkedCheckboxesDifferentiationRateCharts[0] === 'Stacked Bar') || (checkedCheckboxesDifferentiationRateCharts[0] === 'Vertical Bar')) {
                                differentiationRateChartType = 'bar';
                            }
                            else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Line') {
                                differentiationRateChartType = 'line';
                            }
                            else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Bubble') {

                                differentiationRateChartType = 'bubble';

                                differentiationRateModal.style.display = "block";
                                differentiationRateOverlay.style.display = "block";
    
                                deleteDivInside('differentiation-rate-z-axis-modal');
    
                                for (let i = 0; i < checkedCheckboxesDifferentiationRateProperties.length; i++) {
                                    
                                    createRadio('differentiation-rate-z-axis-modal', 'differentiation-rate-z-axis-modal', checkedCheckboxesDifferentiationRateProperties[i], checkedCheckboxesDifferentiationRateProperties[i]);
            
                                }
                          
                                createButton('differentiation-rate-z-axis-modal', 'ok', 'differentiation-rate-modal-ok-btn', 'Ok');
    
    
                                differentiationRateModalOkBtn = document.getElementById('differentiation-rate-modal-ok-btn');
    
    
                                differentiationRateModalOkBtn.addEventListener("click", function() {
                
    
                                    differentiationRateModal.style.display = "none";
                                    differentiationRateOverlay.style.display = "none";
                                
                                    checkedCheckboxesDifferentiationRateModal.length = 0;
    
                                        for (let i = 0; i < checkboxesDifferentiationRateModalEl.length; i++) {
    
                                            if (checkboxesDifferentiationRateModalEl[i].checked) {
                                                checkedCheckboxesDifferentiationRateModal.push(checkboxesDifferentiationRateModalEl[i].value);
                                            }
                                            
                                        }
    
                                        // DEBUGGING
                                        // console.log(checkboxesDifferentiationRateModalEl);
                                        // console.log(checkboxesDifferentiationRateModalEl.length);
                                        console.log(checkedCheckboxesDifferentiationRateModal);
                                        // console.log(typeof checkedCheckboxesDifferentiationRateModal);
    
                                    // });
    
                                });

                            }
                            else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Combo Bar / Line') {
                                differentiationRateChartType = 'bar';
                            }
                            else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Doughnut') {
                                differentiationRateChartType = 'doughnut';
                            }
                            else if ((checkedCheckboxesDifferentiationRateCharts[0] === 'Pie') || (checkedCheckboxesDifferentiationRateCharts[0] === 'Multi Series Pie')) {
                                differentiationRateChartType = 'pie';
                            }
                            else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Polar Area') {
                                differentiationRateChartType = 'polarArea';
                            }
                            else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Radar') {
                                differentiationRateChartType = 'radar';
                            }
                            else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Scatter') {
                                differentiationRateChartType = 'scatter';
                            }
    
                            console.log(checkedCheckboxesDifferentiationRateCharts[0]);
                            console.log(differentiationRateChartType);


                        // Displays the chart for the variables
                        const ctx3= document.getElementById('myChart_differentiationRate').getContext('2d');
                        // const ctx4= document.getElementById('myChart_sum_100').getContext('2d');

                        // if (!(checkedCheckboxesSumUpTo100Version.length === 0) && !(checkedCheckboxesSumUpTo100Properties.length === 0)) {

                            const myChart_differentiationRate = new Chart(ctx3, {
                                type: differentiationRateChartType,
                                data: {
                                labels: xAxisDifferentiationRate,
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















