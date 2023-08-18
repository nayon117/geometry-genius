function getInputValue(elementId) {
    const inputField = document.getElementById(elementId)
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
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