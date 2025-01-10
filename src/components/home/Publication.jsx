import React from "react";

const Publications = ({ heading, sections }) => {
  return (
    <div 
      id="publications" 
      className="m-0 p-5 d-flex justify-content-center align-items-center flex-column" 
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div style={{ maxWidth: "800px", textAlign: "center" }}>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="pb-5">
            <h3 className="pb-3">{section.subheading}</h3>
            <ul className="list-unstyled">
              {section.papers.map((paper, paperIndex) => (
                <React.Fragment key={paperIndex}>
                  <li className="pb-3">
                    <div>
                      <a 
                        href={paper.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-decoration-none"
                      >
                        {paper.title}
                      </a>
                    </div>
                    <br /> {/* Add a line break after the title */}
                    {paper.description && (
                      <div
                        className="text-muted"
                        dangerouslySetInnerHTML={{ __html: paper.description }}
                      ></div>
                    )}
                  </li>
                  {paperIndex < section.papers.length - 1 && <hr />} {/* Add a divider except after the last paper */}
                </React.Fragment>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
