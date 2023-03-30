import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoDetails

  return (
    <div className="repo-item">
      <img src={avatarUrl} alt={name} className="avatar-icon" />
      <h1 className="repo-name">{name}</h1>
      <div className="repo-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="r-icon"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="repo-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="r-icon"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="repo-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="r-icon"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </div>
  )
}

export default RepositoryItem
