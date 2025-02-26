import {NavigationItem} from "@/app/ui";
import {UserCircle, SquaresFour, ArticleMedium} from "@phosphor-icons/react/dist/ssr";

export const NavBar = () => {
    return (
        <div className="flex justify-center pt-16 pb-8 gap-4 md:gap-8">
            <NavigationItem icon={<UserCircle size={16}/>} title={'About Me'} href={'/'}/>
            <NavigationItem icon={<SquaresFour size={16}/>} title={'Featured Projects'} href={'/projects'}/>
            <NavigationItem icon={<ArticleMedium size={16}/>} title={'Articles'} href={'/articles'}/>
        </div>
    );
};