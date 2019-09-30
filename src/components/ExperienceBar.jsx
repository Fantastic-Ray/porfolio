import React, { Component } from "react";

import "../flipCard.css";
export default class ExperienceBar extends Component {
  render() {
    return (
      <div>
        <h2>Education:</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" />
            <div className="flip-card-back">
              <h4>University of California, San Diego (UCSD) 2013-2016</h4>
              <p>Major: Comptuer Science</p>
            </div>
          </div>
        </div>

        <h2>Experience</h2>
        <h4>Web Developer & E-Commerce Manager</h4>
        <ul>
          <li>
            <strong>Management APP development</strong> - Developing Web tool
            with HTML, JavaScript, jQuery, php, Firebase(NoSQL Database) and
            Google Spreadsheet API, which helps my co-workers collecting sales
            data and generating reports easier and saves{" "}
            <strong>50+ hours</strong> per month for everyone.
          </li>
          <li>
            <strong>Website design optimization</strong> - Optimized company
            website's user experience and increased the sessions of view by{" "}
            <strong>38%</strong>.
          </li>
        </ul>
        <h4>Data Collection and Analysis</h4>
        <ul>
          <li>
            <strong>Sales data analysis</strong> - Visualize the sales and
            profit data and find the optimized price for maximizing the revenue
            which has increased <strong>26%</strong>.
          </li>
        </ul>
        <h4>E-Commerce SEO</h4>
        <ul>
          <li>
            Performing ongoing keyword research including discovery and
            expansion of keyword opportunities. Increased views by{" "}
            <strong>23%</strong> of the website.
          </li>
          <li>Use Google Analytics to analyze website sessions.</li>
        </ul>
      </div>
    );
  }
}
