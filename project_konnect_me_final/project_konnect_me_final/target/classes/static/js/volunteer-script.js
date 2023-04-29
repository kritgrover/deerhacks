function search() {
    // Declare variables
    let input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("myTable");
    let tr = table.getElementsByTagName("tr");
    let noResults = document.getElementById("noResults");

    // Loop through all table rows, and hide those who don't match the search query
    let found = false;
    for (let i = 0; i < tr.length; i++) {
        let name = tr[i].getElementsByTagName("td")[0];
        let timing = tr[i].getElementsByTagName("td")[1];
        if (name && timing) {
            let nameValue = name.textContent || name.innerText;
            let timingValue = timing.textContent || timing.innerText;
            if (nameValue.toUpperCase().indexOf(filter) > -1 || timingValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                found = true;
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    // Display error message if no matches found
    if (!found) {
        noResults.innerHTML = "No results found.";
    } else {
        noResults.innerHTML = "";
    }
}
