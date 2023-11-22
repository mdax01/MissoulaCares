var pageTitle = "Missoula Resources";
var pageDescription = "We care about you!";
var resourceTypes = ['anything'];

function onPageLoad() {
    var old_tbody = document.getElementById("resourceTableBody");
    var newTableBody = loadTable(entries, true);
    old_tbody.parentNode.replaceChild(newTableBody, old_tbody);

    var select = document.getElementById("resourceSelect");

    resourceTypes.sort(); // Sort resourceTypes alphabetically

    for (let i = 0; i < resourceTypes.length; i++) {
        var opt = document.createElement("option");
        opt.value = resourceTypes[i].toLowerCase();
        opt.innerHTML = resourceTypes[i].toUpperCase();
        select.append(opt);
    }

    setPageDetails();
}

function getResourceTypes(element) {
    for (let j = 0; j < element.keywords.length; j++) {
        var resource = element.keywords[j];
        if (!resourceTypes.includes(resource)) {
            resourceTypes.push(resource);
        }
    }
}

// Sort resourceTypes alphabetically before using it
resourceTypes.sort();

function loadTable(valueArray, initialLoad) {
    // Sort valueArray alphabetically by name
    valueArray.sort((a, b) => a.name.localeCompare(b.name));

    var new_tbody = document.createElement('tbody');
    new_tbody.setAttribute("id", "resourceTableBody");

    for (let index = 0; index < valueArray.length; index++) {
        var element = valueArray[index];
        var row = new_tbody.insertRow(index);
        row.setAttribute("class", index % 2 == 0 ? "evenRow" : "oddRow");
        var nameCell = row.insertCell(0);
        var descriptionCell = row.insertCell(1);
        var phoneCell = row.insertCell(2); // Added cell for phone number

        if (initialLoad) {
            getResourceTypes(element);
        }

        nameCell.innerHTML = "<h3><a href='display.html?entry=" + element.id + "' target='_blank'>" + element.name + "</a></h3>";
        descriptionCell.innerHTML = element.description;

        // Add a phone link to the row
      
    }

    return new_tbody;
}

function createPhoneLink(phoneNumber) {
    var phoneLink = document.createElement('a');
    phoneLink.href = "tel:" + phoneNumber;
    phoneLink.textContent = phoneNumber;
    return phoneLink;
}

function updateGrid() {
    var select = document.getElementById("resourceSelect");
    var value = select.value;
    var filteredOptions = [];

    if (value == 'anything') {
        filteredOptions = entries;
    }

    for (let i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (entry.keywords.includes(value)) {
            filteredOptions.push(entry);
        }
    }

    var newTableBody = loadTable(filteredOptions, false);
    var old_tbody = document.getElementById("resourceTableBody");

    old_tbody.parentNode.replaceChild(newTableBody, old_tbody);
}
