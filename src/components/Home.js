import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://confident-elion-19171d.netlify.app/Cosmo.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5" "col-xs-2">
            <h1 class="font-weight-light">What is Cosmophenomenology?</h1>
            <p>
            An approach that extends the traditional phenomenology of Edmund Husserl to include the relation
             between human beings and reality as a whole (nature) from the point of view of the universe, 
             rather than simply human-to-human relations. The book integrates phenomenology with speculative theoretical physics.
             </p>
          </div>
          <div class="col-lg-5" "col-xs-2">
            <h1 class="font-weight-light">Why Use Cosmophenomenology?</h1>
            <p>
            The approach is non-speciesist and non-anthropocentric and supports sustainable ecological practices.
            </p>
          </div>
          <div class="col-lg-5" "col-xs-2">
            <h1 class="font-weight-light">Is Cosmophenomenology Interdisciplinary?</h1>
            <p>
            Yes, the approach can be integrated alongside speculative theoretical physics and non-classical quantum physics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
