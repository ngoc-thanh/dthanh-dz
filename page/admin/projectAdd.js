import axios from "axios";
import { router, useEffect, useState } from "../../lib"
import { getCategories } from "./config/categories";
import { addProjects } from "./config/projects";

const projectAdd = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        getCategories().then(({ data }) => setCategory(data));
    }, [])
    useEffect(() => {
        const form = document.querySelector(".form-group");
        const formName = document.querySelector("#form-name");
        const formUrl = document.querySelector("#form-url");
        const formImg = document.querySelector(".form-img");
        const formImgs = document.querySelector(".form-imgs");
        const formCate = document.querySelector("#my-select");
        const formDate = document.querySelector(".form-date");
        const dsc = document.querySelector(".dsc");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const urls = await uploadFiles(formImg.files)
                const urls_Gallery = await uploadFiles(formImgs.files)
                const newProject = {
                    name: formName.value,
                    url: formUrl.value,
                    gallery: urls,
                    galleryProjects: urls_Gallery,
                    categoryId: parseInt(formCate.value),
                    date: formDate.value,
                    description: dsc.value,
                }
                addProjects(newProject).then(() => {
                    router.navigate("/admin/projectAdmin")
                })
            } catch (error) {
                console.error(error);
            }
        })
    })
    const uploadFiles = async (files) => {
        if (files) {
            const cloud_Name = "dce7zgzuf";
            const preset_Name = "projects";
            const folder_Name = "ECMA";
            const urls = [];
            const api = ` https://api.cloudinary.com/v1_1/${cloud_Name}/image/upload`;

            const formData = new FormData();
            formData.append("upload_preset", preset_Name);
            formData.append("folder", folder_Name);

            for (const file of files) {
                formData.append("file", file);

                const response = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                urls.push(response.data.secure_url);
            }
            return urls;
        }
    }
    return `
    <form class="form-group container">
        <label for="form-name"><h1>ADD PROJECT</h1></label>
        <div>Name:</div>   
        <input type="text" class="form-control" id="form-name">
        <div>Url:</div>   
        <input type="url" class="form-control" id="form-url" placeholder="https://******@.com"
        pattern="https://.*" size="30">
        <div>Image:</div>   
        <input type="file" class="form-img">
        <div>Gallery project:</div>   
        <input type="file" class="form-imgs" multiple>
        <div>Category:</div>   
        <div class="btn-group-toggle" data-toggle="buttons">
        <select id="my-select" class="form-control" name="">
            ${category.map((item) => `
                <option value="${item.id}">${item.name}</option>
            `).join("")}
        </select>
        </div>
        <div>Date:</div>   
        <input type="date" class="form-date">
        <div>Description:</div>   
        <textarea name="" id="dsc" cols="30" rows="10" class="dsc"></textarea>      
        <button class="btn btn-success">ADD</button>
        </form>
        `
}

export default projectAdd;
