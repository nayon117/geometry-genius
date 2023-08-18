function getInputValue(elementId) {
    const inputField = document.getElementById(elementId)
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = '';
    return value;
}

function calculateArea(areaId,area) {
    const totalArea = document.getElementById(areaId);
    totalArea.textContent = area;
}

function calculateTriangleArea() {
    const base = getInputValue("triangle-base");
    const height = getInputValue("triangle-height");
    if (isNaN(base) || isNaN(height)) {
        alert("please insert a number");
        return;
    }
    const area = 0.5 * base * height;
    calculateArea("triangle-area", area)
    addToCalculationEntry("Triangle",area)
}
 
function calculateRectangleArea() {
    const width = getInputValue("rectangle-width");
    const length = getInputValue("rectangle-length");
    if (isNaN(width) || isNaN(length)) {
        alert("please insert a number");
        return;
    }
    const  area = width * length;
    calculateArea("rectangle-area", area);
    addToCalculationEntry("Rectangle",area)
}

function calculateParallelogramArea() {
    const base = getInputValue("Parallelogram-base")
    const height = getInputValue("Parallelogram-height")
    if (isNaN(base) || isNaN(height)) {
        alert("please insert a number");
        return;
    }
    const area = base * height;
    calculateArea('parallelogram-area', area);
    addToCalculationEntry("Parallelogram",area)
}
 
function calculateRhombusArea() {
    const d1 = getInputValue("rhombus-d1");
    const d2 = getInputValue("rhombus-d2");
    if (isNaN(d1) || isNaN(d2)) {
        alert("please insert a number");
        return;
    }
    const area = 0.5 * d1 * d2;
    calculateArea("rhombus-area", area);
    addToCalculationEntry("Rhombus",area)
}

function calculatePentagonArea() {
    const p = getInputValue("pentagon-p");
    const b = getInputValue("pentagon-b");
    if (isNaN(p) || isNaN(b)) {
        alert("please insert a number");
        return;
    }
    const area = 0.5 * p * b;
    calculateArea("pentagon-area", area);
    addToCalculationEntry("Pentagon",area)
}

function calculateEllipseArea() {
    const a = getInputValue("ellipse-a");
    const b = getInputValue("ellipse-b");
    if (isNaN(a) || isNaN(b)) {
        alert("please insert a number");
        return;
    }
    const area = 3.1416 * a * b;
    const areaDecimal = area.toFixed(2);
    calculateArea("ellipse-area", areaDecimal);
    addToCalculationEntry("Ellipse",areaDecimal)
}

// add to calculation entry 
function addToCalculationEntry(ariaType,area) {
    const calculationEntry = document.getElementById("calculation-entry");
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add("my-4");
    p.innerHTML = `${count+1}. ${ariaType}  ${area} cm<sup>2</sup> 
    <button class="btn btn-sm btn-success">convert m<sup>2</sup></button>
    `;
    calculationEntry.appendChild(p);
}