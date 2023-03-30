import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

const githubReposApiUrl = 'https://apis.ccbp.in/popular-repos?language='

class GithubPopularRepos extends Component {
  state = {language: languageFiltersData[0].id, reposList: [], isLoading: true}

  componentDidMount() {
    this.getRepos()
  }

  getRepos = async () => {
    this.setState({isLoading: true})
    const {language} = this.state

    const response = await fetch(`${githubReposApiUrl}${language}`)

    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.popular_repos.map(eachItem => ({
        name: eachItem.name,
        id: eachItem.id,
        issuesCount: eachItem.issues_count,
        forksCount: eachItem.forks_count,
        starsCount: eachItem.stars_count,
        avatarUrl: eachItem.avatar_url,
      }))

      this.setState({reposList: updatedData, isLoading: false})
    } else if (response.status === 401) {
      this.renderFailureView()
    }
  }

  onFilterBtn = id => {
    this.setState({language: id}, this.getRepos)
  }

  renderFailureView = () => {
    this.setState({isLoading: false})
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
          className="failure-img"
        />
      </div>
    )
  }

  renderRepoItems = () => {
    const {reposList} = this.state
    return (
      <div className="repo-items-list">
        {reposList.map(eachItem => (
          <RepositoryItem repoDetails={eachItem} key={eachItem.id} />
        ))}
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-con">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading, language} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-head">Popular</h1>
        <ul className="language-filter-con">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              details={eachItem}
              key={eachItem.id}
              onFilterBtn={this.onFilterBtn}
              isSelected={eachItem.id === language}
            />
          ))}
        </ul>
        <ul className="repo-components">
          {isLoading ? this.renderLoader() : this.renderRepoItems()}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
