import Nav from "../components/nav";

import Footer from "../components/footer";

export default function About() {
  return (
    <div>
      <Nav />
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl">This is the about page</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
