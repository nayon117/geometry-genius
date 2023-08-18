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
    const area = 0.5 * base * height;
    calculateArea("triangle-area",area)
}
 
function calculateRectangleArea() {
    const width = getInputValue("rectangle-width");
    const length = getInputValue("rectangle-length");
    const  area = width * length;
    calculateArea("rectangle-area", area);
}

function calculateParallelogramArea() {
    const base = getInputValue("Parallelogram-base")
    const height = getInputValue("Parallelogram-height")
    const area = base * height;
    calculateArea('parallelogram-area', area);
}
 
function calculateRhombusArea() {
    const d1 = getInputValue("rhombus-d1");
    const d2 = getInputValue("rhombus-d2");
    const area = 0.5 * d1 * d2;
    calculateArea("rhombus-area", area);
}

function calculatePentagonArea() {
    const p = getInputValue("pentagon-p");
    const b = getInputValue("pentagon-b");
    const area = 0.5 * p * b;
    calculateArea("pentagon-area", area);
}

function calculateEllipseArea() {
    const a = getInputValue("ellipse-a");
    const b = getInputValue("ellipse-b");
    const area = 3.1416 * a * b;
    calculateArea("ellipse-area", area);
}