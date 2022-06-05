import app from './app.js';

import { connectToMongoDB } from './database/databases.js';


async function main() {
    await connectToMongoDB();
    
    app.listen(app.get('port'), () => {
        console.log(`Listening on port ${app.get('port')}`);
    });
}
  
main();


