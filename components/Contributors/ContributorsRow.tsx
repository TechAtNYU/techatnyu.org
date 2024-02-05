import React from 'react';
import styles from "./ContributorsRow.module.scss";

type Contributor = {
  name: string;
  url: string;
};

type ContributorsRowProps = {
  contributors: Contributor[];
};

const ContributorsRow: React.FC<ContributorsRowProps> = ({ contributors }) => {
  return (
    <div className={styles.contributorsRow}> {/* Scoped CSS class */}
      {contributors.map((contributor, index) => (
        <span key={index} className={styles.contributor}> {/* Scoped CSS class */}
          <a href={contributor.url} target="_blank" rel="noopener noreferrer">
            {contributor.name}
          </a>
        </span>
      ))}
    </div>
  );
};

export default ContributorsRow;
