/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import Logo from './components/Logo/Logo';
import Button from './components/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import Card from './components/Card/Card';
import storeButtontTitles from './data/StoreButtonTitles';
import shopItems from './data/CardItems';
import OurStore from './components/OurStore/OurStore';
import navButtontTitles from './data/NavButtonTitles';
import phoneNumber from './data/PhoneNumber';
import Phone from './components/Phone/Phone';
import ShopBasket from './components/ShopBasket/ShopBasket';
import SectionWelcome from './components/SectionWelcome/SectionWelcome';
import SectionAbout from './components/SectionAbout/SectionAbout';
import buttonName from './data/ButtonName';
import banerText from './data/BanerText';
import Banner from './components/Banner/Banner';

const shopItemCountandPrice: number[] = [0, 0];
const App = () => {
  const [filteredItems, setFilteredItems] = useState(shopItems);
  const [searchBarValue, setSearchBarValue] = useState('');
  const [banerTitle, setBanerTitle] = useState(banerText);

  const randomColor = () => Math.floor(Math.random() * 7);

  useEffect(() => {
    randomColor();
  }, [filteredItems]);

  const [shopBasketValue, setShopBasketValue] = useState(shopItemCountandPrice);

  const itemFilter = (event: { target: { innerText: string } }) => {
    const value = event.target.innerText.toLowerCase();
    setSearchBarValue('');
    if (value === 'all') {
      setFilteredItems(shopItems);
      return;
    }

    const newShopItems = shopItems.filter((item) => item.type === value);
    setFilteredItems(newShopItems);
  };

  const searchFilter = (event: { target: { value: string } }) => {
    const value = event.target.value.toLowerCase();
    setSearchBarValue(value);

    if (value.trim() === '') {
      return setFilteredItems(shopItems);
    }

    const newSearch = shopItems.filter((item) => item.type.toLowerCase().includes(searchBarValue));
    return setFilteredItems(newSearch);
  };

  return (
    <div className="container">
      <header className="header">
        <Logo />
        <div className="nav__buttons">
          {navButtontTitles.map(({ buttonTitle }) => (
            <Button key={buttonTitle} onClick={() => null}>
              {buttonTitle}
            </Button>
          ))}
        </div>
        <Phone onClick={() => null}>{phoneNumber}</Phone>
        <ShopBasket onClick={() => null} value="0">
          {shopBasketValue.toString()}
        </ShopBasket>
      </header>
      <Banner text={banerTitle} style={randomColor} />
      <SectionWelcome onClick={() => null}>{buttonName}</SectionWelcome>
      <SectionAbout onClick={() => null}>{buttonName}</SectionAbout>
      <OurStore />
      <div className="store__buttons">
        {storeButtontTitles.map(({ buttonTitle }) => (
          <Button key={buttonTitle} onClick={itemFilter}>
            {buttonTitle}
          </Button>
        ))}
      </div>
      <SearchBar onChange={searchFilter} value={searchBarValue} />
      <div className="card__wrapper">
        {filteredItems.map(({
          title, price, imgSrc, type, itemId,
        }) => (
          <Card
            key={itemId}
            type={type}
            imgSrc={imgSrc}
            title={title}
            price={price}
            onClick={() => {
              shopItemCountandPrice[0] += 1;
              shopItemCountandPrice[1] += price;
              setShopBasketValue([...shopItemCountandPrice]);
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
