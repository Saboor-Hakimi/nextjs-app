import { useState } from "react";

// import nav component
import Nav from "../components/nav";

import Footer from "../components/footer";

export default function Uploads() {
  // get the apiToken from the environment
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  // get the uploads from the backend
  const [uploads, setUploads] = useState([]);

  // call the backend to get the uploads inside a function
  const getUploads = async () => {
    const response = await fetch(`${backendUrl}/api/users`, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }).then((res) => res.json());
    setUploads(response);
  };

  return (
    <div>
      <Nav />
      {/* tailwind horizontally and vertically center div */}
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          {/* a center primary tailwind button that triggers the getUploads */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
            onClick={getUploads}
          >
            Get Users
          </button>

          {/* a list of all users */}
          <ul>
            {uploads.map((upload) => (
              <li key={upload.id}>
                {/* the name of the upload */}
                <p>
                  user name: <code>{upload.username}</code>
                </p>

                {/* the email of the upload */}
                <p>
                  user email: <code> {upload.email}</code>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
