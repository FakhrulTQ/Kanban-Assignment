import Dexie from 'dexie';

const db = new Dexie('taskDb');
db.version(1).stores({
  tasks: '++id, title, desc, type', // Primary key and indexed props
});

export default db