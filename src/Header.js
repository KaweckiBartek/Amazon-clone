import "./style/header.css"

const Header = () => {
  return (
    <div className="header">
      <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="header__logo" />

      <div
        className="header__search">
        <input type="text"
          className="header__searchInput"

        />
        {/* logo */ }
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__option">

        </div>

      </div>

    </div>
  )
}

export default Header
