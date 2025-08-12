import { memo } from 'react';
import PageNavigator from '../navigator/pageNavigator';
import Title from '../navigator/title';
import CategoryMapping from '../category/CategoryMapping';

const CategoryPage = () => {
  return (
    <section>
      <div className='container'>
        <PageNavigator/>
        <Title title='Каталог' className={"text-[64px]"}/>
        <CategoryMapping/>
      </div>
    </section>
  );
};

export default memo(CategoryPage);