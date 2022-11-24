import Project from "../model/toDoProject/todoProject";
import createProject from "../model/toDoProject/toDoProjectOperations";
import { alertificate } from "../utils/alert/alertificate";

export const saveToLocaleStorage = (key, val) =>  {
    try {
        localStorage.setItem(key, val);
        alertificate('Saved the item to local storage', 'confirm');
    } catch {
        alertificate('En error occured');
    }
    
};


export const loadFromLocalStorage = () => {
    if (localStorage.length === 0) return;


    for (let i in localStorage){
        let currentItem = JSON.parse(localStorage.getItem(i));
        try {
            if(currentItem.type === 'project'){
                 let x = Object.assign(createProject(currentItem.title), currentItem)
                 saveToLocaleStorage(currentItem.id, JSON.stringify(x));
                 console.log('saved ', x.title)
            } else if (currentItem.type === 'todo'){
                console.log("from try catch")
            }
        } catch (e){
            console.log()
        }
    }
};