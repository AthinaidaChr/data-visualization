'use strict';

// Variables

// -------------------------------------------

// Sidebar Menu Buttons Elements
const dashboardBtn = document.getElementById('dashboard-btn');
const summaryStatisticsBtn = document.getElementById('summary-statistics-btn');
const differentiationBtn = document.getElementById('differentiation-btn');
const differentiationRateBtn = document.getElementById('differentiation-rate-btn');
const sumUpTo100Btn = document.getElementById('sum-up-to-100-btn');


// -----------------------------------------------------------------------------------


// Element Variables for Browse and Download Excel Files
const fileUpload = document.getElementById('file-upload');
const fileChosenEl = document.getElementById('file-chosen');
const jsonData = document.getElementById('json-data');
const jsonDownload = document.getElementById('json-download');

// Variables for Reading Excel File & Converting It to JSON
let data;
let workbook;
let selectedFile;       // User's Excel File
let rowJsonObject;      // Array of Objects (each object is one row of the excel file)


// -----------------------------------------------------------------------------------


// Element Variable for Reseting System
const resetBtn = document.getElementById("reset");


// -----------------------------------------------------------------------------------


// Array filled with Property Names of rowJsonObject Array of Objects
let objectProperties = [];


// -----------------------------------------------------------------------------------


// Array filled with the Formated Dates from the rowJsonObject Array of Objects.
let formatedDatesArray = [];
// let formatedDatesArraySummaryStatistics = [];
// let formatedDatesArrayDifferentiation = [];
// let formatedDatesArrayDifferentiationRate = [];


// -----------------------------------------------------------------------------------


// Element Variables for Radio Buttons
const summaryStatisticsVersionsRadioEl = document.getElementById('summary-statistics-versions-radio');
const summaryStatisticsDatesRadioEl = document.getElementById('summary-statistics-dates-radio');

const differentiationVersionsRadioEl = document.getElementById('differentiation-versions-radio');
const differentiationDatesRadioEl = document.getElementById('differentiation-dates-radio');

const differentiationRateVersionsRadioEl = document.getElementById('differentiation-rate-versions-radio');
const differentiationRateDatesRadioEl = document.getElementById('differentiation-rate-dates-radio');

const sumUpTo100VersionsRadioEl = document.getElementById('sum-up-to-100-versions-radio');
const sumUpTo100DatesRadioEl = document.getElementById('sum-up-to-100-dates-radio');


// -----------------------------------------------------------------------------------


// Ok Buttons for Version Cards
const summaryStatisticsVersionsOkBtn = document.getElementById('summary-statistics-versions-ok-btn');
const differentiationVersionsOkBtn = document.getElementById('differentiation-versions-ok-btn');
const differentiationRateVersionsOkBtn = document.getElementById('differentiation-rate-versions-ok-btn');
const sumUpTo100VersionsOkBtn = document.getElementById('sum-up-to-100-versions-ok-btn');

// -------------------------------------------

// Version Variables for creating Dynamicaly Checkboxes
const checkboxesSummaryStatisticsVersionEl = document.getElementsByName('summary-statistics-versions');
// let checkedCheckboxesSummaryStatisticsVersion = [];      // array filled with checked versions

const checkboxesDifferentiationVersionEl = document.getElementsByName('differentiation-versions');
// let checkedCheckboxesDifferentiationVersion = [];      // array filled with checked versions

const checkboxesDifferentiationRateVersionEl = document.getElementsByName('differentiation-rate-versions');
// let checkedCheckboxesDifferentiationRateVersion = [];      // array filled with checked versions

const checkboxesSumUpTo100VersionEl = document.getElementsByName('sum-up-to-100-versions');
// let checkedCheckboxesSumUpTo100Version = [];      // array filled with checked versions

// -------------------------------------------

// Date Variables for creating Dynamicaly Checkboxes
const checkboxesSummaryStatisticsDateEl = document.getElementsByName('summary-statistics-dates');
// let checkedCheckboxesSummaryStatisticsDate = [];      // array filled with checked dates

const checkboxesDifferentiationDateEl = document.getElementsByName('differentiation-dates');
// let checkedCheckboxesDifferentiationDate = [];      // array filled with checked dates

const checkboxesDifferentiationRateDateEl = document.getElementsByName('differentiation-rate-dates');
// let checkedCheckboxesDifferentiationRateDate = [];      // array filled with checked dates

const checkboxesSumUpTo100DateEl = document.getElementsByName('sum-up-to-100-dates');
// let checkedCheckboxesSumUpTo100Date = [];      // array filled with checked dates


// -----------------------------------------------------------------------------------


// Ok Buttons for Property Cards
const summaryStatisticsPropertiesOkBtn = document.getElementById('summary-statistics-properties-ok-btn');
const differentiationPropertiesOkBtn = document.getElementById('differentiation-properties-ok-btn');
const differentiationRatePropertiesOkBtn = document.getElementById('differentiation-rate-properties-ok-btn');
const sumUpTo100PropertiesOkBtn = document.getElementById('sum-up-to-100-properties-ok-btn');

// -------------------------------------------

// Property Variables for creating Dynamicaly Checkboxes
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

// Chart Type Variables for creating Dynamicaly Checkboxes
const checkboxesSummaryStatisticsChartsEl = document.getElementsByName('summary-statistics-charts');
let checkedCheckboxesSummaryStatisticsCharts = [];      // array filled with checked versions

const checkboxesDifferentiationChartsEl = document.getElementsByName('differentiation-charts');
let checkedCheckboxesDifferentiationCharts = [];      // array filled with checked versions

const checkboxesDifferentiationRateChartsEl = document.getElementsByName('differentiation-rate-charts');
let checkedCheckboxesDifferentiationRateCharts = [];      // array filled with checked versions

const checkboxesSumUpTo100ChartsEl = document.getElementsByName('sum-up-to-100-charts');
let checkedCheckboxesSumUpTo100Charts = [];      // array filled with checked versions


// -----------------------------------------------------------------------------------


// Arrays that contain Ok Buttons for each selection.
const summaryStatisticsOkBtnsArray = [summaryStatisticsVersionsOkBtn, summaryStatisticsPropertiesOkBtn, summaryStatisticsChartsOkBtn];
const differentiationOkBtnsArray = [differentiationVersionsOkBtn, differentiationPropertiesOkBtn, differentiationChartsOkBtn];
const differentiationRateOkBtnsArray = [differentiationRateVersionsOkBtn, differentiationRatePropertiesOkBtn, differentiationRateChartsOkBtn];
const sumUpTo100OkBtnsArray = [sumUpTo100VersionsOkBtn, sumUpTo100PropertiesOkBtn, sumUpTo100ChartsOkBtn];


// -----------------------------------------------------------------------------------


// New Arrays to fill with variables for the chart display.
let nameSummaryStatistics = [], propertySummaryStatistics = [], dateSummaryStatistics = [], xAxisSummaryStatistics = [];
let nameDifferentiation = [], propertyDifferentiation = [], dateDifferentiation = [], xAxisDifferentiation = [], mergedXAxisDifferentiation = [];
let nameDifferentiationRate = [], propertyDifferentiationRate = [], dateDifferentiationRate = [], xAxisDifferentiationRate = [], mergedXAxisDifferentiationRate = [];
let nameSumUpTo100 = [], propertySumUpTo100 = [], dateSumUpTo100 = [], xAxisSumUpTo100 = [];


