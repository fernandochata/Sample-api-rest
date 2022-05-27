import app from './app.js';

import {connectToDB} from './database/database.js';


async function main() {
    await connectToDB();
    
    app.listen(3000, () => {
        console.log('Listening on port 3000');
    });
}
  
main();


