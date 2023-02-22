import instance from "./config";
const getAbouts = ()=>{
    return instance.get("/abouts");
}
const getAbout= (id)=>{
    return instance.get(`projects/${id}`);
}
const addAbouts=(about)=>{
    return instance.post(`/about/`,about);
}
const editAbouts =(about)=>{
    return instance.put(`/about/${about.id}`,about);
}
const deleteAbouts =(id)=>{
    return instance.delete(`about/${id}`)
}

export{getAbouts,getAbout,addAbouts,editAbouts,deleteAbouts};