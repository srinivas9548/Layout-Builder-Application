import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-controller-container">
          <div className="configuration-controller-context">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-group-container">
              <div className="checkbox-and-label-container">
                <input
                  type="checkbox"
                  id="content"
                  className="input-checkbox"
                  onChange={onChangeContent}
                  checked={showContent}
                />
                <label htmlFor="content" className="label-text">
                  Content
                </label>
              </div>

              <div className="checkbox-and-label-container">
                <input
                  type="checkbox"
                  id="leftNavbar"
                  className="input-checkbox"
                  onChange={onChangeLeftNavbar}
                  checked={showLeftNavbar}
                />
                <label htmlFor="leftNavbar" className="label-text">
                  Left Navbar
                </label>
              </div>

              <div className="checkbox-and-label-container">
                <input
                  type="checkbox"
                  id="rightNavbar"
                  className="input-checkbox"
                  onChange={onChangeRightNavbar}
                  checked={showRightNavbar}
                />
                <label htmlFor="rightNavbar" className="label-text">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
