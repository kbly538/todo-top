import { getTodaysTodos, getWeeksTodos } from "../sidebar/newProject/inProgress";
import { updateProjectList } from "../sidebar/projects";

export const updateDisplay = ()=>{
    document.querySelector('.today.todos > span').textContent = getTodaysTodos().length;
    document.querySelector('.week.todos > span').textContent = getWeeksTodos().length;
    updateProjectList();
}