import "./css/style.css"
import "./css/todoListItem.css"
import "./css/createProjectForm.css"
import "./css/sidebar.css"
import "./css/badges.css"
import "./css/header.css"
import "./css/componentMainContent.css"
import "./css/singleTodoDiv.css"
import "./css/newTodoForm.css"
import "./js/ui/footer/footer"
import "./js/ui/sidebar/projects"
import "./js/ui/main_content/displayProjectDetails"
import "./js/ui/sidebar/newToDoForm/newTodoForm"
import "./js/ui/components/floatingActionButton"
import { displayProjectDetails } from "./js/ui/main_content/displayProjectDetails";
import { initProjectForm } from "./js/ui/sidebar/newProject/newProject";
import { updateDisplay } from "./js/ui/events/updateDisplay";
import { loadFromLocalStorage, saveToLocaleStorage } from "./js/DataStore/localStorage";
import createProject from "./js/model/toDoProject/toDoProjectOperations"

if (!localStorage.getItem(1)) {
    const DEFAULT_PROJECT = createProject('Default');
    saveToLocaleStorage(DEFAULT_PROJECT.id, JSON.stringify(DEFAULT_PROJECT))
};


loadFromLocalStorage()
displayProjectDetails(1)
initProjectForm();
updateDisplay()


