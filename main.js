// Line Analyzer

// Add Event Listener
document.getElementById('analyze').addEventListener('click', analyzeLine);

// Event Function
function analyzeLine() {
    // Get Inputted Point Data (x1, y1) and (x2, y2)
    let x1 = Number(document.getElementById('x1').value);
    let y1 = Number(document.getElementById('y1').value);
    let x2 = Number(document.getElementById('x2').value);
    let y2 = Number(document.getElementById('y2').value);

    // Call Analyze Functions and Display results
    document.getElementById('length').innerHTML = getLength(x1, y1, x2, y2);
    // document.getElementById('slope').innerHTML = getSlope(x1, y1, x2, y2);
    // document.getElementById('description').innerHTML = getDescription(x1, y1, x2, y2);
    // document.getElementById('location-1').innerHTML = getPointLocation(x1, y1);
    // document.getElementById('location-2').innerHTML = getPointLocation(x2, y2);
    // document.getElementById('equation').innerHTML = getEquation(x1, y1, x2, y2);
}

// Line Analyzer Functions (Write your solutions here... getLength is done for you)

function getLength(x1, y1, x2, y2) {
    // Use pythagorean theorem to determine length from (x1, y1) to (x2, y2)
    let rise = y2 - y1;
    let run = x2 - x1;
    return (rise ** 2 + run ** 2) ** 0.5
}

