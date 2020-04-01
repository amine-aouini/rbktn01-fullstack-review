import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {
      props.repos.map((repo, i) => {
        if (i <= 25) {
          return (
            <div className={repo.fullname} key={i}>
              <hr></hr>
              <h4><a href={repo.url}>{repo.reponame}</a></h4>
            </div>
          )
        }

      })
    }
  </div>
)

export default RepoList;