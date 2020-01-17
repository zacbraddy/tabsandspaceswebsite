import React from 'react'

import studyHeader from '../assets/images/study.jpg'
import quitHeader from '../assets/images/quit.jpg'
import interviewHeader from '../assets/images/interview.jpg'

class EpisodeList extends React.Component {
  render() {
    // We should totally read these from config, when in production
    let latest = [
        {
            name : "Different learning styles",
            subtitle : "In which we argue about whether there is more than one way to learn something.",
            image: studyHeader,
            altText: "Photo by Marvin Meyer on Unsplash - https://unsplash.com/photos/SYTO3xs06fU",
            imageSource: "Photo by Marvin Meyer on Unsplash - https://unsplash.com/photos/SYTO3xs06fU"
        },
        {
            name: "Should I stay or should I go?",
            subtitle: "Identifying toxic workplaces and identifying the best times to move to get the most out of your career",
            image: quitHeader,
            altText: "Photo by Romain V on Unsplash - https://unsplash.com/photos/ndfQe4ZR_qg",
            imageSource: "Photo by Romain V on Unsplash - https://unsplash.com/photos/ndfQe4ZR_qg"
        },
        {
            name: "Interviews - how, what, and where?",
            subtitle: "You've landed the interview; now what? We'll tell you what!",
            image: interviewHeader,
            altText: "Photo by Van Tay Media on Unsplash - https://unsplash.com/photos/TFFn3BYLc5s",
            imageSource: "Photo by Van Tay Media on Unsplash - https://unsplash.com/photos/TFFn3BYLc5s"
        }
    ];
    return (
        <section id="latest-episodes" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>The latest episodes</h2>
              </header>
              <p>
                Here is a list of the three latest episodes of the podcast
              </p>
            </div>
            {
                latest.map((ep) => {
                    return (
                        <div className="col-4">
                        <span className="image fit">
                          <img src={ep.image} alt={ep.altText} />
                        </span>
                        <h3>{ep.name}</h3>
                        <p>
                          {ep.subtitle}
                        </p>
                        <ul className="actions">
                          <li>
                            <a href="#" className="button">
                              More
                            </a>
                          </li>
                        </ul>
                      </div>
                    );
                })
            }
          </div>
        </section>
    )
  }
}

export default EpisodeList