// -----------------------------------------------------------------------------------


// Variables that set the type of each chart.
let summaryStatisticsChartType;
let differentiationChartType;
let differentiationRateChartType;
let sumUpTo100ChartType;

// -------------------------------------------

let chartNamesSummaryStatisticsArray = ['Horizontal Bar', 'Stacked Bar', 'Vertical Bar', 'Line', 'Bubble', 'Doughnut', 'Pie', 'Polar Area', 'Radar', 'Scatter'];
let chartNamesDifferentiationArray = ['Horizontal Bar', 'Stacked Bar', 'Vertical Bar', 'Line', 'Bubble', 'Doughnut', 'Pie', 'Polar Area', 'Radar', 'Scatter'];
let chartNamesSumUpTo100Array = ['Stacked Bar'];


// -----------------------------------------------------------------------------------


// Arrays filled with final data for each calculation.
let summaryStatistics = [];
let differentiation = [];
let differentiationRate = [];
let sumUpTo100 = [];

// -----------------------------------------------------------------------------------


// Variables that set the data and options of each chart.
let dataSummaryStatistics, optionsSummaryStatistics;
let dataDifferentiation, optionsDifferentiation;
let dataDifferentiationRate, optionsDifferentiationRate;
let dataSumUpTo100, optionsSumUpTo100;

// -------------------------------------------

// Arrays filled with background and border color of each chart.
const backgroundColorSummaryStatistics = [], borderColorSummaryStatistics = [];
const backgroundColorDifferentiation = [], borderColorDifferentiation = [];
const backgroundColorDifferentiationRate = [], borderColorDifferentiationRate = [];
const backgroundColorSumUpTo100 = [], borderColorSumUpTo100 = [];


// -----------------------------------------------------------------------------------


// let modalSummaryStatistics = [], modalDifferentiation = [], modalDifferentiationRate = [], modalSumUpTo100 = [];

// let oneArrayPropertySummaryStatistics = [], oneArrayPropertyDifferentiation = [], oneArrayPropertySumUpTo100 = [];


// -----------------------------------------------------------------------------------


// Functions

// -------------------------------------------

// Function to flip a card using a button.
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


// Function for creating checkbox element dynamically with label and span.
const createCheckBox = function(elementID, name, value, innerText) {

    // Getting the element which will contain the checkboxes.
    const checkboxEl = document.getElementById(elementID);

    // Creating label element.
    const label = document.createElement('label');

    // Creating checkbox element.
    const checkbox = document.createElement('input');

    // Assigning the attributes to the created checkboxes.
    checkbox.type = "checkbox";
    checkbox.name = name;
    checkbox.value = value;

    // Creating span element.
    const span = document.createElement('span');

    span.innerHTML = innerText;

    // Separating the classes and the ids for the main and the secondary versions.
    if (value.includes('0,0')) {
        label.className = 'dynamicLabelMain';
        label.id = 'dynamic-label-main';
        
        checkbox.className = 'dynamicCheckboxMain';
        checkbox.id = 'dynamic-checkbox-main';

        span.className = 'dynamicSpanMain';
        span.id = 'dynamic-span-main';
    }
    else {
        label.className = 'dynamicLabel';
        label.id = 'dynamic-label';

        checkbox.className = 'dynamicCheckbox';
        checkbox.id = 'dynamic-checkbox';

        span.className = 'dynamicSpan';
        span.id = 'dynamic-span';
    }
    
    // Appending the checkbox and span to label and then the label to div element checkboxEl.
    label.appendChild(checkbox);
    label.appendChild(span);
    checkboxEl.appendChild(label);
    
};


// -------------------------------------------


// Function (for Dates) for creating checkbox element dynamically with label and span.
const createCheckBoxDates = function(elementID, name, value, innerText) {

    // Getting the element which will contain the checkboxes.
    const checkboxEl = document.getElementById(elementID);

    // Creating label element.
    const label = document.createElement('label');

    // Creating checkbox element.
    const checkbox = document.createElement('input');

    // Creating span element.
    const span = document.createElement('span');

    // Assigning class and id to the labels.
    label.className = 'dynamicLabel';
    label.id = 'dynamic-label'

    // Assigning the attributes to the created checkboxes.
    checkbox.type = "checkbox";
    checkbox.name = name;
    checkbox.value = value;

    // Assigning class and id to the created checkboxes.
    checkbox.className = 'dynamicCheckbox';
    checkbox.id = 'dynamic-checkbox';

    span.innerHTML = innerText;

    // Assigning class and id to the spans.
    span.className = 'dynamicSpan';
    span.id = 'dynamic-span';
    
    // Appending the checkbox and span to label and then the label to div element checkboxEl.
    label.appendChild(checkbox);
    label.appendChild(span);
    checkboxEl.appendChild(label);
    
};


// -------------------------------------------


// Function for creating radio button element dynamically with label and span.
const createRadio = function(elementID, name, value, innerText) {
    
    // Getting the element which will contain the checkboxes.
    const checkboxEl = document.getElementById(elementID);

    // Creating label element.
    const label = document.createElement('label');

    // Assigning class and id to the labels.
    label.className = 'dynamicLabel';
    label.id = 'dynamic-label';

    // Creating checkbox element.
    const checkbox = document.createElement('input');

    // Assigning the attributes to the created checkboxes.
    checkbox.type = "radio";
    checkbox.name = name;
    checkbox.value = value;
    
    // Assigning class and id to the created checkboxes.
    checkbox.className = 'dynamicCheckbox';
    checkbox.id = 'dynamic-checkbox';

    // Creating span element.
    const span = document.createElement('span');

    span.innerHTML = innerText;

    // Assigning class and id to the spans.
    span.className = 'dynamicSpan';
    span.id = 'dynamic-span';

    // Appending the checkbox and span to label and then the label to div element checkboxEl.
    label.appendChild(checkbox);
    label.appendChild(span);
    checkboxEl.appendChild(label);
    
};


// -------------------------------------------


// Function to delete a div element.
const deleteDivInside = function(elementID) {

    const divSum = document.getElementById(elementID);

    while (divSum.lastElementChild) {
        divSum.removeChild(divSum.lastElementChild);
    }

};


// -------------------------------------------


// Function to delete a checkbox element.
const deleteCheckBox = function(elementID) {

    const checkboxs = document.querySelectorAll(elementID);

    for (let i = 0; i < checkboxs.length; i++) {
        checkboxs[i].remove();
    }

};


// -------------------------------------------


// Function to select and deselect all checkboxes at once.
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


// Function to delete a canvas element.
const deleteCanvas = function(elementID) {
    const canvas = document.getElementById(elementID);

    canvas.remove();
};


// -------------------------------------------


