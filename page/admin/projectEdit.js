import axios from "axios"
import { router, useEffect, useState } from "../../lib"
import { getCategories } from "./config/categories"
import { editProjects, getProject } from "./config/projects"
const projectEdit = ({ id }) => {
    const [projects, setProjects] = useState({})
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/projects/${id}?_embed=categories`)
            .then(({ data }) => setProjects(data))
    }, [])
    useEffect(() => {
        getCategories().then(({ data }) => setCategories(data))
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
                const urls_Projects = await uploadFiles(formImgs.files)
                const newProject = {
                    id,
                    name: formName.value,
                    url: formUrl.value,
                    galleryProjects: urls_Projects.length > 0 ? urls_Projects : projects.galleryProjects,
                    gallery: urls.length > 0 ? urls : projects.gallery,
                    categoryId: formCate.value,
                    date: formDate.value,
                    description: dsc.value
                }
                await editProjects(newProject);
                router.navigate("/admin/projectAdmin")
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

            const formData = new FormData(); //key: value
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
        <label for="form-name"><h1>EDIT PROJECT</h1></label>
        <div>Name:</div>   
        <input type="text" class="form-control" id="form-name" value="${projects.name}"> 
        <div>Url:</div>   
        <input type="url" class="form-control" id="form-url" value="${projects.url}"> 
        <div>Image:</div>   
        <input type="file" class="form-img"/>
        <img src="${projects.gallery && `${projects.gallery}`}" alt="preview"  width="150px" height="150px"/>
        <div>Gallery project:</div>   
        <input type="file" class="form-imgs" multiple>
        <div class="gallery" style="display:flex">
        ${projects.galleryProjects && projects.galleryProjects.map((item) =>
        `<img src="${item}" height="75px" width="75px"></img>`
    )}
        </div>
        <div>The loai:</div>   
        <select id="my-select" class="form-control" name="" value="${projects.categoryId}">
        ${categories.map((item) => `
            <option value="${item.id}" ${item.id == projects.categoryId ? 'selected' : ''}>${item.name}</option>
        `)}
        </select>
        <div>Ngay tao:</div>   
        <input type="date" class="form-date" value="${projects.date}">
        <div>mo ta:</div>   
        <textarea name="" id="dsc" cols="30" rows="10" class="dsc">${projects.description}</textarea>      
        <button class="btn btn-success">UPDATE</button>
        </form>
        `
}

export default projectEdit;
