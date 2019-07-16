document.getElementById("output").style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function (e) {
    document.getElementById("output").style.visibility = 'visible';
    let libras = e.target.value;
    console.log(libras);

    document.getElementById("gramasOutput").innerHTML = libras / 0.0022046;
    document.getElementById("kgOutput").innerHTML = libras / 2.2046;
    document.getElementById("ozOutput").innerHTML = libras * 16;


});