// Function to create a canvas element.
const createCanvas = function(elementID, canvasID) {

    const divCanvasEl = document.getElementById(elementID);

    const canvas = document.createElement('canvas');

    canvas.id = canvasID;

    divCanvasEl.appendChild(canvas);

};


// -------------------------------------------


// Create a button element for versions dynamically.
const createButton = function(elementID, buttonClass, buttonID, innerText) {
    const button = document.createElement("button");
    const element = document.getElementById(elementID);

    button.className = buttonClass;
    button.id = buttonID;
    button.innerHTML = innerText;

    element.appendChild(button);

};


// -------------------------------------------


const backgroundColorFunction = function(xAxisArray, backgroundColorArray, borderColor) {
    
    let r, g, b;

    for (let i = 0; i < xAxisArray.length; i++) {

        // backgroundColorArray.push(new Array());
        // borderColorSummaryStatistics.push(new Array());

        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);

        backgroundColorArray.push('rgba('+r+', '+g+', '+b+', 0.7)');
        borderColor.push('rgba('+r+', '+g+', '+b+', 1)');

        console.log(backgroundColorArray);
                                
    }

    console.log(backgroundColorArray);

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


// -----------------------------------------------------------------------------------


// Code

// -------------------------------------------

// -------------- Flipping cards in Dashboard Section using a button. --------------

flipCard('arrow-btn-radar', 'flip-card-radar');
flipCard('arrow-btn-bubble', 'flip-card-bubble');
flipCard('arrow-btn-doughnut', 'flip-card-doughnut');
flipCard('arrow-btn-polar-area', 'flip-card-polar-area');
flipCard('arrow-btn-bar', 'flip-card-bar');
flipCard('arrow-btn-line', 'flip-card-line');


// -----------------------------------------------------------------------------------


// -------------- Show and hide sections. --------------

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


// -------------- Reseting the system. --------------

resetBtn.addEventListener('click', function() {

    window.location.reload();
});


// -----------------------------------------------------------------------------------


// -------------- Upload File. --------------

