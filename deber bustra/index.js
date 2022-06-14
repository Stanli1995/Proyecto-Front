const apiURL = "https://bp-marvel-api.herokuapp.com";
const paramsRequest = {
    idAuthor: 18
}
const axiosData = axios.get(apiURL + "/marvel-characters", {
        params : {
            ...paramsRequest
        }
    }).then(response => {
        console.log(response)
        return response;
    })
    
const axiosPost = (data) => axios.post(apiURL + "/marvel-characters?idAuthor=" + paramsRequest.idAuthor, 
        data
    ).then((response) => {
        console.log(response);
    }).catch(function (error) {
        console.log(error.response.data.message);
    });

const axiosDelete = (idCharacter) => axios.delete(apiURL + "/marvel-characters/" + idCharacter + "?idAuthor=" + paramsRequest.idAuthor)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error.response.data.message);
    });

const updateMarvelList = async () => {
    var json = await axiosData;
    var elemt_container = document.querySelector('.container-list')
    elemt_container.innerHTML = '';
    for (let index = 0; index < json.data.length; index++) {
        const element = json.data[index];
        var newIndex = index + 1;
        elemt_container.innerHTML += `
        <div class="card mb-3 character-${newIndex}">
            <div class="row g-0">
                <div class="col-md-2">
                <img src="${json.data[index].image}" class="img-fluid rounded-start" alt="${json.data[index].title}">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${json.data[index].title}</h5>
                    <p class="card-text">${json.data[index].body}</p>=
                </div>
                </div>
                <div class="col-md-2 m-auto">
                <button id="button-${json.data[index]._id}" type="button" class="btn btn-outline-danger option-button delete-character">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
                </div>
            </div>
        </div>
        `;    
    }
}

function showElement(id){
    document.getElementById(id).style.display = "";
}

function hideElement(id){
    document.getElementById(id).style.display = "none";
}

window.addEventListener("DOMContentLoaded", async function (event){
    await updateMarvelList();
    let showButton = document.getElementById("add-character");
    let hideButton = document.getElementById("hide-form");
    let saveButton = document.getElementById("save-form");
    let deleteButtons = document.getElementsByClassName("delete-character");
    showButton.addEventListener("click", function(event){
        event.preventDefault();
        showElement("new-character")
    })
    hideButton.addEventListener("click", function (event){
        event.preventDefault();
        document.getElementById("nameCharacter").value = "";
        document.getElementById("descriptionCharacter").value = "";
        document.getElementById("imageCharacter").value = "";
        hideElement("new-character")
    })
    saveButton.addEventListener("click", async function(event){
        event.preventDefault();
        let name = document.getElementById("nameCharacter");
        let description = document.getElementById("descriptionCharacter");
        let image = document.getElementById("imageCharacter");
        let data = {
            "title": name.value,
            "body": description.value,
            "image": image.value,
            ...paramsRequest,
            "category": "main",
        }
        console.log(data);
        await axiosPost(data);
        hideButton.click;
    })
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", async function(event){
            event.preventDefault();
            let idCharacter = deleteButtons[i].id.split("-")[1]
            await axiosDelete(idCharacter);
        })
    }
});