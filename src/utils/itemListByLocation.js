import navCrypto from '../../content/crypto-block/nav.yml';
import navNerv from '../../content/nerv-first/nav.yml';

const itemList1 = navCrypto.map(item => ({
  ...item,
  directory: 'crypto-block'
}));

const itemList2 = navNerv.map(item => ({
  ...item,
  directory: 'nerv-first'
}));

const itemListByLocation = location => {
  const courseId = location.pathname.split('/')[1];
  if (courseId === 'nerv-first') {
    return itemList2;
  }
  return itemList1;
};

export { itemListByLocation };