fileUpload.addEventListener('click', function() {

    // -------------------------------------------

    // Changing the label with the name of the Excel File.
    fileUpload.addEventListener('change', function(){

        fileChosenEl.textContent = this.files[0].name;
        
    });

    // -------------------------------------------

    fileUpload.addEventListener('change', function(event) {
        console.log(event);

        // Getting selected file (user's excel file).
        selectedFile = event.target.files[0];
        // console.log(selectedFile);

    // -------------------------------------------

        if (selectedFile) {

            let fileReader = new FileReader();

            // Reading the data from the Excel file, using a file reader as a binary string.
            fileReader.readAsBinaryString(selectedFile);
            // console.log(fileReader);

            // Setting an event handler property for load event.
            fileReader.onload = function(event) {

                // Logs the file's text
                //console.log(event.target.result);
                
                // Variable that contains the file's text.
                data = event.target.result;

                // Reading the data, the binary is the type of the previous data
                workbook = XLSX.read(data,{type:"binary"});
                // console.log(workbook);

                // Iterating through sheets.
                workbook.SheetNames.forEach(sheet => {

                    // The sheet_to_row_object_array() method creates JSON objects in a single row.
                    rowJsonObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                    // console.log(rowJsonObject);
                    
                    // Function for downloading the JSON File.
                    jsonDownload.onclick = function() {
                        const json_str = rowJsonObject;
                        console.log(json_str);
                    
                        downloadObjectAsJson(json_str, 'excel_to_json');
                    };
                    
                });
    
                // Logs the array of objects.
                console.log(rowJsonObject);

                // Disabling the fileUpload button after it is pressed one time.
                fileUpload.disabled = true;

                // -----------------------------------------------------------------------------------


                // -------------- Show and hide sections. --------------

                dashboardBtn.addEventListener('click', function() {

                    document.getElementById('dashboard').style.display = "block";
                    document.getElementById('summary-statistics').style.display = "none";
                    document.getElementById('differentiation').style.display = "none";
                    document.getElementById('differentiation-rate').style.display = "none";
                    document.getElementById('sum-up-to-100').style.display = "none";
                
                });

                summaryStatisticsBtn.addEventListener('click', function() {
                    
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


                // Creating array filled with the properties of the Array of Objects.
                rowJsonObject.forEach(function(o) {

                    Object.keys(o).forEach(function(property) {

                        if (objectProperties.indexOf(property) < 0) {
                            objectProperties.push(property);
                        }

                    });

                });
                console.log(objectProperties);


                // -----------------------------------------------------------------------------------


                // Array filled with formated dates.
                for (let i = 0; i < rowJsonObject.length; i++) {

                    const num_date = new Date(Math.round((rowJsonObject[i].rel_date - 25569) * 86400 * 1000));
                    
                    const year = num_date.toLocaleString("default", { year: "numeric" });
                    const month = num_date.toLocaleString("default", { month: "2-digit" });
                    const day = num_date.toLocaleString("default", { day: "2-digit" });

                    const dateFormat = month + "/" + day + "/" + year;

                    formatedDatesArray.push(dateFormat);

                };


                // -----------------------------------------------------------------------------------


                // -------------- Creating Versions / Dates checkboxes for Summary Statistics --------------

                // Creating checkboxes for versions.
                for (let i = 0; i < rowJsonObject.length; i++) {

                    createCheckBox('summary-statistics-versions', 'summary-statistics-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                    
                }

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

                // -------------------------------------------

                // -------------- Creating Versions / Dates checkboxes for Differentiation --------------
                
                // Creating checkboxes for versions.
                for (let i = 0; i < rowJsonObject.length; i++) {

                    createCheckBox('differentiation-versions', 'differentiation-versions', rowJsonObject[i].name, rowJsonObject[i].name);
                    
                }

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

                // -------------------------------------------

                // -------------- Creating Versions / Dates checkboxes for Differentiation Rate --------------
                
                // Creating checkboxes for versions.
                for (let i = 0; i < rowJsonObject.length; i++) {

                    createCheckBox('differentiation-rate-versions', 'differentiation-rate-versions', rowJsonObject[i].name, rowJsonObject[i].name);                        
                }

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

                // -------------------------------------------

                // -------------- Creating Versions / Dates checkboxes for Sum Up To 100 --------------
                
                // Creating checkboxes for versions.
                for (let i = 0; i < rowJsonObject.length; i++) {

                    createCheckBox('sum-up-to-100-versions', 'sum-up-to-100-versions', rowJsonObject[i].name, rowJsonObject[i].name);                        
                }

                sumUpTo100DatesRadioEl.addEventListener("change", function() {

                    deleteDivInside('sum-up-to-100-versions');
                   
                    for (let i = 0; i < rowJsonObject.length; i++) {

                        createCheckBoxDates('sum-up-to-100-versions', 'sum-up-to-100-dates', formatedDatesArray[i], formatedDatesArray[i]);
                        
                    }

                });

                selectAll('sum-up-to-100-versions-select-deselect-all-btn', checkboxesSumUpTo100DateEl);

                sumUpTo100VersionsRadioEl.addEventListener("change", function() {

                    deleteDivInside('sum-up-to-100-versions');

                    for (let i = 0; i < rowJsonObject.length; i++) {

                        createCheckBox('sum-up-to-100-versions', 'sum-up-to-100-versions', rowJsonObject[i].name, rowJsonObject[i].name);                        
                    
                    }

                });

                selectAll('sum-up-to-100-versions-select-deselect-all-btn', checkboxesSumUpTo100VersionEl);


                // -----------------------------------------------------------------------------------


                // -------------- Creating checkboxes for properties --------------
                
                for (let i = 4; i < objectProperties.length; i++) {

                    createCheckBox('summary-statistics-properties', 'summary-statistics-properties', objectProperties[i], objectProperties[i]);
                    createCheckBox('differentiation-properties', 'differentiation-properties', objectProperties[i], objectProperties[i]);
                    createCheckBox('differentiation-rate-properties', 'differentiation-rate-properties', objectProperties[i], objectProperties[i]);
                    createCheckBox('sum-up-to-100-properties', 'sum-up-to-100-properties', objectProperties[i], objectProperties[i]);

                }

                // -------------------------------------------

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

                // -------------------------------------------

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

                // -------------------------------------------

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

                // -------------------------------------------

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

                // -------------------------------------------

                for (let i = 0; i < chartNamesSummaryStatisticsArray.length; i++) {

                    createRadio('summary-statistics-charts', 'summary-statistics-charts', chartNamesSummaryStatisticsArray[i], chartNamesSummaryStatisticsArray[i]);

                }

                for (let i = 0; i < chartNamesDifferentiationArray.length; i++) {

                    createRadio('differentiation-charts', 'differentiation-charts', chartNamesDifferentiationArray[i], chartNamesDifferentiationArray[i]);
                    createRadio('differentiation-rate-charts', 'differentiation-rate-charts', chartNamesDifferentiationArray[i], chartNamesDifferentiationArray[i]);
                    
                }

                for (let i = 0; i < chartNamesSumUpTo100Array.length; i++) {

                    createRadio('sum-up-to-100-charts', 'sum-up-to-100-charts', chartNamesSumUpTo100Array[i], chartNamesSumUpTo100Array[i]);

                }


                // -----------------------------------------------------------------------------------


                summaryStatisticsOkBtnsArray.forEach(btn => {

                    btn.addEventListener('click', function() {

                        nameSummaryStatistics.length = 0;
                        propertySummaryStatistics.length = 0;
                        dateSummaryStatistics.length = 0;
                        xAxisSummaryStatistics.length = 0;
                        summaryStatistics.length = 0;

                        checkedCheckboxesSummaryStatisticsCharts.length = 0;

                        backgroundColorSummaryStatistics.length = 0;
                        borderColorSummaryStatistics.length = 0;

                        summaryStatisticsChartType = 'bar';
                        
                        deleteCanvas('myChart_summaryStatistics');
                        createCanvas('summary-statistics-chart-display', 'myChart_summaryStatistics');

                        // -------------------------------------------

                        // Array filled with selected versions.
                        // Gets the values of each row and push it into arrays.
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

                        // -------------------------------------------
                        
                        if (summaryStatisticsVersionsRadioEl.checked) {
                                
                            xAxisSummaryStatistics = [...nameSummaryStatistics];

                        }
                        else if (summaryStatisticsDatesRadioEl.checked) {

                            xAxisSummaryStatistics = [...dateSummaryStatistics];

                        }
                        
                        console.log(xAxisSummaryStatistics);
                        console.log(nameSummaryStatistics);
                        console.log(dateSummaryStatistics);
                        
                        // -------------------------------------------

                        // Array filled with selected variables.
                        for (let i = 0; i < checkedCheckboxesSummaryStatisticsProperties.length; i++) {

                            propertySummaryStatistics.push(new Array());

                            for (let j = 0; j < rowJsonObject.length; j++) {
                                
                                if (nameSummaryStatistics.includes(rowJsonObject[j].name) || dateSummaryStatistics.includes(formatedDatesArray[j])) {

                                    // console.log(checkedCheckboxesSummaryStatisticsProperties);
        
                                    for (let k = 0; k < objectProperties.length; k++) {
        
                                        switch(checkedCheckboxesSummaryStatisticsProperties[i]) {
        
                                            case objectProperties[k] :
                                                propertySummaryStatistics[i].push(rowJsonObject[j][objectProperties[k]]);
                                                break;
                                                    
                                        }
        
                                    }
        
                                }
        
                            }
        
                        }

                        console.log(propertySummaryStatistics);

                        // -------------------------------------------

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
                    
                        // -------------------------------------------

                        backgroundColorFunction(propertySummaryStatistics, backgroundColorSummaryStatistics, borderColorSummaryStatistics);

                        // -------------------------------------------

                        if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Horizontal Bar') {
                            
                            summaryStatisticsChartType = 'bar';

                            dataSummaryStatistics = {

                                labels: xAxisSummaryStatistics,
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data: propertySummaryStatistics[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorSummaryStatistics[i],
                                        borderColor: borderColorSummaryStatistics[i]
                                    })),
                            };

                            optionsSummaryStatistics = {

                                indexAxis: 'y',
                                responsive: true,
                                maintainAspectRatio: false
                            };

                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Stacked Bar') {
                            
                            summaryStatisticsChartType = 'bar';

                            dataSummaryStatistics = {

                                labels: xAxisSummaryStatistics,
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data: propertySummaryStatistics[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorSummaryStatistics[i],
                                        borderColor: borderColorSummaryStatistics[i]
                                    })),

                            };

                            optionsSummaryStatistics = {

                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    x: {
                                        stacked: true
                                    },
                                    y: {
                                        stacked: true
                                    }
                                }

                            };

                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Vertical Bar') {
                            
                            summaryStatisticsChartType = 'bar';

                            dataSummaryStatistics = {

                                labels: xAxisSummaryStatistics,
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data: propertySummaryStatistics[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorSummaryStatistics[i],
                                        borderColor: borderColorSummaryStatistics[i]
                                    })),

                            };

                            optionsSummaryStatistics = {

                                responsive: true,
                                maintainAspectRatio: false

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
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorSummaryStatistics[i],
                                        borderColor: borderColorSummaryStatistics[i],
                                        fill: true
                                    })),

                            };

                            optionsSummaryStatistics = {

                                responsive: true,
                                maintainAspectRatio: false

                            };

                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Bubble') {

                            summaryStatisticsChartType = 'bubble';

                            dataSummaryStatistics = {

                                labels: xAxisSummaryStatistics,
                                // animation: {
                                //     duration: 10
                                //     },
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data:
                                        xAxisSummaryStatistics.map((key, j) => ({
                                            x: xAxisSummaryStatistics[j],
                                            y: propertySummaryStatistics[i][j],
                                            r: propertySummaryStatistics[i][j]
                                            // r: 20,
                                        })),
                                        // data:
                                        // xAxisSummaryStatistics.map((key, j) => ({
                                        //     x: xAxisSummaryStatistics[i],
                                        //     y: oneArrayPropertySummaryStatistics[j],
                                        //     r: modalSummaryStatistics[i],
                                        // })),
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorSummaryStatistics[i],
                                        borderColor: borderColorSummaryStatistics[i]
                                    })),
                                    

                            };

                            optionsSummaryStatistics = {

                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    // y: {
                                    //     type: 'category',
                                    //     labels: oneArrayPropertySummaryStatistics
                                    // },
                                    x: {
                                        type: 'category',
                                        labels: xAxisSummaryStatistics
                                    },
                                //     r: {
                                //         type: 'category',
                                //         labels: checkedCheckboxesSummaryStatisticsModal
                                //     }
                                },

                            };

                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Doughnut') {
                            
                            backgroundColorFunction(xAxisSummaryStatistics, backgroundColorSummaryStatistics, borderColorSummaryStatistics);

                            console.log(xAxisSummaryStatistics);
                            console.log(propertySummaryStatistics);

                            summaryStatisticsChartType = 'doughnut';

                            dataSummaryStatistics = {

                                labels: xAxisSummaryStatistics,
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data: propertySummaryStatistics[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorSummaryStatistics,
                                        borderColor: borderColorSummaryStatistics
                                    })),

                            };

                            optionsSummaryStatistics = {

                                responsive: true,
                                maintainAspectRatio: false

                            };

                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Pie') {
                            
                            summaryStatisticsChartType = 'pie';

                            backgroundColorFunction(xAxisSummaryStatistics, backgroundColorSummaryStatistics, borderColorSummaryStatistics);

                            dataSummaryStatistics = {

                                labels: xAxisSummaryStatistics,
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data: propertySummaryStatistics[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorSummaryStatistics,
                                        borderColor: borderColorSummaryStatistics
                                    })),

                            };

                            optionsSummaryStatistics = {

                                responsive: true,
                                maintainAspectRatio: false

                            };

                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Polar Area') {
                            
                            summaryStatisticsChartType = 'polarArea';

                            backgroundColorFunction(xAxisSummaryStatistics, backgroundColorSummaryStatistics, borderColorSummaryStatistics);

                            dataSummaryStatistics = {

                                labels: xAxisSummaryStatistics,
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data: propertySummaryStatistics[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorSummaryStatistics,
                                        borderColor: borderColorSummaryStatistics
                                    })),

                            };

                            optionsSummaryStatistics = {

                                responsive: true,
                                maintainAspectRatio: false

                            };

                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Radar') {
                            
                            summaryStatisticsChartType = 'radar';

                            dataSummaryStatistics = {

                                labels: xAxisSummaryStatistics,
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data: propertySummaryStatistics[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorSummaryStatistics[i],
                                        borderColor: borderColorSummaryStatistics[i]
                                    })),

                            };

                            optionsSummaryStatistics = {

                                responsive: true,
                                maintainAspectRatio: false

                            };

                        }
                        else if (checkedCheckboxesSummaryStatisticsCharts[0] === 'Scatter') {
                            
                            summaryStatisticsChartType = 'scatter';

                            dataSummaryStatistics = {

                                labels: xAxisSummaryStatistics,
                                datasets:
                                checkedCheckboxesSummaryStatisticsProperties.map((key, i) => ({
                                        label: checkedCheckboxesSummaryStatisticsProperties[i],
                                        data:
                                        xAxisSummaryStatistics.map((key, j) => ({
                                            x: xAxisSummaryStatistics[j],
                                            y: propertySummaryStatistics[i][j]
                                        })),
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorSummaryStatistics[i],
                                        borderColor: borderColorSummaryStatistics[i]
                                    })),

                            };

                            optionsSummaryStatistics = {

                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    x: {
                                        type: 'category',
                                        labels: xAxisSummaryStatistics
                                    }
                                }

                            };

                        }

                        console.log(checkedCheckboxesSummaryStatisticsCharts[0]);
                        console.log(summaryStatisticsChartType);

                        // -------------------------------------------

                        // Displays the chart for the variables.
                        const ctx1= document.getElementById('myChart_summaryStatistics').getContext('2d');

                        const myChart_summaryStatistics = new Chart(ctx1, {
                            type: summaryStatisticsChartType,
                            data: dataSummaryStatistics,
                            options: optionsSummaryStatistics
                        });

                        console.log(myChart_summaryStatistics);
                        
                    });
                 
                });


                // -----------------------------------------------------------------------------------


                differentiationOkBtnsArray.forEach(btn => {

                    btn.addEventListener('click', function() {

                        nameDifferentiation.length = 0;
                        propertyDifferentiation.length = 0;
                        dateDifferentiation.length = 0;
                        xAxisDifferentiation.length = 0;
                        differentiation.length = 0;

                        checkedCheckboxesDifferentiationCharts.length = 0;

                        backgroundColorDifferentiation.length = 0;
                        borderColorDifferentiation.length = 0;

                        differentiationChartType = 'bar';
                        
                        deleteCanvas('myChart_differentiation');
                        createCanvas('differentiation-chart-display', 'myChart_differentiation');

                        // -------------------------------------------

                        // Array filled with selected versions.
                        // Gets the values of each row and push it into arrays.
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

                        // -------------------------------------------

                        if (differentiationVersionsRadioEl.checked) {
                            
                            xAxisDifferentiation = [...nameDifferentiation];

                        }
                        else if (differentiationDatesRadioEl.checked) {

                            xAxisDifferentiation = [...dateDifferentiation];

                        }
                        
                        console.log(xAxisDifferentiation);
                        console.log(nameDifferentiation);
                        console.log(dateDifferentiation);

                        // -------------------------------------------

                        // Array filled with selected variables
                        for (let i = 0; i < checkedCheckboxesDifferentiationProperties.length; i++) {

                            propertyDifferentiation.push(new Array());

                            for (let j = 0; j < rowJsonObject.length; j++) {
                                
                                if (nameDifferentiation.includes(rowJsonObject[j].name) || dateDifferentiation.includes(formatedDatesArray[j])) {

                                    // console.log(checkedCheckboxesDifferentiationProperties);
        
                                    for (let k = 0; k < objectProperties.length; k++) {
        
                                        switch(checkedCheckboxesDifferentiationProperties[i]) {
        
                                            case objectProperties[k] :
                                                propertyDifferentiation[i].push(rowJsonObject[j][objectProperties[k]]);
                                                break;
                                                    
                                        }
        
                                    }
        
                                }
        
                            }
        
                        }

                        console.log(propertyDifferentiation);
                        
                        // -------------------------------------------

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

                        // -------------------------------------------

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

                        // -------------------------------------------

                        backgroundColorFunction(propertyDifferentiation, backgroundColorDifferentiation, borderColorDifferentiation);


                        mergedXAxisDifferentiation = Array.from({length:xAxisDifferentiation.length-1}, (_,i)=>xAxisDifferentiation[i] + ' - ' + xAxisDifferentiation[i+1]);


                        console.log(mergedXAxisDifferentiation);

                        // -------------------------------------------

                        if (checkedCheckboxesDifferentiationCharts[0] === 'Horizontal Bar') {
                        
                            differentiationChartType = 'bar';

                            dataDifferentiation = {

                                labels: mergedXAxisDifferentiation,
                                datasets:
                                    checkedCheckboxesDifferentiationProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationProperties[i],
                                        data: differentiation[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiation[i],
                                        borderColor: borderColorDifferentiation[i]
                                    })),

                            };

                            optionsDifferentiation = {

                                indexAxis: 'y',
                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiation
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationCharts[0] === 'Stacked Bar') {
                        
                            differentiationChartType = 'bar';

                            dataDifferentiation = {

                                labels: mergedXAxisDifferentiation,
                                datasets:
                                    checkedCheckboxesDifferentiationProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationProperties[i],
                                        data: differentiation[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiation[i],
                                        borderColor: borderColorDifferentiation[i]
                                    })),

                            };

                            optionsDifferentiation = {

                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    x: {
                                        stacked: true,
                                        type: 'category',
                                        labels: mergedXAxisDifferentiation
                                    },
                                    y: {
                                        stacked: true
                                    }
                                }

                            };

                        }
                        else if (checkedCheckboxesDifferentiationCharts[0] === 'Vertical Bar') {
                        
                            differentiationChartType = 'bar';

                            dataDifferentiation = {

                                labels: mergedXAxisDifferentiation,
                                datasets:
                                    checkedCheckboxesDifferentiationProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationProperties[i],
                                        data: differentiation[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiation[i],
                                        borderColor: borderColorDifferentiation[i]
                                    })),

                            };

                            optionsDifferentiation = {

                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiation
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationCharts[0] === 'Line') {
                        
                            differentiationChartType = 'line';

                            dataDifferentiation = {

                                labels: mergedXAxisDifferentiation,
                                datasets:
                                    checkedCheckboxesDifferentiationProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationProperties[i],
                                        data: differentiation[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiation[i],
                                        borderColor: borderColorDifferentiation[i],
                                        fill: true
                                    })),
                            };

                            optionsDifferentiation = {

                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiation
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationCharts[0] === 'Bubble') {

                            differentiationChartType = 'bubble';

                            dataDifferentiation = {

                                labels: mergedXAxisDifferentiation,
                                datasets:
                                    checkedCheckboxesDifferentiationProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationProperties[i],
                                        data:
                                            mergedXAxisDifferentiation.map((key, j) => ({
                                                x: mergedXAxisDifferentiation[j],
                                                y: differentiation[i][j],
                                                r: differentiation[i][j],
                                            })),
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiation[i],
                                        borderColor: borderColorDifferentiation[i]
                                    })),

                            };

                            optionsDifferentiation = {

                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    x: {
                                        type: 'category',
                                        labels: mergedXAxisDifferentiation
                                    },
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationCharts[0] === 'Doughnut') {
                        
                            backgroundColorFunction(xAxisDifferentiation, backgroundColorDifferentiation, borderColorDifferentiation);

                            console.log(xAxisDifferentiation);
                            console.log(propertyDifferentiation);

                            differentiationChartType = 'doughnut';

                            dataDifferentiation = {

                                labels: mergedXAxisDifferentiation,
                                datasets:
                                    checkedCheckboxesDifferentiationProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationProperties[i],
                                        data: differentiation[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiation,
                                        borderColor: borderColorDifferentiation
                                    })),

                            };

                            optionsDifferentiation = {

                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiation
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationCharts[0] === 'Pie') {
                        
                            differentiationChartType = 'pie';

                            backgroundColorFunction(xAxisDifferentiation, backgroundColorDifferentiation, borderColorDifferentiation);

                            dataDifferentiation = {

                                labels: mergedXAxisDifferentiation,
                                datasets:
                                    checkedCheckboxesDifferentiationProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationProperties[i],
                                        data: differentiation[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiation,
                                        borderColor: borderColorDifferentiation
                                    })),

                            };

                            optionsDifferentiation = {

                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiation
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationCharts[0] === 'Polar Area') {
                        
                            differentiationChartType = 'polarArea';

                            backgroundColorFunction(xAxisDifferentiation, backgroundColorDifferentiation, borderColorDifferentiation);

                            dataDifferentiation = {

                                labels: mergedXAxisDifferentiation,
                                datasets:
                                    checkedCheckboxesDifferentiationProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationProperties[i],
                                        data: differentiation[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiation,
                                        borderColor: borderColorDifferentiation
                                    })),

                            };

                            optionsDifferentiation = {

                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiation
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationCharts[0] === 'Radar') {
                        
                            differentiationChartType = 'radar';

                            dataDifferentiation = {

                                labels: mergedXAxisDifferentiation,
                                datasets:
                                checkedCheckboxesDifferentiationProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationProperties[i],
                                        data: differentiation[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiation[i],
                                        borderColor: borderColorDifferentiation[i]
                                    })),

                            };

                            optionsDifferentiation = {

                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiation
                                }

                            };

                        }
                        else if (checkedCheckboxesDifferentiationCharts[0] === 'Scatter') {
                        
                            differentiationChartType = 'scatter';

                            dataDifferentiation = {

                                labels: mergedXAxisDifferentiation,
                                datasets:
                                    checkedCheckboxesDifferentiationProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationProperties[i],
                                        data:
                                            mergedXAxisDifferentiation.map((key, j) => ({
                                                x: mergedXAxisDifferentiation[j],
                                                y: differentiation[i][j]
                                            })),
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiation[i],
                                        borderColor: borderColorDifferentiation[i]
                                    })),

                            };

                            optionsDifferentiation = {

                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    x: {
                                        type: 'category',
                                        labels: mergedXAxisDifferentiation
                                    },
                                },

                            };

                        }

                        console.log(checkedCheckboxesDifferentiationCharts[0]);
                        console.log(differentiationChartType);

                        // -------------------------------------------

                        // Displays the chart for the variables.
                        const ctx2 = document.getElementById('myChart_differentiation').getContext('2d');

                            const myChart_differentiation = new Chart(ctx2, {

                                type: differentiationChartType,
                                data: dataDifferentiation,
                                options: optionsDifferentiation

                            });

                            console.log(myChart_differentiation);

                    });

                });

                
                // -----------------------------------------------------------------------------------

                
                differentiationRateOkBtnsArray.forEach(btn => {

                    btn.addEventListener('click', function() {

                        nameDifferentiationRate.length = 0;
                        propertyDifferentiationRate.length = 0;
                        dateDifferentiationRate.length = 0;
                        xAxisDifferentiationRate.length = 0;
                        differentiationRate.length = 0;

                        checkedCheckboxesDifferentiationRateCharts.length = 0;

                        backgroundColorDifferentiationRate.length = 0;
                        borderColorDifferentiationRate.length = 0;

                        differentiationRateChartType = 'bar';
                            
                        deleteCanvas('myChart_differentiationRate');
                        createCanvas('differentiation-rate-chart-display', 'myChart_differentiationRate');

                        // -------------------------------------------

                        // Array filled with selected versions.
                        // Gets the values of each row and push it into arrays.
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

                        // -------------------------------------------

                        if (differentiationRateVersionsRadioEl.checked) {
                                
                            xAxisDifferentiationRate = [...nameDifferentiationRate];

                        }
                        else if (differentiationRateDatesRadioEl.checked) {

                            xAxisDifferentiationRate = [...dateDifferentiationRate];

                        }
                        
                        console.log(xAxisDifferentiationRate);
                        console.log(nameDifferentiationRate);
                        console.log(dateDifferentiationRate);

                        // -------------------------------------------

                        // Array filled with selected variables
                        for (let i = 0; i < checkedCheckboxesDifferentiationRateProperties.length; i++) {

                            propertyDifferentiationRate.push(new Array());

                            for (let j = 0; j < rowJsonObject.length; j++) {
                                
                                if (nameDifferentiationRate.includes(rowJsonObject[j].name) || dateDifferentiationRate.includes(formatedDatesArray[j])) {

                                    // console.log(checkedCheckboxesDifferentiationRateProperties);
        
                                    for (let k = 0; k < objectProperties.length; k++) {
        
                                        switch(checkedCheckboxesDifferentiationRateProperties[i]) {
        
                                            case objectProperties[k] :
                                                propertyDifferentiationRate[i].push(rowJsonObject[j][objectProperties[k]]);
                                                break;
                                                    
                                        }
        
                                    }
        
                                }
        
                            }
        
                        }

                        console.log(propertyDifferentiationRate);

                        // -------------------------------------------

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

                        // -------------------------------------------

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

                        // -------------------------------------------

                        backgroundColorFunction(propertyDifferentiationRate, backgroundColorDifferentiationRate, borderColorDifferentiationRate);


                        mergedXAxisDifferentiationRate = Array.from({length:xAxisDifferentiationRate.length-1}, (_,i)=>xAxisDifferentiationRate[i] + ' - ' + xAxisDifferentiationRate[i+1]);


                        console.log(mergedXAxisDifferentiationRate);

                        // -------------------------------------------

                        if (checkedCheckboxesDifferentiationRateCharts[0] === 'Horizontal Bar') {
                            
                            differentiationRateChartType = 'bar';

                            dataDifferentiationRate = {

                                labels: mergedXAxisDifferentiationRate,
                                datasets:
                                    checkedCheckboxesDifferentiationRateProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationRateProperties[i],
                                        data: differentiationRate[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiationRate[i],
                                        borderColor: borderColorDifferentiationRate[i]
                                    })),
                                    
                            };

                            optionsDifferentiationRate = {

                                indexAxis: 'y',
                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiationRate
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Stacked Bar') {
                            
                            differentiationRateChartType = 'bar';

                            dataDifferentiationRate = {

                                labels: mergedXAxisDifferentiationRate,
                                datasets:
                                    checkedCheckboxesDifferentiationRateProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationRateProperties[i],
                                        data: differentiationRate[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiationRate[i],
                                        borderColor: borderColorDifferentiationRate[i]
                                    })),

                            };

                            optionsDifferentiationRate = {

                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    x: {
                                        stacked: true,
                                        type: 'category',
                                        labels: mergedXAxisDifferentiationRate
                                    },
                                    y: {
                                        stacked: true
                                    }
                                }

                            };

                        }
                        else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Vertical Bar') {
                            
                            differentiationRateChartType = 'bar';

                            dataDifferentiationRate = {

                                labels: mergedXAxisDifferentiationRate,
                                datasets:
                                    checkedCheckboxesDifferentiationRateProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationRateProperties[i],
                                        data: differentiationRate[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiationRate[i],
                                        borderColor: borderColorDifferentiationRate[i]
                                    })),

                            };

                            optionsDifferentiationRate = {
    
                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiationRate
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Line') {
                            
                            differentiationRateChartType = 'line';

                            dataDifferentiationRate = {

                                labels: mergedXAxisDifferentiationRate,
                                datasets:
                                    checkedCheckboxesDifferentiationRateProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationRateProperties[i],
                                        data: differentiationRate[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiationRate[i],
                                        borderColor: borderColorDifferentiationRate[i],
                                        fill: true
                                    })),

                            };

                            optionsDifferentiationRate = {

                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiationRate
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Bubble') {

                            differentiationRateChartType = 'bubble';
    
                            dataDifferentiationRate = {
    
                                labels: mergedXAxisDifferentiationRate,
                                datasets:
                                    checkedCheckboxesDifferentiationRateProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationRateProperties[i],
                                        data:
                                            mergedXAxisDifferentiationRate.map((key, j) => ({
                                                x: mergedXAxisDifferentiationRate[j],
                                                y: differentiationRate[i][j],
                                                r: differentiationRate[i][j],
                                            })),
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiationRate[i],
                                        borderColor: borderColorDifferentiationRate[i]
                                    })),

                            };
    
                            optionsDifferentiationRate = {
    
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    x: {
                                        type: 'category',
                                        labels: mergedXAxisDifferentiationRate
                                    },
                                },
    
                            };

                        }
                        else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Doughnut') {
                            
                            backgroundColorFunction(xAxisDifferentiationRate, backgroundColorDifferentiationRate, borderColorDifferentiationRate);

                            console.log(xAxisDifferentiationRate);
                            console.log(propertyDifferentiationRate);

                            differentiationRateChartType = 'doughnut';

                            dataDifferentiationRate = {

                                labels: mergedXAxisDifferentiationRate,
                                datasets:
                                    checkedCheckboxesDifferentiationRateProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationRateProperties[i],
                                        data: differentiationRate[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiationRate,
                                        borderColor: borderColorDifferentiationRate
                                    })),

                            };

                            optionsDifferentiationRate = {

                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiationRate
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Pie') {
                            
                            differentiationRateChartType = 'pie';

                            backgroundColorFunction(xAxisDifferentiationRate, backgroundColorDifferentiationRate, borderColorDifferentiationRate);

                            dataDifferentiationRate = {

                                labels: mergedXAxisDifferentiationRate,
                                datasets:
                                    checkedCheckboxesDifferentiationRateProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationRateProperties[i],
                                        data: differentiationRate[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiationRate,
                                        borderColor: borderColorDifferentiationRate
                                    })),

                            };

                            optionsDifferentiationRate = {

                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiationRate
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Polar Area') {
                            
                            differentiationRateChartType = 'polarArea';

                            backgroundColorFunction(xAxisDifferentiationRate, backgroundColorDifferentiationRate, borderColorDifferentiationRate);

                            dataDifferentiationRate = {

                                labels: mergedXAxisDifferentiationRate,
                                datasets:
                                    checkedCheckboxesDifferentiationRateProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationRateProperties[i],
                                        data: differentiationRate[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiationRate,
                                        borderColor: borderColorDifferentiationRate
                                    })),

                            };

                            optionsDifferentiationRate = {

                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiationRate
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Radar') {
                            
                            differentiationRateChartType = 'radar';

                            dataDifferentiationRate = {

                                labels: mergedXAxisDifferentiationRate,
                                datasets:
                                    checkedCheckboxesDifferentiationRateProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationRateProperties[i],
                                        data: differentiationRate[i],
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiationRate[i],
                                        borderColor: borderColorDifferentiationRate[i],
                                        fill: true,
                                    })),

                            };

                            optionsDifferentiationRate = {

                                responsive: true,
                                maintainAspectRatio: false,
                                x: {
                                    type: 'category',
                                    labels: mergedXAxisDifferentiationRate
                                },

                            };

                        }
                        else if (checkedCheckboxesDifferentiationRateCharts[0] === 'Scatter') {
                            
                            differentiationRateChartType = 'scatter';

                            dataDifferentiationRate = {
    
                                labels: mergedXAxisDifferentiationRate,
                                datasets:
                                    checkedCheckboxesDifferentiationRateProperties.map((key, i) => ({
                                        label: checkedCheckboxesDifferentiationRateProperties[i],
                                        data:
                                            mergedXAxisDifferentiationRate.map((key, j) => ({
                                                x: mergedXAxisDifferentiationRate[j],
                                                y: differentiationRate[i][j]
                                            })),
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorDifferentiationRate[i],
                                        borderColor: borderColorDifferentiationRate[i]
                                    })),

                            };
    
                            optionsDifferentiationRate = {
    
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    x: {
                                        type: 'category',
                                        labels: mergedXAxisDifferentiationRate
                                    },
                                },
    
                            };

                        }

                        console.log(checkedCheckboxesDifferentiationRateCharts[0]);
                        console.log(differentiationRateChartType);

                        // -------------------------------------------

                        // Displays the chart for the variables.
                        const ctx3= document.getElementById('myChart_differentiationRate').getContext('2d');

                        const myChart_differentiationRate = new Chart(ctx3, {

                            type: differentiationRateChartType,
                            data: dataDifferentiationRate,
                            options: optionsDifferentiationRate

                        });

                        console.log(myChart_differentiationRate);
                        
                    });
                 
                });


                // -----------------------------------------------------------------------------------


                sumUpTo100OkBtnsArray.forEach(btn => {

                    btn.addEventListener('click', function() {

                        nameSumUpTo100.length = 0;
                        propertySumUpTo100.length = 0;
                        dateSumUpTo100.length = 0;
                        xAxisSumUpTo100.length = 0;
                        sumUpTo100.length = 0;

                        checkedCheckboxesSumUpTo100Charts.length = 0;

                        backgroundColorSumUpTo100.length = 0;
                        borderColorSumUpTo100.length = 0;

                        sumUpTo100ChartType = 'bar';

                        deleteCanvas('myChart_sumUpTo100');
                        createCanvas('sum-up-to-100-chart-display', 'myChart_sumUpTo100');

                        // -------------------------------------------

                        // Array filled with selected versions.
                        // Gets the values of each row and push it into arrays.
                        for (let i = 0; i < rowJsonObject.length; i++) {

                            if (sumUpTo100VersionsRadioEl.checked) {
                                    
                                if (checkboxesSumUpTo100VersionEl[i].checked && checkboxesSumUpTo100VersionEl[i].value === rowJsonObject[i].name) {
                                    nameSumUpTo100.push(rowJsonObject[i].name);
                                        // console.log(nameSumUpTo100); 
                                }

                            }
                            else if (sumUpTo100DatesRadioEl.checked) {

                                if (checkboxesSumUpTo100DateEl[i].checked && checkboxesSumUpTo100DateEl[i].value === formatedDatesArray[i]) {
                                    // console.log(checkboxesSumUpTo100DateEl[i]);
                                    // console.log(checkboxesSumUpTo100DateEl[i].value);
                                    // console.log(formatedDatesArraySumUpTo100[i]);
                                    dateSumUpTo100.push(formatedDatesArray[i]);
                                }

                            }

                            console.log(dateSumUpTo100);
                            console.log(nameSumUpTo100);
                        
                        };

                        // -------------------------------------------

                        if (sumUpTo100VersionsRadioEl.checked) {
                                
                            xAxisSumUpTo100 = [...nameSumUpTo100];

                        }
                        else if (sumUpTo100DatesRadioEl.checked) {

                            xAxisSumUpTo100 = [...dateSumUpTo100];

                        }
                        
                        console.log(xAxisSumUpTo100);
                        console.log(nameSumUpTo100);
                        console.log(dateSumUpTo100);

                        // -------------------------------------------

                        // Array filled with selected variables
                        for (let i = 0; i < checkedCheckboxesSumUpTo100Properties.length; i++) {

                            propertySumUpTo100.push(new Array());

                            for (let j = 0; j < rowJsonObject.length; j++) {
                                
                                if (nameSumUpTo100.includes(rowJsonObject[j].name) || dateSumUpTo100.includes(formatedDatesArray[j])) {

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
                        
                        // -------------------------------------------

                        checkedCheckboxesSumUpTo100Charts.length = 0;

                        for (let i = 0; i < checkboxesSumUpTo100ChartsEl.length; i++) {
        
                            if (checkboxesSumUpTo100ChartsEl[i].checked) {
                                    checkedCheckboxesSumUpTo100Charts.push(checkboxesSumUpTo100ChartsEl[i].value);
                            }
                                
                        }
        
                        // DEBUGGING
                        // console.log(checkboxesSumUpTo100ChartsEl);
                        // console.log(checkboxesSumUpTo100ChartsEl.length);
                        console.log(checkedCheckboxesSumUpTo100Charts);
                        // console.log(typeof checkedCheckboxesSumUpTo100Charts);

                        // -------------------------------------------

                        backgroundColorFunction(xAxisSumUpTo100, backgroundColorSumUpTo100, borderColorSumUpTo100);
                        
                        Chart.register(ChartjsPluginStacked100.default);

                        // -------------------------------------------

                        if (checkedCheckboxesSumUpTo100Charts[0] === 'Stacked Bar') {
                            
                            sumUpTo100ChartType = 'bar';
                        
                            dataSumUpTo100 = {

                                labels: checkedCheckboxesSumUpTo100Properties,
                                datasets:
                                xAxisSumUpTo100.map((key, i) => ({
                                        label: xAxisSumUpTo100[i],
                                        data:
                                        checkedCheckboxesSumUpTo100Properties.map((key, j) => ({
                                            x: propertySumUpTo100[i],
                                            y: propertySumUpTo100[j][i]
                                        })),
                                        borderWidth: 4,
                                        backgroundColor: backgroundColorSumUpTo100[i],
                                        borderColor: borderColorSumUpTo100[i]
                                    })),

                            };

                            optionsSumUpTo100 = {

                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    stacked100: {
                                        enable: true
                                    }
                                },

                            };

                        }

                        console.log(checkedCheckboxesSumUpTo100Charts[0]);
                        console.log(sumUpTo100ChartType);

                        // -------------------------------------------

                        // Displays the chart for the variables.
                        const ctx4= document.getElementById('myChart_sumUpTo100').getContext('2d');

                        const myChart_sumUpTo100 = new Chart(ctx4, {

                            type: sumUpTo100ChartType,
                            data: dataSumUpTo100,
                            options: optionsSumUpTo100

                        });

                        console.log(myChart_sumUpTo100);

                    });
                 
                });

            }

        }
    
    });
    
});