import './index.css'

const LanguageFilterItem = props => {
  const {details, onFilterBtn, isSelected} = props
  const {id, language} = details

  const activeClass = isSelected ? 'active' : ''

  const onBtn = () => {
    onFilterBtn(id)
  }

  return (
    <li className="filter-btn-con">
      <button
        type="button"
        className={`filter-btn ${activeClass}`}
        onClick={onBtn}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
