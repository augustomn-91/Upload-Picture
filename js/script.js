const area_drop = document.querySelector(".area");
const button = area_drop.querySelector("button");
const input_file = area_drop.querySelector("input");

let file;

button.onclick = () => {
    input_file.click();
}

input_file.addEventListener('change', function(){
    file = this.files[0];
    console.log(file);
    FileShow();
    area_drop.classList.add('inside_area');
});

area_drop.addEventListener('dragover', (event) => {
    event.preventDefault();
    area_drop.classList.add('inside_area');
});

area_drop.addEventListener('dragleave', () => {
    area_drop.classList.remove('inside_area');
});

area_drop.addEventListener('drop', (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    FileShow();
});

function FileShow() {
    let file_type = file.type;
    let valid_extensions = ['image/jpeg', 'image/png', 'image/jpg'];

    if (valid_extensions.includes(file_type)){

        let file_reader = new FileReader();

        file_reader.onload = () => {
            let file_url = file_reader.result;
            area_drop.innerHTML = `<img src="${file_url}">`;
        };

        file_reader.readAsDataURL(file);

    } else {
        alert('Somente serão aceitas as extensões JPEG, PNG e JPG');
        area_drop.classList.remove('inside_area');
    }
}