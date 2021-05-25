import React from 'react';
import LargeBtn3 from '../../buttons/LargeBtn3/LargeBtn3';

const Featured = () => (
  <section className="featured">
    <h2>Featured</h2>
    <div className="featured__img-container">
      <div className="featured__img--item item1">
        <div className="featured__img-text">
          <h3>Project Del Sol</h3>
          <p>View All Projects</p>
        </div>
      </div>
      <div className="featured__img--item item2">
        <div className="featured__img-text">
          <h3>228B Tower</h3>
          <p>View All Projects</p>
        </div>
      </div>
      <div className="featured__img--item item3">
        <div className="featured__img-text">
          <h3>Le Prototype</h3>
          <p>View All Projects</p>
        </div>
      </div>
    </div>
    <div className="featured__btn-container">
      <LargeBtn3 text="See All" />
    </div>
  </section>
);

export default Featured;
