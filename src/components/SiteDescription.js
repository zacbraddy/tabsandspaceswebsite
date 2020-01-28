import React from 'react';

export default () => (
        <section id="show-description" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
                  <span className="icon style4 major fa-cog"></span>
                </li>
              <header className="major">
                <h2>{siteDescription}</h2>
              </header>
              <p>
                {siteTitle} is a podcast put together by three developers with
                over 30 years of collective experience in software development.
                We're here to tell you what we really think about the difficult
                problems that face software developers throughout their career
                and we promise that we won't always agree!
              </p>
            </div>
          </div>
        </section>
);
