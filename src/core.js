export const STORAGE_KEY = 'personal-dashboard:v1';
export const emptyState = () => ({tasks:[],notes:[],habits:[],focusMinutes:0,updatedAt:null});
export function sanitizeText(v,max=500){return String(v??'').trim().slice(0,max)}
export function loadState(raw){try{const x=JSON.parse(raw); if(!x||typeof x!=='object') return emptyState(); return {tasks:Array.isArray(x.tasks)?x.tasks:[],notes:Array.isArray(x.notes)?x.notes:[],habits:Array.isArray(x.habits)?x.habits:[],focusMinutes:Number.isFinite(x.focusMinutes)?Math.max(0,x.focusMinutes):0,updatedAt:x.updatedAt||null}}catch{return emptyState()}}
export function addTask(state,title){title=sanitizeText(title,160);if(!title)throw new Error('Task title is required');return {...state,tasks:[...state.tasks,{id:crypto.randomUUID(),title,done:false,createdAt:new Date().toISOString()}]}}
export function toggleTask(state,id){return {...state,tasks:state.tasks.map(t=>t.id===id?{...t,done:!t.done}:t)}}
export function removeTask(state,id){return {...state,tasks:state.tasks.filter(t=>t.id!==id)}}
export function addNote(state,text){text=sanitizeText(text,2000);if(!text)throw new Error('Note text is required');return {...state,notes:[{id:crypto.randomUUID(),text,createdAt:new Date().toISOString()},...state.notes]}}
export function removeNote(state,id){return {...state,notes:state.notes.filter(n=>n.id!==id)}}
export function addHabit(state,name){name=sanitizeText(name,100);if(!name)throw new Error('Habit name is required');return {...state,habits:[...state.habits,{id:crypto.randomUUID(),name,dates:[]}]}}
export function toggleHabitToday(state,id,today=new Date().toISOString().slice(0,10)){return {...state,habits:state.habits.map(h=>{if(h.id!==id)return h;const dates=h.dates.includes(today)?h.dates.filter(d=>d!==today):[...h.dates,today];return {...h,dates}})}}
export function removeHabit(state,id){return {...state,habits:state.habits.filter(h=>h.id!==id)}}
export function addFocus(state,minutes){minutes=Number(minutes);if(!Number.isFinite(minutes)||minutes<=0||minutes>1440)throw new Error('Focus minutes must be between 1 and 1440');return {...state,focusMinutes:state.focusMinutes+Math.round(minutes)}}
export function stats(state,today=new Date().toISOString().slice(0,10)){return {openTasks:state.tasks.filter(t=>!t.done).length,completedTasks:state.tasks.filter(t=>t.done).length,habitsDone:state.habits.filter(h=>h.dates.includes(today)).length,habitsTotal:state.habits.length,focusMinutes:state.focusMinutes}}
export function exportState(state){return JSON.stringify({schema:1,exportedAt:new Date().toISOString(),data:state},null,2)}
export function importState(raw){const x=JSON.parse(raw);if(x?.schema!==1||!x.data)throw new Error('Unsupported backup format');return loadState(JSON.stringify(x.data))}
