
var pageTitle = "Missoula Resources";
var pageDescription = "We care about you!"



var resourceTypes = ['anything'];

function onPageLoad(){
    
    var old_tbody = document.getElementById("resourceTableBody");
    var newTableBody = loadTable(entries, true);
    old_tbody.parentNode.replaceChild(newTableBody, old_tbody);
    
    var select = document.getElementById("resourceSelect");
    
    for(let i=0; i < resourceTypes.length; i++){
        var opt = document.createElement("option");
        opt.value = resourceTypes[i].toLowerCase();
        opt.innerHTML = resourceTypes[i].toUpperCase();
        select.append(opt);
    }

    setPageDetails();
}

function setPageDetails(){
    var title = document.getElementById("pageTitle");
    title.textContent = pageTitle;

    var description = document.getElementById("pageDescription");
    description.textContent = pageDescription;
}

function getResourceTypes(element){
    for(let j=0; j < element.keywords.length; j++){
        var resource = element.keywords[j];
        if(!resourceTypes.includes(resource)){
            resourceTypes.push(resource);
        }
    }
    resourceTypes.sort();
}

function loadTable(valueArray, initialLoad){
    var new_tbody = document.createElement('tbody');
    new_tbody.setAttribute("id", "resourceTableBody");
    for( let index=0; index < valueArray.length; index++){
        var element = valueArray[index];
        var row = new_tbody.insertRow(index);
        row.setAttribute("class", index%2==0?"evenRow":"oddRow");
        var nameCell = row.insertCell(0);
        var descriptionCell = row.insertCell(1);

        if(initialLoad){
            getResourceTypes(element);
        }

        nameCell.innerHTML = "<span style="width:50%"><a href='display.html?entry="+ element.id +"' target='_blank'>" +element.name+ "</a></span>";
        descriptionCell.innerHTML = element.description;
    }

    return new_tbody;
}

function updateGrid(){
    var select = document.getElementById("resourceSelect");
    var value = select.value;
    var filteredOptions = [];
    if(value == 'anything'){
        filteredOptions = entries;
    }

    for(let i=0; i<entries.length; i++){
        var entry = entries[i];
        if(entry.keywords.includes(value)){
            filteredOptions.push(entry);
        }
    }

     var newTableBody = loadTable(filteredOptions, false);
     var old_tbody = document.getElementById("resourceTableBody");

     old_tbody.parentNode.replaceChild(newTableBody, old_tbody);
}