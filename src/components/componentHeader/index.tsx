import { memo, type FC } from "react";
import Navigator from "../navigator/navigator";
import Title from "../navigator/title";

interface Props {
  title:string,
  navigatorTitle:string
  className:any
  NavigatorclassName:any
  to:string
}


const ComponentHeader: FC<Props> = ({title, navigatorTitle, className, NavigatorclassName, to}) => {
  return (
    <div className="flex items-center justify-between">
      <Title title={title} className={className}/>
      <Navigator  title={navigatorTitle} className={NavigatorclassName} to={to}/>
    </div>
  );
};

export default memo(ComponentHeader);
