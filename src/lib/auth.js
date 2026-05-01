import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";



const client = new MongoClient(process.env.MONGO_DB);
const db = client.db('dragon-news');

<<<<<<< HEAD
=======

>>>>>>> b31291259ec018a62472b46dad0e718f8eba80b7

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
<<<<<<< HEAD
  emailAndPassword: { 
    enabled: true, 
  },
});
=======
});
>>>>>>> b31291259ec018a62472b46dad0e718f8eba80b7
