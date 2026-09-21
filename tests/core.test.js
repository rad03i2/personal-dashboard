import test from 'node:test';import assert from 'node:assert/strict';import {emptyState,loadState,addTask,toggleTask,addHabit,toggleHabitToday,addFocus,stats,exportState,importState,sanitizeText} from '../src/core.js';
test('invalid storage falls back safely',()=>assert.deepEqual(loadState('{bad'),emptyState()));
test('task lifecycle works',()=>{let s=addTask(emptyState(),' Ship release ');assert.equal(s.tasks[0].title,'Ship release');s=toggleTask(s,s.tasks[0].id);assert.equal(s.tasks[0].done,true)});
test('habit toggles for specified day',()=>{let s=addHabit(emptyState(),'Walk');const id=s.habits[0].id;s=toggleHabitToday(s,id,'2026-09-21');assert.deepEqual(s.habits[0].dates,['2026-09-21']);s=toggleHabitToday(s,id,'2026-09-21');assert.deepEqual(s.habits[0].dates,[])});
test('focus validates and accumulates',()=>{let s=addFocus(emptyState(),25);assert.equal(s.focusMinutes,25);assert.throws(()=>addFocus(s,0))});
test('stats are deterministic',()=>{let s=addTask(emptyState(),'A');s=toggleTask(s,s.tasks[0].id);s=addHabit(s,'Read');s=toggleHabitToday(s,s.habits[0].id,'2026-09-21');assert.deepEqual(stats(s,'2026-09-21'),{openTasks:0,completedTasks:1,habitsDone:1,habitsTotal:1,focusMinutes:0})});
test('backup round trip',()=>{const s=addTask(emptyState(),'Backup me');const restored=importState(exportState(s));assert.equal(restored.tasks[0].title,'Backup me');assert.throws(()=>importState('{"schema":2,"data":{}}'))});
test('text is trimmed and bounded',()=>assert.equal(sanitizeText('  abc  ',2),'ab'));
