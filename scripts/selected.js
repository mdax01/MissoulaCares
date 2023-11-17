

function onPageLoad(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const resource = urlParams.get('entry');
    
    var select = document.getElementById("selectedResource");
    var entry = getEntryById(resource);
    select.textContent=entry.name;
    var website = document.getElementById("website");
    website.innerHTML = "<a href='" + entry.website +"' target='_blank'>" + entry.website + "</a>";
    var address = document.getElementById("address");
    address.textContent = entry.address;
    var description = document.getElementById("description");
    description.textContent = entry.description;
    var phone = document.getElementById("phone");
    phone.textContent = entry.phone;
}

function getEntryById(id){
    for(let i=0; i < entries.length; i++){
        if(entries[i].id == id){
            return entries[i];
        }
    }
    return null;
}