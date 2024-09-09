import { IoHeadset } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { GoVideo } from "react-icons/go";
import { RiPlayListFill } from "react-icons/ri";

import { IoIosSearch } from "react-icons/io";

export const headerMenus = [
    {
        title: "뮤직오늘",
        icon: <IoHeadset />,
        src:"/"
    },
    {
        title: "아티스트",
        icon: <FaRegStar />,
        src:"/artist"
    },
    {
        title: "뮤직비디오",
        icon: <GoVideo />,
        src:"/musicvideo"
    },
    {
        title: "맞춤형플리",
        icon: <RiPlayListFill />,
        src:"/playlist"
    }
];

export const searchKeyword = [
    {
        title:"비 오는 날 듣기 좋은",
        icon:<IoIosSearch />,
        src:"/search/비 오는 날 플리/"
    },
    {
        title:"공부집중 잘 되는",
        icon:<IoIosSearch />,
        src:"/search/공부집중 잘 되는 플리"
    },
    {
        title:"드라이브 신나는 플리",
        icon:<IoIosSearch />,
        src:"/search/드라이브 신나는 플리"
    }
]